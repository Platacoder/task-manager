import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardOrganizerComponent } from "./card-organizer/card-organizer.component";

@Component({
  selector: 'app-root',
  imports: [
    CardOrganizerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-tracker';
}
