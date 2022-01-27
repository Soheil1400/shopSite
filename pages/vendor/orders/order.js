import {Grid, Paper, Typography ,Chip} from "@mui/material";
import {styled} from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useEffect, useState} from "react";

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
        margin: '0.5rem 0',
        boxShadow:' rgb(3 0 71 / 9%) 0px 1px 3px'
    })
    const ArrowFIcon = styled(ArrowForwardIcon)({
        color:'#7D879C'
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
                    <Typography fontWeight={'300'}>
                        {id}
                    </Typography>
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    <ChipCustom label={process}>

                    </ChipCustom>
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    {time}
                </GridCustomItem>
                <GridCustomItem item xs={6} sm={2.8}>
                    ${price}
                </GridCustomItem>
                <Grid display={matches === true ? 'flex' : 'none'} item sm={0.8} p={1}>
                    <ArrowFIcon />
                </Grid>
            </Grid>
        </PaperCustom>
    )
}

export default Order