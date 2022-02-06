import {Box,Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import {Rating} from "@mui/lab";
import SearchHead from "./searchHead";
import SearchFilter from "./searchFilter";
import SearchCards from "./searchCards";

const Category = () => {
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
    return (
        <BoxCustom>
            <Grid container spacing={3}>
                <SearchHead/>
                <SearchFilter check1={check1} check2={check2} check3={check3}/>
                <SearchCards/>
            </Grid>
        </BoxCustom>
)
}

export default Category