// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Application Modules
 */
import { moduleName as coreModule } from './views/core/core.module';
import { moduleName as contactsModule } from './views/statistics/statistics.module';
import { moduleName as signInModule } from './views/home/home.module';

export const moduleName =
  angular.module('application', [
      coreModule,
      signInModule,
      contactsModule,
  ])
  .name;
