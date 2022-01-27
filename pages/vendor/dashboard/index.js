import {Box, Grid, Paper, Typography, Avatar} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useState} from "react";
import Chart from './chart'

const Dashboard = () => {
    const matchesMenu = useMediaQuery('(min-width:1000px)');
    const [paper, setPaper] = useState([
        {
            title: 'Earnings (before taxes)',
            number: '$30450.00',
            details: 'after associated vendor fees'
        },
        {
            title: 'Your balance',
            number: '$4000.00',
            details: 'Will be processed on Feb 15, 2021'
        },
        {
            title: 'Pending Orders',
            number: '$08',
            details: '7/3/2020 - 8/1/2020'
        },
    ])
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
    const GridCustomHead = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1rem 0'
    })
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    const PaperCustom = styled(Paper)({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 18px',
        borderRadius: '10px',
        margin: '0.5rem 0',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px'
    })
    const AvatarCustom = styled(Avatar)({
        width: '30px',
        height: '28px',
    })
    return (
        <BoxCustom>
            <GridCustomHead container>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <ShoppingBagIcon fontSize={'medium'} sx={{color: '#e94560', marginRight: '0.5rem'}}/>
                    <Typography sx={{fontWeight: 'bolder'}} variant={"h5"}>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid display={matchesMenu === true ? 'none' : 'flex'}>
                    <MenuIcon/>
                </Grid>
            </GridCustomHead>
            <Grid container sx={{margin: 'auto'}}>
                {paper.map(p => (
                    <Grid container key={p.title} item xs={12} sm={5.6} md={3.8} m={1}>
                        <PaperCustom>
                            <Grid container textAlign={'center'}>
                                <Grid item xs={12}>
                                    <Typography color={'rgb(125, 135, 156)'} fontWeight={'bold'}>
                                        {p.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} mt={1} mb={1}>
                                    <Typography color={'rgb(75, 86, 107)'} variant={'h4'} fontWeight={'bold'}>
                                        {p.number}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography color={'rgb(125, 135, 156)'}>
                                        {p.details}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </PaperCustom>
                    </Grid>
                ))}
            </Grid>
            <Grid container item xs={12}>
                <PaperCustom>
                    Sales
                    <Chart/>
                </PaperCustom>
            </Grid>
            <Grid container item xs={12}>
                <PaperCustom>
                    <Typography variant={'h6'} m={1}>
                        Top Countries
                    </Typography>
                    {country.map(c => (
                        <Box key={c.name} p={1} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <AvatarCustom alt="US" src={c.image}/>
                                <Typography ml={1}>
                                    {c.name}
                                </Typography>
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
        </BoxCustom>
    )
}

export default Dashboard