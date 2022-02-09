import {Grid,SwipeableDrawer} from "@mui/material";
import {useState} from "react";
import SearchHead from "./searchHead";
import SearchFilter from "./searchFilter";
import SearchCards from "./searchCards";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ProductData} from "../../../data/Productdata";
import {BoxCustom} from "../../../style/style";
import {check1,check2,check3} from "../../../data/checks";

const Category = ({categoryData}) => {
    const [menu,setMenu] = useState(false)
    const [filter , setFilter] = useState(
        {
            price:'Relevance',
            min:0,
            max:99999,
        }
    )
    const matches = useMediaQuery('(min-width:1027px)');
    const matchesHead = useMediaQuery('(min-width:750px)');
    return (
        <BoxCustom>
            <Grid container spacing={3}>
                <SwipeableDrawer  anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
                    <Grid width={'280px'}>
                        <SearchFilter filter={filter} setFilter={setFilter} matches={matches} check1={check1} check2={check2} check3={check3}/>
                    </Grid>
                </SwipeableDrawer>
                <SearchHead filter={filter} setFilter={setFilter} categoryData={categoryData} setMenu={setMenu} matches={matches} matchesHead={matchesHead}/>
                <Grid item lg={3} display={matches === true ? 'block' : 'none'}>
                    <SearchFilter  filter={filter} setFilter={setFilter} matches={matches} check1={check1} check2={check2} check3={check3}/>
                </Grid>
                <SearchCards filter={filter} categoryData={categoryData}/>
            </Grid>
        </BoxCustom>
)
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: {category: '1'} }
        ],
        fallback: 'blocking'
    };
}
export async function getStaticProps({params}) {
    const category = params.category
    const categoryData = ProductData.filter(p => p.category === category)
    return {
        props: {
            categoryData,
        },
    }
}
export default Category