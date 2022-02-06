import {Grid, MenuItem, Paper, TextField, Typography} from "@mui/material";
import Theme from "../../../theme/theme";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {styled} from "@mui/material/styles";
import {ProductData} from "../../../data/Productdata";

const SearchHead = ({matches,matchesHead,setMenu,category}) => {
    const options = ['Relevance', 'Date', 'Price Low to High', 'Price High to Low'];
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor: 'pointer',
    })
    return(
        <Grid item xs={12}>
            <PaperCustom>
                <Grid display={'flex'} alignItems={matches === true ? 'center' : ''} justifyContent={'space-between'} flexDirection={matchesHead === true ? 'row' : 'column'}>
                    <Grid>
                        <TypographyMain fontSize={'16px'}>
                            Searching for “ mobile phone ”
                        </TypographyMain>
                        <TypographyGray>
                            {ProductData.filter(p => p.category === category).length} results found
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
                                <TextField id="outlined-select-currency" select value={'Relevance'}>
                                    {options.map((option) => (
                                        <MenuItem key={`${option}`} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Grid>
                                <TypographyGray component={'span'} mr={2}>
                                    View:
                                </TypographyGray>
                            </Grid>
                            <Grid ml={2} color={Theme.palette.primary.main}>
                                <GridViewIcon/>
                            </Grid>
                            <Grid mx={2}>
                                <MenuRoundedIcon/>
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