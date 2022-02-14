import {
  CustomGridRow,
  TypographyGray,
  TypographyPrime,
} from "./CartProductStyle";

const CartInfo = ({ number, price,product }) => {
  return (
    <CustomGridRow
      item
      container
      alignItems="center"
      justifyContent="flex-start"
      xs={6}
    >
      <TypographyGray component={"span"} mx={0.5}>
        ${(product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price)} &times; {product.count}
      </TypographyGray>{" "}
      <TypographyPrime component={"span"} mx={0.5}>
        ${(product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price) * product.count}
      </TypographyPrime>
    </CustomGridRow>
  );
};

export default CartInfo;
