import { Component, EventEmitter, Input, Output } from '@angular/core';
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
   * Card data to be displayed.
   * If no data is provided, default
   * value will be used as this is a new card.
   */
  @Input() cardData!: Card;
  /**
   * Event emitter to notify parent component
   */
  @Output() cardDeleted = new EventEmitter<Card>();
  /**
   * Event emitter to notify parent component
   */
  @Output() cardUpdated = new EventEmitter<Card>();
  /**
   * Flag that tracks if card is being edited.
   */
  isBeingEdited = false;
  /**
   * Simulates the caching card data before editing.
   */
  cachedCardData = {...this.cardData}
  /**
   * Toggles the card status and cache current card data.
   */
  editCard() {
    this.cachedCardData = {...this.cardData}
    this.isBeingEdited = true;
  }
  /**
   * Emits event to save card.
   */
  saveCard() {
    this.cardUpdated.emit(this.cachedCardData);
    this.isBeingEdited = false;
  }
  /**
   * Emits event to delete
   */
  deleteCard() {
    this.cardDeleted.emit(this.cardData);
  }

  cancelEdit() {
    this.cachedCardData = { ...this.cardData };
    this.isBeingEdited = false;
  }
}
