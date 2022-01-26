import { Button, Input } from '../../webElements';
import selectors from './commandInputSection.selectors'

export class CommandInputSection {
    getCommandInput(): Input {
        return new Input(selectors.commandInputField);
    }

    getExecuteButton(): Button {
        return new Button(selectors.executeButton);
    }

    setCommandAndSubmit(command: string): void {
        this.getCommandInput().setText(command);
        this.getExecuteButton().click();
    }
}
