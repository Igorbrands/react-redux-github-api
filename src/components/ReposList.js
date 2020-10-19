import React from 'react';
import { UserInfo } from '../styles/global';

const ReposList = (repos) => {
    const filtered = repos.map((repo, key) => {
      return (
        <UserInfo key={key}>
            <ul>
              <li>                
                    <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h3>{repo.name}</h3>{' - '}
                    <p>{repo.description}</p>
                    </a>
                </li>
            </ul>
        </UserInfo>
      )
    })

    return (filtered)
}

export default ReposList;
