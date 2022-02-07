import {Grid} from "@mui/material";
import {useState} from "react";
import {TypographyGray} from "../../../style/style";

const TitleOrders = ({matches}) => {
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