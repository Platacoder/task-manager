import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card, CardStatus } from '../../models/card-model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  imports: [
    FormsModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  /**
   * Initializes the card services and the default card values.
   * @param cardService the card service to be used.
   */
  constructor(
    private cardService: CardService
  ) {
    this.cardData = {
      id: this.cardService.generateRandomId(),
      title: 'New Task',
      description: 'Description for your task',
      status: CardStatus.TODO
    };
  }
  /**
   * Card data to be displayed.
   * If no data is provided, default
   * value will be used as this is a new card.
   */
  @Input() cardData: Card;
  /**
   * Flag that tracks if card is being edited.
   */
  isBeingEdited = false;

  /**
   * Toggles the card status.
   */
  editCard() {
    this.isBeingEdited = true;
  }

   
  saveCard() {
    // Implementation to save card info and add to the store.
  }

  deleteCard() {
    // Implementation delete the card from the store.
  }
}
