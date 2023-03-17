/* eslint-disable prettier/prettier */
export class Content {
    private readonly content: string;
    
    getValue(): string {
        return this.content;
    }

    private validate(content: string): boolean {
        return this.content.length >= 5 && content.length <=250;
    }

    constructor(content: string) {
        const isContentLengthValid = this.validate(content);
        
        if(!isContentLengthValid) {
            throw new Error('The notification must have more than five characters and less than 250 characters.')
        }
        
        this.content = content;
    }
}