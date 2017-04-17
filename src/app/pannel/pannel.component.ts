import {Component} from "angular2/core";


@Component({
 selector:'pannel',
 template:`<div *ngFor="#currentPannel of pannelList" (click)="onPannelClick(currentPannel)" id="pannel_{{currentPannel.id}}" class="panel panel-default">
               <div class="panel-heading">
                   <h4 class="panel-title">
                       <a data-toggle="collapse" href="#collapse_{{currentPannel.id}}">{{currentPannel.title}}</a>
                   </h4>
               </div>
               <div id="collapse_{{currentPannel.id}}" class="panel-collapse collapse in">
                   <div class="panel-body">
                   {{currentPannel.body}}
                   </div>
               </div>
           </div>
           <form>
           <input type="text" name="addPannelTitle" placeholder="titre" [(ngModel)]="newPannel.title" /> <input type="text" name="addPannelBody" placeholder="corps"  [(ngModel)]="newPannel.body" />
           <input type="submit" (click)="onSubmitAddPannel(newPannel)" />
           </form>
           `
})
export class PannelClass
{
  public pannelList = [
    {id:"1", title:"Titre1", body:"Body1"},
    {id:"2", title:"Titre2", body:"Body2"},
    {id:"3", title:"Titre3", body:"Body3"}
  ];

  public newPannel = {id:"0", title:"title", body:"body"};

  onPannelClick(pannel) {

       this.newPannel =  Object.assign({},pannel,{ id: this.pannelList.length+1 });
  }

  onSubmitAddPannel(pannel) {

    this.newPannel = Object.assign({},pannel,{ id: this.pannelList.length+1 })

    this.pannelList.push(this.newPannel);
  }
}
