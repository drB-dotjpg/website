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

        .rotation-container {
            transform: rotate(-90deg);
            font-size: .5em;
            white-space: nowrap;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: auto;
            margin-bottom: auto;
            overflow: hidden;
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

        .icon-container {
            width: 100%;
            padding: 1.5rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: var(--tint);
            gap: 1rem;
        }

        .icon-container img {
            width: 60%;
            height: auto;
            transition: transform .15s;
            cursor: pointer;
        }

        .icon-container img:hover {
            transform: scale(1.1);
        }

        .icon-container img:active {
            transform: scale(.9);
        }

        @media screen and (max-width: 1000px) {
            :host {
                width: 3rem;
                font-size: 3rem;
            }
        }

        @media screen and (max-width: 600px), screen and (max-height: 600px){
            :host {
                width: 100dvw;
                height: 3rem;
                top: 0;
                padding: 0;
                flex-direction: row;
                justify-content: space-between;
                overflow: hidden;
                backdrop-filter: blur(.6rem) brightness(.7);
                -webkit-backdrop-filter: blur(.6rem) brightness(.7);
            }

            .rotation-container {
                justify-content: flex-start;
                transform: rotate(0);
                font-size: .4em;
                white-space: wrap;
                line-height: 1;
                padding-left: 1rem;
                transform-origin: left;
                width: calc(100dvw - 7.5rem);
                min-height: 1.1em;
                margin-right: .5rem;
                overflow: hidden;
            }

            .rotated-text:before, .rotated-text:after {
                display: none;
            }

            .icon-container {
                width: 7rem;
                position: relative;
                flex-direction: row;
                justify-content: space-evenly;
                gap: 0
            }

            .icon-container img {
                height: 2.2rem;
                width: auto;
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
                        x: 80,
                        opacity: 0,
                        duration: .25,
                        ease: "power4.in"
                    })
                    .set(elemText, {
                        x: -80,
                        opacity: 0,
                        text: name
                    })
                    .to(elemText, {
                        x: 0,
                        opacity: 1,
                        duration: .25,
                        ease: "power4.out"
                    })
                },
                onEnterBack: () => {
                    this.tl.to(elemText, {
                        x: -80,
                        opacity: 0,
                        duration: .25,
                        ease: "power4.in"
                    })
                    .set(elemText, {
                        x: 80,
                        opacity: 0,
                        text: name
                    })
                    .to(elemText, {
                        x: 0,
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
            <div class="rotation-container">
                <div class="rotated-text" id="elem-text"></div>
            </div>
            <div class="icon-container">
                <img src="/assets/icons/github.svg" alt="Github" @click="${this.openGithub}">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" @click="${this.openLinkedin}">
            </div>
        `;
    }

    private openGithub() {
        window.open("https://github.com/drB-dotjpg");
    }

    private openLinkedin() {
        window.open("https://www.linkedin.com/in/derek-bond-759b301b5/");
    }
}
