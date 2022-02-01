import {Grid,Typography} from "@mui/material";
import Theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ProductSuggestCard from "./productSuggestCard";
import ProductSuggestPay from "./productSuggestPay";

const ProductSuggest = ({matches}) =>{
    return(
        <Grid item xs={12} my={2}>
            <Typography mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Frequently Bought Together
            </Typography>
            <Grid container spacing={2} display={'flex'} alignItems={'center'}>
                <ProductSuggestCard matches={matches}/>
                <Grid item xs={12} sm={1} md={0.5} textAlign={'center'}>
                    <AddIcon sx={{color: Theme.palette.secondary.light}}/>
                </Grid>
                <ProductSuggestCard matches={matches}/>
                <Grid item xs={12} sm={1} md={0.5} textAlign={'center'}>
                    <AddIcon sx={{color: Theme.palette.secondary.light}}/>
                </Grid>
                <ProductSuggestCard matches={matches}/>
                <Grid item xs={12} sm={1} md={0.5} textAlign={'center'}>
                    <AddIcon sx={{color: Theme.palette.secondary.light}}/>
                </Grid>
                <ProductSuggestCard matches={matches}/>
                <Grid item xs={12} sm={1} md={0.5} textAlign={'center'}>
                    <DragHandleIcon sx={{color: Theme.palette.secondary.light}}/>
                </Grid>
                <ProductSuggestPay/>
            </Grid>
        </Grid>
    )
}

export default ProductSuggest