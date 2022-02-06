import * as React from "react";
import { Stack } from "@mui/material";
import CustomDrop from "./custom-drop";

const home = [
  { name: "Super Store", sub: [] },
  { name: "Grocery", sub: [] },
  { name: "Niche Market 1", sub: [] },
  { name: "Niche Market 2", sub: [] },
];
const page = [
  { name: "Sale Page", sub: ["version 1", "version 2"] },
  { name: "Vendor", sub: ["All Vendors", "Vendor Store"] },
  { name: "Shop", sub: ["Search Product", "Single Product", "Card", "Checkout", "Alternative Checkout"] },
];
const user = [
  { name: "Orders", sub: ["Order List", "Order Details"] },
  { name: "Profile", sub: ["View Profile", "Edit Profile"] },
  { name: "Adress", sub: ["Adress List", "Add Adress"] },
  { name: "Support Tickets", sub: ["All Tickets", "Tickets Details"] },
  { name: "Wishlist", sub: [] },
];
const vendor = [
  { name: "Dashboard", sub: [] },
  { name: "Products", sub: ["All Products", "Add/Edit Product"] },
  { name: "Orders", sub: ["All Orders", "Order Details"] },
  { name: "Profile", sub: [] },
];
export default function Menu() {
  return (
    <Stack direction="row">
      <CustomDrop title="Home" arr={home} />
      <CustomDrop title="Pages" arr={page} />
      <CustomDrop title="User Account" arr={user} />
      <CustomDrop title="Vendor Account" arr={vendor} />
      <CustomDrop title="Track My Orders" arr={[]} />
      <CustomDrop title="Back to Demos" arr={[]} />
    </Stack>
  );
}
