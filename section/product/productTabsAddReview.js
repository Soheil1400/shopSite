import {Grid, Rating, TextField, Typography} from "@mui/material";
import {TypographyMain,TypographyPrime,RedButton} from "../../style/style";
import {useState} from "react";

const ProductTabsAddReview = ({setReviews,reviews}) =>{
    const [form,setForm] = useState({id:Math.random()*1000000,name:'ali',rate:0,review:'',time:'1 years ago'})
    const handleSubmit = e=>{
        e.preventDefault()
        setReviews([...reviews, {...form,name:form.name,rate:Number(form.rate)}])
        setForm({id:1,name:'ali',rate:0,review:'',time:'1 years ago'})
    }
    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <>
            <Grid>
                <TypographyMain fontSize={'25px'} fontWeight={'bold'}>
                    Write a Review for this product
                </TypographyMain>
            </Grid>
            <Grid>
                <form onSubmit={handleSubmit}>
                    <Grid my={1}>
                        <Typography color={'#4B566B'} component={'span'} fontSize={'16px'}>
                            Your Rating
                        </Typography>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <Rating name="rate" defaultValue={0} value={Number(form.rate)} onChange={handleChange} precision={1}/>
                    </Grid>
                    <Grid my={1}>
                        <Typography color={'#4B566B'} component={'span'} fontSize={'16px'}>
                            Your Review
                        </Typography>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <TextField rows={7} fullWidth id="outlined-multiline-static" multiline name={'review'} value={form.review} onChange={handleChange}/>
                    </Grid>
                    <Grid my={2}>
                        <RedButton type={'submit'} disabled={form.review === ''} sx={{padding: '8px 24px'}}>Submit</RedButton>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default ProductTabsAddReview