export enum TopRoutes{
    Home = 'Home',
    Account = 'Account',
    Books = 'Books',
}

export type TopTabRoutesProps = {
    [TopRoutes.Account]:undefined,
    [TopRoutes.Books]:undefined,
    [TopRoutes.Home]:undefined
}