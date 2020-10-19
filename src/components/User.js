import React from 'react';
import { UserInfo} from '../styles/global';

const User = ({user}) => {
  return(
      <UserInfo>
        <header>
        <img src={user.avatar_url} alt={user.login} />
            <div>
              <strong>{user.login}</strong>
              <br />
              <strong>Repositórios: {user.public_repos}</strong>
              <p>{user.location}</p>
              <p>{user.bio}</p>
            </div>
            </header>
      </UserInfo>
    )
}

export default User;
