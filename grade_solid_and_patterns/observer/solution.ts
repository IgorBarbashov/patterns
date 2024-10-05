interface IComic {
    //характеристики комикса
}

type Listener = (comic: IComic) => void;

export class ComicBookStore {
    private listeners: Listener[] = [];
    // куча логики по закупкам, продажи и прочее прочее

    subscribe(listener: (comic: IComic) => void) {
        this.listeners.push(listener);
    }

    recieveNewComic(comic: IComic) {
        this.listeners.forEach(listener => listener(comic));
    }
}