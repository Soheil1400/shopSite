import {PMButton} from "../../style/style";
import {decreaseItem} from "../../redux/reducer/cart.reducer";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const ProductCartDec = ({product,items,dispatch,padding='2px'}) => {
    return(
        <PMButton sx={{padding:padding,display:items.filter(i => i.id === product.id).length === 0 ? 'none' : 'flex'}}  onClick={()=>dispatch(decreaseItem(product))}>
            <HorizontalRuleIcon/>
        </PMButton>
    )
}

export default ProductCartDec