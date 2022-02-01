import {Avatar, Grid, Paper, Typography} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductVendor = () =>{
    const [vendors, setVendors] = useState([
        {
            id: 1,
            image: 'https://bonik-react.vercel.app/assets/images/faces/propic.png',
            title: 'Teach Friend'
        },
        {
            id: 2,
            image: 'https://bonik-react.vercel.app/assets/images/faces/propic(1).png',
            title: 'Smart Shop'
        },
        {
            id: 3,
            image: 'https://bonik-react.vercel.app/assets/images/faces/propic(8).png',
            title: 'Gadget 360'
        }
    ])
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    return(
        <Grid item xs={12} my={2}>
            <TypographyMain mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Also Available at
            </TypographyMain>
            <Grid container spacing={2}>
                {vendors.map(vendor => (
                    <Grid item xs={12} sm={4} md={3} lg={2} key={vendor.id}>
                        <PaperCustom sx={{width: '100%'}}>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                                <Avatar sx={{width: 48, height: 48}} alt={vendor.title} src={vendor.image}/>
                                <TypographyMain mt={1.5} fontSize={'17px'} fontWeight={'bold'}>
                                    {vendor.title}
                                </TypographyMain>
                            </Grid>
                        </PaperCustom>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ProductVendor