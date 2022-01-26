import { Icon, Label, List } from '../../webElements';
import selectors from './mainPage.selectors'

export class MainPage {
    url: string = 'https://qa-task.netlify.app/';
    languageResource: string = 'mainPage'

    getQaCardTitleLabel(): Label {
        return new Label(selectors.qaCardTitle);
    }

    getQaCardSubtitleLabel(): Label {
        return new Label(selectors.qaCardSubtitle);
    }

    getOutputLabel(): Label {
        return new Label(selectors.outputLabel);
    }

    getErrorOutputIcon(): Icon {
        return new Icon(selectors.errorOutputIcon);
    }

    getExampleCommandsLabel(): Label {
        return new Label(selectors.exampleCommandsLabel);
    }

    getExampleCommandsUlList(): List {
        return new List(selectors.exampleCommandsUlList);
    }

    async getExampleCommandsListElements(): Promise<string[]> {
        return await this.getExampleCommandsUlList().findElementsInList('li');
    }
}
