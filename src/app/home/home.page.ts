import { Component } from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  /**
   * ici la propriété (variable) "task"
   * est de type "Task" càd qu'elle prendra comme
   * structure, comme référence
   * la classe Task
   */
  task: Task = new Task();

  tasks: Task[] = [
    {id: 1, title: 'Faire la vaisselle', status: true},
    {id: 2, title: 'Sortir la poubelle', status: false},
    {id: 3, title: 'Promener le chien', status: false},
    {id: 4, title: 'Préparer le bois de la cheminée', status: true},
  ];


  /**
   * Afficher la liste de tâches
   */
  constructor() {

  }

}
