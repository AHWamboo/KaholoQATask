import { t as testController } from 'testcafe';
import { MainPage } from '../../e2e/pom/pages/mainPage/mainPage';
import {
    EMPTY_OUTPUT_COMMAND,
    EXAMPLE_COMMANDS,
    INVALID_OUTPUT_COMMAND,
    MAGICZNA_KAPUSTA,
} from '../../e2e/pom/pages/mainPage/mainPage.constants';
import { CommandInputSection } from '../../e2e/pom/sections/commandInputSection/commandInputSection';
import { CommandOutputSection } from '../../e2e/pom/sections/commandOutputSection/commandOutputSection';
import { TextTransformer } from '../../utils/textTransformer';

const mainPage: MainPage = new MainPage();
const commandInputSection: CommandInputSection = new CommandInputSection();
const commandOutputSection: CommandOutputSection = new CommandOutputSection();

fixture `Qa-task Main Page Tests`
    .page `${mainPage.url}`
    .beforeEach(async t => {
        await t.maximizeWindow();
    })

test('Verify that all elements on the page are displayed correctly', async t => {
    mainPage.getQaCardTitleLabel().verifyIfIsDisplayed();
    mainPage.getQaCardSubtitleLabel().verifyIfIsDisplayed();
    commandInputSection.getCommandInput().verifyIfIsDisplayed();
    commandInputSection.getExecuteButton().verifyIfIsDisplayed();
    commandOutputSection.getOutputTextArea().verifyIfIsDisplayed();
    mainPage.getExampleCommandsLabel().verifyIfIsDisplayed();
    mainPage.getExampleCommandsUlList().verifyIfIsDisplayed();
});

test('Verify that all available sample commands return the correct data in Output', async t => {
    const commandList: string[] = await mainPage.getExampleCommandsListElements()

    for (const command of commandList) {
        commandInputSection.setCommandAndSubmit(command);

        const commandOutputText: string = TextTransformer.removeWhiteEmptySpaces(
            await commandOutputSection.getOutputTextArea().getTextContent());

        const commandToCompareText: string = TextTransformer.removeWhiteEmptySpaces(
            EXAMPLE_COMMANDS[command]);

        await testController.expect(commandOutputText).eql(commandToCompareText);
    }
});

test('Entering a command that is not allowed should return an error', async t => {
    commandInputSection.setCommandAndSubmit('cat > newFile.txt');

    await testController
        .expect(await commandOutputSection.getOutputTextArea().getTextContent())
        .eql(INVALID_OUTPUT_COMMAND);

    mainPage.getErrorOutputIcon().verifyIfIsDisplayed();
});

test('Submit empty data should return error in output', async t => {
    commandInputSection.getCommandInput().clearInput();
    commandInputSection.getExecuteButton().click();

    await testController
        .expect(await commandOutputSection.getOutputTextArea().getTextContent())
        .eql(EMPTY_OUTPUT_COMMAND);

    mainPage.getErrorOutputIcon().verifyIfIsDisplayed();
});

test('Submit data other than kapusta returns the correct string in the output', async t => {
    commandInputSection.setCommandAndSubmit('echo magiczna kapusta');

    await testController
        .expect(await commandOutputSection.getOutputTextArea().getTextContent())
        .eql(MAGICZNA_KAPUSTA);
});
