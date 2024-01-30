import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelCard from './components/TravelCard'

import './App.css'

// Replace your code here
class App extends Component {
  state = {cardsList: [], isLoaded: false}

  componentDidMount() {
    this.getCardsList()
  }

  getCardsList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.packages)
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({cardsList: updatedData, isLoaded: true})
  }

  render() {
    const {cardsList, isLoaded} = this.state
    // console.log(cardsList)
    return (
      <div className="main-bg">
        <h1 className="main-heading">Travel Guide</h1>
        {isLoaded ? (
          <ul className="item-list-container">
            {cardsList.map(eachItem => (
              <TravelCard key={eachItem.id} itemDetails={eachItem} />
            ))}
          </ul>
        ) : (
          <div data-testid="loader">
            <Loader color="#00BFFF" type="TailSpin" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default App
