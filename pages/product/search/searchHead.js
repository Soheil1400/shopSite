import {Grid,MenuItem,TextField} from "@mui/material";
import Theme from "../../../theme/theme";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {PaperCustom,TypographyGray,TypographyMain} from "../../../style/style";

const SearchHead = ({matches,matchesHead,setMenu,categoryData,setFilter,filter,card,setCard}) => {
    const options = ['Relevance', 'Date', 'Price Low to High', 'Price High to Low'];
    const handleChange = (e) => {
        if (e.target.value === 'Price Low to High'){
            setFilter({...filter, price: 'Price Low to High'})
        }if (e.target.value === 'Price High to Low'){
            setFilter({...filter, price: 'Price High to Low'})
        }if (e.target.value === 'Relevance' || e.target.value === 'Date'){
            setFilter({...filter, price:e.target.value === 'Relevance' ? 'Relevance' : 'Date'})
        }
    }
    return(
        <Grid item xs={12}>
            <PaperCustom>
                <Grid display={'flex'} alignItems={matches === true ? 'center' : ''} justifyContent={'space-between'} flexDirection={matchesHead === true ? 'row' : 'column'}>
                    <Grid>
                        <TypographyMain fontSize={'16px'}>
                            Searching for “ mobile phone ”
                        </TypographyMain>
                        <TypographyGray>
                            {categoryData.length} results found
                        </TypographyGray>
                    </Grid>
                    <Grid display={'flex'} flexDirection={matchesHead === true ? 'row' : 'column'} alignItems={matches === true ? 'center' : ''}>
                        <Grid  display={'flex'} flexDirection={'row'} alignItems={'center'} my={matchesHead === true ? 0 : 1}>
                            <Grid>
                                <TypographyGray component={'span'} mr={2}>
                                    Short by:
                                </TypographyGray>
                            </Grid>
                            <Grid mx={2}>
                                <form>
                                    <TextField sx={{width:'160px'}} name={'price'} onChange={handleChange} id="outlined-select-currency" select value={filter.price}>
                                        {options.map((option) => (
                                            <MenuItem key={`${option}`} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </form>
                            </Grid>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Grid>
                                <TypographyGray component={'span'} mr={2}>
                                    View:
                                </TypographyGray>
                            </Grid>
                            <Grid p={1.5} borderRadius={'50%'} sx={{cursor:'pointer','&:hover':{backgroundColor: 'rgb(239,239,239)'}}} ml={2} color={card === 'vertical' ? Theme.palette.primary.main : Theme.palette.secondary.main} display={'flex'} alignItems={'centre'}>
                                <GridViewIcon onClick={()=>setCard('vertical')}/>
                            </Grid>
                            <Grid p={1.5} borderRadius={'50%'} sx={{cursor:'pointer','&:hover':{backgroundColor: 'rgb(239,239,239)'}}} mx={2} color={card === 'horizontal' ? Theme.palette.primary.main : Theme.palette.secondary.main} display={'flex'} alignItems={'centre'}>
                                <MenuRoundedIcon onClick={()=>setCard('horizontal')}/>
                            </Grid>
                            <Grid display={matches === true ? 'none' : 'flex'}>
                                <FilterAltIcon onClick={()=>setMenu(true)}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PaperCustom>
        </Grid>
    )
}

export default SearchHead