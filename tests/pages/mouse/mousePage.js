export class MousePage {
    constructor(page) {
        this.page = page;
        this.url = "https://qaplayground.dev/apps/mouse-hover/";
        this.posterSelector = ".poster-container >> img";
        this.priceSelector = ".current-price";
    }

    async visitUrl() {
        await this.page.goto(this.url);
    }

    poster() {
        return this.page.locator(this.posterSelector);
    }

    currentPrice() {
        return this.page.locator(this.priceSelector);
    }
}