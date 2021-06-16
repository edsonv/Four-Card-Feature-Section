import React from 'react'
import '../css/Global.scss'
import '../css/Cards.scss'
import Header from './Header'
import Footer from './Footer'
import CardItem from './Card'
import cardsData from '../cards'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: cardsData
    }
  }
  render() {
    const cardsComponent = this.state.cards.map(card => (
      <CardItem key={card.id} card={card} />
    ))
    return (
      <React.Fragment>
        <Header />
        <article className="cards _cards-margin">{ cardsComponent }</article>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
