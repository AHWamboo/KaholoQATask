import { ClickableWebElement } from './clickableWebElement';

export class List extends ClickableWebElement {
    public async findElementsInList(cssSelector: string) {
        const listElement: Selector = this.webElement.find(cssSelector);
        let listElements: string[] = [];

        for (let i: number = 0; i < await listElement.count; i++) {
            listElements.push(await listElement.nth(i).textContent);
        }

        return listElements;
    }
}
