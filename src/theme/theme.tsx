import {createTheme , responsiveFontSizes} from '@mui/material';


declare module '@mui/material/styles' {
interface Theme{
    primaryAppBar: {
       height:number
    };
    primaryDrawer: {
       width:number,
       closed:number

    };

     scondaryDrawer: {
       width:number,

    };

}
  interface ThemeOptions{
    primaryAppBar:{
        height:number

    }
     primaryDrawer: {
       width:number
       closed:number

    };
     scondaryDrawer: {
       width:number,

    };

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
        primaryDrawer: {
       width:150,
       closed:70

       },
        scondaryDrawer: {
       width:200,

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
    theme=responsiveFontSizes(theme); 

    return theme 
}

export default createMuiTheme ; 