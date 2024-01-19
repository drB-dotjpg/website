import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nav-bar')
export class NavBarElement extends LitElement {
    private tl = gsap.timeline();

    static styles = css`
        :host {
            position: fixed;
            bottom: 0;
            left: 0;
            font-size: 4rem;
            width: 4.5rem;
            height: 100dvh;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: var(--tint);
            backdrop-filter: saturate(0);
            -webkit-backdrop-filter: saturate(0);
            font-family: "Space Mono", monospace;
        }

        .rotated-text {
            --rotate: -90deg;
            transform: rotate(-90deg);
            font-size: .5em;
            white-space: nowrap;
        }

        .rotated-text:after, .rotated-text:before {
            content: "//";
            display: inline-block;
            font-size: .8em;
            height: .5em;
            opacity: .35;
        }

        .rotated-text:after {
            margin-left: 1ch;
        }

        .rotated-text:before {
            margin-right: 1ch;
        }

        @media screen and (max-width: 600px) {
            :host {
                width: 100vw;
                height: 3rem;
                bottom: 0;
                padding: .25rem 0;
                flex-direction: row;
                justify-content: flex-start;
                overflow: hidden;
                backdrop-filter: none;
                -webkit-backdrop-filter: none;
                background: rgb(30,30,30);
            }

            .rotated-text {
                display: none;
            }
        }
        
    `;

    firstUpdated() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);

        const sections = document.body.querySelectorAll("page-header, page-section");
        const elemText = this.shadowRoot?.getElementById("elem-text") as HTMLElement;

        for (const section of sections) {
            const name = section.getAttribute("name") as string;
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => {
                    this.tl.to(elemText, {
                        y: -80,
                        opacity: 0,
                        duration: .25,
                        ease: "power4.in"
                    })
                    .set(elemText, {
                        y: 80,
                        opacity: 0,
                        text: name
                    })
                    .to(elemText, {
                        y: 0,
                        opacity: 1,
                        duration: .25,
                        ease: "power4.out"
                    })
                },
                onEnterBack: () => {
                    this.tl.to(elemText, {
                        y: 80,
                        opacity: 0,
                        duration: .25,
                        ease: "power4.in"
                    })
                    .set(elemText, {
                        y: -80,
                        opacity: 0,
                        text: name
                    })
                    .to(elemText, {
                        y: 0,
                        opacity: 1,
                        duration: .25,
                        ease: "power4.out"
                    })
                }
            })
        }
    }

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css/">
            <span class="rotated-text" id="elem-text"></span>
        `;
    }
}
