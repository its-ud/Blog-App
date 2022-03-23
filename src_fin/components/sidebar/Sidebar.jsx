import './sidebar.css';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" 
        alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quos, eum! Reprehenderit explicabo fugit itaque tempora ipsam?!
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <i className="topIcons fa-brands fa-facebook-square"></i>
            <i className="topIcons fa-brands fa-twitter-square"></i>
            <i className="topIcons fa-brands fa-instagram-square"></i>
            <i className="topIcons fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
    
  )
}
