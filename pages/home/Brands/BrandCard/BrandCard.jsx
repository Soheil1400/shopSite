import { Card,CardMedia,Typography} from "@mui/material";
import styled from "@emotion/styled";

const BrandCard = ({id,image,name}) => {
    const BrandCart = styled(Card)({
        display: "flex",
        width:"240px",
        alignItems: "center",
        padding: "0.75rem 1rem",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: "rgb(246, 249, 252)"
      });
  return (
    <BrandCart key={id}>
      <CardMedia component="img" sx={{width:20, height:20}} height="auto" image={image} alt={name}/>
      <Typography variant="subtitle2" color="text.secondary" ml={2}>
        {name}
      </Typography>
    </BrandCart>
  );
};
export default BrandCard;

