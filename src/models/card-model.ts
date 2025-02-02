export interface Card {
    id: number;
    title: string;
    description: string;
    status: CardStatus;
}

export enum CardStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}