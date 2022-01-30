import {styled} from "@mui/material/styles";
import {Box, Button, Grid, IconButton, Rating, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const ProductID = () => {
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    const RedButton = styled(Button)({
        backgroundColor:'#E94560',
        color:'#fff',
        fontWeight:'bold',
        fontSize:'14px',
        textTransform: 'none',
        '&:hover':{
            backgroundColor:'#E94560',
        }
    })
    const PMButton = styled(IconButton)({
        backgroundColor:'#fff',
        color:'#E94560',
        fontWeight:'bold',
        fontSize:'14px',
        padding:'7px',
        textTransform: 'none',
        border:'1px solid #E94560',
        boxShadow:'none',
        borderRadius:'5px',
        '&:hover':{
            backgroundColor:'#E94560',
            color:'#fff',
        }
    })
    return (
        <BoxCustom>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography mb={2} color={'#2B3445'} fontWeight={'bold'} fontSize={'30px'}>
                        Mi Note 11 Pro
                    </Typography>
                    <Grid mb={2}>
                        <Typography component={'span'} variant={'body2'} color={'#7D879C'} fontSize={'14px'}>
                            Brand:
                        </Typography>
                        <Typography ml={1} component={'span'} color={'#2B3445'} fontSize={'14px'}>
                            Ziaomi
                        </Typography>
                    </Grid>
                    <Grid sx={{display:'flex',alignItems:'center'}} mb={2}>
                        <Typography mr={1} component={'span'} variant={'body2'} color={'#7D879C'} fontSize={'14px'}>
                            Rated:
                        </Typography>
                        <Rating size={'small'} defaultValue={4} precision={1} />
                        <Typography ml={1} component={'span'} color={'#2B3445'} fontSize={'14px'}>
                            (50)
                        </Typography>
                    </Grid>
                    <Grid mb={3}>
                        <Typography mb={0.5} component={'h2'} color={'#E94560'} fontSize={'25px'} fontWeight={'bold'}>
                            $1135.00
                        </Typography>
                        <Typography color={'#2B3445'} fontSize={'14px'}>
                            Stock Available
                        </Typography>
                    </Grid>
                    <Grid mb={4}>
                        <RedButton variant="contained">Add to Cart</RedButton>
                    </Grid>
                    <Grid sx={{display:'none',alignItems:'center'}} mb={4}>
                        <PMButton variant="contained"><HorizontalRuleIcon/></PMButton>
                        <Typography component={'span'} m={2.5} fontSize={'20px'}>
                            02
                        </Typography>
                        <PMButton variant="contained"><AddIcon/></PMButton>
                    </Grid>
                    <Grid mb={2}>
                        <Typography component={'span'} variant={'body2'} color={'#7D879C'} fontSize={'14px'}>
                            Sold By:
                        </Typography>
                        <Typography ml={1} component={'span'} color={'#2B3445'} fontSize={'14px'}>
                            Mobile Store
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}
export default ProductID