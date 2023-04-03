import { Component } from 'react';
// import PropTypes from 'prop-types';

class DadJoke extends Component {
  constructor() {
    super();

    // Para cada função que fizermos, é necessário fazer um bind
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  // Função que faz a requisição da API
  async fetchJoke() {
    // essa primeira const é um objeto que guarda os headers da requisição - isso é uma imposição da API: $ curl -H "Accept: application/json" https://icanhazdadjoke.com/
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke()
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <>
        <h1>{loadingElement}</h1>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
      </>     
    );
  }
}

// DadJoke.propTypes = {
//   jokeObj: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
//   storedJokes: PropTypes.array.isRequired,
// }
export default DadJoke;
