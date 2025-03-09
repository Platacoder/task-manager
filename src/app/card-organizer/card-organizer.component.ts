import { Component, OnInit } from '@angular/core';
import { Card, CardStatus } from '../../models/card-model';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-card-organizer',
  imports: [
    CardComponent, 
    CommonModule,
    TaskModalComponent
  ],
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

  /**
   * Flag to show/hide the modal.
   */
  showModal = false;

  ngOnInit(): void {
    this._loadMockData();
  }

  submitTask(task: Card) {
    console.log(task);
    this.cards.todo.push(task);
    this.showModal = false;
  }

  /**
   * Opens the modal to add a new task.
   */
  protected openModal() {
    this.showModal = true;
    console.log('Show Modal!');
  }
  /**
   * Closes the modal.
   */
  protected closeModal() {
    this.showModal = false;
  }

  /**
   * Filters through all swim lanes to find the task with the given id and deletes it.
   * @param task 
   */
  protected deleteTask(task: Card) {
    this.cards.todo = this.cards.todo.filter(t => t.id !== task.id);
    this.cards.inProgress = this.cards.inProgress.filter(t => t.id !== task.id);
    this.cards.done = this.cards.done.filter(t => t.id !== task.id);
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
