import {
  CustomGridRow,
  TypographyGray,
  TypographyPrime,
} from "./CartProductStyle";

const CartInfo = ({ number, price }) => {
  return (
    <CustomGridRow
      item
      container
      alignItems="center"
      justifyContent="flex-start"
      xs={6}
    >
      <TypographyGray component={"span"} mx={0.5}>
        ${price}.00 &times; {number}
      </TypographyGray>{" "}
      <TypographyPrime component={"span"} mx={0.5}>
        ${price * number}.00
      </TypographyPrime>
    </CustomGridRow>
  );
};

export default CartInfo;
