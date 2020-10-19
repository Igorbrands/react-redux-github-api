import React, { Component }         from 'react';
import SearchInput, {createFilter}  from 'react-search-input';
import ReposList                    from './../components/ReposList';
import { Reposi } from '../styles/global';

const KEYS_TO_FILTERS = ['description', 'name']

class Repos extends Component{

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

  }

  render() {
    const { repos }      = this.props
    const { searchTerm } = this.state
    const filtered  = repos.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    const reposList = ReposList(filtered)

    return (
      <Reposi>
          <SearchInput
              type="text"
              placeholder="Search repo"
              onChange={this.searchUpdated.bind(this)}
          />
          <br />
          {reposList}
      </Reposi>
    )
 }

 searchUpdated(term) {
   this.setState({ searchTerm : term })
 }

}

export default Repos
