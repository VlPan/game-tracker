import {LsService} from './ls.service';
import {Game} from '../models/Game';

export class HistoryService {
    static selector = 'historyService';
    private gamesHistory : any = [];

    constructor (
        private lsService: LsService
    ) {
        'ngInject'

        if(!this.lsService.has('gamesHistory')) {
            this.lsService.set('gamesHistory', []);
        }

        this.gamesHistory = this.lsService.get('gamesHistory');


    }

    getGamesHistory() {
        return this.gamesHistory;
    }



    addNewGame(id:number, points: number) {
        this.gamesHistory = this.gamesHistory.concat({id, points, date: new Date().getTime()});
        this.lsService.set('gamesHistory', this.gamesHistory);

    }

    getAllHistoryGamesById(id:number) {
        return this.gamesHistory.filter((historyItem: {id: number, points: number}) => {
            return historyItem.id === +id
        });
    }
}
