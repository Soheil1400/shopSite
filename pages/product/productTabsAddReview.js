import {Button, Grid, Rating, TextareaAutosize, Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {styled} from "@mui/material/styles";

const ProductTabsAddReview = () =>{
    const CustomTextAria = styled(TextareaAutosize)({
        borderRadius: '5px',
        width: '100%',
        minHeight: '160px',
        border: '1px solid rgb(218, 225, 231)',
        outline: 'none',
        overflow: 'auto',
        padding: '4px 12px',
        color: Theme.palette.secondary.dark
    })
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
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return(
        <>
            <Grid>
                <TypographyMain fontSize={'25px'} fontWeight={'bold'}>
                    Write a Review for this product
                </TypographyMain>
            </Grid>
            <Grid>
                <form>
                    <Grid my={2}>
                        <TypographyMain component={'span'} fontSize={'16px'}>
                            Your Rating
                        </TypographyMain>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <Rating name="rating" defaultValue={0} precision={1}/>
                    </Grid>
                    <Grid my={2}>
                        <TypographyMain component={'span'} fontSize={'16px'}>
                            Your Review
                        </TypographyMain>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <CustomTextAria name={'review'}/>
                    </Grid>
                    <Grid my={2}>
                        <RedButton disabled sx={{padding: '8px 24px'}}>Submit</RedButton>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default ProductTabsAddReview