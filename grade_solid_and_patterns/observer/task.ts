// Реализуйте паттерн Observer. Чтобы клиенты сразу узнавали о поступлении нового комикса.

interface IComic {
    //характеристики комикса
}

export class ComicBookStore {
    // куча логики по закупкам, продажи и прочее прочее

    subscribe(listener: (comic: IComic) => void) {
        //ваша реализация
    }

    recieveNewComic(comic: IComic) {
        //ваша реализация
    }
}