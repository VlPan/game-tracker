// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */

import {ConcreateGame} from '../../components/concreate-game/concreate-game.component';




/**
 * Import Module Routing
 */
import { routing } from './statistics.routes';
import {HistoryService} from '../../services/history.service';
import {HistoryTable} from '../../components/history-table/history-table';
import {HelperService} from '../../services/helperService';

export const moduleName =
  angular.module('application.contacts', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */

  .component(ConcreateGame.selector, ConcreateGame)
  .component(HistoryTable.selector, HistoryTable)



  /**
   * Register Module Services
   */
  .service(HistoryService.selector, HistoryService)
  .service(HelperService.selector, HelperService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
