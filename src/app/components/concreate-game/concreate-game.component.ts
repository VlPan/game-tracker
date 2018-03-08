/**
 * Import the Component styles
 */
import './concreate-game.component.scss';
import {HistoryService} from '../../services/history.service';
import {GamesService} from '../../services/games.service';
import {Game} from '../../models/Game';
import {Chart} from 'chart.js';
import {HelperService} from '../../services/helperService';

class ConcreateGameController {

    history: { id: number , points: number }[];
    game: Game;
    points: number[];
    averagePoint: number;

    constructor(
        private historyService: HistoryService,
        private gamesService: GamesService,
        private $stateParams: any,
        private helperService: HelperService

) {
      this.history = this.historyService.getAllHistoryGamesById(this.$stateParams.id).reverse();
      this.game = this.gamesService.getGameById(this.$stateParams.id);
    }

    $onInit() {

        this.points = this.history.map((el:  { id: number , points: number }) =>  el.points);
        let randomColor = this.helperService.getRandomColor();

        let ctx: any = (<HTMLCanvasElement>document.getElementById('myChart')).getContext('2d');

        this.averagePoint = this.helperService.average(this.points);
        let chart = new Chart(ctx, {

            type: 'line',


            data: {
                labels: this.generateLabels(this.points.length),
                datasets: [{
                    label: 'Last 40 games',
                    backgroundColor: randomColor,
                    borderColor: randomColor,
                    data: this.points.reverse(),
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
                            max: this.averagePoint * 2,
                            min: 0,
                            stepSize: this.averagePoint / 15
                        }
                    }]
                }
            },


        });
    }


    generateLabels(length: number) {
        let arr = [];
        if(length < 40){
            for(let i = 0; i < length; i++) {
                arr[i] = i + 1;
            }
        }else{
            for(let i = 0; i < 40; i++) {
                arr[i] = i + 1;
            }
        }
        return arr;
    }
}

export class ConcreateGame implements angular.IComponentOptions {
  static selector = 'concreateGame';
  static controller = ConcreateGameController;
  static template = require('./concreate-game.component.html');
}
