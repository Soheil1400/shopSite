import {Avatar, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import SearchList from "./searchList";
import Theme from "../../../theme/theme";
import MinimizeIcon from "@mui/icons-material/Minimize";
import SearchInput from "./searchInput";
import {styled} from "@mui/material/styles";

const SearchFilter = ({check1, check2, check3}) => {
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
    return (
        <Grid item lg={3}>
            <PaperCustom>
                <SearchList/>
                <Divider sx={{margin: '10px 0'}} variant="middle"/>
                <Grid>
                    <Grid my={1.5}>
                        <TypographyMain pl={2}>
                            Price Range
                        </TypographyMain>
                    </Grid>
                    <Grid px={2} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Grid>
                            <TextField type={'number'} placeholder={'0'}/>
                        </Grid>
                        <Grid pb={1} fontSize={'1px'} color={Theme.palette.secondary.light} mx={1}>
                            <MinimizeIcon fontSize={'small'}/>
                        </Grid>
                        <Grid>
                            <TextField type={'number'} placeholder={'250'}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{margin: '10px 0'}} variant="middle"/>
                <Grid>
                    <Grid my={3}>
                        <TypographyMain pl={2}>
                            Brands
                        </TypographyMain>
                    </Grid>
                    <Grid>
                        <SearchInput option={check1}/>
                    </Grid>
                </Grid>
                <Divider sx={{margin: '10px 0'}} variant="middle"/>
                <Grid my={4}>
                    <Grid>
                        <SearchInput option={check2}/>
                    </Grid>
                </Grid>
                <Divider sx={{margin: '10px 0'}} variant="middle"/>
                <Grid>
                    <Grid my={3}>
                        <TypographyMain pl={2}>
                            Rating
                        </TypographyMain>
                    </Grid>
                    <Grid>
                        <SearchInput option={check3}/>
                    </Grid>
                </Grid>
                <Divider sx={{margin: '10px 0'}} variant="middle"/>
                <Grid>
                    <Grid my={2}>
                        <TypographyMain pl={2}>
                            Colors
                        </TypographyMain>
                    </Grid>
                    <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#000000'}}> </Avatar>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#FF7A7A'}}> </Avatar>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#FFC672'}}> </Avatar>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#84FFB5'}}> </Avatar>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#70F6FF'}}> </Avatar>
                        <Avatar sx={{width: '24px', height: '24px', backgroundColor: '#6B7AFF'}}> </Avatar>
                    </Grid>
                </Grid>
            </PaperCustom>
        </Grid>
    )
}

export default SearchFilter