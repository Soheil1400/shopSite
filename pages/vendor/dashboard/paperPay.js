import {Grid, Paper, Typography} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Theme from "../../../theme/theme";

const PaperPay = () =>{
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
    const PaperCustom = styled(Paper)({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: '0.5rem 0',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px'
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    return(
        <Grid container margin={'auto'}>
            {paper.map(p => (
                <Grid container key={p.title} item xs={12} sm={5.6} md={3.8} lg={3.78} m={1}>
                    <PaperCustom>
                        <Grid container textAlign={'center'}>
                            <Grid item xs={12}>
                                <TypographyGray fontWeight={'bold'}>
                                    {p.title}
                                </TypographyGray>
                            </Grid>
                            <Grid item xs={12} mt={1} mb={1}>
                                <Typography color={'rgb(75, 86, 107)'} variant={'h4'} fontWeight={'bold'}>
                                    {p.number}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TypographyGray>
                                    {p.details}
                                </TypographyGray>
                            </Grid>
                        </Grid>
                    </PaperCustom>
                </Grid>
            ))}
        </Grid>
    )
}

export default PaperPay