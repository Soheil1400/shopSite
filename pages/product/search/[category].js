import {Box, Grid, SwipeableDrawer} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useEffect, useState} from "react";
import {Rating} from "@mui/lab";
import SearchHead from "./searchHead";
import SearchFilter from "./searchFilter";
import SearchCards from "./searchCards";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useRouter} from "next/router";

const Category = () => {
    const router = useRouter()
    const [category,setCategory] = useState('gadget')
    const [menu,setMenu] = useState(false)
    const matches = useMediaQuery('(min-width:1027px)');
    const matchesHead = useMediaQuery('(min-width:750px)');
    const [check1] = useState([
        {
            id:1,
            title:'Maccs'
        },
        {
            id:2,
            title:'Karts'
        },
        {
            id:3,
            title:'Baars'
        },
        {
            id:4,
            title:'Bukks'
        },
        {
            id:5,
            title:'Luasis'
        },
    ])
    const [check2] = useState([
        {
            id:1,
            title:'On Sale'
        },
        {
            id:2,
            title:'In Stock'
        },
        {
            id:3,
            title:'Featured'
        },
    ])
    const [check3] = useState([
        {
            id:1,
            title:<Rating size={'small'} name="read-only" value={5} readOnly />
        },
        {
            id:2,
            title:<Rating size={'small'} name="read-only" value={4} readOnly />
        },
        {
            id:3,
            title:<Rating size={'small'} name="read-only" value={3} readOnly />
        },
        {
            id:4,
            title:<Rating size={'small'} name="read-only" value={2} readOnly />
        },
        {
            id:5,
            title:<Rating size={'small'} name="read-only" value={1} readOnly />
        },
    ])
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    useEffect(() => {
        setCategory(router.query.category  || category)
    })
    return (
        <BoxCustom>
            <Grid container spacing={3}>
                <SwipeableDrawer  anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
                    <Grid width={'280px'}>
                        <SearchFilter matches={matches} check1={check1} check2={check2} check3={check3}/>
                    </Grid>
                </SwipeableDrawer>
                <SearchHead category={category} setMenu={setMenu} matches={matches} matchesHead={matchesHead}/>
                <Grid item lg={3} display={matches === true ? 'block' : 'none'}>
                    <SearchFilter matches={matches} check1={check1} check2={check2} check3={check3}/>
                </Grid>
                <SearchCards category={category}/>
            </Grid>
        </BoxCustom>
)
}

export default Category