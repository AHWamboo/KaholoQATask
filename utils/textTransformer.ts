export class TextTransformer {
    static removeWhiteEmptySpaces(text: string): string {
        return text
            .replace(/\^/g, " ")
            .replace(/\s+/g, '');
    }
}
