import {styled} from "@mui/material/styles";
import {Box, Button, IconButton, ListItemButton, ListSubheader, MenuItem, Paper, Tab, TextareaAutosize, Typography} from "@mui/material";
import Theme from "../theme/theme";

export const BoxCustom = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: 'auto'
})

export const PaperCustom = styled(Paper)({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
})

export const PaperCustomH = styled(Paper)({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
    }
})

export const RedButton = styled(Button)({
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.light,
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'none',
    boxShadow:'none',
    border: `1px solid ${Theme.palette.primary.main}`,
    '&:hover': {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        boxShadow:'none',
    },
    ":disabled": {
        backgroundColor: '#DAE1E7',
        color: Theme.palette.secondary.light,
        boxShadow:'none',
        border: `1px solid #DAE1E7`,
    }
})

export const WhiteButton = styled(Button)({
    backgroundColor: Theme.palette.primary.light,
    color: Theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'none',
    boxShadow:'none',
    border: `1px solid ${Theme.palette.primary.main}`,
    '&:hover': {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light
    },
    ":disabled": {
        backgroundColor: '#DAE1E7',
        color: Theme.palette.secondary.light
    }
})

export const PMButton = styled(IconButton)({
    backgroundColor: Theme.palette.primary.light,
    color: Theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'none',
    border: '1px solid #FFE2E7',
    boxShadow: 'none',
    borderRadius: '5px',
    '&:hover': {
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        border: `1px solid ${Theme.palette.primary.main}`,
    }
})
export const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark
})
export const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light
})
export const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main
})

export const CustomTab = styled(Tab)({
    textTransform: 'none',
    padding: '8px 10px',
    marginRight: '25px',
    fontSize: '16px',
    justifyContent: 'flex-end',
    color: Theme.palette.secondary.light
})

export const CustomTextAria = styled(TextareaAutosize)({
    borderRadius: '5px',
    width: '100%',
    minHeight: '160px',
    border: '1px solid rgb(218, 225, 231)',
    outline: 'none',
    overflow: 'auto',
    padding: '4px 12px',
    color: Theme.palette.secondary.dark
})

export const CustomBox = styled(Box)({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
    padding: '37px 10px',
    border: '1px solid rgb(218, 225, 231)'
})

export const MenuItemCustom = styled(MenuItem)({
    color: Theme.palette.secondary.dark,
    backgroundColor: Theme.palette.primary.light,
    borderLeft:`4px solid ${Theme.palette.primary.light}`,
    height:'20px',
    '&:hover': {
        color: Theme.palette.primary.main,
        backgroundColor: Theme.palette.primary.light,
        borderLeft:`4px solid ${Theme.palette.primary.main}`,
    },
})

export const ListButton = styled(ListItemButton)({
    padding: '2px 16px',
    color:Theme.palette.secondary.light
})
export const ListTitle = styled(ListSubheader)({
    color:Theme.palette.secondary.main,
    fontSize:'16px'
})
const CartButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    outline: "none",
    fontSize: "14",
    fontWeight: "600",
    transition: " all 150ms ease-in-out 0s",
  });
  export const PrimaryBtn = styled(CartButton)({
    border: "none",
    background: Theme.palette.primary.main,
    color: Theme.palette.primary.light,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
    },
  });
  export const SecondaryBtn = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "#fff",
    color: Theme.palette.primary.main,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
      color: Theme.palette.primary.light,
    },
  });