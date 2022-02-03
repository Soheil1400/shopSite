import {Grid, Typography} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Theme from "../../../theme/theme";
import {styled} from "@mui/material/styles";

const Title = () =>{
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light,
        cursor:'pointer'
    })
    return(
        <Grid container>
            <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'space-between'} my={2}>
                <Grid color={Theme.palette.primary.main} display={'flex'} alignItems={'center'} flexDirection={'row'}>
                    <DashboardIcon/>
                    <TypographyMain fontSize={'25px'} fontWeight={'bold'} ml={1}>
                        Categories
                    </TypographyMain>
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} color={Theme.palette.secondary.light}>
                    <TypographyGray>
                        View all
                    </TypographyGray>
                    <ArrowRightIcon cursor={'pointer'}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Title