import Footer from '../footer/footer'
import Theme from "../../theme/theme";
import {ThemeProvider} from "@mui/material";
import store from "../../redux/store";
import { Provider } from "react-redux";

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={Theme}>
            <Provider store={store}>
                <main>
                    {children}
                </main>
                <Footer/>
            </Provider>
        </ThemeProvider>
    )
}

export default Layout