import { useDispatch } from "react-redux";

import { useMediaQuery } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { CustomBox } from "../CartProductStyle";
import { removeItem } from "../../../../../redux/reducer/cart.reducer";

const RemoveButton = ({product }) => {
  const dispatch = useDispatch();
  const Mobile = useMediaQuery("(min-width:750px)");
  return (
    <CustomBox
      display={Mobile === true ? "none" : "block"}
      sx={{ position: "absolute", right: "15px", top: "15px" }}
      onClick={() => dispatch(removeItem(product))}
    >
      <CloseOutlinedIcon />
    </CustomBox>
  );
};

export default RemoveButton;
