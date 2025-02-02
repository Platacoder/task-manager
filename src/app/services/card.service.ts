import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  /**
   *  Generates a random id for a card.
   * @returns the id.
   */
  generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
