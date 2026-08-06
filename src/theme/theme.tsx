import {createTheme} from '@mui/material';


declare module '@mui/material/styles' {
interface Theme{
    primaryAppBar: {
       height:number
    };

}
  interface ThemeOptions{
    primaryAppBar:{
        height:number
    }

}

}
export const createMuiTheme=() => {

    let theme= createTheme({
       typography: {
           fontFamily:['Open Sans'," sans-serif"].join(',')
       },
       primaryAppBar:{
        height:45,

       }, 
       components:{
        MuiAppBar:{
            defaultProps:{
                color:"default",
                elevation:0
            },
        },
       }
    });
    return theme 
}

export default createMuiTheme ; 