import {Grid,Typography} from "@mui/material";
import {paperPay} from "../../../data/paperPay";
import {TypographyGray,PaperCustom} from "../../../style/style";

const PaperPay = () =>{
    return(
        <Grid container margin={'auto'}>
            {paperPay.map(p => (
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