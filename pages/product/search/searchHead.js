import {Grid, MenuItem, Paper, TextField, Typography} from "@mui/material";
import Theme from "../../../theme/theme";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {styled} from "@mui/material/styles";

const SearchHead = () => {
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
        <Grid item lg={12}>
            <PaperCustom>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Grid>
                        <TypographyMain fontSize={'16px'}>
                            Searching for “ mobile phone ”
                        </TypographyMain>
                        <TypographyGray>
                            48 results found
                        </TypographyGray>
                    </Grid>
                    <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Grid>
                            <TypographyGray component={'span'} mr={2}>
                                Short by:
                            </TypographyGray>
                        </Grid>
                        <Grid mx={2}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                value={'Relevance'}
                            >
                                {options.map((option) => (
                                    <MenuItem key={`${option}`} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid>
                            <TypographyGray component={'span'} mr={2}>
                                View:
                            </TypographyGray>
                        </Grid>
                        <Grid mx={2} color={Theme.palette.primary.main}>
                            <GridViewIcon/>
                        </Grid>
                        <Grid>
                            <MenuRoundedIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </PaperCustom>
        </Grid>
    )
}

export default SearchHead