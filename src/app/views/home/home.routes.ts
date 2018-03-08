import { Home } from '../../components/home/home.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider
        .state('home', {
            parent: 'app',
            url: '/home',
            component: Home.selector
        });
};
