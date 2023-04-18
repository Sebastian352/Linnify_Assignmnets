export enum AppRoutes{
    Home = 'Home',
    ListScreen = 'ListScreen',
    DetailsScreen = 'DetailsScreen',
}

export type AppRouteProps = {
    [AppRoutes.Home]: undefined;
    [AppRoutes.ListScreen]: undefined;
    [AppRoutes.DetailsScreen]: undefined;
}