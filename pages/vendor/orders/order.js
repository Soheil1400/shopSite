import {Grid, Paper, Typography ,Chip} from "@mui/material";
import {styled} from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useEffect, useState} from "react";
import Theme from "../../../theme/theme";

const Order = ({process ,price ,time ,id ,matches})=> {
    const [color , setColor] = useState({BK:'#fff',C:'#fff'})
    const GridCustomItem = styled(Grid)({
        display:'flex',
        alignItems:'center',
        padding: '6px'
    })
    const ChipCustom = styled(Chip)({
        backgroundColor: color.BK,
        color:color.C,
        textAlign:'center',
        borderRadius: '300px',
        fontSize:'12px'
    })
    const PaperCustom = styled(Paper)({
        width: '100%',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 18px',
        borderRadius: '10px',
        margin: '1rem 0',
        boxShadow:' rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor:'pointer'
    })
    const ArrowFIcon = styled(ArrowForwardIcon)({
        color:Theme.palette.secondary.light,
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    useEffect(()=>{
        if (process === 'Pending' || process === 'Processing'){
            return setColor({BK:'#CFD6DF',C:'#000'})
        }if (process === 'Delivered'){
            return setColor({BK:'#E1F8E8',C:'#6BD167'})
        }else{
            return setColor({BK:'#FFE1E6',C:'#EA749C'})
        }
    },[])
    return(
        <PaperCustom>
            <Grid container>
                <GridCustomItem item xs={6} sm={2.8}>
                    <TypographyMain fontSize={'16px'} fontWeight={'400'}>
                        {id}
                    </TypographyMain>
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    <ChipCustom label={process}>

                    </ChipCustom>
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    <TypographyMain fontWeight={'400'}>
                        {time}
                    </TypographyMain>
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    <TypographyMain fontWeight={'400'}>
                        ${price}
                    </TypographyMain>
                </GridCustomItem>
                <Grid borderRadius={'50%'} sx={{'&:hover':{backgroundColor: 'rgb(239,239,239)'}}} alignItems={'center'} justifyContent={'center'} display={matches === true ? 'flex' : 'none'} item sm={0.63}>
                    <ArrowFIcon />
                </Grid>
            </Grid>
        </PaperCustom>
    )
}

export default Order