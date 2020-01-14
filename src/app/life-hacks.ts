export class LifeHacks {
    showAuthor: boolean
    constructor(public id: number, public quotes: string, public author: string, public name: string, public completeDate: Date){
        this.showAuthor=false;
    }
}
