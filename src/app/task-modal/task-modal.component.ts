import { Component, EventEmitter, Output } from '@angular/core';
import { Card, CardStatus } from '../../models/card-model';
import { CardService } from '../services/card.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss'
})
export class TaskModalComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  @Output() taskSubmitted = new EventEmitter<Card>();
  @Output() modalClosed = new EventEmitter<void>();

  constructor(private _cardService:CardService){}

  submitTask() {
    let newTask: Card = {
      id: this._cardService.generateRandomId(),
      title: this.taskTitle, 
      description: this.taskDescription,
      status: CardStatus.TODO
    };
    
    this.taskSubmitted.emit(newTask);
    this.closeModal();
  }

  closeModal() {
    this.modalClosed.emit();
  }
}
