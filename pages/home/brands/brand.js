import {Divider, Grid, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../../theme/theme";
import {useState} from "react";
import VBrand from '../../../asset/brands/vBrand.png'
import UBrand from '../../../asset/brands/uBrand.png'
import Image from 'next/image'

const Brand = ({display}) => {
    const [select, setSelect] = useState('brands')
    const [title, setTitle] = useState([
        {
            id: 1,
            title: 'Mapple',
            image: VBrand,
            type:'brands'
        },
        {
            id: 2,
            title: 'Kell',
            image: UBrand,
            type:'brands'
        },
        {
            id: 3,
            title: 'Siaomi',
            image: VBrand,
            type:'brands'
        },
        {
            id: 4,
            title: 'Kasus',
            image: UBrand,
            type:'brands'
        },
        {
            id: 5,
            title: 'Sunny',
            image: VBrand,
            type:'brands'
        },
        {
            id: 6,
            title: 'Aver',
            image: UBrand,
            type:'brands'
        },
        {
            id:7,
            title:'Hexman Killer',
            image:VBrand,
            type:'shops'
        },
        {
            id:8,
            title:'Onoti',
            image:UBrand,
            type:'shops'
        },
        {
            id:9,
            title:'Shahil',
            image:VBrand,
            type:'shops'
        },
        {
            id:10,
            title:'Steelcase',
            image:UBrand,
            type:'shops'
        },
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
    const GrayGrid = styled(Grid)({
        backgroundColor: '#F6F9FC',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: 'rgb(0 0 0 / 5%) 0px 6px 26px'
        }
    })
    const BrandTypography = styled(Typography)({
        fontSize: '20px',
        cursor: 'pointer'
    })
    return (
        <PaperCustom>
            <Grid display={display} alignItems={'center'} flexDirection={'row'}>
                <BrandTypography onClick={() => setSelect('brands')}
                                 sx={{color: select === 'brands' ? Theme.palette.secondary.main : Theme.palette.secondary.light}}>
                    Brands
                </BrandTypography>
                <Divider sx={{height: 28, m: 2}} orientation="vertical"/>
                <BrandTypography onClick={() => setSelect('shops')}
                                 sx={{color: select === 'shops' ? Theme.palette.secondary.main : Theme.palette.secondary.light}}>
                    Shops
                </BrandTypography>
            </Grid>
            {title.filter(t => t.type === select).map(i => (
                <GrayGrid my={1.5} p={2} key={i.id}>
                    <Image src={i.image} alt={i.title}/>
                    <TypographyMain ml={2} fontSize={'16px'}>
                        {i.title}
                    </TypographyMain>
                </GrayGrid>
            ))}
            <GrayGrid mt={4} p={2} justifyContent={'center'}>
                <TypographyMain fontSize={'16px'}>
                    {select === 'brands' ? 'View All Brands' : 'View All Shops'}
                </TypographyMain>
            </GrayGrid>
        </PaperCustom>
    )
}

export default Brand