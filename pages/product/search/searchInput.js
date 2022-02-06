const SearchInput = ({option}) => {
    return(
        <>
            {option.map(o => (
                <label key={o.id} className="container">{o.title}
                    <input type="checkbox" name="radio"/>
                    <span className="checkmark"></span>
                </label>
            ))}
        </>
    )
}

export default SearchInput