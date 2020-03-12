import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    page: 'profile'
  }

  handleClick = (e) => {
    this.setState({
      page: e.target.id
    })
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay

    if (this.state.page === 'profile') {
      detailsToDisplay = <Profile />
    } else if (this.state.page === 'photo') {
      detailsToDisplay = <Photos />
    } else if (this.state.page === 'cocktail') {
      detailsToDisplay = <Cocktails />
    } else if (this.state.page === 'pokemon') {
      detailsToDisplay = <Pokemon />
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick} active={this.state.page}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
