import './qmsLogo.css'
import './Logo.png'

export default function QmsLogo(){
    return(
        <div className="logo-container">
        <div className="svg-icon-container">
            <img className="logo" src="./Logo.png" alt="Logo"/>
        </div>
        <div className="logo-name-container">
           <p>QMS</p> 
        </div>
    </div>
    );
    
}