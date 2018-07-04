"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var course_data_service_1 = require("../services/course-data.service");
var questionnaire_data_service_1 = require("../services/questionnaire-data.service");
var router_1 = require("@angular/router");
var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(courseDataService, questionnaireDataService, router) {
        this.courseDataService = courseDataService;
        this.questionnaireDataService = questionnaireDataService;
        this.router = router;
        this.active_q = [];
        this.expired_q = [];
        this.act_icon = String.fromCharCode(0xf46d);
        this.exp_icon = String.fromCharCode(0xf46c);
        this.gps_icon = String.fromCharCode(0xf3c5);
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        this.course = this.courseDataService.getData();
        this.getQuestionnaires();
    };
    CourseDetailComponent.prototype.getQuestionnaires = function () {
        var _this = this;
        for (var _i = 0, _a = this.course.questionnaires; _i < _a.length; _i++) {
            var qid = _a[_i];
            this.questionnaireDataService.retrieveData(qid).subscribe(function (response) { return _this.checkResponse(response); });
        }
    };
    CourseDetailComponent.prototype.checkResponse = function (response) {
        if (!(this.courseDataService.getErrorStatus() === 404)) {
            if (this.checkExpirement(response)) {
                this.expired_q.push(response);
            }
            else {
                this.active_q.push(response);
            }
        }
        else {
            alert('unable to read course details');
            this.active_q.push('404');
        }
    };
    CourseDetailComponent.prototype.checkExpirement = function (quest) {
        // returns TRUE if the deadline is passed
        var _deadline = quest.deadline;
        _deadline = _deadline.split(" - ");
        var day = _deadline[0].split("/");
        var time = _deadline[1].split(":");
        var deadline = new Date(day[2], (parseInt(day[1]) - 1), day[0], time[0], time[1]);
        return (new Date() > deadline);
    };
    CourseDetailComponent.prototype.creationTriggered = function () {
        this.router.navigateByUrl('templates');
    };
    CourseDetailComponent.prototype.viewResult = function (questionnaire, active) {
        questionnaire['active'] = active;
        this.questionnaireDataService.setData(questionnaire);
        this.router.navigateByUrl('/questionnaire/statistic');
    };
    CourseDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-course-detail',
            templateUrl: './course-detail/course-detail.component.html',
            styleUrls: ['./course-detail/course-detail.component.css']
        }),
        __metadata("design:paramtypes", [course_data_service_1.CourseDataService,
            questionnaire_data_service_1.QuestionnaireDataService,
            router_1.Router])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx1RUFBa0U7QUFDbEUscUZBQWdGO0FBRWhGLDBDQUF5QztBQVF6QztJQVVFLCtCQUNVLGlCQUFvQyxFQUNwQyx3QkFBa0QsRUFDbEQsTUFBYztRQUZkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmhCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxhQUFRLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxhQUFRLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUszQixDQUFDO0lBRTdCLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQUEsaUJBSUM7UUFIQyxHQUFHLENBQUEsQ0FBWSxVQUEwQixFQUExQixLQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUExQixjQUEwQixFQUExQixJQUEwQjtZQUFyQyxJQUFJLEdBQUcsU0FBQTtZQUNULElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO1NBQ3RHO0lBQ0gsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxRQUFhO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEtBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNILEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixLQUFTO1FBQ3ZCLHlDQUF5QztRQUN6QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLGFBQWEsRUFBRSxNQUFNO1FBQzlCLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUE7UUFDaEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3ZELENBQUM7SUEzRFUscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7U0FDM0QsQ0FBQzt5Q0FZNkIsdUNBQWlCO1lBQ1YscURBQXdCO1lBQzFDLGVBQU07T0FiYixxQkFBcUIsQ0E2RGpDO0lBQUQsNEJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvdXJzZURhdGFTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3Vyc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7UXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9xdWVzdGlvbm5haXJlLWRhdGEuc2VydmljZSc7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvdXJzZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgY291cnNlOiBhbnk7XG4gIHByaXZhdGUgYWN0aXZlX3E6IGFueVtdID0gW107XG4gIHByaXZhdGUgZXhwaXJlZF9xOiBhbnlbXSA9IFtdO1xuXG4gIHByaXZhdGUgYWN0X2ljb246IHN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmNDZkKTtcbiAgcHJpdmF0ZSBleHBfaWNvbjogc3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGY0NmMpO1xuICBwcml2YXRlIGdwc19pY29uOiBzdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjNjNSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3Vyc2VEYXRhU2VydmljZTogQ291cnNlRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBxdWVzdGlvbm5haXJlRGF0YVNlcnZpY2U6IFF1ZXN0aW9ubmFpcmVEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvdXJzZSA9IHRoaXMuY291cnNlRGF0YVNlcnZpY2UuZ2V0RGF0YSgpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25uYWlyZXMoKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ubmFpcmVzKCk6dm9pZHtcbiAgICBmb3IobGV0IHFpZCBvZiB0aGlzLmNvdXJzZS5xdWVzdGlvbm5haXJlcyl7XG4gICAgICB0aGlzLnF1ZXN0aW9ubmFpcmVEYXRhU2VydmljZS5yZXRyaWV2ZURhdGEocWlkKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB0aGlzLmNoZWNrUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrUmVzcG9uc2UocmVzcG9uc2U6IGFueSkgOmFueXtcbiAgICBpZighKHRoaXMuY291cnNlRGF0YVNlcnZpY2UuZ2V0RXJyb3JTdGF0dXMoKT09PTQwNCkpe1xuICAgICAgaWYodGhpcy5jaGVja0V4cGlyZW1lbnQocmVzcG9uc2UpKXtcbiAgICAgICAgdGhpcy5leHBpcmVkX3EucHVzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLmFjdGl2ZV9xLnB1c2gocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ3VuYWJsZSB0byByZWFkIGNvdXJzZSBkZXRhaWxzJyk7XG4gICAgICB0aGlzLmFjdGl2ZV9xLnB1c2goJzQwNCcpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRXhwaXJlbWVudChxdWVzdDphbnkpOiBhbnl7XG4gICAgLy8gcmV0dXJucyBUUlVFIGlmIHRoZSBkZWFkbGluZSBpcyBwYXNzZWRcbiAgICB2YXIgX2RlYWRsaW5lID0gcXVlc3QuZGVhZGxpbmU7XG4gICAgX2RlYWRsaW5lID0gX2RlYWRsaW5lLnNwbGl0KFwiIC0gXCIpO1xuICAgIHZhciBkYXkgPSBfZGVhZGxpbmVbMF0uc3BsaXQoXCIvXCIpO1xuICAgIHZhciB0aW1lID0gX2RlYWRsaW5lWzFdLnNwbGl0KFwiOlwiKTtcbiAgICB2YXIgZGVhZGxpbmUgPSBuZXcgRGF0ZShkYXlbMl0sIChwYXJzZUludChkYXlbMV0pLTEpLCBkYXlbMF0sIHRpbWVbMF0sIHRpbWVbMV0pO1xuICAgIHJldHVybiAobmV3IERhdGUoKSA+IGRlYWRsaW5lKTtcbiAgfVxuXG4gIGNyZWF0aW9uVHJpZ2dlcmVkKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgndGVtcGxhdGVzJyk7XG4gIH1cblxuICB2aWV3UmVzdWx0KHF1ZXN0aW9ubmFpcmUsIGFjdGl2ZSl7XG4gICAgcXVlc3Rpb25uYWlyZVsnYWN0aXZlJ10gPSBhY3RpdmVcbiAgICB0aGlzLnF1ZXN0aW9ubmFpcmVEYXRhU2VydmljZS5zZXREYXRhKHF1ZXN0aW9ubmFpcmUpXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3F1ZXN0aW9ubmFpcmUvc3RhdGlzdGljJylcbiAgfVxuXG59XG4iXX0=