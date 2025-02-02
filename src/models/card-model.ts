export interface Card {
    id: string;
    title: string;
    description: string;
    status: CardStatus;
}

export enum CardStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}