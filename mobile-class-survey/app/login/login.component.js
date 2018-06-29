"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../services/authentication.service");
var config_1 = require("../config");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
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
            console.log(response);
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
            providers: [authentication_service_1.AuthenticationService],
            templateUrl: "./login/login.component.html",
            styleUrls: ["./login/login.component.css"]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5QztBQUV6Qyw2RUFBMkU7QUFDM0Usb0NBQWtDO0FBUWxDO0lBS0Usd0JBQ1UscUJBQTRDLEVBQzVDLE1BQWM7UUFEZCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKaEIsV0FBTSxHQUFHLGVBQU0sQ0FBQztJQUlJLENBQUM7SUFFN0IsaUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw4QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMQyxLQUFLLENBQUMsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUMvQixlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRLElBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxRQUFhO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUUsS0FBRyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN6QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBbENRO1FBQVIsWUFBSyxFQUFFOzsrQ0FBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7O2dEQUFzQjtJQUZuQixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyw4Q0FBcUIsQ0FBQztZQUNsQyxXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBT2lDLDhDQUFxQjtZQUNwQyxlQUFNO09BUGIsY0FBYyxDQXFDMUI7SUFBRCxxQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICBwcm92aWRlcnM6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgcHJpdmF0ZSBwYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgY29uZmlnID0gQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGxvZ2luKCk6IGFueXtcbiAgICBhbGVydChDb25maWcuZ2V0VVJMKCkpO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHtcbiAgICAgIFwibWF0cmljdWxhdGlvblwiOiB0aGlzLm1hdCxcbiAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gIHRoaXMuY2hlY2tSZXNwb25zZShyZXNwb25zZSkpXG4gIH1cblxuICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBhbnkpIDphbnl7XG4gICAgaWYodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0RXJyb3JTdGF0dXMoKT09PTIwMCl7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgICAgaWYgKHJlc3BvbnNlLnJvbGUgPT0gJ3Byb2Zlc3Nvcicpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvcHJvZmVzc29yJylcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5yb2xlID09ICdzdHVkZW50Jykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvc3R1ZGVudCcpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBhbGVydCgnbWF0cmljdWxhdGlvbiBudW1iZXIgb3IgcGFzc3dvcmQgaW52YWxpZCcpO1xuICAgICAgdGhpcy5tYXQ9Jyc7XG4gICAgICB0aGlzLnBhc3M9Jyc7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==