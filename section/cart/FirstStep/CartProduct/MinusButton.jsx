import { useDispatch } from "react-redux";

import RemoveIcon from "@mui/icons-material/Remove";

import { PMButton } from "../../../../style/style";
import { decreaseItem } from "../../../../redux/reducer/cart.reducer";

const MinusButton = ({ number, product }) => {
  const dispatch = useDispatch();
  return (
    <>
      {number === 1 ? (
        <PMButton disabled>
          <RemoveIcon />
        </PMButton>
      ) : (
        <PMButton onClick={() => dispatch(decreaseItem(product))}>
          <RemoveIcon />
        </PMButton>
      )}
    </>
  );
};

export default MinusButton;
