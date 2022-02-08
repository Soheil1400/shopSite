import {Grid,Typography} from "@mui/material";
import {paperPay} from "../../../data/paperPay";
import {TypographyGray,PaperCustom} from "../../../style/style";

const PaperPay = () =>{
    return(
        <>
            {paperPay.map(p => (
                <Grid key={p.title} item xs={12} sm={6} md={4} lg={4}>
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
        </>
    )
}

export default PaperPay