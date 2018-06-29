import { LoginComponent } from "./login/login.component"

export const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent }
];

export const navigatableComponents = [
  LoginComponent
];
