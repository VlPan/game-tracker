import './game-card.scss'
import {Game} from '../../models/Game';
import {HistoryService} from '../../services/history.service';
import * as angular from 'angular';
import {GamesService} from '../../services/games.service';

class GameCardController {
    game: Game;

    constructor (
        private historyService: HistoryService,
        private gamesService: GamesService,
    ) {
        'ngInject';

    }

    addHistory(id:number, points: number, $event: any) {
        this.historyService.addNewGame(id, points);
        this.gamesService.whatToSearch = '';
        let input = document.getElementById('elementID');
        input.focus();
        $event.target.previousElementSibling.blur();
    }

}


export class GameCard implements angular.IComponentOptions {

    static selector = 'gameCard';
    static bindings = {
        game: '<'
    };
    static controller = GameCardController;
    static template = require('./game-card.html');

}
