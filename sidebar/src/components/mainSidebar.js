
import QmsLogo from './sub-components/qmsLogo';
import AppOption from './sub-components/appOptions';
import Menuoptions from './sub-components/menuOptions';
import './SideBar.css';

function Navbar(){
    return(
        <div className="mainsidebar-container">
            <QmsLogo />
            <Menuoptions/>
            <AppOption/>

        </div>
    );
}

export default Navbar;