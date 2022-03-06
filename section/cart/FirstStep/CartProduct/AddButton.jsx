import { useDispatch } from "react-redux";

import AddIcon from "@mui/icons-material/Add";

import { PMButton } from "../../../../style/style";
import { addToCart} from "../../../../redux/reducer/cart.reducer";

const AddButton = ({product }) => {
  const dispatch = useDispatch();
  return (
    <PMButton onClick={() => dispatch(addToCart(product))}>
      <AddIcon />
    </PMButton>
  );
};

export default AddButton;
