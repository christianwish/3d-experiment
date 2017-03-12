export default class RenderStack {

    private collection: Function[];
    private onDidStack: Function;

    constructor(onDidStack: Function = () => {}) {
        this.collection = [];
        this.onDidStack = () => {};

        if (typeof onDidStack) {
            this.onDidStack = onDidStack;
        }
        return this;
    }

    public render() {
        this.collection.forEach((callback) => {
             callback();
        });

        this.onDidStack();

        window.requestAnimationFrame(() => {
            this.render();
        });
    }

    public push(callback: Function) {
        if (typeof callback) {
            this.collection.push(callback);
        }
        return this;
    }
}
