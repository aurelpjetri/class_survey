"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_data_service_1 = require("../services/user-data.service");
var authentication_service_1 = require("../services/authentication.service");
var config_1 = require("../config");
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
        alert(config_1.Config.getURL());
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
            providers: [authentication_service_1.AuthenticationService, user_data_service_1.UserDataService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5QztBQUV6QyxtRUFBOEQ7QUFDOUQsNkVBQTJFO0FBQzNFLG9DQUFrQztBQVFsQztJQUtFLHdCQUNVLHFCQUE0QyxFQUM1QyxlQUFnQyxFQUNoQyxNQUFjO1FBRmQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxoQixXQUFNLEdBQUcsZUFBTSxDQUFDO0lBS0ksQ0FBQztJQUU3QixpQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLDhCQUFLLEdBQUw7UUFBQSxpQkFNQztRQUxDLEtBQUssQ0FBQyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1lBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsR0FBRztZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDdEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLFFBQWE7UUFDekIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxLQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDekMsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkMsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNILEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBQyxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQW5DUTtRQUFSLFlBQUssRUFBRTs7K0NBQXFCO0lBQ3BCO1FBQVIsWUFBSyxFQUFFOztnREFBc0I7SUFGbkIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsOENBQXFCLEVBQUUsbUNBQWUsQ0FBQztZQUNuRCxXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBT2lDLDhDQUFxQjtZQUMzQixtQ0FBZTtZQUN4QixlQUFNO09BUmIsY0FBYyxDQXNDMUI7SUFBRCxxQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1VzZXJEYXRhU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgcHJvdmlkZXJzOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlLCBVc2VyRGF0YVNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgcHJpdmF0ZSBwYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgY29uZmlnID0gQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyRGF0YVNlcnZpY2U6IFVzZXJEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbG9naW4oKTogYW55e1xuICAgIGFsZXJ0KENvbmZpZy5nZXRVUkwoKSk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4oe1xuICAgICAgXCJtYXRyaWN1bGF0aW9uXCI6IHRoaXMubWF0LFxuICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3NcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiAgdGhpcy5jaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSlcbiAgfVxuXG4gIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IGFueSkgOmFueXtcbiAgICBpZih0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFcnJvclN0YXR1cygpPT09MjAwKXtcbiAgICAgIHRoaXMudXNlckRhdGFTZXJ2aWNlLnNldERhdGEocmVzcG9uc2UudXNlcik7XG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5yb2xlID09ICdwcm9mZXNzb3InKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Byb2Zlc3NvcicpXG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2Uucm9sZSA9PSAnc3R1ZGVudCcpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3N0dWRlbnQnKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ21hdHJpY3VsYXRpb24gbnVtYmVyIG9yIHBhc3N3b3JkIGludmFsaWQnKTtcbiAgICAgIHRoaXMubWF0PScnO1xuICAgICAgdGhpcy5wYXNzPScnO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=