import {Game} from '../models/Game';

export class GamesService {
    static selector = 'gamesService';
    public whatToSearch: string;

    private gameList: Game[] = [
        {id: 1, name: 'Operations'},
        {id: 2, name: 'Flick Master'},
        {id: 3, name: 'Simplicity'},
        {id: 4, name: 'Reverse RPS'},
        {id: 5, name: 'Touch the Number'},
        {id: 6, name: 'Follow The Leader'},
        {id: 7, name: 'Addition Addition'},
        {id: 8, name: 'Matching'},
        {id: 9, name: 'Color of deception'},
        {id: 10, name: 'Concentration'},
        {id: 11, name: 'High or Low'},
        {id: 12, name: 'Bird Watching'},
        {id: 13, name: 'Addition Link'},
        {id: 14, name: 'Reflection'},
        {id: 15, name: 'Unfollow the Leader'},
        {id: 16, name: 'Tap the Color'},
        {id: 17, name: 'Rainfall'},
        {id: 18, name: 'Path to Safety'},
        {id: 19, name: 'Touch the Number+'},
        {id: 20, name: 'Rapid Sorting'},
        {id: 21, name: 'Quick Eye'},
        {id: 22, name: 'Whether Cast'},
        {id: 23, name: 'Spinning block'},
        {id: 24, name: 'Drive the gear'},
        {id: 25, name: 'Card calculation'},
        {id: 26, name: 'Make10'},
        {id: 27, name: 'Break the block'},
        {id: 28, name: 'Hexa-Chain'},
        {id: 29, name: 'Color Switch'},
        {id: 30, name: 'Missing Pieces'},
        {id: 31, name: 'Ловец слов'},
        {id: 32, name: 'Маршрут'},
        {id: 33, name: 'Симметрия'},
        {id: 34, name: 'Цветная путаница'},
        {id: 35, name: 'Двежещиеся шары'},
        {id: 36, name: 'Крепкая память'},
        {id: 37, name: 'Считаем в уме'},
        {id: 38, name: 'Скоротсной подбор'},
        {id: 39, name: 'Пройди по камешкам'},
        {id: 40, name: 'Глубокий космос'},
        {id: 41, name: 'Вихрь иконок'},
        {id: 42, name: 'Верно или нет'},
        {id: 43, name: 'Соты'},
        {id: 44, name: 'Какой новый'},
        {id: 45, name: 'Quick Brain'},
        {id: 46, name: 'Fuse Clues'},
        {id: 47, name: 'Speed Pack'},
        {id: 48, name: 'Speed Match'},
        {id: 49, name: 'Align it!'},
        {id: 50, name: 'Match'},
        {id: 51, name: 'Closest to the Exit'},
        {id: 52, name: 'No Similarities, Please'},
        {id: 53, name: 'How many moved'},
        {id: 54, name: 'Equal Groups'},
        {id: 55, name: 'Pixel logic'},
        {id: 56, name: 'Smile on me'},
        {id: 57, name: 'Face switch'},
    ];


    getGameList() {
        return this.gameList;
    }

    getGameById(id: number): Game {
        return this.gameList.find(game => game.id === +(id));
    }
}
