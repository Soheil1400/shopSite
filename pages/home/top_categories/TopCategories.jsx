import Box from '@mui/material/Box';
import Image from 'next/image'
import Category1 from "./Images/category-1.png"
import Category2 from "./Images/category-2.png"
import Category3 from "./Images/category-3.png"
import CategoryIcon from '@mui/icons-material/Category';

const data=
    [
        {
            title1:"HeadPhones",
            image:Category1,
        },
        {
            title1:"Sunglass",
            image:Category2,
        },
        {
            title1:"HeadPhones",
            image:Category3,
        },
        {
            title1:"Sunglass",
            image:Category1,
        }
    ]



export default function Category() {

    return (
        <div style={{
            maxWidth:"1200px",
        }}>

            <div style={{marginTop:"5px",display:"flex",justifyContent:"space-between"}} >
                <div>
                    <CategoryIcon sx={{color:"rgb(233, 69, 96)"}}/>
                    <p style={{
                        display:"inline",
                        fontSize: '25px',
                        fontWeight: 'bold',
                        lineHeight: "1",
                        marginLeft:"5px"
                    }}>
                        Top Categories
                    </p>
                </div>
                <div>
                    View All
                    <CategoryIcon sx={{
                        fontSize:'14px',
                        marginRight:'0.5rem',
                        color:'rgb(125, 135, 156)'}}/>
                </div>
            </div>


            <div style={{display: "flex",maxWidth:"1200px"}}>

                {
                    data.map(item => (
                        <Box key={item.id} component="span" sx={{
                            minWidth:"384px",
                            minHeight:"152px",
                            p: 2,
                            borderRadius: "8px",
                            backgroundColor: 'rgb(255, 255, 255)',
                            boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
                            cursor:"pointer",
                            margin:"10px"
                        }}>

                            <div style={{
                                display: 'flex',
                                justifyContent:"space-between",
                                cursor: 'unset',
                                padding: '4px 10px',
                                position: 'absolute',
                                zIndex: '1',
                                fontWeight: '600',
                                fontSize: '10px',
                                width: '340px',
                            }}>
                                <p style={{backgroundColor: 'rgb(15, 52, 96)', color: 'white',padding:"4px 10px",borderRadius:"300px"}}>{item.title1}</p>

                                <p style={{backgroundColor: 'rgb(227, 233, 239)', color: 'rgb(55, 63, 80)',padding:"4px 10px",borderRadius:"300px"}}>3k orders this week</p>
                            </div>

                            <Box
                                sx={{
                                    '&:hover': {
                                        opacity:'.5',
                                        transition:'all 250ms ease-in-out 0s',
                                    }
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.image}
                                />
                            </Box>




                        </Box>
                    ))
                }


            </div>

        </div>



    );
}