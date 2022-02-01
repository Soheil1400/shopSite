import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#E94560',
            light:'#fff'
        },
        secondary: {
            main: '#0F3460',
            dark:'#2B3445',
            light:'#7D879C'
        }
    },
});

export default Theme