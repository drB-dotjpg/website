import gsap from 'gsap';
import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('image-carousel')
export class ImageCarouselElement extends LitElement {
    @property()
    imageUrls?: string;
    @property()
    hue: number = 0;
    @state()
    images: TemplateResult[] = [];
    @state()
    offset: number = 0;

    static styles = css`
        :host {
            margin: 0 auto;
        }
        .image-container {
            display: flex;
            align-items: center;
            gap: 1em;
            width: 100%;
            max-width: min(100dvw, 1600px);
            overflow: hidden;
            border-radius: 10px;
        }

        .button-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .75em;
            margin-top: .5em;
            font-size: 1.3em;
        }

        button {
            appearance: none;
            border: none;
            color: var(--text);
            font-size: 1.1em;
            transition-duration: .1s;
        }

        button:hover {
            cursor: pointer;
            background: var(--text);
            color: var(--bg-darker);
        }

        button:active {
            transform: scale(.9);
        }

        img {
            width: calc(50% - .5em);
            min-width: calc(50% - .5em);
            border-radius: 10px;
            --x: 0%;
            --offset: 0;
            transform: translateX( calc( var(--x) - calc(1em * var(--offset)) ) );
        }

        @media screen and (max-width: 1000px) {
            img {
                width: 100%;
                min-width: 100%;
                transform: translateX( calc( var(--x) - calc(1em * var(--offset)) ) );
            }
        }
    `;

    connectedCallback() {
        super.connectedCallback();

        if (!this.imageUrls) return;

        const filter = `hue-rotate(${360 - (this.hue * 60)}deg)`

        const images = this.imageUrls.split(',');
        const imageElements: TemplateResult[] = [];
        for (const image of images) {
            imageElements.push(html`<img src="${image}" style="filter: ${filter}"/>`);
        }

        this.images = imageElements;
    }

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css"/>
            <div class="image-container">
                ${this.images}
            </div>
            <div class="button-container">
                <button class="font-mono box less-padding" @click="${this.leftButtonClicked}"><</button>
                <span class="font-mono box less-padding">${this.getOffsetDisplay()}</span>
                <button class="font-mono box less-padding" @click="${this.rightButtonClicked}">></button>
            </div>
        `;
    }

    private leftButtonClicked() {
        if (this.offset <= 0) return;

        this.offset--;
        const container = this.shadowRoot!.querySelector('.image-container')!;
        gsap.to(container.children, {
            "--x": `-${100 * this.offset}%`,
            "--offset": `${this.offset}`,
            duration: .6,
            ease: "power4.out"
        })
    }

    private rightButtonClicked() {
        if (this.offset >= this.images.length - 1) return;

        this.offset++;
        const container = this.shadowRoot!.querySelector('.image-container')!;
        gsap.to(container.children, {
            "--x": `-${100 * this.offset}%`,
            "--offset": `${this.offset}`,
            duration: .6,
            ease: "power4.out"
        })
    }

    private getOffsetDisplay(): string {
        let str = '';
        for (let i = 0; i < this.images.length; i++) {
            if (i === this.offset) {
                str += '#';
            } else {
                str += '·';
            }
        }
        return str;
    }
}
