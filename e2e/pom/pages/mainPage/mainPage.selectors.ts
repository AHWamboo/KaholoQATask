import { Selector } from 'testcafe';

const SELECTORS = {
    qaCardTitle: Selector('.mat-card-title'),
    qaCardSubtitle: Selector('.mat-card-subtitle'),
    exampleCommandsLabel: Selector('.examples p'),
    exampleCommandsUlList: Selector('.examples ul'),
    outputLabel: Selector('.mat-card > mat-label'),
    errorOutputIcon: Selector('.mat-card .mat-icon')
};

export { SELECTORS as default };
