import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('page-section')
export class PageSectionElement extends LitElement {
    @property()
    hue: number = 0;

    static styles = css`
        :host {
            padding: 2rem 10dvw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5em;
            backdrop-filter: blur(.2rem) saturate(1.3) brightness(1.1);
            padding-bottom: 4rem;
        }

        .divider {
            width: 100%;
            height: .3rem;
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--text);
        }
        `;

    render() {
        return html`
        <div class="divider"></div>
        <slot></slot>
        `;
    }

    firstUpdated() {
        const filter = `hue-rotate(${this.hue * 60}deg)`
        this.style.filter = filter;

        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.create({
            trigger: this,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: this.animateEnter.bind(this),
            onEnterBack: this.animateEnter.bind(this),
            onLeave: () => {
                gsap.to(this.children, {
                    opacity: 0,
                    x: 100,
                    stagger: .15,
                    duration: .7,
                    ease: "power4.in"
                })
            },
            onLeaveBack: () => {
                gsap.to(this.children, {
                    opacity: 0,
                    x: -100,
                    stagger: .15,
                    duration: .7,
                    ease: "power4.in"
                })
            }
        })

        gsap.set(this.children, {
            opacity: 0,
            x: -100
        })
    }

    private animateEnter() {
        gsap.to(this.children, {
            opacity: 1,
            x: 0,
            stagger: .15,
            delay: .25,
            duration: .7,
            ease: "power4.out"
        })
    }
}