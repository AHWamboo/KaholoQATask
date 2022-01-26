import { TextArea } from '../../webElements';
import selectors from './commandOutputSection.selectors'

export class CommandOutputSection {
    getOutputTextArea(): TextArea {
        return new TextArea(selectors.commandOutputTextArea);
    }
}
