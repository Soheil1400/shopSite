import {Box, Grid} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import {styled} from "@mui/material/styles";

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
        <Grid>
            <CustomBoxIcon>
                <FacebookOutlinedIcon fontSize={'small'}/>
            </CustomBoxIcon>
            <CustomBoxIcon>
                <TelegramIcon fontSize={'small'}/>
            </CustomBoxIcon>
            <CustomBoxIcon>
                <YouTubeIcon fontSize={'small'}/>
            </CustomBoxIcon>
            <CustomBoxIcon>
                <GoogleIcon fontSize={'small'}/>
            </CustomBoxIcon>
            <CustomBoxIcon>
                <InstagramIcon fontSize={'small'}/>
            </CustomBoxIcon>
        </Grid>
    )
}

export default FooterContactUsSocial