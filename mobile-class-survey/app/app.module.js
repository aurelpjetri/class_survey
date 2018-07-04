"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var user_data_service_1 = require("./services/user-data.service");
var course_data_service_1 = require("./services/course-data.service");
var authentication_service_1 = require("./services/authentication.service");
var questionnaire_data_service_1 = require("./services/questionnaire-data.service");
var template_data_service_1 = require("./services/template-data.service");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts
    to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_2.HttpClientModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                nativescript_ng_shadow_1.NgShadowModule
            ],
            providers: [
                questionnaire_data_service_1.QuestionnaireDataService,
                user_data_service_1.UserDataService,
                course_data_service_1.CourseDataService,
                authentication_service_1.AuthenticationService,
                template_data_service_1.TemplateDataService
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts
        to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLDZDQUF3RDtBQUV4RCxpREFBK0M7QUFDL0MsNkNBQThEO0FBRTlELGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsNEVBQTBFO0FBQzFFLG9GQUFpRjtBQUNqRiwwRUFBdUU7QUFFdkUsaUVBQXdEO0FBNkJ4RDtJQUpBOzs7TUFHRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2dCQUN4Qyx1Q0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNULHFEQUF3QjtnQkFDeEIsbUNBQWU7Z0JBQ2YsdUNBQWlCO2dCQUNqQiw4Q0FBcUI7Z0JBQ3JCLDJDQUFtQjthQUNwQjtZQUNELFlBQVk7Z0JBQ1YsNEJBQVk7cUJBQ1QsbUNBQXFCLENBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO1FBQ0Y7OztVQUdFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuaW1wb3J0IHsgVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY291cnNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9xdWVzdGlvbm5haXJlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90ZW1wbGF0ZS1kYXRhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBOZ1NoYWRvd01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBRdWVzdGlvbm5haXJlRGF0YVNlcnZpY2UsXG4gICAgVXNlckRhdGFTZXJ2aWNlLFxuICAgIENvdXJzZURhdGFTZXJ2aWNlLFxuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBUZW1wbGF0ZURhdGFTZXJ2aWNlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzXG50byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==