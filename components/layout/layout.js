import Footer from '../footer/footer'
import Theme from "../../theme/theme";
import {ThemeProvider} from "@mui/material";
import store from "../../redux/store";
import { Provider } from "react-redux";
import Head from '../header'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={Theme}>
            <Provider store={store}>
                <Head/>
                <main>
                    {children}
                </main>
                <Footer/>
            </Provider>
        </ThemeProvider>
    )
}

export default Layout