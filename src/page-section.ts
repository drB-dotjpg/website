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
            padding: 2rem var(--hor-padding);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5em;
            backdrop-filter: blur(.25rem) saturate(1.4) brightness(1.1);
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
            onEnter: () => {
                gsap.to(this.children, {
                    opacity: 1,
                    x: 0,
                    stagger: .1,
                    delay: .25,
                    duration: .7,
                    ease: "power4.out"
                })
            },
            onEnterBack: () => {
                gsap.to(this.children, {
                    opacity: 1,
                    x: 0,
                    stagger: {
                        each: .1,
                        from: "end"
                    },
                    delay: .25,
                    duration: .7,
                    ease: "power4.out"
                })
            },
            onLeave: () => {
                gsap.to(this.children, {
                    opacity: 0,
                    x: 100,
                    stagger: .1,
                    duration: .7,
                    ease: "power4.in"
                })
            },
            onLeaveBack: () => {
                gsap.to(this.children, {
                    opacity: 0,
                    x: -100,
                    stagger: {
                        each: .1,
                        from: "end"
                    },
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
}