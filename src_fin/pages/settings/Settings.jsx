import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://media.istockphoto.com/photos/young-woman-photographing-the-autumn-season-picture-id864516870?b=1&k=20&m=864516870&s=170667a&w=0&h=Hg4HcoGEfJ5QUqNSLFfKiOrD5xncPDPMe4BpBP7HR44=" 
              alt="" />
              <label htmlFor="fileINput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" ide="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Utkarsh' />
            <label>Email</label>
            <input type="email" placeholder='utk@gmail.com' />
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
