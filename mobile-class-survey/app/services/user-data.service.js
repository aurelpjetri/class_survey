"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserDataService = /** @class */ (function () {
    function UserDataService() {
    }
    // for user related data
    UserDataService.prototype.setData = function (data) {
        this.user_data = data;
    };
    UserDataService.prototype.getData = function () {
        return this.user_data;
    };
    UserDataService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQUFBO0lBYUEsQ0FBQztJQVRDLHdCQUF3QjtJQUN4QixpQ0FBTyxHQUFQLFVBQVEsSUFBUztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVhVLGVBQWU7UUFEM0IsaUJBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixlQUFlLENBYTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdXNlcl9kYXRhOiBhbnk7XG5cbiAgLy8gZm9yIHVzZXIgcmVsYXRlZCBkYXRhXG4gIHNldERhdGEoZGF0YTogYW55KTogdm9pZCB7XG4gICAgdGhpcy51c2VyX2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgZ2V0RGF0YSgpOiBhbnl7XG4gICAgcmV0dXJuIHRoaXMudXNlcl9kYXRhO1xuICB9XG5cbn1cbiJdfQ==