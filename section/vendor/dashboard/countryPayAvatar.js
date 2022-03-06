import Avatar from '@mui/material/Avatar';
import {styled} from "@mui/material/styles";

const CountryPayAvatar = ({img,name}) => {
    const AvatarCustom = styled(Avatar)({
        width: '28px',
        height: '26px',
    })
    return(
        <>
            <AvatarCustom alt={name} src={img}/>
        </>
    )
}

export default CountryPayAvatar