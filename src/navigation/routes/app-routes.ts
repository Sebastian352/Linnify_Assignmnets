export enum AppRoutes {
  Login = 'Login',
  Home = 'Home',
}

export type AppRouteProps = {
  [AppRoutes.Login]: undefined; 
  [AppRoutes.Home]: {title: string};
};
