import { createAction, props} from '@ngrx/store';
import { Card } from '../../models/card-model';

export const loadCards = createAction('[Card] Load Cards');
export const loadCardsSuccess = createAction('[Card] Load Card Success', props<{ cards: Card[] }>());
export const loadCardsFailure = createAction('[Card] Load Card Failure', props<{ error: Error }>());
export const addCard = createAction('[Card] Add Card', props<{ card: Card }>());
export const updateCard = createAction('[Card] Update Card', props<{card: Card}>());
export const deleteCard = createAction('[Card] Delete Card', props<{id: string}>());