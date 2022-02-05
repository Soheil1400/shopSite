import * as React from "react";
import { Stack } from "@mui/material";
import "@reach/menu-button/styles.css";
import "@reach/combobox/styles.css";
import DropDownn from "./custom-drop";

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
      <DropDownn title="Home" arr={home} />
      <DropDownn title="Pages" arr={page} />
      <DropDownn title="User Account" arr={user} />
      <DropDownn title="Vendor Account" arr={vendor} />
      <DropDownn title="Track My Orders" arr={[]} />
      <DropDownn title="Back to Demos" arr={[]} />
    </Stack>
  );
}
