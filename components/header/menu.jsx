import * as React from "react";
import DropDownn from "./drop-down";
import { Stack } from "@mui/material";

const home=['sxda','wefcwe']
const page=['asdx','axda']
const user=['asdx','axda']
const vendor=['asdx','axda']
export default function Menu() {

  return (
    <Stack direction='row'>
        <DropDownn title='Home' arr={home} />
        <DropDownn title='Pages' arr={page}/>
        <DropDownn title='User Account' arr={user}/>
        <DropDownn title='Vendor Account' arr={vendor}/>
        <DropDownn title='Track My Orders' arr={[]}/>
        <DropDownn title='Back to Demos' arr={[]}/>
    </Stack>
  );
}
