import { t as testController } from 'testcafe'
import { WebElement } from './webElement'

export abstract class ClickableWebElement extends WebElement {
    public async click(options?: object): Promise<void> {
        await testController.click(this.webElement, options);
    }
}
