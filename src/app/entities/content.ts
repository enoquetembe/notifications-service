/* eslint-disable prettier/prettier */
export class Content {
    private readonly content: string;
    
    get value(): string {
        return this.content;
    }

    private validate(content: string): boolean {
        return content.length >= 5 && content.length <=250;
    }

    constructor(content: string) {
        const isContentLengthValid = this.validate(content);
        
        if(!isContentLengthValid) {
            throw new Error('The notification must have more than five characters and less than 250 characters.')
        }
        
        this.content = content;
    }
}