import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SearchResult from "./searchResult";

export default function SimpleSearchbar({search,setSearch}) {
    const handleChange = (e) => {
        setSearch({[e.target.name]: e.target.value})
    }
    return (
        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: '700px',
                boxShadow: "none",
                border: "0.5px solid lightGray",
                borderRadius: "30px",
                height: "38px",
                position:'relative'
            }}
        >
            <SearchIcon sx={{color: "gray", marginLeft: '24px'}}/>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Searching For"
                inputProps={{"aria-label": "Searching For"}}
                name={'search'}
                value={search.search}
                onChange={handleChange}
            />
            <SearchResult search={search} setSearch={setSearch}/>
        </Paper>
    );
}
