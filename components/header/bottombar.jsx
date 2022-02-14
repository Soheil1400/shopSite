import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {useMemo} from "react";
import IconButton from "@mui/material/IconButton";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import {Grid, Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {useRouter} from "next/router";
import Link from 'next/link'


export default function FixedBottomNavigation() {
    const router = useRouter()
    const total = useSelector(state => state.cart.items)
    const totalItems = useMemo(() => total.reduce((count, item) => {
        count = count + item.count;
        return count
    }, 0), [total])
    const StyledBadge = styled(Badge)(({theme}) => ({
        "& .MuiBadge-badge": {
            right: 2,
            top: 9,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: "0 4px",
        }
    }));
    const buttonNav = [
        {
            id: 1,
            title: 'Home',
            icon: <HomeOutlinedIcon/>,
            link: '/'
        },
        {
            id: 2,
            title: 'Category',
            icon: <GridViewOutlinedIcon/>,
            link: ''
        },
        {
            id: 3,
            title: 'Cart',
            icon:
                <StyledBadge badgeContent={totalItems} color={'error'} overlap="circular" showZero>
                    <IconButton aria-label="add to shopping cart" sx={{padding: '4px',color:router.asPath === '/cart' ? Theme.palette.primary.main : '#000'}}>
                        <ShoppingBagOutlinedIcon/>
                    </IconButton>
                </StyledBadge>,
            link: '/cart'
        },
        {
            id: 4,
            title: 'Account',
            icon: <PersonOutlineOutlinedIcon/>,
            link: ''
        },
    ]
    return (
        <Box>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '64px',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                {buttonNav.map(b => (
                    <Grid color={router.asPath === b.link ? Theme.palette.primary.main : '#000'}
                          key={b.id}>
                        <Link href={b.link}>
                            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Grid mb={0.20}>
                                    {b.icon}
                                </Grid>
                                <Typography>
                                    {b.title}
                                </Typography>
                            </Grid>
                        </Link>
                    </Grid>
                ))}
            </Paper>
        </Box>
    );
}



