/**
 * Import the Component styles
 */
import './history-table.scss';
import {HelperService} from '../../services/helperService';


class HistoryTableController {
    history: { id: number , points: number }[];
    averagePoint: number;
    points: number[];

    constructor(
        private helperService: HelperService
    ){

    }




    $onInit() {
        this.averagePoint = this.helperService.average(this.points);
    }




}

export class HistoryTable implements angular.IComponentOptions {
    static selector = 'historyTable';
    static bindings = {
        history: '<',
        points: '<'
    };
    static controller = HistoryTableController;
    static template = require('./history-table.html');
}
