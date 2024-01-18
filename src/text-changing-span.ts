import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

@customElement('text-changing-span')
export class TextChangingSpanElement extends LitElement {
    @property()
    texts: string[] = [];
    @property()
    delay: number = 0;
    
    private tl: gsap.core.Timeline | undefined;

    static styles = css`
        :host {
            display: inline-block;
        }

        @media screen and (max-width: 800px) {
            :host {
                display: block;
                line-height: 2.5ex;
                height: 5ex;
            }
        }
        `;

    render() {
        return html`
            <span>&nbsp;</span>
        `
    }

    firstUpdated() {
        const span = this.shadowRoot?.querySelector('span') as HTMLSpanElement;
        gsap.registerPlugin(TextPlugin);
        
        const DELAY_DURATION = 4;
        const RATE = .06;
        this.tl = gsap.timeline({repeat: -1, delay: this.delay});
        for (const text of this.texts) {
            this.tl.fromTo(span, {
                color: "#7BC799"
            }, {
                text: text,
                duration: text.length * RATE,
                ease: "power4.out"
            });
            this.tl.to(span, {
                color: "#FFFFFF",
                duration: DELAY_DURATION * .1,
                ease: "linear"
            });
            this.tl.to(span, {
                text: text[0],
                color: "#7BC799",
                duration: text.length * RATE,
                ease: "power2.in"}
            , `+=${DELAY_DURATION * .9}`);
        }
    }
}