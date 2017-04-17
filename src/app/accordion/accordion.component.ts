import {Component} from "angular2/core";
import {PannelClass} from "../pannel/pannel.component"


@Component({
 selector:'accordion',
 template:`<div class="panel-group" id="accordion"><pannel></pannel></div>`,
 directives: [PannelClass]
})
export class AccordionClass
{

}
