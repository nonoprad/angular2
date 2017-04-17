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
    var PannelClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PannelClass = (function () {
                function PannelClass() {
                    this.pannelList = [
                        { id: "1", title: "Titre1", body: "Body1" },
                        { id: "2", title: "Titre2", body: "Body2" },
                        { id: "3", title: "Titre3", body: "Body3" }
                    ];
                    this.newPannel = { id: "0", title: "title", body: "body" };
                }
                PannelClass.prototype.onPannelClick = function (pannel) {
                    this.newPannel = Object.assign({}, pannel, { id: this.pannelList.length + 1 });
                };
                PannelClass.prototype.onSubmitAddPannel = function (pannel) {
                    this.newPannel = Object.assign({}, pannel, { id: this.pannelList.length + 1 });
                    this.pannelList.push(this.newPannel);
                };
                PannelClass = __decorate([
                    core_1.Component({
                        selector: 'pannel',
                        template: "<div *ngFor=\"#currentPannel of pannelList\" (click)=\"onPannelClick(currentPannel)\" id=\"pannel_{{currentPannel.id}}\" class=\"panel panel-default\">\n               <div class=\"panel-heading\">\n                   <h4 class=\"panel-title\">\n                       <a data-toggle=\"collapse\" href=\"#collapse_{{currentPannel.id}}\">{{currentPannel.title}}</a>\n                   </h4>\n               </div>\n               <div id=\"collapse_{{currentPannel.id}}\" class=\"panel-collapse collapse in\">\n                   <div class=\"panel-body\">\n                   {{currentPannel.body}}\n                   </div>\n               </div>\n           </div>\n           <form>\n           <input type=\"text\" name=\"addPannelTitle\" placeholder=\"titre\" [(ngModel)]=\"newPannel.title\" /> <input type=\"text\" name=\"addPannelBody\" placeholder=\"corps\"  [(ngModel)]=\"newPannel.body\" />\n           <input type=\"submit\" (click)=\"onSubmitAddPannel(newPannel)\" />\n           </form>\n           "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PannelClass);
                return PannelClass;
            }());
            exports_1("PannelClass", PannelClass);
        }
    }
});
//# sourceMappingURL=pannel.component.js.map