import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {footerListContactUsSocial} from "../../data/footerList";

const FooterContactUsSocial = () =>{
    const CustomBoxIcon = styled(Box)({
        display: 'inline-block',
        backgroundColor: '#0C2A4D',
        borderRadius: '50%',
        padding: '5px 5px 2px 5px' ,
        margin: '5px',
        cursor:'pointer'
    })
    return(
        <Grid mt={2}>
            {footerListContactUsSocial.map(s => (
                <CustomBoxIcon key={s.id}>
                    {s.icon}
                </CustomBoxIcon>
            ))}
        </Grid>
    )
}

export default FooterContactUsSocial