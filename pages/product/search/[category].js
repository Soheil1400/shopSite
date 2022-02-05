import {Box, Divider, Grid, IconButton, InputAdornment, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../../theme/theme";
import {Autocomplete} from "@mui/lab";
import {ProductData} from "../../../data/Productdata";
import ProductCard from "../../../components/productCard/productCard";
import GridViewIcon from '@mui/icons-material/GridView';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {useState} from "react";
import {AccountCircle} from "@mui/icons-material";

function DirectionsIcon() {
    return null;
}

const Category = () => {
    const options = ['Relevance', 'Date', 'Price Low to High', 'Price High to Low'];
    const [state, setState] = useState('none')
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
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
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return (
        <BoxCustom>
            <Grid container spacing={3}>
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
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment sx={{position:'relative'}} position="start">
                                                    <AccountCircle sx={{position:'absolote'}} />
                                                </InputAdornment>
                                            ),
                                        }}
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
                <Grid item lg={3}>
                    <PaperCustom>

                    </PaperCustom>
                </Grid>
                <Grid item lg={9}>
                    <Grid container spacing={3}>
                        {ProductData.slice(0, 9).map(product => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                                <ProductCard product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}

export default Category