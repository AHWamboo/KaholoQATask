import { t as testController } from 'testcafe'

export abstract class WebElement {
    protected webElement: Selector;

    public constructor(webElement: Selector) {
        this.webElement = webElement;
    }

    public async getInnerText(): Promise<string> {
        await this.verifyIfIsDisplayed();
        return await this.webElement.innerText;
    }

    public async getTextContent(): Promise<string> {
        await this.verifyIfIsDisplayed();
        return await this.webElement.textContent;
    }

    public async verifyIfIsDisplayed(): Promise<void> {
        await testController.expect(await this.webElement.visible).ok();
    }

    public async verifyTextContains(text: string): Promise<void> {
        await testController.expect(await this.getInnerText()).contains(text);
    }
}
