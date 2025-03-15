import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { cardReducer } from './state-management/card.reducer';
import { provideEffects } from '@ngrx/effects';
import { CardEffects } from './state-management/card.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({
      cards: cardReducer
    }),
    provideEffects([CardEffects])
  ]
};
