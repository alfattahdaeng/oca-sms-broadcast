import LoginPage from "./LoginPage";

export const LoginPageConfig = {
  routes: [
    {
      path: "/auth/login",
      exact: true,
      component: LoginPage
    }
  ]
};
