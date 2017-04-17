
import {Component, View} from "angular2/core";

@Component({
   selector: 'header'
})

@View({
  template: '<nav class="navbar navbar-inverse"><a class="navbar-brand" href="#">{{Home}}</a></nav>' /*'<nav class="navbar navbar-inverse"><a class="navbar-brand" href="#">Home</a<form class="navbar-form navbar-right" ng-submit="login()">'+
            '<div class="form-group"><input type="text" id="username" class="form-control" placeholder="Identifiant" />'+
            '<input type="password" id="password" class="form-control" placeholder="" />'+
            '</div><button type="submit" class="btn btn-success">Login</button><form>nav>'*/
})
export class HeaderClass {
  Home:"Sushi"
}
