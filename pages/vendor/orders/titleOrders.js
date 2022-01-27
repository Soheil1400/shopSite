import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";

const TitleOrders = ({matches}) => {
    const [OTitle , setOTitle] = useState(['Order #','Status','Date purchased','Total'])
    const CustomGridOrderTitle = styled(Grid)({
        color:'rgb(125, 135, 156)',
        fontWeight:'bold',
    })
    return(
        <Grid container display={matches === true ? 'flex' : 'none'} p={2.2}>
            {OTitle.map(title => (
                <CustomGridOrderTitle key={title} item sm={2.8}>
                    {title}
                </CustomGridOrderTitle>
            ))}
        </Grid>
    )
}

export default TitleOrders