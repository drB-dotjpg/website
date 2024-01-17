import { LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('card-grid')
export class CardGridElement extends LitElement {
    @property()
    list: string = "";

    static styles = css`
        :host {
            display: flex;
            gap: .5em;
            flex-wrap: wrap;
            font-size: 1.5em;
        }

        @media screen and (max-width: 600px) {
            :host {
                font-size: 1.25em;
            }
        }
        `;

    render() {
        const textList = this.list.split(",");
        const elems: TemplateResult[] = [];
        for (const text of textList) {
            elems.push(html`<div class="box less-padding font-mono">${text}</div>`);
        }
        return html`
            <link rel="stylesheet" href="/styles.css"/>
            ${elems}
        `;
    }
}