export class VerifyAccountPage {
  constructor(driver) {
    this.page = driver;
    this.url = 'https://qaplayground.dev/apps/verify-account/';
    this.successText = this.page.locator('small:has-text("Success")');
    this.inputs = this.page.locator('.code-container input.code');
  }

  async fillFirstInput() {
    let firstInput = this.inputs.nth(0);
    return await firstInput.fill('1');
  }
  async countInputs() {
    const inputs = this.inputs;
    const inputCount = inputs.count();
    return inputCount;
  }

  async getTextLastInput() {
    const lastInput = this.inputs.nth(5);
    return await lastInput.inputValue();
  }

  async fillInputs() {
    const inputCount = 5;
    for (let i = 0; i <= inputCount; i++) {
      await this.inputs.nth(i).type('9');
    }
    await this.successText.waitFor({ state: 'visible', timeout: 10000 });
  }
  async getSuccessText() {
    await this.successText.waitFor({ state: 'visible', timeout: 10000 });
    return await this.successText.innerText();
  }
}
