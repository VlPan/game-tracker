
import {ConcreateGame} from '../../components/concreate-game/concreate-game.component';
import {ConcreateTrain} from '../../components/concreate-train/concreate-train.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('game', {
      parent: 'app',
      url: '/game/{id}',
      component: ConcreateGame.selector
    })

    .state('train', {
        parent: 'app',
        url: '/train/{id}',
        component: ConcreateTrain.selector
    });
};
