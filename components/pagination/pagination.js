import {Grid,Pagination} from "@mui/material";

const PaginationCustom = () => {
    return(
        <Grid item mt={4} xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Pagination variant="outlined" count={5} color={'error'}/>
        </Grid>
    )
}

export default PaginationCustom