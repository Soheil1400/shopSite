import { useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NativeSelectDemo({ list, index, color, top }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(list[0].title);
  const [img, setImg] = useState(list[0].img);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClick = (item) => {
    setValue(list[item].title);
    setImg(list[item].img);
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleToggle}
        sx={{
          color: `${color}`,
          fontSize: "12px",
          fontWeight: "600",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "rgba(246, 249, 252, 0);",
          },
          "&:focus": {
            backgroundColor: "rgba(246, 249, 252, 0);",
          },
        }}
      >
        <Box
          component="img"
          sx={{ height: "14px", marginRight: "8px", borderRadius: "4px" }}
          src={img}
        />
        {value}
        <KeyboardArrowDownIcon sx={{ marginLeft: "8px", fontSize: "16px" }} />
      </Button>
      {open && (
        <Paper
          sx={{
            position: "absolute",
            // right: `calc(25px + 50px * ${index})`,
            top: `calc(40px + 30px * ${top})`,
            zIndex: 150,
            width: "150px",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            {list.map((sub, item) => (
              <Typography
                onClick={() => handleClick(item)}
                variant="p"
                sx={{
                  padding: "8px",
                  textTransform: "none",
                  width: "100%",
                  color: "black",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                    backgroundColor: "#e6ecf6",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "14px",
                    marginRight: "8px",
                    borderRadius: "4px",
                  }}
                  src={sub.img}
                />
                {sub.title}
              </Typography>
            ))}
          </Stack>
        </Paper>
      )}
    </>
  );
}
