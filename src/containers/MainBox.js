import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    page:''
  }

  handleClick = (e) => {
    console.log(e.target.id)
    this.setState({
      page:e.target.id
    })
  }

  toDisplay = {
    'profile':<Profile />,
    'photo': <Photos />,
    'cocktail': <Cocktails /> ,
    'pokemon':<Pokemon />
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick} active={this.state.page}/>
        {this.toDisplay[this.state.page]}
      </div>
    )
  }

}

export default MainBox
