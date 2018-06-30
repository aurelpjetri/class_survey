"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_data_service_1 = require("../services/user-data.service");
var course_data_service_1 = require("../services/course-data.service");
var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent(userDataService, courseDataService, router) {
        this.userDataService = userDataService;
        this.courseDataService = courseDataService;
        this.router = router;
        this.active_courses = [];
        this.expired_courses = [];
    }
    ProfessorComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getCoursesDetails();
    };
    ProfessorComponent.prototype.getCoursesDetails = function () {
        var _this = this;
        for (var _i = 0, _a = this.user.courses; _i < _a.length; _i++) {
            var code = _a[_i];
            this.courseDataService.retrieveData(code).subscribe(function (response) { return _this.checkResponse(response); });
        }
    };
    ProfessorComponent.prototype.checkResponse = function (response) {
        if (!(this.courseDataService.getErrorStatus() === 404)) {
            if (response.active === "false") {
                this.expired_courses.push(response);
            }
            else {
                this.active_courses.push(response);
            }
        }
        else {
            alert('unable to read course details');
            this.active_courses.push('404');
        }
    };
    ProfessorComponent.prototype.getUser = function () {
        this.user = this.userDataService.getData();
    };
    ProfessorComponent.prototype.selectedCourse = function (selected) {
        this.courseDataService.setData(selected);
        this.router.navigateByUrl('/course');
    };
    ProfessorComponent.prototype.test = function () {
        alert("ok");
    };
    ProfessorComponent = __decorate([
        core_1.Component({
            selector: 'app-professor',
            templateUrl: './professor/professor.component.html',
            styleUrls: ['./professor/professor.component.css']
        }),
        __metadata("design:paramtypes", [user_data_service_1.UserDataService,
            course_data_service_1.CourseDataService,
            router_1.Router])
    ], ProfessorComponent);
    return ProfessorComponent;
}());
exports.ProfessorComponent = ProfessorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc29yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2Zlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFPcEU7SUFPRSw0QkFDVSxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsTUFBYztRQUZkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQaEIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7SUFNUixDQUFDO0lBRTdCLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQUEsaUJBSUM7UUFIQyxHQUFHLENBQUEsQ0FBYSxVQUFpQixFQUFqQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFqQixjQUFpQixFQUFqQixJQUFpQjtZQUE3QixJQUFJLElBQUksU0FBQTtZQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO1NBQ2hHO0lBQ0gsQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxRQUFhO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLEtBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUcsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELElBQUksQ0FBQSxDQUFDO2dCQUNILElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDSCxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDJDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGlDQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDYixDQUFDO0lBakRVLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNuRCxDQUFDO3lDQVMyQixtQ0FBZTtZQUNiLHVDQUFpQjtZQUM1QixlQUFNO09BVmIsa0JBQWtCLENBbUQ5QjtJQUFELHlCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291cnNlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3Vyc2UtZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2Zlc3NvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9mZXNzb3IvcHJvZmVzc29yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmVzc29yL3Byb2Zlc3Nvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmVzc29yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHVzZXI6IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmVfY291cnNlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBleHBpcmVkX2NvdXJzZXM6IGFueVtdID0gW107XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJEYXRhU2VydmljZTogVXNlckRhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgY291cnNlRGF0YVNlcnZpY2U6IENvdXJzZURhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgIHRoaXMuZ2V0Q291cnNlc0RldGFpbHMoKTtcbiAgfVxuXG4gIGdldENvdXJzZXNEZXRhaWxzKCl7XG4gICAgZm9yKGxldCBjb2RlIG9mIHRoaXMudXNlci5jb3Vyc2VzKXtcbiAgICAgIHRoaXMuY291cnNlRGF0YVNlcnZpY2UucmV0cmlldmVEYXRhKGNvZGUpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMuY2hlY2tSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tSZXNwb25zZShyZXNwb25zZTogYW55KTogYW55e1xuICAgIGlmKCEodGhpcy5jb3Vyc2VEYXRhU2VydmljZS5nZXRFcnJvclN0YXR1cygpPT09NDA0KSl7XG4gICAgICBpZiAocmVzcG9uc2UuYWN0aXZlPT09XCJmYWxzZVwiKXtcbiAgICAgICAgdGhpcy5leHBpcmVkX2NvdXJzZXMucHVzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLmFjdGl2ZV9jb3Vyc2VzLnB1c2gocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ3VuYWJsZSB0byByZWFkIGNvdXJzZSBkZXRhaWxzJyk7XG4gICAgICB0aGlzLmFjdGl2ZV9jb3Vyc2VzLnB1c2goJzQwNCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy51c2VyRGF0YVNlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG5cbiAgc2VsZWN0ZWRDb3Vyc2Uoc2VsZWN0ZWQ6IGFueSk6IHZvaWR7XG4gICAgdGhpcy5jb3Vyc2VEYXRhU2VydmljZS5zZXREYXRhKHNlbGVjdGVkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY291cnNlJyk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIGFsZXJ0KFwib2tcIilcbiAgfVxuXG59XG4iXX0=