import {PMButton} from "../../style/style";
import {decreaseItem} from "../../redux/reducer/cart.reducer";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {useDispatch} from "react-redux";

const ProductCartDec = ({product,items,padding='2px'}) => {
    const dispatch = useDispatch()
    return(
        <PMButton sx={{padding:padding,display:items.filter(i => i.id === product.id).length === 0 ? 'none' : 'flex'}}  onClick={()=>dispatch(decreaseItem(product))}>
            <HorizontalRuleIcon/>
        </PMButton>
    )
}

export default ProductCartDec