/**
 * ici, je définis ce à quoi
 * correspond une tâche
 */
export class Task{
    id: number = Date.now();
    title: string;
    status = false;
    duedate?: number;
}
