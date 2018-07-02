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
                authentication_service_1.AuthenticationService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLDZDQUF3RDtBQUV4RCxpREFBK0M7QUFDL0MsNkNBQThEO0FBRTlELGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsNEVBQTBFO0FBQzFFLG9GQUFpRjtBQUVqRixpRUFBd0Q7QUE0QnhEO0lBSkE7OztNQUdFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUExQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLHVDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QscURBQXdCO2dCQUN4QixtQ0FBZTtnQkFDZix1Q0FBaUI7Z0JBQ2pCLDhDQUFxQjthQUN0QjtZQUNELFlBQVk7Z0JBQ1YsNEJBQVk7cUJBQ1QsbUNBQXFCLENBQ3pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO1FBQ0Y7OztVQUdFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuaW1wb3J0IHsgVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY291cnNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9xdWVzdGlvbm5haXJlLWRhdGEuc2VydmljZSc7XG5cbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5nU2hhZG93TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFF1ZXN0aW9ubmFpcmVEYXRhU2VydmljZSxcbiAgICBVc2VyRGF0YVNlcnZpY2UsXG4gICAgQ291cnNlRGF0YVNlcnZpY2UsXG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICAuLi5uYXZpZ2F0YWJsZUNvbXBvbmVudHNcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzXG50byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==