import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {list} from "../../data/footerList";

const FooterAboutCustomer = () =>{
    const CustomTypography = styled(Typography)({
        color: '#A4B4BE',
        cursor: 'pointer',
        '&:hover': {
            color: "#fff",
        }
    })
    return(
        <>
            {list.map(t => (
                <Grid item xs={12} sm={6} lg={2.7} mb={2} key={t.id}>
                    <Grid mb={2}>
                        <Typography fontWeight={'bold'} variant={'h5'}>
                            {t.title}
                        </Typography>
                    </Grid>
                    {t.items.map(i => (
                        <CustomTypography p={0.5} key={`${i.id}`}>
                            {i.item}
                        </CustomTypography>
                    ))}
                </Grid>
            ))}
        </>
    )
}

export default FooterAboutCustomer