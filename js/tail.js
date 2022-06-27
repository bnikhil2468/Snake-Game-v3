class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {

        fill("#57b533");
        rect(this.x, this.y, gap, gap, 4);

    }
}