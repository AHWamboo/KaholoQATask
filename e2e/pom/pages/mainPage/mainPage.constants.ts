import { IExampleCommandsListElements } from "./mainPage.interface";

export const EXAMPLE_COMMANDS: IExampleCommandsListElements = {
    'uname': 'Linux',
    'uname -a': 'Linux magic-ThinkPad-T480 5.8.0-53-generic #60-Ubuntu SMP Thu May 6 07:46:32 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux',
    'ls -al': `total 520
    drwxrwxr-x   5 magic magic   4096 cze 14 13:21 .
    drwxrwxr-x   9 magic magic   4096 cze 14 12:31 ..
    -rw-rw-r--   1 magic magic   3337 cze 14 13:21 angular.json
    -rw-rw-r--   1 magic magic    703 cze 14 12:35 .browserslistrc
    drwxrwxr-x   8 magic magic   4096 cze 14 14:44 .git
    -rw-rw-r--   1 magic magic    604 cze 14 12:35 .gitignore
    drwxrwxr-x 729 magic magic  24576 cze 14 13:22 node_modules
    -rw-rw-r--   1 magic magic    881 cze 14 13:21 package.json
    -rw-rw-r--   1 magic magic 462009 cze 14 13:21 package-lock.json
    -rw-rw-r--   1 magic magic   1052 cze 14 12:35 README.md
    drwxrwxr-x   5 magic magic   4096 cze 14 12:35 src
    -rw-rw-r--   1 magic magic    287 cze 14 12:35 tsconfig.app.json
    -rw-rw-r--   1 magic magic    783 cze 14 12:35 tsconfig.json`,
    'echo kapusta': 'kapusta',
    'cat README.md': `# QaTest

    This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.`
}

export const INVALID_OUTPUT_COMMAND: string = 'error: command not supported.';
export const EMPTY_OUTPUT_COMMAND: string = 'error: no command.';
export const MAGICZNA_KAPUSTA: string = 'magiczna kapusta';
