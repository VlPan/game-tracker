/**
 * Import the Component styles
 */
import './signin.component.scss';
import './btn.component.scss';

class SignInController {
    name: string = 'Jane';
}

export class SignIn implements angular.IComponentOptions {
    static selector = 'signin';
    static controller = SignInController;
    static template = require('./signin.component.html');
}
