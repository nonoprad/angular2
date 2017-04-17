System.register(["angular2/platform/browser", "../header/header.component", "../accordion/accordion.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, header_component_1, accordion_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (accordion_component_1_1) {
                accordion_component_1 = accordion_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(header_component_1.HeaderClass);
            browser_1.bootstrap(accordion_component_1.AccordionClass);
        }
    }
});
//# sourceMappingURL=main.js.map