class DynamicTestingPage {
    constructor(driver) {
        this.page = driver;
        this.url = 'https://qaplayground.dev/apps/dynamic-table/';
    }

    // Localizadores como funciones para mayor flexibilidad
    getSuperHeroTextLocator() {
        return this.page.locator("text=SUPERHERO");
    }

    getSpiderManRowLocator() {
        return this.page.locator('text="Spider-Man" >> xpath=../../../..');
    }

    getSpiderManRealNameCell() {
        return this.getSpiderManRowLocator().locator("td").nth(2);
    }
}

module.exports = { DynamicTestingPage };