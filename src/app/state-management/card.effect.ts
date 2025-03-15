import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CardService } from '../services/card.service';
import { loadCards, loadCardsSuccess, loadCardsFailure } from './card.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CardEffects {

  private actions$ = inject(Actions);
  private cardService = inject(CardService);

  /**
   * Effect to load cards from the API.
   */
  loadCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCards),
      mergeMap(() =>
        this.cardService.retrieveCards().pipe(
          map((cards) => loadCardsSuccess({ cards })),
          catchError((error) => of(loadCardsFailure({ error })))
        )
      )
    )
  );
}