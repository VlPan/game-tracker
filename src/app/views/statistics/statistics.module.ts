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
import {ConcreateTrain} from '../../components/concreate-train/concreate-train.component';
import {DsTooltip} from '../../components/ds-tooltip/ds-tooltip.component';

export const moduleName =
  angular.module('application.contacts', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */

  .component(ConcreateGame.selector, ConcreateGame)
  .component(HistoryTable.selector, HistoryTable)
  .component(ConcreateTrain.selector, ConcreateTrain)



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
