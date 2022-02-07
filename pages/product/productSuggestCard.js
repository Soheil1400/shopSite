import {Grid} from "@mui/material";
import Image from "next/image";
import HeadPhone from "../../asset/headphone.png";
import {TypographyPrime,TypographyGray,TypographyMain,PaperCustom} from "../../style/style";

const ProductSuggestCard = ({matches}) => {
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