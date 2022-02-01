import {Avatar, Box, Grid, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Theme from "../../../theme/theme";

const CountryPay = () => {
    const [country, setCountry] = useState([
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
            name: 'United States',
            price: '130'
        },
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
            name: 'United Kingdom',
            price: '110'
        },
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg',
            name: 'Canada',
            price: '100'
        },
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg',
            name: 'India',
            price: '80'
        },
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JO.svg',
            name: 'Jordan',
            price: '80'
        },
        {
            image: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
            name: 'Brazil',
            price: '70'
        },
    ])
    const PaperCustom = styled(Paper)({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: '0.5rem 0',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px'
    })
    const AvatarCustom = styled(Avatar)({
        width: '28px',
        height: '26px',
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    return(
        <PaperCustom>
            <Typography variant={'h6'} m={1}>
                Top Countries
            </Typography>
            {country.map(c => (
                <Box key={c.name} p={1} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
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
    )
}

export default CountryPay