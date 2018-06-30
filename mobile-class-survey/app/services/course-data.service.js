"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var config_1 = require("../config");
var CourseDataService = /** @class */ (function () {
    function CourseDataService(http) {
        this.http = http;
    }
    CourseDataService.prototype.retrieveData = function (code) {
        var req_path = config_1.Config.getURL() + "/course" + "?code=" + code;
        return this.http.get(req_path)
            .pipe(operators_1.catchError(this.handleError('retrieveData', code)));
    };
    CourseDataService.prototype.getErrorStatus = function () {
        return this.error_status;
    };
    CourseDataService.prototype.handleError = function (operation, result) {
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
    CourseDataService.prototype.setData = function (course) {
        this.course_data = course;
    };
    CourseDataService.prototype.getData = function () {
        return this.course_data;
    };
    CourseDataService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CourseDataService);
    return CourseDataService;
}());
exports.CourseDataService = CourseDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvdXJzZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkJBQXNDO0FBQ3RDLDRDQUE0QztBQUU1Qyw2Q0FBa0Q7QUFFbEQsb0NBQWtDO0FBR2xDO0lBTUUsMkJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUksQ0FBQztJQUd4Qyx3Q0FBWSxHQUFaLFVBQWEsSUFBUTtRQUNuQixJQUFNLFFBQVEsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLEdBQUMsU0FBUyxHQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLFFBQVEsQ0FBQzthQUNsQyxJQUFJLENBQ0gsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRU8sdUNBQVcsR0FBbkIsVUFBd0IsU0FBdUIsRUFBRSxNQUFVO1FBQTNELGlCQVdDO1FBWHVCLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzdDLE1BQU0sQ0FBQyxVQUFDLEtBQVU7WUFFaEIsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBQ3RELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUdqQyx5REFBeUQ7WUFDekQsTUFBTSxDQUFDLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLE1BQVU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBeENVLGlCQUFpQjtRQUQ3QixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQU9SLGlCQUFVO09BTnhCLGlCQUFpQixDQTBDN0I7SUFBRCx3QkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VEYXRhU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBjb3Vyc2VfZGF0YTogYW55O1xuXG4gIHByaXZhdGUgZXJyb3Jfc3RhdHVzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxuXG5cbiAgcmV0cmlldmVEYXRhKGNvZGU6YW55KTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIGNvbnN0IHJlcV9wYXRoID0gQ29uZmlnLmdldFVSTCgpK1wiL2NvdXJzZVwiK1wiP2NvZGU9XCIrY29kZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHJlcV9wYXRoKVxuICAgIC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCdyZXRyaWV2ZURhdGEnLCBjb2RlKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RXJyb3JTdGF0dXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcl9zdGF0dXM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+IChvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuXG4gICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGF0dXMpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgICB0aGlzLmVycm9yX3N0YXR1cyA9IGVycm9yLnN0YXR1cztcblxuXG4gICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgfTtcbiAgfVxuXG4gIHNldERhdGEoY291cnNlOmFueSk6dm9pZHtcbiAgICB0aGlzLmNvdXJzZV9kYXRhID0gY291cnNlO1xuICB9XG5cbiAgZ2V0RGF0YSgpOmFueXtcbiAgICByZXR1cm4gdGhpcy5jb3Vyc2VfZGF0YTtcbiAgfVxuXG59XG4iXX0=