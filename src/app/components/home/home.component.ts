/**
 * Import the Component styles
 */
import './home.component.scss';
import './btn.component.scss';
import {GamesService} from '../../services/games.service';
import {LsService} from '../../services/ls.service';
import {Game} from '../../models/Game';

class HomeController {

    gameList : Game[];


    constructor(
        private gamesService: GamesService,
        private lsService: LsService
    ) {
        'ngInject';
        this.gameList = gamesService.getGameList() || [];
    }

    $onInit() {

        if(!this.lsService.has('gameList')) {
            this.lsService.set('gameList',this.gameList)
        }
    }



}

export class Home implements angular.IComponentOptions {
    static selector = 'home';
    static controller = HomeController;
    static template = require('./home.component.html');
}
