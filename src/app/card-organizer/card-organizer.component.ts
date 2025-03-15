import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card-model';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { Store } from '@ngrx/store';
import * as CardActions from '../state-management/card.action';
import * as CardSelectors from '../state-management/card.selectors';
import { Observable } from 'rxjs';
import { selectInProgressCards } from '../state-management/card.selectors';

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
   * Observable for TODO cards.
   */
  $todoCards: Observable<Card[]>;
  /**
   * Observable for In Progress cards.
   */
  $inProgressCards: Observable<Card[]>;
  /**
   * Observable for Done cards.
   */
  $doneCards: Observable<Card[]>;
  /**
   * Flag to show/hide the modal.
   */
  showModal = false;

  constructor (
    private _store: Store
  ){
    this.$todoCards = this._store.select(CardSelectors.selectTodoCards);
    this.$inProgressCards = this._store.select(selectInProgressCards);
    this.$doneCards = this._store.select(CardSelectors.selectDoneCards);
  }

  /**
   * Dispatches load cards action to initiate card request and load result to the Store.
   */
  ngOnInit(): void {
    this._store.dispatch(CardActions.loadCards());
  }

  protected submitTask(task: Card) {
    this._store.dispatch(CardActions.addCard({card: task}));
    this.showModal = false;
  }

  /**
   * Updates task.
   * @param task 
   */
  protected updateTask(task: Card) {
    this._store.dispatch(CardActions.updateCard({card: task}));
  }

  /**
   * Opens the modal to add a new task.
   */
  protected openModal() {
    this.showModal = true;
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
    this._store.dispatch(CardActions.deleteCard({id: task.id}));
  }
}
