export class Ticker {
    frame = 0;

    start(fn: () => void) {
        const loop = () => {
            this.frame = requestAnimationFrame(loop);

            fn();
        };

        loop();
    }

    stop() {
        cancelAnimationFrame(this.frame);
    }
}