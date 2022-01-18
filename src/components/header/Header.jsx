import HeaderUp from './header-up/HeaderUp';
import HeaderInner from './header-inner/HeaderInner';
import Navbar from './navbar/Navbar';
import './header.css';

const Header = () => {
    return (
        <header className='header py-1 bg-primary'>
            <HeaderUp />
            <HeaderInner />
            <Navbar />
        </header>
    )
}

export default Header;