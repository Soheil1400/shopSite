import {Avatar,Grid} from "@mui/material";
import {TypographyMain,PaperCustom} from "../../style/style";
import {vendor} from "../../data/vendor";

const ProductVendor = () =>{
    return(
        <Grid item xs={12} my={2}>
            <TypographyMain mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Also Available at
            </TypographyMain>
            <Grid container spacing={2}>
                {vendor.map(vendor => (
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