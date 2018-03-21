/**
 * Import the Component styles
 */
import './concreate-train.component.scss';
import {HistoryService} from '../../services/history.service';
import {GamesService} from '../../services/games.service';
import {Game} from '../../models/Game';
import {Chart} from 'chart.js';
import {HelperService} from '../../services/helperService';

class ConcreateTrainController {

    history: { id: number , correctAnswers: number }[];
    train: any;
    correctAnswers: number[];
    averagePoint: number;

    constructor(
        private historyService: HistoryService,
        private gamesService: GamesService,
        private $stateParams: any,
        private helperService: HelperService

) {
      this.history = this.historyService.getAllHistoryTrainsById(this.$stateParams.id).reverse();
      this.train = this.gamesService.getTrainById(this.$stateParams.id);
    }

    $onInit() {

        this.correctAnswers = this.history.map((el:  { id: number , correctAnswers: number }) =>  el.correctAnswers);
        let randomColor = this.helperService.getRandomColor();

        let ctx: any = (<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');

        this.averagePoint = this.helperService.average(this.correctAnswers);
        console.log(this.correctAnswers);
        this.correctAnswers = this.correctAnswers.reverse().splice(-12);
        console.log(this.correctAnswers);
        let chart = new Chart(ctx, {

            type: 'line',


            data: {
                labels: this.generateLabels(this.correctAnswers.length),
                datasets: [{
                    label: 'Last 20 games',
                    backgroundColor: randomColor,
                    borderColor: randomColor,
                    data: this.correctAnswers,
                    fill: false
                }]
            },


            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem: any) {
                            return tooltipItem.yLabel;
                        }
                    }
                },

                scales: {
                    yAxes: [{
                        ticks: {
                            // max: this.averagePoint * 2,
                            // min: this.averagePoint / 4,
                            // stepSize: this.averagePoint / 3
                        }
                    }]
                }
            },


        });
    }


    generateLabels(length: number) {
        let arr = [];
        if(length < 13) {
            for(let i = 0; i < length; i++) {
                arr[i] = i + 1;
            }
        } else {
            for(let i = 0; i < 13; i++) {
                arr[i] = i + 1;
            }
        }
        return arr;
    }
}

export class ConcreateTrain implements angular.IComponentOptions {
  static selector = 'concreateTrain';
  static controller = ConcreateTrainController;
  static template = require('./concreate-train.component.html');
}
