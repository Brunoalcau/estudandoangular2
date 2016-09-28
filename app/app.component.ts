import {Component} from '@angular/core'

class Task {
  id: number;
  name: string;
}


let TASK:Task[] = [
  {id:1, name:'Trabalhar'},
  {id:2, name:'Lavar Pratos'},
  {id:3, name:'Tirar Poeira'},
  {id:4, name:'Comprar no supermercado'},
  {id:5, name:'jogar videogame'},
  {id:6, name:'almoçar'}
];

@Component({
  selector: 'my-app',
  template: `
    <!--<input [(ngModel)]="title">-->
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let item of tasks" (click)="click(item)">
        {{item.id}} - {{item.name}}
      </li>
    </ul>
    <div *ngIf="selectedTask">
        <input type="text" [(ngModel)]="selectedTask.name" ]>
    </div>
  `
})

export class AppComponent {
  title = 'Hello word'
  tasks:Task[] = TASK
  selectedTask:Task

  click(task:Task){
    this.selectedTask = task
    console.log(this.selectedTask)
  }

}

