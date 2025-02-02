import { Component, OnInit } from '@angular/core';
import { Card, CardStatus } from '../../models/card-model';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-organizer',
  imports: [CardComponent, CommonModule],
  templateUrl: './card-organizer.component.html',
  styleUrl: './card-organizer.component.scss'
})
export class CardOrganizerComponent implements OnInit {
  /**
   * Cards to be displayed in the UI.
   */
  cards = {
    todo: [] as Card[],
    inProgress: [] as Card[],
    done: [] as Card[]
  };

  ngOnInit(): void {
    this._loadMockData();
  }

  /**
   * Loads mock data so we can test the UI.
   */
  private _loadMockData() {
    this.cards.todo = [
      { id: '1', title: 'Task 1', description: 'Description for Task 1', status: CardStatus.TODO },
      { id: '2', title: 'Task 2', description: 'Description for Task 2', status: CardStatus.TODO }
    ];
    this.cards.inProgress = [
      { id: '3', title: 'Task 3', description: 'Description for Task 3', status: CardStatus.IN_PROGRESS },
      { id: '4', title: 'Task 4', description: 'Description for Task 4', status: CardStatus.IN_PROGRESS }
    ];
    this.cards.done = [
      { id: '5', title: 'Task 5', description: 'Description for Task 5', status: CardStatus.DONE },
      { id: '6', title: 'Task 6', description: 'Description for Task 6', status: CardStatus.DONE }
    ];
  }
}
