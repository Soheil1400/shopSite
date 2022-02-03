import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Theme from "../../../theme/theme";

const TitleOrders = ({matches}) => {
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const [OTitle , setOTitle] = useState(['Order #','Status','Date purchased','Total'])
    return(
        <Grid container display={matches === true ? 'flex' : 'none'} p={2}>
            {OTitle.map(title => (
                <Grid key={title} item sm={2.8}>
                    <TypographyGray fontSize={'15px'} fontWeight={'bolder'}>
                        {title}
                    </TypographyGray>
                </Grid>
            ))}
        </Grid>
    )
}

export default TitleOrders