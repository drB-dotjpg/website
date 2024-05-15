import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./text-changing-span.ts";
import gsap from "gsap";

@customElement('page-header')
export class PageHeaderElement extends LitElement {

    static styles = css`
        :host {
            min-height: calc(100vh - 12em);
            padding: 6em var(--hor-padding);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5em;
            position: relative;
        }

        .name {
            font-size: 7em;
            line-height: .9;
            font-weight: 700;
        }

        .bigger {
            font-size: 1.7em;
        }

        .learn-more {
            position: absolute;
            width: 100%;
            text-align: center;
            bottom: 3rem;
            left: 0;
            right: 0;
            text-decoration: none;
            cursor: pointer;
        }

        .learn-more:after {
            content: "▼";
            position: absolute;
            top: 1.25em;
            left: 0;
            right: 0;
        }

        @media screen and (max-width: 600px) {
            :host {
                padding: 3rem var(--hor-padding);
            }

            .name {
                font-size: 3em;
            }

            .bigger {
                font-size: 1.35em;
            }

            .learn-more {
                display: none;
            }
        }
        `;

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css" />
            <div class="name font-syne">Derek Bond</div>
                <div class="bigger font-space">
                    <text-changing-span class="font-mono box less-padding" .texts=${["Management Info Systems Student", "Freelance Software Developer"]}></text-changing-span>
                    <strong>&nbsp;by day</strong>
                </div>
                <div class="bigger font-space">
                    <text-changing-span class="font-mono box less-padding" .texts=${["Esports Broadcast Producer", "UX designer"]} .delay=${.5}></text-changing-span>
                    <strong>&nbsp;by night</strong>
                </div>

            <p class="font-space box">
                Passionate and detail-oriented student at Iowa State University. Seeking post-graduation employment as a software developer. Experienced in problem solving within team based environments both in work and in my hobbies.
                <br>
                <strong>Graduating with a Bachelor of Science in Management Information Systems on August 2, 2024.</strong>
                <br><br>
                This website was made by me to showcase my skills and passion.
            </p>

            <a class="learn-more" id="learn-more" @click=${this.learnMoreClicked}>Learn more about me</a>
        `;
    }

    firstUpdated() {
        const tl = gsap.timeline({repeat: -1})
        const element = this.shadowRoot?.getElementById('learn-more') as HTMLAnchorElement;
        tl.to(element, {
            y: -7,
            duration: .25,
            ease: "power2.out"
        }, "+=2");
        tl.to(element, {
            y: 0,
            duration: .5,
            ease: "bounce.out"
        });
    }

    learnMoreClicked() {
        const scrollTo = document.getElementById("technology-skills")?.offsetTop;
        if (scrollTo) {
            window.scrollTo({top: scrollTo - 100, behavior: "smooth"});
        }
    }
}