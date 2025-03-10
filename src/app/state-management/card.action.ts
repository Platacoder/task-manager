import { createAction, props} from '@ngrx/store';
import { Card } from '../card/card.component';

export const loadTasks = createAction('[Card] Load Cards');
export const loadCardsSuccess = createAction('[Card] Load Card Success', props<{ cards: Card[] }>());
export const addCard = createAction('[Card] Add Card', props<{ card: Card }>());
export const updateCard = createAction('[Card] Update Card', props<{card: Card}>());
export const deleteCard = createAction('[Card] Delete Card', props<{id: string}>());