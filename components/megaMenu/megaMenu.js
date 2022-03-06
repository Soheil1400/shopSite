import {Box, Grid, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import Link from 'next/link'
import Theme from "../../theme/theme";
import {menu} from "../../data/menu";

export const MegaMenu = () => {
    const BoxCustom = styled(Box)({
        display: 'flex',
        padding: '1px',
        maxWidth: '1180px',
        margin:'auto',
    })
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        width: "278px"
    })

    return (
        <BoxCustom>
            <Box sx={{position:'absolute',top:'70px',zIndex:999}}>
                <PaperCustom>
                    {menu.map(m => (
                        <Grid key={m.id} sx={{'&:hover':{color:Theme.palette.primary.main}}}>
                            <Link href={m.link}>
                                <Grid display={'flex'} flexDirection={'row'} alignItems={'center'}  p={2} sx={{cursor:'pointer'}}>
                                    <Grid mr={2}>
                                        {m.icon}
                                    </Grid>
                                    <Grid>
                                        {m.title}
                                    </Grid>
                                </Grid>
                            </Link>
                        </Grid>
                    ))}
                </PaperCustom>
            </Box>
        </BoxCustom>
    )
}