import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState } from './card.reducer';

/**
 * Selector function that returns the card state. 
 * @param state 
 * @returns 
 */
export const selectCardState = (state:CardState) => state.cards;

/**
 * Selectors for all of the needs states we utilize.
 */
export const selectAllCards = createSelector(selectCardState, (cards) => cards);
export const selectTodoCards = createSelector(selectCardState, (cards) => cards.filter(card => card.status === 'TODO'));
export const selectInProgressCards = createSelector(selectCardState, (cards) => cards.filter(card => card.status === 'IN_PROGRESS'));
export const selectDoneCards = createSelector(selectCardState, (cards) => cards.filter(card => card.status === 'DONE'));
