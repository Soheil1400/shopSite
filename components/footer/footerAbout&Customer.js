import {Grid, Typography} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/material/styles";

const FooterAboutCustomer = () =>{
    const CustomTypography = styled(Typography)({
        color: '#A4B4BE',
        cursor: 'pointer',
        '&:hover': {
            color: "#fff",
        }
    })
    const [list, setList] = useState([
        {
            id: 1,
            title: 'About Us',
            items: [
                {id:1,item: 'Careers'},
                {id:2,item: 'Our Stores'},
                {id:3,item: 'Our Cares'},
                {id:4,item: 'Our Cares'},
                {id:5,item: 'Privacy Policy'}
            ]
        },
        {
            id: 2,
            title: 'Customer Care',
            items: [
                {id:1,item: 'Help Center'},
                {id:2,item: 'How to Buy'},
                {id:3,item: 'Track Your Order'},
                {id:4,item: 'Corporate & Bulk Purchasing'},
                {id:5,item: 'Returns & Refunds'}
            ]
        }
    ])
    return(
        <>
            {list.map(t => (
                <Grid item xs={12} sm={6} lg={2.7} mb={2} key={t.id}>
                    <Grid mb={2}>
                        <Typography fontWeight={'bold'} variant={'h5'}>
                            {t.title}
                        </Typography>
                    </Grid>
                    {t.items.map(i => (
                        <CustomTypography p={0.5} key={`${i.id}`}>
                            {i.item}
                        </CustomTypography>
                    ))}
                </Grid>
            ))}
        </>
    )
}

export default FooterAboutCustomer