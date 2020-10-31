export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor( text: string ) {
        this.text = text;
        this.id = Math.random() * 1;
        this.completed = false;
    }
}
