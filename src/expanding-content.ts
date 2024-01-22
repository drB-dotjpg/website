import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('expanding-content')
export class ExpandingContentElement extends LitElement {
    @state()
    private expanded = false;

    static maxHeight = 300;
    static styles = css`
        :host {
            display: block;
            overflow: hidden;
        }

        #content {
            max-height: none;
        }

        #content.collapsed {
            max-height: calc(${ExpandingContentElement.maxHeight}px - 80px);
            -webkit-mask: linear-gradient(180deg, black calc(100% - 2em), transparent 100%);
            mask: linear-gradient(180deg, black calc(100% - 2em), transparent 100%);
        }

        #toggle {
            appearance: none;
            border: none;
            color: var(--text);
            font-size: 1.1em;
            margin-top: .5em;
            transition-duration: .15s;
            cursor: pointer;
        }

        #toggle:hover {
            background-color: var(--text);
            color: black;
            translate: scale(1.1);
        }

        #toggle:active {
            transform: scale(.9);
        }

    `;

    firstUpdated() {
        const content = this.shadowRoot?.getElementById("content");
        const toggle = this.shadowRoot?.getElementById("toggle");
        if (!content) return;
        if (!toggle) return;

        window.addEventListener("resize", () => {
            this.handleResize(content, toggle);
        });
        document.fonts.ready.then(() => {
            this.handleResize(content, toggle);
        });
    }

    render() {
        return html`
            <link rel="stylesheet" href="/styles.css">
            <div id="content" class="${!this.expanded ? "collapsed" : ""}">
                <slot></slot>
            </div>
            <button id="toggle" @click=${this.toggle} class="font-mono box less-padding">${!this.expanded ? "Expand" : "Collapse"}</button>
        `;
    }

    private toggle() {
        this.expanded = !this.expanded;
    }

    private handleResize(content: HTMLElement, toggle: HTMLElement) {
        const height = content.scrollHeight;
        if (height < ExpandingContentElement.maxHeight) {
            content.classList.remove("collapsed");
            toggle.style.display = "none";
        } else {
            content.classList.add("collapsed");
            toggle.style.display = "block";
        }
    }

}
