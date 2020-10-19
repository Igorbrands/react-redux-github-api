import React, { Component }         from 'react';
import {connect}                  from 'react-redux';
import {fetchUser, fetchRepos}    from '../modules/github/actions';
import Form                       from './../components/Form';
import User                       from './../components/User';
import Repos                      from './Repos';
import { Title } from '../styles/global';


class Search extends Component {

    handleSubmit(values, dispatch) {

        dispatch(fetchUser(values.username))

        dispatch(fetchRepos(values.username))
    }

    render() {

        const {user, repos} = this.props

        return (
            <div>
                <div>
                <Title>Github_Explorer</Title>
      <Title>Explore usuários e seus repositórios no Github</Title>
                    <div>
                        <Form onSubmit={this.handleSubmit} />

                    </div>
                </div>
                { user ?
                    <div>
                        <div>
                            <User user={user} />
                        </div>
                        <div>
                            <Repos repos={repos} />
                        </div>
                    </div>
                : null }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user  : state.github.user,
        repos : state.github.repos
    }
}

export default connect(mapStateToProps)(Search);
