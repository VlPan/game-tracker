import {LsService} from './ls.service';
import {Game} from '../models/Game';

export class HistoryService {
    static selector = 'historyService';
    private gamesHistory : any = [];
    private trainsHistory : any = [];

    constructor (
        private lsService: LsService
    ) {
        'ngInject'

        if(!this.lsService.has('gamesHistory')) {
            this.lsService.set('gamesHistory', []);
        }
        if(!this.lsService.has('trainsHistory')) {
            this.lsService.set('trainsHistory', []);
        }

        this.gamesHistory = this.lsService.get('gamesHistory');
        this.trainsHistory = this.lsService.get('trainsHistory');


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

    getTrainsHistory() {
        return this.trainsHistory;
    }



    addNewTrain(id:number, correctAnswers: number) {
        this.trainsHistory = this.trainsHistory.concat({id, correctAnswers, date: new Date().getTime()});
        this.lsService.set('trainsHistory', this.trainsHistory);

    }

    getAllHistoryTrainsById(id:number) {
        return this.trainsHistory.filter((historyItem: {id: number, correctAnswers: number}) => {
            return historyItem.id === +id
        });
    }
}
