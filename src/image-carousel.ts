import gsap from 'gsap';
import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('image-carousel')
export class ImageCarouselElement extends LitElement {
    @property()
    imageUrls?: string;
    @property()
    ytUrls?: string;
    @state()
    elements: TemplateResult[] = [];
    @state()
    offset: number = 0;

    private touchStartX: number | null = null;

    static styles = css`
        :host {
            margin: 0 auto;
            width: 100%;
        }
        .image-container {
            display: flex;
            align-items: center;
            gap: 1em;
            width: 100%;
            max-width: min(100dvw, 1600px);
            overflow: hidden;
            border-radius: 10px;
            margin: 0 auto;
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

        img, .iframe-container {
            width: calc(50% - .5em);
            min-width: calc(50% - .5em);
            border-radius: 10px;
            --x: 0%;
            --offset: 0;
            transform: translateX( calc( var(--x) - calc(1em * var(--offset)) ) );
            aspect-ratio: 16 / 9;
            object-fit: cover;
            background: var(--tint);
        }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 10px;
        }

        @media screen and (max-width: 1000px) {
            img, .iframe-container {
                width: 100%;
                min-width: 100%;
                transform: translateX( calc( var(--x) - calc(1em * var(--offset)) ) );
            }
        }
    `;

    connectedCallback() {
        super.connectedCallback();

        if (!this.imageUrls && !this.ytUrls) return;

        if (this.ytUrls) {
            const videos = this.ytUrls.split(',');
            const videoElements: TemplateResult[] = [];
            for (const video of videos) {
                videoElements.push(html`<div class="iframe-container">
                    <iframe src="${video}"></iframe>
                </div>`);
            }
            this.elements.push(...videoElements);
        }

        if (this.imageUrls) {
            const images = this.imageUrls.split(',');
            const imageElements: TemplateResult[] = [];
            for (const image of images) {
                imageElements.push(html`<img src="${image}" loading="lazy"/>`);
            }
            this.elements.push(...imageElements);
        }
    }

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css"/>
            <div class="image-container">
                ${this.elements}
            </div>
            <div class="button-container">
                <button class="font-mono box less-padding" @click="${this.moveOffsetLeft}"><</button>
                <span class="font-mono box less-padding">${this.getOffsetDisplay()}</span>
                <button class="font-mono box less-padding" @click="${this.moveOffsetRight}">></button>
            </div>
        `;
    }

    firstUpdated() {
        this.addEventListener("touchstart", (e) => {
            this.touchStartX = e.touches[0].clientX;
        });

        this.addEventListener("touchmove", (e) => {
            if (this.touchStartX === null) return;

            const touchX = e.touches[0].clientX;
            const diff = touchX - this.touchStartX;
            if (diff > 100) {
                this.moveOffsetLeft();
                this.touchStartX = null;
            } else if (diff < -100) {
                this.moveOffsetRight();
                this.touchStartX = null;
            }
        });

        this.addEventListener("touchend", () => {
            this.touchStartX = null;
        });

        if (this.ytUrls) {
            this.addEventListener("resize", () => {
                console.log("resize");
            });
        }
    }

    private moveOffsetLeft() {
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

    private moveOffsetRight() {
        if (this.offset >= this.elements.length - 1) return;

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
        for (let i = 0; i < this.elements.length; i++) {
            if (i === this.offset) {
                str += '#';
            } else {
                str += '·';
            }
        }
        return str;
    }
}
