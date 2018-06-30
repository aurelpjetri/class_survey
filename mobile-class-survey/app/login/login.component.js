"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var config_1 = require("../config");
var user_data_service_1 = require("../services/user-data.service");
var authentication_service_1 = require("../services/authentication.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, userDataService, router) {
        this.authenticationService = authenticationService;
        this.userDataService = userDataService;
        this.router = router;
        this.config = config_1.Config;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login({
            "matriculation": this.mat,
            "password": this.pass
        }).subscribe(function (response) { return _this.checkResponse(response); });
    };
    LoginComponent.prototype.checkResponse = function (response) {
        if (this.authenticationService.getErrorStatus() === 200) {
            this.userDataService.setData(response.user);
            if (response.role == 'professor') {
                this.router.navigateByUrl('/professor');
            }
            if (response.role == 'student') {
                this.router.navigateByUrl('/student');
            }
        }
        else {
            alert('matriculation number or password invalid');
            this.mat = '';
            this.pass = '';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "mat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "pass", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "./login/login.component.html",
            styleUrls: ["./login/login.component.css"]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            user_data_service_1.UserDataService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5QztBQUV6QyxvQ0FBa0M7QUFFbEMsbUVBQWdFO0FBQ2hFLDZFQUEyRTtBQU8zRTtJQUtFLHdCQUNVLHFCQUE0QyxFQUM1QyxlQUFnQyxFQUNoQyxNQUFjO1FBRmQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxoQixXQUFNLEdBQUcsZUFBTSxDQUFDO0lBS0ksQ0FBQztJQUU3QixpQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLDhCQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7WUFDL0IsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsUUFBYTtRQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLEtBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN6QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBbENRO1FBQVIsWUFBSyxFQUFFOzsrQ0FBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7O2dEQUFzQjtJQUZuQixjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBT2lDLDhDQUFxQjtZQUMzQixtQ0FBZTtZQUN4QixlQUFNO09BUmIsY0FBYyxDQXFDMUI7SUFBRCxxQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCB7IFVzZXJEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcml2YXRlIG1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBwcml2YXRlIHBhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBjb25maWcgPSBDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJEYXRhU2VydmljZTogVXNlckRhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBsb2dpbigpOiBhbnl7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4oe1xuICAgICAgXCJtYXRyaWN1bGF0aW9uXCI6IHRoaXMubWF0LFxuICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3NcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiAgdGhpcy5jaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSlcbiAgfVxuXG4gIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IGFueSkgOmFueXtcbiAgICBpZih0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFcnJvclN0YXR1cygpPT09MjAwKXtcbiAgICAgIHRoaXMudXNlckRhdGFTZXJ2aWNlLnNldERhdGEocmVzcG9uc2UudXNlcik7XG5cbiAgICAgIGlmIChyZXNwb25zZS5yb2xlID09ICdwcm9mZXNzb3InKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Byb2Zlc3NvcicpXG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uucm9sZSA9PSAnc3R1ZGVudCcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3N0dWRlbnQnKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ21hdHJpY3VsYXRpb24gbnVtYmVyIG9yIHBhc3N3b3JkIGludmFsaWQnKTtcbiAgICAgIHRoaXMubWF0PScnO1xuICAgICAgdGhpcy5wYXNzPScnO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=