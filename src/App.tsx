import { createBrowserRouter , Route  , RouterProvider , createRoutesFromElements}   from "react-router-dom"
import Home from "./pages/Home"
import {ThemeProvider} from '@emotion/react'
import {createMuiTheme} from "./theme/theme"
import "./theme/main.css"


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Home />} />
  )
);

const App: React.FC=()=>{
  const theme= createMuiTheme();
  return(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
export default App
 