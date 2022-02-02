import styled from "@emotion/styled";
import { List, ListItem, Grid, useMediaQuery } from "@mui/material";
import BrandCard from "../BrandCard/BrandCard";


const BrandList = [
  {
    id: 1,
    image:  "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=48&q=75",
    name: "Zerrari",
  },
  {
    id: 2,
    image: "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=48&q=75",
    name: "Kell",
  },
  {
    id: 3,
    image:
      "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=48&q=75",
    name: "Siaomi",
  },
  {
    id: 4,
    image:
      "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=48&q=75",
    name: "Kasus",
  },
  {
    id: 5,
    image:
      "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fv.png&w=48&q=75",
    name: "Sunny",
  },
  {
    id: 6,
    image:
      "	https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flogos%2Fu.png&w=48&q=75",
    name: "Aver",
  },
];

const BrandsList = () => {
  const BrandsList = styled(List)({
    boxShadow:
      "rgb(0 0 0 / 6%) 0px 3px 5px -1px, rgb(0 0 0 / 4%) 0px 5px 8px 0px, rgb(0 0 0 / 4%) 0px 1px 14px 0px",
    cursor: "unset",
    borderRadius: "10px",
    padding: "1.25rem",
    backgroundColor: "white",
  });
  const BrandListItem = styled(ListItem)({
    display: "flex",
    alignItems: "center",
    padding: "0.75rem 1rem",
    cursor: "pointer",
    minWidth: "240px",
    borderRadius: " 5px",
  });
  return (
    <BrandsList>
      {BrandList.map((brand) => (
        <BrandListItem key={brand.id}>
          <BrandCard image={brand.image} name={brand.name} />
        </BrandListItem>
      ))}
    </BrandsList>
  );
};
export default BrandsList;
