import { NavigationScreenProp } from 'react-navigation';


export default interface ICommon{
    navigation:NavigationScreenProp<{}>,
    screenProps:{
        t: (scope:string, oprions?:any) => string,
        locale: string
    }
}