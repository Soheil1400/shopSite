import styled from "@emotion/styled";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Rating,
  Stack,
  Box,
} from "@mui/material";
const PopUpInformation = ({
  image,
  number,
  price,
  name,
  brand,
  numberOfRater,
  status,
  rated,
  soldBy,
  off,
  offPercent,
}) => {
  const NumberBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    overflow: "hidden",
    backgroundColor: " rgb(255, 255, 255)",
  });
  const SquareNumberButton = styled(Button)({
    minWidth: "unset",
    padding: "3px",
    border: "1px solid rgb(255, 225, 230)",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
    },
  });
  const ExtraPictureBox = styled(Box)({
    boxShadow: "none",
    cursor: "pointer",
    width: "70px",
    height: "70px",
    minWidth: "70px",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid rgb(233, 69, 96)",
  });
  return (
    <Card sx={{ padding: "16px" }}>
      <Stack
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <ClearIcon sx={{color:"rgb(233, 69, 96)"}} />
      </Stack>
      <Grid container>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            sx={{ height: "300px" }}
            alt="car"
          />
          <ExtraPictureBox>
            <CardMedia
              component="img"
              sx={{ width: "40px" }}
              image={image}
              alt="car"
            />
          </ExtraPictureBox>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <CardContent>
            <Typography variant="h5" color="rgb(43, 52, 69)" gutterBottom>
              {name}
            </Typography>
            <Typography variant="caption" color="rgb(125, 135, 156)">
              {" "}
              Brand:
            </Typography>
            <Typography variant="caption" color="rgb(43, 52, 69)">
              {brand}
            </Typography>
            <Stack display="flex" direction="row" alignItems="center">
              <Typography variant="caption" color="rgb(125, 135, 156)">
                Rated:
              </Typography>
              <Rating defaultValue={rated} precision={0.5} readOnly />
              <Typography variant="caption" color="rgb(43, 52, 69)">
                ({numberOfRater})
              </Typography>
            </Stack>
            <Typography variant="h5" color="rgb(233, 69, 96)" gutterBottom>
              {price}
            </Typography>
            <Typography variant="caption" color="rgb(43, 52, 69)">
              {status}
            </Typography>
            <NumberBox>
              <SquareNumberButton>
                <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
              </SquareNumberButton>
              <Typography variant="h5 " color="rgb(43, 52, 69)" m="20px">
                {number}
              </Typography>
              <SquareNumberButton>
                <AddOutlinedIcon sx={{ fontSize: 20 }} />
              </SquareNumberButton>
            </NumberBox>
            <Typography variant="caption" color="rgb(125, 135, 156)">
              Sold By:
            </Typography>
            <Typography variant="caption" color="rgb(43, 52, 69)">
              {soldBy}
            </Typography>
          </CardContent>
        </Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </Card>
  );
};
export default PopUpInformation;
