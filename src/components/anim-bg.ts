import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import P5, { Renderer } from "p5";

@customElement('anim-bg')
export class AnimBgElement extends LitElement {
    static styles = css`
    :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        overflow: hidden;
    }

    canvas {
        margin: 0;
        height: 100%;
        width: 100%;
        animation: fadein 1.2s forwards;
    }

    @keyframes fadein {
        from { opacity: 0; filter: blur(1em); }
        to   { opacity: 1; filter: blur(0em); }
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
            const NUM_PARTICLES = 130;

            const particles: Particle[] = [];
            let c: Renderer;

            p5.setup = function() {
                p5.frameRate(30); //save on cpu
                c = p5.createCanvas(window.innerWidth, window.innerHeight);
                c.parent(element as HTMLElement);
                c.style("visibility", "visible")
                for (let i = 0; i < NUM_PARTICLES; i++) {
                    particles.push(new Particle(p5));
                }
                this.resizeCanvas(window.innerWidth, window.innerHeight);
            }

            p5.draw = function() {
                p5.background("#232F2A");
                for (let i = 0; i < particles.length; i++) {
                    particles[i].moveParticle();
                    particles[i].joinParticles(particles.slice(i));
                }
            }

            const parentResizeCanvas = p5.resizeCanvas.bind(p5);

            p5.resizeCanvas = function(w: number, h: number) {
                const numParticles = Math.max(Math.ceil(w / 1920 * NUM_PARTICLES), Math.min(NUM_PARTICLES, 50));
                const distLimit = Math.max(w / 6, 200);
                for (let i = 0; i < particles.length; i++) {
                    particles[i].visible = i < numParticles;
                    particles[i].disLimit = distLimit
                }
                parentResizeCanvas(w, h);
            }
        });
        p5.windowResized = function () {
            p5.resizeCanvas(window.innerWidth, window.innerHeight);
        }
    }
}

class Particle {
    p5: P5;
    x: number;
    y: number;
    perX: number;
    perY: number;
    xSpeedModify: number;
    disLimit: number;
    visible: boolean = true;

    constructor(p5: P5) {
        this.x = 0;
        this.y = 0;
        this.perX = p5.random(0, 100);
        this.perY = p5.random(0, 100);
        this.xSpeedModify = p5.random(0.007, 0.035)
        this.disLimit = 300;
        this.p5 = p5;
        p5.noStroke();
    }

    moveParticle() {
        if (!this.visible) return;
        if (this.x < -this.disLimit) {
            this.perX = 100;
            this.xSpeedModify = this.p5.random(0.007, 0.035)
            this.perY = this.p5.random(0, 100);
        }
        this.perX -= this.xSpeedModify;
        this.x = ((this.p5.width + this.disLimit) * this.perX) / 100;
        this.y = this.p5.map(this.perY, 0, 100, -this.disLimit, this.p5.height + this.disLimit);
    }

    joinParticles(particles: Particle[]) {
        if (!this.visible) return;
        particles.forEach((e) => {
            if (e === this) return;
            let dis = this.p5.dist(this.x, this.y, e.x, e.y);
            if (dis < this.disLimit) {
                this.p5.stroke(`rgba(45,128,94,${1 - dis / this.disLimit})`);
                this.p5.line(this.x, this.y, e.x, e.y);
            }
        });
    }
}