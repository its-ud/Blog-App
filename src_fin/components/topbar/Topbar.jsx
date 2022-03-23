import "./topbar.css"
import {Link} from 'react-router-dom'

export default function Topbar() {
    const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcons fa-brands fa-facebook-square"></i>
            <i className="topIcons fa-brands fa-twitter-square"></i>
            <i className="topIcons fa-brands fa-instagram-square"></i>
            <i className="topIcons fa-brands fa-pinterest-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li className="topListItem">
                    <Link to="/register">About</Link>
                </li> 
                <li className="topListItem">
                    <Link to="/login">Contact</Link>
                </li>
                <li className="topListItem">
                    <Link to="/settings">Settings</Link>
                </li>
                <li className="topListItem">
                    <Link to="/write">Write</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user? (
                    <img className="topImg"
                    src="https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0=" alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">Register</Link>
                        </li>  
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
