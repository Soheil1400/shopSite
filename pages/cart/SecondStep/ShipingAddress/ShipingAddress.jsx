import { styled } from "@mui/material/styles";
import { Grid, IconButton, Paper, Typography, TextField } from "@mui/material";
import Theme from "../../../../theme/theme";

const ShipingAddress = () => {
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 0",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
  });
  const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main,
  });
  const PMButton = styled(IconButton)({
    backgroundColor: Theme.palette.primary.light,
    color: Theme.palette.primary.main,
    fontWeight: "bold",
    padding: "2px",
    textTransform: "none",
    border: "1px solid #E94560",
    boxShadow: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      color: Theme.palette.primary.light,
    },
  });
  return (
    <PaperCustom>
      <Grid container direction="row" flexWrap="wrap" alignItems="flex-start" spacing={1}>
        <Grid item xs={6} fullWidth>
            <TypographyMain fontSize="0.875rem">Full Name</TypographyMain>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
      </Grid>
    </PaperCustom>
  );
};

export default ShipingAddress;
