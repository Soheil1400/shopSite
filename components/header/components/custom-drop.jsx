import React from "react";
import { Typography, Stack, Paper } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CustomDrop({ title, arr }) {
  return (
    <>
      <Typography
        variant="p"
        sx={{
          padding: "24px 16px",
          color: "black",
          "&:hover": { color: "red", "& .menu": { display: "flex" } },
          cursor: "pointer",
        }}
      >
        {title}
        <Paper
          className="menu"
          sx={{
            display: "none",
            position: "absolute",
            borderRadius: '5px',
            top: "62px",
            width: "200px",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            {arr.map((item, index) => (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  "&:hover": {
                    color: "red",
                    backgroundColor: "#e6ecf6",
                    "& .menu": { display: "block" },
                    "& .subMenu": { display: "block" },
                  },
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    padding: "8px",
                    width: "100%",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      color: "red",
                      "& .subMenu": { display: "block" },
                    },
                  }}
                >
                  {item.name}
                  <Paper
                    className="subMenu"
                    sx={{
                      display: "none",
                      position: "absolute",
                      borderRadius: '5px',
                      top: `calc(32px * ${index})`,
                      left: "201px",
                      width: "200px",
                    }}
                  >
                    <Stack sx={{ width: "100%" }}>
                      {item.sub.map((sub) => (
                        <Typography
                          variant="p"
                          sx={{
                            padding: "8px",
                            width: "100%",
                            color: "black",
                            cursor: "pointer",
                            "&:hover": {
                              color: "red",
                              backgroundColor: "#e6ecf6",
                              "& .subMenu": { display: "block" },
                            },
                          }}
                        >
                          {sub}
                        </Typography>
                      ))}
                    </Stack>
                  </Paper>
                </Typography>
                {!!item.sub.length && <ArrowRightIcon fontSize="small" />}
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Typography>
    </>
  );
}
