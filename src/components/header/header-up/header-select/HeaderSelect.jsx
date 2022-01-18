
const HeaderSelect = () =>{
    return(
        <div className="header-up__select header-sel">
            <select className="header-sel__lang">
                <option value="En">En</option>
                <option value="Ru">Ru</option>
                <option value="Uz">Uz</option>
            </select>
            <select className="header-sel__loc">
                <option value="America">America</option>
                <option value="Russia">Russia</option>
                <option value="Uzbekistan">Uzbekistan</option>
            </select>
        </div>
    )
}

export default HeaderSelect;