import {styled} from "@mui/material/styles";
import {Avatar, Box, Button, Grid, IconButton, Paper, Rating, Tab, TextareaAutosize, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {useState} from "react";
import {TabContext, TabList, TabPanel} from '@mui/lab';
import Theme from "../../theme/theme";
import Image from 'next/image'
import HeadPhone from '../../asset/headphone.png'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductID = () => {
    const [value, setValue] = useState('1');
    const matches = useMediaQuery('(min-width:400px)');
    const [vendors , setVendors] = useState([
        {
          id:1,
          image:'https://bonik-react.vercel.app/assets/images/faces/propic.png',
          title:'Teach Friend'
        },
        {
            id:2,
            image:'https://bonik-react.vercel.app/assets/images/faces/propic(1).png',
            title:'Smart Shop'
        },
        {
            id:3,
            image:'https://bonik-react.vercel.app/assets/images/faces/propic(8).png',
            title:'Gadget 360'
        }
    ])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light
        },
        ":disabled": {
            backgroundColor: '#DAE1E7',
            color: Theme.palette.secondary.light
        }
    })
    const WhiteButton = styled(Button)({
        backgroundColor: Theme.palette.primary.light,
        color: Theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'none',
        border: `1px solid ${Theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: Theme.palette.primary.light,
            color: Theme.palette.primary.main
        },
        ":disabled": {
            backgroundColor: '#DAE1E7',
            color: Theme.palette.secondary.light
        }
    })
    const PMButton = styled(IconButton)({
        backgroundColor: Theme.palette.primary.light,
        color: Theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '14px',
        padding: '7px',
        textTransform: 'none',
        border: '1px solid #E94560',
        boxShadow: 'none',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light,
        }
    })
    const CustomTab = styled(Tab)({
        textTransform: 'none',
        padding: '8px 10px',
        marginRight: '25px',
        fontSize: '16px',
        justifyContent: 'flex-end',
        color: Theme.palette.secondary.light
    })
    const CustomTextAria = styled(TextareaAutosize)({
        borderRadius:'5px',
        width:'100%',
        minHeight:'160px',
        border: '1px solid rgb(218, 225, 231)',
        outline: 'none',
        overflow: 'auto',
        padding:'4px 12px',
        color:Theme.palette.secondary.dark
    })
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    })
    const CustomBox = styled(Box)({
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        borderRadius:'8px',
        padding:'37px 10px',
        border:'1px solid rgb(218, 225, 231)'
    })
    return (
        <BoxCustom>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container px={1} py={4}>
                        <Box sx={{display:'flex',flexDirection:'column',margin:'auto'}}>
                            <Grid item xs={12}>
                                <Image src={HeadPhone} alt={'head phone'}/>
                            </Grid>
                            <Grid item xs={12} my={2}>
                                <Grid container spacing={1} p={3}>
                                    <Grid item xs={4}>
                                        <PaperCustom sx={{width:'70px'}}>
                                            <Image src={HeadPhone} alt={'head phone'}/>
                                        </PaperCustom>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <PaperCustom sx={{width:'70px'}}>
                                            <Image src={HeadPhone} alt={'head phone'}/>
                                        </PaperCustom>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <PaperCustom sx={{width:'70px'}}>
                                            <Image src={HeadPhone} alt={'head phone'}/>
                                        </PaperCustom>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
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
                    <Grid sx={{display: 'flex', alignItems: 'center'}} mb={2}>
                        <Typography mr={1} component={'span'} variant={'body2'} color={'#7D879C'} fontSize={'14px'}>
                            Rated:
                        </Typography>
                        <Rating size={'small'} defaultValue={4} precision={1}/>
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
                    <Grid sx={{display: 'none', alignItems: 'center'}} mb={4}>
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
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{width: '100%', typography: 'body1'}}>
                        <TabContext value={value}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList textColor="primary" indicatorColor="primary" onChange={handleChange}
                                         aria-label="lab API tabs example">
                                    <CustomTab label="Description" value="1"/>
                                    <CustomTab label="Review (3)" value="2"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{padding: '5px 0', margin: '2rem 0'}}>
                                <Typography my={2} color={'#2B3445'} fontSize={'20px'} fontWeight={'bold'}>
                                    Specification:
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    Brand: Beats
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    Model: S450
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    Wireless Bluetooth Headset
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    FM Frequency Response: 87.5 – 108 MHz
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    Feature: FM Radio, Card Supported (Micro SD / TF)
                                </Typography>
                                <Typography color={'#2B3445'} fontSize={'14px'}>
                                    Made in China
                                </Typography>
                            </TabPanel>
                            <TabPanel value="2" sx={{padding: '0', margin: '2rem 0'}}>
                                <Grid container display={'flex'} alignItems={'center'} my={1}>
                                    <Grid item xs={3} sm={1} md={0.8} lg={0.7}>
                                        <Avatar sx={{width: 48, height: 48}} alt="Remy Sharp"
                                                src="https://bonik-react.vercel.app/assets/images/faces/7.png"/>
                                    </Grid>
                                    <Grid item xs={8} sm={3.3} md={2.5} lg={2}>
                                        <Grid>
                                            <Typography fontSize={'16px'} fontWeight={'400'}>
                                                Soheil Saedi
                                            </Typography>
                                        </Grid>
                                        <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Rating readOnly defaultValue={4.7} precision={0.1} size={'small'}/>
                                            <Typography component={'span'}>
                                                4.7
                                            </Typography>
                                            <Typography color={Theme.palette.secondary.light} component={'span'}>
                                                1.0 years ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography my={2}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id
                                            ut mattis. Facilisis vitae gravida egestas ac account.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography fontSize={'25px'} fontWeight={'bold'} color={Theme.palette.secondary.dark}>
                                        Write a Review for this product
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <form>
                                        <Grid my={2}>
                                            <Typography component={'span'} fontSize={'16px'}>
                                                Your Rating
                                            </Typography>
                                            <Typography ml={1} component={'span'} fontSize={'20px'} color={Theme.palette.primary.main}>
                                                *
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Rating name="rating" defaultValue={0} precision={0.1} />
                                        </Grid>
                                        <Grid my={2}>
                                            <Typography component={'span'} fontSize={'16px'}>
                                                Your Review
                                            </Typography>
                                            <Typography ml={1} component={'span'} fontSize={'20px'} color={Theme.palette.primary.main}>
                                                *
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <CustomTextAria name={'review'}/>
                                        </Grid>
                                        <Grid my={2}>
                                            <RedButton disabled sx={{padding:'8px 24px'}}>Submit</RedButton>
                                        </Grid>
                                    </form>
                                </Grid>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
                <Grid item xs={12} my={2}>
                    <Typography mb={3} fontWeight={'bold'} fontSize={'20px'}>
                        Frequently Bought Together
                    </Typography>
                    <Grid container spacing={2} display={'flex'} alignItems={'center'}>
                        <Grid item xs={12} sm={3} md={2.5} lg={1.75} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <PaperCustom sx={{width:matches === true ? '100%' : '80%'}}>
                                <Grid p={2}>
                                    <Image src={HeadPhone} alt={'play-store'}/>
                                </Grid>
                                <Grid>
                                    <Typography color={Theme.palette.secondary.dark}>
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography component={'span'} color={Theme.palette.primary.main}>
                                        $250
                                    </Typography>
                                    <Typography sx={{textDecoration:'line-through'}} component={'span'} mx={0.5} color={Theme.palette.secondary.light}>
                                        $1600
                                    </Typography>
                                </Grid>
                            </PaperCustom>
                        </Grid>
                        <Grid item xs={12} sm={1} md={0.5} lg={0.5} textAlign={'center'}>
                            <AddIcon sx={{color:Theme.palette.secondary.light}}/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2.5} lg={1.75} sx={{display:'flex',justifyContent:'center'}}>
                            <PaperCustom sx={{width:matches === true ? '100%' : '80%'}}>
                                <Grid p={2}>
                                    <Image src={HeadPhone} alt={'play-store'}/>
                                </Grid>
                                <Grid>
                                    <Typography color={Theme.palette.secondary.dark}>
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography component={'span'} color={Theme.palette.primary.main}>
                                        $250
                                    </Typography>
                                    <Typography sx={{textDecoration:'line-through'}} component={'span'} mx={0.5} color={Theme.palette.secondary.light}>
                                        $1600
                                    </Typography>
                                </Grid>
                            </PaperCustom>
                        </Grid>
                        <Grid item xs={12} sm={1} md={0.5} lg={0.5} textAlign={'center'}>
                            <AddIcon sx={{color:Theme.palette.secondary.light}}/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2.5} lg={1.75} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <PaperCustom sx={{width:matches === true ? '100%' : '80%'}}>
                                <Grid p={2.5}>
                                    <Image src={HeadPhone} alt={'play-store'}/>
                                </Grid>
                                <Grid>
                                    <Typography color={Theme.palette.secondary.dark}>
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography component={'span'} color={Theme.palette.primary.main}>
                                        $250
                                    </Typography>
                                    <Typography sx={{textDecoration:'line-through'}} component={'span'} mx={0.5} color={Theme.palette.secondary.light}>
                                        $1600
                                    </Typography>
                                </Grid>
                            </PaperCustom>
                        </Grid>
                        <Grid item xs={12} sm={1} md={0.5} lg={0.5} textAlign={'center'}>
                            <AddIcon sx={{color:Theme.palette.secondary.light}}/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={2.5} lg={1.75} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <PaperCustom sx={{width:matches === true ? '100%' : '80%'}}>
                                <Grid p={2}>
                                    <Image src={HeadPhone} alt={'play-store'}/>
                                </Grid>
                                <Grid>
                                    <Typography color={Theme.palette.secondary.dark}>
                                        Title
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography component={'span'} color={Theme.palette.primary.main}>
                                        $250
                                    </Typography>
                                    <Typography sx={{textDecoration:'line-through'}} component={'span'} mx={0.5} color={Theme.palette.secondary.light}>
                                        $1600
                                    </Typography>
                                </Grid>
                            </PaperCustom>
                        </Grid>
                        <Grid item xs={12} sm={1} md={0.5} lg={0.5} textAlign={'center'}>
                            <DragHandleIcon sx={{color:Theme.palette.secondary.light}}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <CustomBox>
                                <Grid my={2}>
                                    <Typography color={Theme.palette.primary.main} fontSize={'20px'} fontWeight={'bold'}>
                                        $2500
                                    </Typography>
                                    <Typography color={Theme.palette.secondary.light}>
                                        Save $500
                                    </Typography>
                                </Grid>
                                <Grid display={'flex'} flexDirection={'row'}>
                                    <Grid mr={1}>
                                        <RedButton>
                                            Add to Cart
                                        </RedButton>
                                    </Grid>
                                    <Grid>
                                        <WhiteButton>
                                            Add to List
                                        </WhiteButton>
                                    </Grid>
                                </Grid>
                            </CustomBox>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} my={2}>
                    <Typography mb={3} fontWeight={'bold'} fontSize={'20px'}>
                        Also Available at
                    </Typography>
                    <Grid container spacing={2}>
                        {vendors.map(vendor =>(
                            <Grid item xs={12} sm={4} md={3} lg={2} key={vendor.id}>
                                <PaperCustom sx={{width:'100%'}}>
                                    <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                                        <Avatar sx={{width: 48, height: 48}} alt={vendor.title} src={vendor.image} />
                                        <Typography mt={1.5} fontSize={'17px'} fontWeight={'bold'}>
                                            {vendor.title}
                                        </Typography>
                                    </Grid>
                                </PaperCustom>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} my={2}>
                    <Typography mb={3} fontWeight={'bold'} fontSize={'20px'}>
                        Realted Products
                    </Typography>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}
export default ProductID