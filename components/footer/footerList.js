import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const FooterList = ({list}) => {
    const CustomTypography = styled(Typography)({
        color: '#A4B4BE',
        cursor: 'pointer',
        '&:hover': {
            color: Theme.palette.primary.light,
        }
    })
    return(
        <>
            {list.map(t => (
                <Grid key={t.id} display={'flex'} flexDirection={'column'}>
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

export default FooterList