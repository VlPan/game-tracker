import { SignIn } from '../../components/signin/signin.component';


export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider

        .state('add-signin', {
            parent: 'app',
            url: '/signin/add',
            component: SignIn.selector
        })

        .state('signin', {
            parent: 'app',
            url: '/signin',
            component: SignIn.selector
        });
};
