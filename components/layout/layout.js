import Footer from '../footer/footer'
import Theme from "../../theme/theme";
import {ThemeProvider} from "@mui/material";

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={Theme}>
            <main>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default Layout