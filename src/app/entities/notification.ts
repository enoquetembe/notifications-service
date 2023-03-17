/* eslint-disable prettier/prettier */
import { Content } from "./content";

export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt? : Date | null;
    createdAt: Date;
}

export class Notification {
    private props : NotificationProps;

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public get recipientId(): string  {
        return this.props.recipientId;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}
