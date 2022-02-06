import {Collapse, Grid, List, ListItemButton, ListItemText, ListSubheader} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Theme from "../../../theme/theme";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SearchList = () => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    const ListButton = styled(ListItemButton)({
        padding: '2px 16px',
        color:Theme.palette.secondary.light
    })
    const ListTitle = styled(ListSubheader)({
        color:Theme.palette.secondary.main,
        fontSize:'16px'
    })
    return (
        <Grid>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListTitle component="div" id="nested-list-subheader">
                        Categories
                    </ListTitle>}>
                <ListButton onClick={handleClick}>
                    <ListItemText primary="Bath Preparations"/>
                    {open ? <KeyboardArrowRightIcon fontSize={'small'}/> : <KeyboardArrowDownIcon fontSize={'small'}/>}
                </ListButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListButton sx={{pl: 4}}>
                            <ListItemText primary="Bubble Bath"/>
                        </ListButton>
                        <ListButton sx={{pl: 4}}>
                            <ListItemText primary="Bath Capsules"/>
                        </ListButton>
                        <ListButton sx={{pl: 4}}>
                            <ListItemText primary="Others"/>
                        </ListButton>
                    </List>
                </Collapse>
                <ListButton>
                    <ListItemText primary="Eye Makeup Preparations"/>
                </ListButton>
                <ListButton>
                    <ListItemText primary="Fragrance"/>
                </ListButton>
                <ListButton>
                    <ListItemText primary="Hair Preparations"/>
                </ListButton>
            </List>
        </Grid>
    )
}

export default SearchList