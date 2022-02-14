import {PMButton} from "../../style/style";
import {addToCart} from "../../redux/reducer/cart.reducer";
import AddIcon from "@mui/icons-material/Add";

const ProductCartAdd = ({product,dispatch,padding='2px'}) => {
    return(
        <PMButton sx={{padding:padding}} onClick={()=>dispatch(addToCart(product))}>
            <AddIcon/>
        </PMButton>
    )
}

export default ProductCartAdd