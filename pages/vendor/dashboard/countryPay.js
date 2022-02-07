import {Avatar,Box,Grid,Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PaperCustom,TypographyMain} from "../../../style/style";
import {countryPay} from "../../../data/countryPay";

const CountryPay = () => {
    const AvatarCustom = styled(Avatar)({
        width: '28px',
        height: '26px',
    })
    return (
        <Grid item xs={12} lg={4} p={1}>
            <PaperCustom>
                <Typography variant={'h6'} m={1}>
                    Top Countries
                </Typography>
                {countryPay.map(c => (
                    <Box key={c.name} p={1} display={'flex'} flexDirection={'row'} alignItems={'center'}
                         justifyContent={'space-between'}>
                        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <AvatarCustom alt="US" src={c.image}/>
                            <TypographyMain ml={1}>
                                {c.name}
                            </TypographyMain>
                        </Grid>
                        <Grid>
                            <Typography>
                                ${c.price}
                            </Typography>
                        </Grid>
                    </Box>

                ))}
            </PaperCustom>
        </Grid>
    )
}

export default CountryPay