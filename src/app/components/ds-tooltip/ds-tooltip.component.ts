/**
 * Import the Component styles
 */
import './ds-tooltip.component.scss'

class DsTooltipController {

    visible: boolean;
    position: string;
    indent: number;
    constructor(
        private $element: any
    ){


    }

    $onInit(){
        this.$element.bind('click', (event) => {
            event.stopPropagation();
        });
        setTimeout(()=>{
            let parentHeight = this.$element.parent()[0].offsetHeight;
            let parentWidth = this.$element.parent()[0].offsetWidth;
            let elementWidth =  this.$element[0].offsetWidth;
            let elementHeight =  this.$element[0].offsetHeight;
            let verticalIndent, horisontalIndent;

            if (this.indent < 0 || this.indent === undefined){
                verticalIndent = 3;
                horisontalIndent = 5;
            }else{
                verticalIndent = this.indent;
                horisontalIndent = this.indent;
            }


            console.log(this.indent);
            if(this.$element.parent()[0].style.position !== "absolute" &&
                this.$element.parent()[0].style.position !== "fixed"){
                this.$element.parent()[0].style.position = "relative";
            }


            this.$element.parent()[0].style.border = "1px solid red";
            switch (this.position){
                case 'top': {
                    this.$element.css('bottom', parentHeight + verticalIndent  + 'px');
                    this.$element.css('right', ((parentWidth ) / 2) - (elementWidth / 2) + 'px');
                    break;
                }
                case 'bottom': {
                    this.$element.css('top', parentHeight + verticalIndent + 'px');
                    this.$element.css('right', ((parentWidth ) / 2) - (elementWidth / 2) + 'px');
                    break;
                }
                case 'left': {
                    this.$element.css('bottom', ((parentHeight ) / 2) - (elementHeight / 2) + 'px');
                    this.$element.css('right', parentWidth + horisontalIndent + 'px');
                    break;
                }
                case 'right': {
                    this.$element.css('bottom', ((parentHeight  / 2) - (elementHeight / 2 )) + 'px');
                    this.$element.css('left', parentWidth + horisontalIndent  + 'px');
                    break;
                }
                default: {
                    this.$element.css('bottom', parentHeight + verticalIndent  + 'px');
                    this.$element.css('right', ((parentWidth ) / 2) - (elementWidth / 2) + 'px');
                }
            }

            this.$element.css('visibility', 'hidden');
            this.$element.css('opacity', 1);
        }, 1);

    }

}

export class DsTooltip implements angular.IComponentOptions {
    static selector = 'dsTooltip';
    static controller = DsTooltipController;
    static transclude = true;
    static bindings = {
        visible: '<',
        position: '<',
        indent: '<'
    };
    static template = require('./ds-tooltip.component.html');
}
