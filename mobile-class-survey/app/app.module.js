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
var statistics_data_service_1 = require("./services/statistics-data.service");
var question_data_service_1 = require("./services/question-data.service");
var send_answer_service_1 = require("./services/send-answer.service");
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
                user_data_service_1.UserDataService,
                course_data_service_1.CourseDataService,
                authentication_service_1.AuthenticationService,
                questionnaire_data_service_1.QuestionnaireDataService,
                template_data_service_1.TemplateDataService,
                statistics_data_service_1.StatisticsDataService,
                question_data_service_1.QuestionDataService,
                send_answer_service_1.SendAnswerService
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            schemas: [core_1.NO_ERRORS_SCHEMA],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0Qsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLDZDQUF3RDtBQUV4RCxpREFBK0M7QUFDL0MsNkNBQThEO0FBRTlELGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsNEVBQTBFO0FBQzFFLG9GQUFpRjtBQUNqRiwwRUFBdUU7QUFDdkUsOEVBQTJFO0FBQzNFLDBFQUF1RTtBQUN2RSxzRUFBbUU7QUFFbkUsaUVBQXdEO0FBaUN4RDtJQUpBOzs7TUFHRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBL0JyQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2dCQUN4Qyx1Q0FBYzthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG1DQUFlO2dCQUNmLHVDQUFpQjtnQkFDakIsOENBQXFCO2dCQUNyQixxREFBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsK0NBQXFCO2dCQUNyQiwyQ0FBbUI7Z0JBQ25CLHVDQUFpQjthQUNsQjtZQUNELFlBQVk7Z0JBQ1YsNEJBQVk7cUJBQ1QsbUNBQXFCLENBQ3pCO1lBQ0QsT0FBTyxFQUFFLENBQUUsdUJBQWdCLENBQUU7WUFDN0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO1FBQ0Y7OztVQUdFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuXG5pbXBvcnQgeyBVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb3Vyc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBRdWVzdGlvbm5haXJlRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3F1ZXN0aW9ubmFpcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlbXBsYXRlRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RlbXBsYXRlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0aXN0aWNzRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0YXRpc3RpY3MtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFF1ZXN0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3F1ZXN0aW9uLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTZW5kQW5zd2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc2VuZC1hbnN3ZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IE5nU2hhZG93TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nLXNoYWRvdyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5nU2hhZG93TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFVzZXJEYXRhU2VydmljZSxcbiAgICBDb3Vyc2VEYXRhU2VydmljZSxcbiAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgUXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlLFxuICAgIFRlbXBsYXRlRGF0YVNlcnZpY2UsXG4gICAgU3RhdGlzdGljc0RhdGFTZXJ2aWNlLFxuICAgIFF1ZXN0aW9uRGF0YVNlcnZpY2UsXG4gICAgU2VuZEFuc3dlclNlcnZpY2VcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICBdLFxuICBzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzXG50byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==