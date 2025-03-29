export class OnboardingPage {
constructor(driver){
this.driver = driver;
this.url = "https://qaplayground.dev/apps/onboarding-modal/";
this.title = this.driver.locator(".title");
this.modal = this.driver.locator("#active");
this.closeButton = this.driver.locator('[for="active"]');
this.welcomeBoard = this.driver.locator("text=Welcome on board!")

}

}