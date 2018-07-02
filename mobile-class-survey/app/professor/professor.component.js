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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzc29yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2Zlc3Nvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlDO0FBRXpDLG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFTcEU7SUFRRSw0QkFDVSxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsTUFBYztRQUZkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSaEIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFDM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFFNUIsYUFBUSxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFLM0IsQ0FBQztJQUU3QixxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUFBLGlCQUlDO1FBSEMsR0FBRyxDQUFBLENBQWEsVUFBaUIsRUFBakIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBakIsY0FBaUIsRUFBakIsSUFBaUI7WUFBN0IsSUFBSSxJQUFJLFNBQUE7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtTQUNoRztJQUNILENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsUUFBYTtRQUN6QixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxLQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFHLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsUUFBYTtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5Q1Usa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ25ELENBQUM7eUNBVTJCLG1DQUFlO1lBQ2IsdUNBQWlCO1lBQzVCLGVBQU07T0FYYixrQkFBa0IsQ0FnRDlCO0lBQUQseUJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDb3Vyc2VEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvdXJzZS1kYXRhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBFbGV2YXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtbmctc2hhZG93JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2Zlc3NvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9mZXNzb3IvcHJvZmVzc29yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmVzc29yL3Byb2Zlc3Nvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZmVzc29yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHVzZXI6IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmVfY291cnNlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBleHBpcmVkX2NvdXJzZXM6IGFueVtdID0gW107XG5cbiAgcHJpdmF0ZSB1bmlfaWNvbjogc3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxOWMpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckRhdGFTZXJ2aWNlOiBVc2VyRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb3Vyc2VEYXRhU2VydmljZTogQ291cnNlRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgdGhpcy5nZXRDb3Vyc2VzRGV0YWlscygpO1xuICB9XG5cbiAgZ2V0Q291cnNlc0RldGFpbHMoKXtcbiAgICBmb3IobGV0IGNvZGUgb2YgdGhpcy51c2VyLmNvdXJzZXMpe1xuICAgICAgdGhpcy5jb3Vyc2VEYXRhU2VydmljZS5yZXRyaWV2ZURhdGEoY29kZSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4gdGhpcy5jaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICB9XG4gIH1cblxuICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiBhbnl7XG4gICAgaWYoISh0aGlzLmNvdXJzZURhdGFTZXJ2aWNlLmdldEVycm9yU3RhdHVzKCk9PT00MDQpKXtcbiAgICAgIGlmIChyZXNwb25zZS5hY3RpdmU9PT1cImZhbHNlXCIpe1xuICAgICAgICB0aGlzLmV4cGlyZWRfY291cnNlcy5wdXNoKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuYWN0aXZlX2NvdXJzZXMucHVzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBhbGVydCgndW5hYmxlIHRvIHJlYWQgY291cnNlIGRldGFpbHMnKTtcbiAgICAgIHRoaXMuYWN0aXZlX2NvdXJzZXMucHVzaCgnNDA0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJEYXRhU2VydmljZS5nZXREYXRhKCk7XG4gIH1cblxuICBzZWxlY3RlZENvdXJzZShzZWxlY3RlZDogYW55KTogdm9pZHtcbiAgICB0aGlzLmNvdXJzZURhdGFTZXJ2aWNlLnNldERhdGEoc2VsZWN0ZWQpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9jb3Vyc2UnKTtcbiAgfVxuXG59XG4iXX0=