import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "./header";
import Appbar from "./appbar";
import Menubar from "./menubar";
import Bottonbar from "./bottombar";

export default function Head() {
  const matches = useMediaQuery("(min-width:901px)");

  return (
    <>
      <Header />
      <Appbar />
      {matches ? <Menubar /> : <Bottonbar/>}
    </>
  );
}
