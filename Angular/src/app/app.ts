import { Component, OnInit } from '@angular/core';
import { TelephoneService, Todo } from './services/telephone';
import { UppercaseTitlePipe } from './pipes/uppercase-title-pipe';

@Component({
  selector: 'app-root',
  imports: [UppercaseTitlePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  todos: Todo[] = [];

  constructor(private telephoneService: TelephoneService) {}

  ngOnInit(): void {
    this.telephoneService.getTodos().subscribe({
      next: (data) => {
        console.log('DATA API:', data);
        this.todos = data;
      },
      error: (error) => {
        console.error('GAGAL API:', error);
      }
    });
  }
}