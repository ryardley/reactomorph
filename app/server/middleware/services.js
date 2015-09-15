import fetch from 'isomorphic-fetch';
import nector from '../../shared/nector';

export default function(server){
  return nector.createServer({
    fetchFollowing(){
      return fetch(`https://api.github.com/users/ryardley/following`)
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        });
    }
  }, server);
}

