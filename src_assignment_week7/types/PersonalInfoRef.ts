export interface PersonalInfoRef{
    getData:() => ({firstName:string, lastName:string, faculty:string ,year:string}),
    setData: (fn:string,ln:string, fclty:string,yr:string) => void,
    setBorderColor: (bc:string) => void
}