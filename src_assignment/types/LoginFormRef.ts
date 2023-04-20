export interface LoginFormRef{
    getData:() => ({email:string, pass:string}),
    setData: (em:string,pass:string) => void
}