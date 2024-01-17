import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./text-changing-span.ts";

@customElement('page-header')
export class PageHeaderElement extends LitElement {

    static styles = css`
        :host {
            min-height: 88dvh;
            padding: 0 10dvw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5em;
        }

        .name {
            font-size: 7em;
            line-height: .9;
            font-weight: 700;
        }

        .bigger {
            font-size: 1.7em;
        }
        `;

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css" />
            <div class="name font-syne">Derek Bond</div>
                <div class="bigger font-space">
                    <text-changing-span class="font-mono box less-padding" .texts=${["Management Info Systems Student", "Club Leader", "Student IT Worker"]}></text-changing-span>
                    <strong>&nbsp;by day</strong>
                </div>
                <div class="bigger font-space">
                    <text-changing-span class="font-mono box less-padding" .texts=${["Developer", "Esports Broadcast Producer", "UX designer"]} .delay=${.5}></text-changing-span>
                    <strong>&nbsp;by night</strong>
                </div>

            <p class="font-space box">
                Passionate and detail-oriented student at Iowa State University. Seeking post-graduation employment in the application development or the information technology field. Experience problem solving in team based environments both in work and in my hobbies.
                <br>
                <strong>Graduating with a Bachelor of Science in Management Information Systems on August 2, 2024.</strong>
            </p>
        `;
    }
}