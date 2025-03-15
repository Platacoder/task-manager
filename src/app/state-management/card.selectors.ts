import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState } from './card.reducer';
import { Card } from '../../models/card-model';

/**
 * Selector function that returns the card state. 
 * @param state 
 * @returns 
 */
export const selectCardState = createFeatureSelector<CardState>('cards');

/**
 * Selectors for all of the needs states we utilize.
 */
export const selectAllCards = createSelector(selectCardState, (state) => state.cards);
export const selectTodoCards = createSelector(selectAllCards, (cards: Card[]) => cards.filter(card => card.status === 'TODO'));
export const selectInProgressCards = createSelector(selectAllCards, (cards : Card[]) => cards.filter(card => card.status === 'IN_PROGRESS'));
export const selectDoneCards = createSelector(selectAllCards, (cards: Card[]) => cards.filter(card => card.status === 'DONE'));
