import {Grid, Typography} from "@mui/material";
import {PaperCustom} from "../../../style/style";
import {ProductData} from "../../../data/Productdata";
import Theme from "../../../theme/theme";
import Link from "next/link";

const SearchResult = ({search ,setSearch}) => {
    return(
        <Grid position={'absolute'} width={'100%'} top={'50px'} display={search.search === '' || ProductData.filter(p => p.name.toLowerCase().includes(search.search.toLowerCase())).length === 0 ? 'none' : 'block'}>
            <PaperCustom sx={{padding: '18px 0'}}>
                {search.search === '' ? '' :ProductData.filter(p => p.name.toLowerCase().includes(search.search.toLowerCase())).map(p => (
                    <Grid key={p.id} display={'flex'} alignItems={'center'} sx={{minHeight:'40px',cursor:'pointer','&:hover':{color:Theme.palette.primary.main,backgroundColor:'#F6F9FC'}}}>
                        <Link href={`/product/${p.id}`}>
                            <Typography pl={3} onClick={()=>setSearch({search: ''})}>
                                {p.name}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </PaperCustom>
        </Grid>
    )
}

export default SearchResult