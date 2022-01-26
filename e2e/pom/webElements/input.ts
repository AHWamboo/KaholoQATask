import { t as testController } from 'testcafe'
import { ClickableWebElement } from './clickableWebElement';

export class Input extends ClickableWebElement {
    public async setText(text: string): Promise<void> {
        await testController.typeText(this.webElement, text, { replace: true });
    }

    public async clearInput(): Promise<void> {
        await testController.click(this.webElement).pressKey('ctrl+a delete');
    }
}
