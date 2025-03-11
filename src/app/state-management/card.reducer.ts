
import { createReducer, on } from '@ngrx/store';
import { Card } from '../../models/card-model';
import * as CardActions from './card.action';

/**
 * Interface that defines the structure of the card state.
 */
export interface CardState {
    cards: Card[];
}
/**
 * Initial state of the card state.
 */
export const initialState: CardState = {
    cards: []
};
/**
 * Reducer function that mutates the card state based on the dispatched action.
 * @param state current state
 * @param action action dispatched
 */
export const cardReducer = createReducer(
    initialState,
    on(CardActions.loadCardsSuccess, (state, { cards}) => ({...state, cards})),
    on(CardActions.addCard, (state, { card }) => ({...state, cards: [...state.cards,card]})),
    on(CardActions.updateCard, (state, { card }) => ({
        ...state,
        cards: state.cards.map((c) => {
            return  c.id === card.id ? card : c;
        })
    })),
    on(CardActions.deleteCard, (state, { id }) => ({
        ...state,
        cards: state.cards.filter((c) => c.id !== id)
    }))
)