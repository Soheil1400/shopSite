import {PMButton} from "../../style/style";
import {addToCart} from "../../redux/reducer/cart.reducer";
import AddIcon from "@mui/icons-material/Add";

const ProductCartAdd = ({product,dispatch}) => {
    return(
        <PMButton sx={{padding:'2px'}} onClick={()=>dispatch(addToCart(product))}>
            <AddIcon/>
        </PMButton>
    )
}

export default ProductCartAdd