import {Grid, Paper, Typography} from "@mui/material";
import Image from "next/image";
import HeadPhone from "../../asset/headphone.png";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductSuggestCard = ({matches}) => {
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return (

        <Grid item xs={12} sm={3} md={2.5} lg={1.75} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <PaperCustom sx={{width: matches === true ? '100%' : '80%'}}>
                <Grid p={2}>
                    <Image src={HeadPhone} alt={'play-store'}/>
                </Grid>
                <Grid>
                    <TypographyMain>
                        Title
                    </TypographyMain>
                </Grid>
                <Grid>
                    <TypographyPrime component={'span'}>
                        $250
                    </TypographyPrime>
                    <TypographyGray sx={{textDecoration: 'line-through'}} component={'span'} mx={0.5}>
                        $1600
                    </TypographyGray>
                </Grid>
            </PaperCustom>
        </Grid>
    )
}

export default ProductSuggestCard