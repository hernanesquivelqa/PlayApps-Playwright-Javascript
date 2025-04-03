export class NavigationMenuPage {
    constructor(driver){
    this.page = driver;
    this.url = "https://qaplayground.dev/apps/links/";
    this.navigation = this.page.locator("#nav");
    this.navigationLinks = this.page.locator('#nav > a');
    this.title = this.page.locator("#title")
    this.urlLinks = "https://qaplayground.dev/apps/links/";
    }
}