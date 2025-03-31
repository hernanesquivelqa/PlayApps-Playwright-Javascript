export class ContextMenuPage {
    constructor(driver){
        this.driver = driver
        this.url = "https://qaplayground.dev/apps/context-menu/";
        this.rightClickLocator = this.driver.locator('text="Open Right-Click Context Menu"')
        this.menuItems = ["Preview", "Get Link", "Rename", "Delete", "Settings"];
        this.subMenuItems = ["Twitter", "Instagram", "Dribble", "Telegram"];
        this.message = this.driver.locator("#msg")
    }
}
