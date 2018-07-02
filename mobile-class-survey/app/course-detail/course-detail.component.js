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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnNlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3Vyc2UtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx1RUFBa0U7QUFDbEUscUZBQWdGO0FBRWhGLDBDQUF5QztBQVF6QztJQVNFLCtCQUNVLGlCQUFvQyxFQUNwQyx3QkFBa0QsRUFDbEQsTUFBYztRQUZkLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGhCLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxhQUFRLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUszQixDQUFDO0lBRTdCLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQUEsaUJBSUM7UUFIQyxHQUFHLENBQUEsQ0FBWSxVQUEwQixFQUExQixLQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUExQixjQUEwQixFQUExQixJQUEwQjtZQUFyQyxJQUFJLEdBQUcsU0FBQTtZQUNULElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO1NBQ3RHO0lBQ0gsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxRQUFhO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEtBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25ELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNILEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixLQUFTO1FBQ3ZCLHlDQUF5QztRQUN6QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBcERVLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBQzNELENBQUM7eUNBVzZCLHVDQUFpQjtZQUNWLHFEQUF3QjtZQUMxQyxlQUFNO09BWmIscUJBQXFCLENBc0RqQztJQUFELDRCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDb3Vyc2VEYXRhU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY291cnNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1F1ZXN0aW9ubmFpcmVEYXRhU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvcXVlc3Rpb25uYWlyZS1kYXRhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb3Vyc2UtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdXJzZS1kZXRhaWwvY291cnNlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdXJzZS1kZXRhaWwvY291cnNlLWRldGFpbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291cnNlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGNvdXJzZTogYW55O1xuICBwcml2YXRlIGFjdGl2ZV9xOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIGV4cGlyZWRfcTogYW55W10gPSBbXTtcblxuICBwcml2YXRlIGV4cF9pY29uOiBzdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjQ2Yyk7XG4gIHByaXZhdGUgZ3BzX2ljb246IHN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmM2M1KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvdXJzZURhdGFTZXJ2aWNlOiBDb3Vyc2VEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHF1ZXN0aW9ubmFpcmVEYXRhU2VydmljZTogUXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY291cnNlID0gdGhpcy5jb3Vyc2VEYXRhU2VydmljZS5nZXREYXRhKCk7XG4gICAgdGhpcy5nZXRRdWVzdGlvbm5haXJlcygpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25uYWlyZXMoKTp2b2lke1xuICAgIGZvcihsZXQgcWlkIG9mIHRoaXMuY291cnNlLnF1ZXN0aW9ubmFpcmVzKXtcbiAgICAgIHRoaXMucXVlc3Rpb25uYWlyZURhdGFTZXJ2aWNlLnJldHJpZXZlRGF0YShxaWQpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMuY2hlY2tSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tSZXNwb25zZShyZXNwb25zZTogYW55KSA6YW55e1xuICAgIGlmKCEodGhpcy5jb3Vyc2VEYXRhU2VydmljZS5nZXRFcnJvclN0YXR1cygpPT09NDA0KSl7XG4gICAgICBpZih0aGlzLmNoZWNrRXhwaXJlbWVudChyZXNwb25zZSkpe1xuICAgICAgICB0aGlzLmV4cGlyZWRfcS5wdXNoKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuYWN0aXZlX3EucHVzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBhbGVydCgndW5hYmxlIHRvIHJlYWQgY291cnNlIGRldGFpbHMnKTtcbiAgICAgIHRoaXMuYWN0aXZlX3EucHVzaCgnNDA0Jyk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFeHBpcmVtZW50KHF1ZXN0OmFueSk6IGFueXtcbiAgICAvLyByZXR1cm5zIFRSVUUgaWYgdGhlIGRlYWRsaW5lIGlzIHBhc3NlZFxuICAgIHZhciBfZGVhZGxpbmUgPSBxdWVzdC5kZWFkbGluZTtcbiAgICBfZGVhZGxpbmUgPSBfZGVhZGxpbmUuc3BsaXQoXCIgLSBcIik7XG4gICAgdmFyIGRheSA9IF9kZWFkbGluZVswXS5zcGxpdChcIi9cIik7XG4gICAgdmFyIHRpbWUgPSBfZGVhZGxpbmVbMV0uc3BsaXQoXCI6XCIpO1xuICAgIHZhciBkZWFkbGluZSA9IG5ldyBEYXRlKGRheVsyXSwgKHBhcnNlSW50KGRheVsxXSktMSksIGRheVswXSwgdGltZVswXSwgdGltZVsxXSk7XG4gICAgcmV0dXJuIChuZXcgRGF0ZSgpID4gZGVhZGxpbmUpO1xuICB9XG5cbiAgY3JlYXRpb25UcmlnZ2VyZWQoKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCd0ZW1wbGF0ZXMnKTtcbiAgfVxuXG59XG4iXX0=