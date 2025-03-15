import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Card, CardStatus } from '../../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  /**
   * Mocked card data.
   */
  mockedCardData: Card[] = [
    { id: '1', title: 'Task 1', description: 'Description for Task 1', status: CardStatus.TODO },
    { id: '2', title: 'Task 2', description: 'Description for Task 2', status: CardStatus.TODO },
    { id: '3', title: 'Task 3', description: 'Description for Task 3', status: CardStatus.IN_PROGRESS },
    { id: '4', title: 'Task 4', description: 'Description for Task 4', status: CardStatus.IN_PROGRESS },
    { id: '5', title: 'Task 5', description: 'Description for Task 5', status: CardStatus.DONE },
    { id: '6', title: 'Task 6', description: 'Description for Task 6', status: CardStatus.DONE }
  ]

  /**
   * Retrieves the cards from a simulate API request.
   * @returns 
   */
  retrieveCards(): Observable<Card[]> {
    return of(this.mockedCardData).pipe(delay(500));
  }

  /**
   *  Generates a random id for a card.
   * @returns the id.
   */
  generateRandomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
