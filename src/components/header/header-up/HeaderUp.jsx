import HeaderContact from './header-contact/HeaderContact';
import HeaderSelect from './header-select/HeaderSelect';
import './header-up.css';

const HeaderUp = () => {
    return(
        <div className='header__up header-up'>
            <div className="header-up__container container d-flex justify-content-between">
                <HeaderSelect />
                <HeaderContact />
            </div>
        </div>
    )
}

export default HeaderUp;