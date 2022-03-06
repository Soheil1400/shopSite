import {PMButton} from "../../style/style";
import {addToCart} from "../../redux/reducer/cart.reducer";
import AddIcon from "@mui/icons-material/Add";
import {useDispatch} from "react-redux";

const ProductCartAdd = ({product,padding='2px'}) => {
    const dispatch = useDispatch()
    return(
        <PMButton sx={{padding:padding}} onClick={()=>dispatch(addToCart(product))}>
            <AddIcon/>
        </PMButton>
    )
}

export default ProductCartAdd