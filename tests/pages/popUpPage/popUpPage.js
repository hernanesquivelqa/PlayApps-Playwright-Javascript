export class PopUpPage {
  constructor(driver) {
    this.page = driver;
    this.url = 'https://qaplayground.dev/apps/popup/#';
    this.urlPopUp = 'https://qaplayground.dev/apps/popup/popup';
    this.buttonInput = this.page.locator('#login');
    this.roleButton = 'button';
    this.info = this.page.locator('#info');
    this.infoButtonClicked = 'Button Clicked';
  }
  clickLoginInput() {
    this.buttonInput.click();
  }
}
