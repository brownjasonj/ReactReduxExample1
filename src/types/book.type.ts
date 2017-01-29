export default class Book {
    public title: string;
    public pages: number;

    constructor(title:string = "unknown", pages:number = 0) {
        this.title = title;
        this.pages = pages;
    }
}