import {Stack,Pagination} from "@mui/material";

const PaginationCustom = () => {
    return(
        <Stack mt={4} xs={12} alignItems={'center'}>
            <Pagination variant="outlined" count={5} color={'error'}/>
        </Stack>
    )
}

export default PaginationCustom