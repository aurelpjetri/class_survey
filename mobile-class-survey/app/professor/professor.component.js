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
        this.uni_icon = String.fromCharCode(0xf19c);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc29yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2Zlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFPcEU7SUFRRSw0QkFDVSxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsTUFBYztRQUZkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSaEIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFNM0IsQ0FBQztJQUU3QixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUFBLGlCQUlDO1FBSEMsR0FBRyxDQUFBLENBQWEsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBakIsY0FBaUIsRUFBakIsSUFBaUI7WUFBN0IsSUFBSSxJQUFJLFNBQUE7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtTQUNoRztJQUNILENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsUUFBYTtRQUN6QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxLQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFHLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsUUFBYTtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQWxEVSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzt5Q0FVMkIsbUNBQWU7WUFDYix1Q0FBaUI7WUFDNUIsZUFBTTtPQVhiLGtCQUFrQixDQW9EOUI7SUFBRCx5QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291cnNlLWRhdGEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9mZXNzb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmVzc29yL3Byb2Zlc3Nvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2Zlc3Nvci9wcm9mZXNzb3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2Zlc3NvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSB1c2VyOiBhbnk7XG4gIHByaXZhdGUgYWN0aXZlX2NvdXJzZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgZXhwaXJlZF9jb3Vyc2VzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIHVuaV9pY29uOiBzdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjE5Yyk7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJEYXRhU2VydmljZTogVXNlckRhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgY291cnNlRGF0YVNlcnZpY2U6IENvdXJzZURhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgIHRoaXMuZ2V0Q291cnNlc0RldGFpbHMoKTtcbiAgfVxuXG4gIGdldENvdXJzZXNEZXRhaWxzKCl7XG4gICAgZm9yKGxldCBjb2RlIG9mIHRoaXMudXNlci5jb3Vyc2VzKXtcbiAgICAgIHRoaXMuY291cnNlRGF0YVNlcnZpY2UucmV0cmlldmVEYXRhKGNvZGUpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHRoaXMuY2hlY2tSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tSZXNwb25zZShyZXNwb25zZTogYW55KTogYW55e1xuICAgIGlmKCEodGhpcy5jb3Vyc2VEYXRhU2VydmljZS5nZXRFcnJvclN0YXR1cygpPT09NDA0KSl7XG4gICAgICBpZiAocmVzcG9uc2UuYWN0aXZlPT09XCJmYWxzZVwiKXtcbiAgICAgICAgdGhpcy5leHBpcmVkX2NvdXJzZXMucHVzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLmFjdGl2ZV9jb3Vyc2VzLnB1c2gocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ3VuYWJsZSB0byByZWFkIGNvdXJzZSBkZXRhaWxzJyk7XG4gICAgICB0aGlzLmFjdGl2ZV9jb3Vyc2VzLnB1c2goJzQwNCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgdGhpcy51c2VyID0gdGhpcy51c2VyRGF0YVNlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG5cbiAgc2VsZWN0ZWRDb3Vyc2Uoc2VsZWN0ZWQ6IGFueSk6IHZvaWR7XG4gICAgdGhpcy5jb3Vyc2VEYXRhU2VydmljZS5zZXREYXRhKHNlbGVjdGVkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvY291cnNlJyk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIGFsZXJ0KFwib2tcIilcbiAgfVxuXG59XG4iXX0=