import AbstractView from '../AbstractView.js';

const profileInfo = {
  firstName: 'Elijah',
  lastName: 'Elliott',
  profileImage: './static/photos/lwLogo.png',
};
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Profile');
  }

  async getHtml() {
    return `
      <div className='profile'>
        <img className='profile-image' alt='' src=${profileInfo.profileImage} />
        <div className='profile-description'>
          <h1>
            <span id='first-name'>${profileInfo.firstName} </span>
            ${profileInfo.lastName}
          </h1>
          <div className='profile-description'>
            <h2>Personal Trainer</h2>
          </div>

          <button >Edit profile image</button>
          <button >Add to Big Feature</button>
          <button >Add to Small Feature</button>
          <a href='/liveChatRoom' className='header-link'>Create Live Stream</a>
            <button><a href='./static/vidyoplatform/VidyoConnector.html' className='header-link'>Create Live Stream</a></button>
        </div>
      </div>
      <div className='profile-contents'>
        <div className='profile-contents-title'>
          <div className='profile-contents-title-header'>
            Past Streams
              <button>Add Content</button>
               </div>
        </div>
        <div className='profile-contents-content'>
        </div>
      </div>
      <div className='profile-info'>
        <div className='info'>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
        <div className=''>
          <div className=''></div>
          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
    `;
  }
}
