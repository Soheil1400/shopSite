
import Link from 'next/link';
import Image from 'next/image';
import BonikLogo from '../assets/BonikLogo.png';
import GooglePlayImage from '../assets/GooglePlay.png';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppStoreImage from '../assets/AppStore.png';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {  Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    boxShadow:'none',
    margin:'30px',
    backgroundColor:'#0F3460',
  }));
  const DownloadBox=styled('download_box')(({theme})=>({
    [theme.breakpoints.down('md')]: {
         //for mobile
         display:'flex',
         flexDirection:'column',
       },
       [theme.breakpoints.between('sm', 'md')]: {
         //for
         display:'flex',
         flexDirection:'row'
      },
       [theme.breakpoints.up('md')]: {
         //for laptop
         display:'flex',
         flexDirection:'row'
       },
       [theme.breakpoints.up('lg')]: {
         //for laptop and so on
         display:'flex',
         flexDirection:'row'
       },
}));
const DivSocialMedia=styled('div_social_media')(({theme})=>({
        display:'flex',
        marginBottom:'10%'
}));
const StyleSocialMedia=styled('instagram_icon','google_icon','youTube_icon','twitter_icon','facebook_icon')(({theme})=>({
       width:'32px',
       height:'32px',
       borderRadius:'50%',
       cursor: 'pointer',
       backgroundColor: '#0c2a4d',
}));
const Footer = () => {
    return ( 
        
          <Grid container  style={{backgroundColor:'#0F3460',margin:'none',padding:'none'}} >
          <Grid item md={1} ></Grid>
          <Grid item xs={7} sm={6} md={4}  >
            <Item>
            <Image src={BonikLogo} alt={'bonik logo'} width={100} height={100}/>
            <Typography  mb={'10%'} lineHeight={'20px'} color={'#AEB4BE'}  >
             Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
               Auctor libero id et, in gravida.
                Sit diam duis mauris nulla
                 cursus.Erat et lectus vel ut
                  sollicitudin elit at amet.
             </Typography>
            <DownloadBox className='download_box' style={{gap:'20px'}}>
             <Image
            src={GooglePlayImage}
            alt={'download from google play'}
            width={150}
            height={50}
            />
            <Image
            style={{paddingTop:'100px'}}
            src={AppStoreImage}
            alt={'download from App store'}
            width={130}
            height={50}
            />
             </DownloadBox>
            </Item>
          </Grid>
          <Grid item xs={5} sm={6} md={2} >
            <Item>
            <Typography variant="h5" color={'white'} mb={'10%'} ml={'5%'} >About Us</Typography>
             <Typography ml={'5%'} mb={'2%'} color={'#AEB4BE'} >
            Careers
            </Typography>
            <Typography mb={'2%'} ml={'5%'} color={'#AEB4BE'} >Our Stores</Typography>
            <Typography mb={'2%'} ml={'5%'} color={'#AEB4BE'}>  Our Cares</Typography> 
            <Typography mb={'2%'} ml={'5%'} color={'#AEB4BE'}>Terms & Condition</Typography> 
            <Typography mb={'2%'} ml={'5%'} color={'#AEB4BE'}>Privacy Policy</Typography>  
            </Item>
          </Grid>
          <Grid item xs={6} sm={6} md={2} >
            <Item>
            <Typography variant="h5" style={{color:'white',marginBottom:'10%'}}>Customer Care</Typography>
            <Typography style={{marginBottom:'2%'}} color={'#AEB4BE'}>Help Center</Typography>
            <Typography style={{marginBottom:'2%'}} color={'#AEB4BE'}>How to Buy</Typography>
            <Typography style={{marginBottom:'2%'}}color={'#AEB4BE'}>Track your Order</Typography>
            <Typography style={{marginBottom:'2%'}}color={'#AEB4BE'}>Corporate & Bulk Purchasing</Typography>
            <Typography style={{marginBottom:'5%'}} color={'#AEB4BE'}>Returns & Refunds</Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={6} md={3} >
            <Item>
            <Typography variant="h5" style={{color:'white',marginBottom:'10%'}}>Contact Us</Typography>
            <Typography style={{marginBottom:'2%'}} color={'#AEB4BE'}>70 Washington Square South, New York, NY 10012, United States</Typography>
            <Typography style={{marginBottom:'2%'}} color={'#AEB4BE'}>Email: uilib.help@gmail.com</Typography>
            <Typography style={{marginBottom:'10%'}} color={'#AEB4BE'}>Phone: +1 1123 456 780</Typography>
            <DivSocialMedia className={'div_social_media'}>
                    <StyleSocialMedia className={'facebook_icon'}><FacebookIcon style={{color:'white',verticalAlign:'middle',width:'20px',marginLeft:'5px',marginTop:'3px'}}/></StyleSocialMedia>
                    <StyleSocialMedia className={'twitter_icon'}><TwitterIcon style={{color:'white',verticalAlign:'middle',width:'20px',marginLeft:'5px',marginTop:'3px'}}/></StyleSocialMedia>
                    <StyleSocialMedia className={'youTube_icon'}><YouTubeIcon style={{color:'white',verticalAlign:'middle',width:'20px',marginLeft:'5px',marginTop:'3px'}}/></StyleSocialMedia>
                    <StyleSocialMedia className={'google_icon'}><GoogleIcon style={{color:'white',verticalAlign:'middle',width:'20px',marginLeft:'5px',marginTop:'3px'}}/></StyleSocialMedia>
                    <StyleSocialMedia className={'instagram_icon'}><InstagramIcon style={{color:'white',verticalAlign:'middle',width:'20px',marginLeft:'5px',marginTop:'3px'}}/></StyleSocialMedia>
            </DivSocialMedia>
            </Item>
          </Grid>
         
      </Grid>
      
     );
}
 
export default Footer;