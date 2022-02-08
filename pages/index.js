import Footer from "../components/footer/footer";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import Category from "./home/top_categories/TopCategories";

export default function Home() {
    const BoxCustom = styled(Box)({
        display:'flex',
        flexDirection:'column',
        padding: '12px',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        margin:'auto'
    })

  return (
    <BoxCustom>
        <Category/>
    </BoxCustom>
  )
}
