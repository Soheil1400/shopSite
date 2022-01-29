import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import { CardMedia, IconButton, Button, Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = () => {
  const SquareNumberButton = styled(Button)({
    border: "1px solid rgb(233, 69, 96)",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    padding: "3px",
    outline: "none",
    transition: " all 150ms ease-in-out 0s",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
    },
  });
  const CardStyle = styled(Card)({
    position: "relative",
    maxWidth: "305px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: " rgb(255, 255, 255)",
    borderRadius: "8px",
    "&:hover": {
      boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
    },
  });
  const InformationContainer = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0 16px",
    boxShadow: "none",
    backgroundColor: " rgb(255, 255, 255)",
    borderRadius: "8px",
  });
  const InformationBox = styled(Box)({
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: " rgb(255, 255, 255)",
    borderRadius: "8px",
  });
  const OffLabel = styled(Button)({
    display: "inline-flex",
    borderRadius: "300px",
    cursor: "unset",
    boxShadow: "unset",
    transition: "all 150ms ease-in-out 0s",
    padding: " 5px 10px",
    backgroundColor: "rgb(233, 69, 96)",
    color: "rgb(255, 255, 255)",
    top: "40px",
    left: "10px",
    fontSize: "10px",
    fontWeight: "600",
  });
  const CardIconsBox = styled(Stack)({
    position: "absolute",
    top: "50px",
    right: "20px",
  });
  return (
      <>
    <CardStyle>
      <CardIconsBox>
        <VisibilityIcon sx={{ fontSize: 24 }} />
        <FavoriteBorderIcon sx={{ fontSize: 24 }} />
      </CardIconsBox>
      </CardStyle>
      <CardStyle>
        <OffLabel>50% off</OffLabel>
        <CardMedia
          component="img"
          position="relative"
          sx={{ width: "281px", height: "281px" }}
          image={
            "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=1920&q=75"
          }
          alt="car"
        />
        <InformationContainer>
          <InformationBox>
            <Typography variant="subtitle1" color={" rgb(43, 52, 69)}"}>
              215$
            </Typography>
            <Box>
              <StarOutlineIcon sx={{ color: "rgb(255, 205, 78)" }} />
              <StarOutlineIcon sx={{ color: "rgb(255, 205, 78)" }} />
              <StarOutlineIcon sx={{ color: "rgb(255, 205, 78)" }} />
              <StarOutlineIcon sx={{ color: "rgb(255, 205, 78)" }} />
              <StarOutlineIcon sx={{ color: "rgb(255, 205, 78)" }} />
            </Box>
            <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
              Lord 2019
            </Typography>
          </InformationBox>
          <InformationBox>
            <SquareNumberButton>
              <AddOutlinedIcon sx={{ fontSize: 20 }} />
            </SquareNumberButton>
            <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
              1
            </Typography>
            <SquareNumberButton>
              <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
            </SquareNumberButton>
          </InformationBox>
        </InformationContainer>
      </CardStyle>
    </>
  );
};
export default ProductCard;
