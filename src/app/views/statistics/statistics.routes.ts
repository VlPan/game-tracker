
import {ConcreateGame} from '../../components/concreate-game/concreate-game.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('game', {
      parent: 'app',
      url: '/game/{id}',
      component: ConcreateGame.selector
    });
};
