System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderClass = (function () {
                function HeaderClass() {
                }
                HeaderClass = __decorate([
                    core_1.Component({
                        selector: 'header'
                    }),
                    core_1.View({
                        template: '<nav class="navbar navbar-inverse"><a class="navbar-brand" href="#">{{Home}}</a></nav>' /*'<nav class="navbar navbar-inverse"><a class="navbar-brand" href="#">Home</a<form class="navbar-form navbar-right" ng-submit="login()">'+
                                  '<div class="form-group"><input type="text" id="username" class="form-control" placeholder="Identifiant" />'+
                                  '<input type="password" id="password" class="form-control" placeholder="" />'+
                                  '</div><button type="submit" class="btn btn-success">Login</button><form>nav>'*/
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderClass);
                return HeaderClass;
            }());
            exports_1("HeaderClass", HeaderClass);
        }
    }
});
//# sourceMappingURL=header.component.js.map