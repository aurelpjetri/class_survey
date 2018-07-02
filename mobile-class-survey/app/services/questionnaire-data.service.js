"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var config_1 = require("../config");
var QuestionnaireDataService = /** @class */ (function () {
    function QuestionnaireDataService(http) {
        this.http = http;
    }
    QuestionnaireDataService.prototype.retrieveData = function (id) {
        var req_path = config_1.Config.getURL() + '/questionnaire?questionnaire=' + id;
        return this.http.get(req_path)
            .pipe(operators_1.catchError(this.handleError('retrieveData', id)));
    };
    QuestionnaireDataService.prototype.getErrorStatus = function () {
        return this.error_status;
    };
    QuestionnaireDataService.prototype.handleError = function (operation, result) {
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
    QuestionnaireDataService.prototype.setData = function (data) {
        this.questionnaireData = data;
    };
    QuestionnaireDataService.prototype.getData = function () {
        return this.questionnaireData;
    };
    QuestionnaireDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionnaireDataService);
    return QuestionnaireDataService;
}());
exports.QuestionnaireDataService = QuestionnaireDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWVzdGlvbm5haXJlLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2QkFBc0M7QUFDdEMsNENBQTRDO0FBRTVDLDZDQUFrRDtBQUVsRCxvQ0FBa0M7QUFLbEM7SUFJRSxrQ0FBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFBSSxDQUFDO0lBR3hDLCtDQUFZLEdBQVosVUFBYSxFQUFNO1FBQ2pCLElBQU0sUUFBUSxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsR0FBQywrQkFBK0IsR0FBQyxFQUFFLENBQUM7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLFFBQVEsQ0FBQzthQUNsQyxJQUFJLENBQ0gsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRU8sOENBQVcsR0FBbkIsVUFBd0IsU0FBdUIsRUFBRSxNQUFVO1FBQTNELGlCQVdDO1FBWHVCLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzdDLE1BQU0sQ0FBQyxVQUFDLEtBQVU7WUFFaEIsd0RBQXdEO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO1lBQ3RELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUdqQyx5REFBeUQ7WUFDekQsTUFBTSxDQUFDLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsMENBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBdENVLHdCQUF3QjtRQUhwQyxpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLeUIsaUJBQVU7T0FKeEIsd0JBQXdCLENBdUNwQztJQUFELCtCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbm5haXJlRGF0YVNlcnZpY2Uge1xuICBwcml2YXRlIGVycm9yX3N0YXR1czogYW55O1xuICBwcml2YXRlIHF1ZXN0aW9ubmFpcmVEYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxuXG5cbiAgcmV0cmlldmVEYXRhKGlkOmFueSk6IE9ic2VydmFibGU8YW55PntcbiAgICBjb25zdCByZXFfcGF0aCA9IENvbmZpZy5nZXRVUkwoKSsnL3F1ZXN0aW9ubmFpcmU/cXVlc3Rpb25uYWlyZT0nK2lkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4ocmVxX3BhdGgpXG4gICAgLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ3JldHJpZXZlRGF0YScsIGlkKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RXJyb3JTdGF0dXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcl9zdGF0dXM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yPFQ+IChvcGVyYXRpb24gPSAnb3BlcmF0aW9uJywgcmVzdWx0PzogVCkge1xuICAgIHJldHVybiAoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8VD4gPT4ge1xuXG4gICAgICAvLyBUT0RPOiBzZW5kIHRoZSBlcnJvciB0byByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGF0dXMpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgICB0aGlzLmVycm9yX3N0YXR1cyA9IGVycm9yLnN0YXR1cztcblxuXG4gICAgICAvLyBMZXQgdGhlIGFwcCBrZWVwIHJ1bm5pbmcgYnkgcmV0dXJuaW5nIGFuIGVtcHR5IHJlc3VsdC5cbiAgICAgIHJldHVybiBvZihyZXN1bHQgYXMgVCk7XG4gICAgfTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YTogYW55KTp2b2lke1xuICAgIHRoaXMucXVlc3Rpb25uYWlyZURhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnl7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb25uYWlyZURhdGE7XG4gIH1cbn1cbiJdfQ==