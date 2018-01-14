export const REDIRECT_URL = window.location;
export const LOGOUT_URL = () => {
    if(window.location.hostname === 'localhost')
      return `http://${window.location.host}`;
    else
      return `https://${window.location.host}`;
  };
export const TAGS_URL =  `https://api.instagram.com/v1/tags/search`;
export const MEDIA_URL = [ `https://api.instagram.com/v1/tags/`, `/media/recent` ]
