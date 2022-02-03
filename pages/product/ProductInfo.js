import {Button, Grid, IconButton, Rating, Typography} from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductInfo = ({product}) =>{
    const RedButton = styled(Button)({
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light
        },
        ":disabled": {
            backgroundColor: '#DAE1E7',
            color: Theme.palette.secondary.light
        }
    })
    const PMButton = styled(IconButton)({
        backgroundColor: Theme.palette.primary.light,
        color: Theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '14px',
        padding: '7px',
        textTransform: 'none',
        border: '1px solid #E94560',
        boxShadow: 'none',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light,
        }
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
    return(
        <Grid item xs={12} sm={12} md={6}>
            <TypographyMain mb={2} fontWeight={'bold'} fontSize={'30px'}>
                {product.name}
            </TypographyMain>
            <Grid mb={2}>
                <TypographyGray component={'span'} variant={'body2'}>
                    Brand:
                </TypographyGray>
                <TypographyMain ml={1} component={'span'}>
                    {product.brand}
                </TypographyMain>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} mb={2}>
                <TypographyGray mr={1} component={'span'} variant={'body2'}>
                    Rated:
                </TypographyGray>
                <Rating size={'small'} defaultValue={product.rate} precision={1}/>
                <TypographyMain ml={1} component={'span'}>
                    (50)
                </TypographyMain>
            </Grid>
            <Grid mb={3}>
                <TypographyPrime mb={0.5} component={'h2'} fontSize={'25px'} fontWeight={'bold'}>
                    ${product.price}
                </TypographyPrime>
                <TypographyMain>
                    Stock Available
                </TypographyMain>
            </Grid>
            <Grid>
                <Grid mb={4}>
                    <RedButton variant="contained">Add to Cart</RedButton>
                </Grid>
            </Grid>
            <Grid display={'none'}>
                <Grid display={'flex'} alignItems={'center'} mb={4}>
                    <PMButton variant="contained"><HorizontalRuleIcon/></PMButton>
                    <TypographyMain component={'span'} m={2.5} fontSize={'20px'}>
                        02
                    </TypographyMain>
                    <PMButton variant="contained"><AddIcon/></PMButton>
                </Grid>
            </Grid>
            <Grid mb={2}>
                <TypographyGray component={'span'} variant={'body2'}>
                    Sold By:
                </TypographyGray>
                <TypographyMain ml={1} component={'span'}>
                    Mobile Store
                </TypographyMain>
            </Grid>
        </Grid>
    )
}

export default ProductInfo