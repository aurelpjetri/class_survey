"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var config_1 = require("../config");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (user) {
        this.error_status = 200;
        return this.http.post(config_1.Config.getURL() + "/authentication", user).pipe(operators_1.catchError(this.handleError('login', user)));
    };
    AuthenticationService.prototype.getErrorStatus = function () {
        return this.error_status;
    };
    AuthenticationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error.status); // log to console instead
            _this.error_status = error.status;
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBQ3RDLDRDQUE0QztBQUM1Qyw2Q0FBa0Q7QUFFbEQsb0NBQWtDO0FBS2xDO0lBR0UsK0JBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUksQ0FBQztJQUV4QyxxQ0FBSyxHQUFMLFVBQU0sSUFBUztRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUUsR0FBRyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxlQUFNLENBQUMsTUFBTSxFQUFFLEdBQUMsaUJBQWlCLEVBQzVELElBQUksQ0FBQyxDQUFFLElBQUksQ0FDVCxzQkFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQzVDLENBQUM7SUFDSixDQUFDO0lBRUQsOENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUF3QixTQUF1QixFQUFFLE1BQVU7UUFBM0QsaUJBVUM7UUFWdUIsMEJBQUEsRUFBQSx1QkFBdUI7UUFDN0MsTUFBTSxDQUFDLFVBQUMsS0FBVTtZQUVoQix3REFBd0Q7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFDdEQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRWpDLHlEQUF5RDtZQUN6RCxNQUFNLENBQUMsU0FBRSxDQUFDLE1BQVcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7SUEzQlUscUJBQXFCO1FBSGpDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUl5QixpQkFBVTtPQUh4QixxQkFBcUIsQ0E2QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBlcnJvcl9zdGF0dXM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XG5cbiAgbG9naW4odXNlcjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmVycm9yX3N0YXR1cz0gMjAwO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KENvbmZpZy5nZXRVUkwoKStcIi9hdXRoZW50aWNhdGlvblwiLFxuICAgIHVzZXIpIC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdsb2dpbicsIHVzZXIpKVxuICAgICk7XG4gIH1cblxuICBnZXRFcnJvclN0YXR1cygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVycm9yX3N0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4gKG9wZXJhdGlvbiA9ICdvcGVyYXRpb24nLCByZXN1bHQ/OiBUKSB7XG4gICAgcmV0dXJuIChlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG5cbiAgICAgIC8vIFRPRE86IHNlbmQgdGhlIGVycm9yIHRvIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnN0YXR1cyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICAgIHRoaXMuZXJyb3Jfc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuXG4gICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=