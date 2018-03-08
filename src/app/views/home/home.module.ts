// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */

import { Home } from '../../components/home/home.component';

/**
 * Import Module Containers
 */


/**
 * Import Module Services
 */


/**
 * Import Module Routing
 */
import { routing } from './home.routes';
import {GamesService} from '../../services/games.service';
import {LsService} from '../../services/ls.service';
import {GameCard} from '../../components/game-card/game-card';
import {HistoryService} from '../../services/history.service';

export const moduleName =
    angular.module('application.signin', [
        'ui.router'
    ])

    /**
     * Register Module Components
     */
        .component(Home.selector, Home)
        .component(GameCard.selector, GameCard)

        /**
         * Register Module Containers
         */
        /**
         * Register Module Services
         */
        .service(GamesService.selector, GamesService)
        .service(LsService.selector, LsService)
        .service(HistoryService.selector, HistoryService)
        /**
         * Register Module Configuration
         */
        .config(routing)
        .name;
