import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import P5 from "p5";

@customElement('anim-bg')
export class AnimBgElement extends LitElement {
    static styles = css`
    :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: -1;
        overflow: hidden;
    }

    canvas {
        margin: 0
    }
    `;

    render() {
        return html`
            <div id="bg-parent"></div>
        `
    }

    firstUpdated() {
        const element = this.shadowRoot?.getElementById("bg-parent");
        const p5 = new P5((p5: P5) => {
            const particles: Particle[] = [];
    
            p5.setup = function() {
                const c = p5.createCanvas(window.innerWidth, Math.max(1080, window.innerHeight));
                c.parent(element as HTMLElement);
                c.style("visibility", "visible")
                for (let i = 0; i < 300; i++) {
                    particles.push(new Particle(p5));
                }
            }
    
            p5.draw = function() {
                p5.background("#2F3D34");
                for (let i = 0; i < particles.length; i++) {
                    particles[i].moveParticle();
                    particles[i].joinParticles(particles.slice(i));
                }
            }
        });
        p5.windowResized = function() {
            p5.resizeCanvas(window.innerWidth, Math.max(1080, window.innerHeight));
        }
    }
}

class Particle {
    private p5: P5;
    private x: number;
    private y: number;
    private xSpeed: number;
    private disLimit: number;

    constructor(p5: P5) {
        this.x = p5.random(0, p5.width);
        this.xSpeed = -p5.random(0.06, .6);
        this.disLimit = 200;
        this.y = p5.random(-this.disLimit, p5.width + this.disLimit);
        this.p5 = p5;
        p5.noStroke();
    }

    moveParticle() {
        if (this.x < -this.disLimit) {
            this.x = this.p5.width + this.disLimit;
            this.xSpeed = -this.p5.random(0.06, .6)
            this.y = this.p5.random(-this.disLimit, this.p5.height + this.disLimit);
        }
        this.x += this.xSpeed;
    }

    joinParticles(particles: Particle[]) {
        particles.forEach((e) => {
            if (e === this) return;
            let dis = this.p5.dist(this.x, this.y, e.x, e.y);
            if (dis < this.disLimit) {
                this.p5.stroke(`rgba(123,199,153,${1 - dis / this.disLimit})`);
                this.p5.line(this.x, this.y, e.x, e.y);
            }
        });
    }
}