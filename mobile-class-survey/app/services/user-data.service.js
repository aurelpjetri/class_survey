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
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQztJQUFBO0lBYUEsQ0FBQztJQVRDLHdCQUF3QjtJQUN4QixpQ0FBTyxHQUFQLFVBQVEsSUFBUztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQVhVLGVBQWU7UUFIM0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBYTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcblxuICBwcml2YXRlIHVzZXJfZGF0YTogYW55O1xuXG4gIC8vIGZvciB1c2VyIHJlbGF0ZWQgZGF0YVxuICBzZXREYXRhKGRhdGE6IGFueSk6dm9pZHtcbiAgICB0aGlzLnVzZXJfZGF0YSA9IGRhdGE7XG4gIH1cblxuICBnZXREYXRhKCk6IGFueXtcbiAgICByZXR1cm4gdGhpcy51c2VyX2RhdGE7XG4gIH1cblxufVxuIl19