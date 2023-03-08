import { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''      
    };
  }

  handleChange({ target }){
    // usar essa desestruturação abaixo, quando for trabalhar com inputs do tipo checkbox, caso não for pode-se usar apenas: const { name, value } = target;

    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState ({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1> 
            Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
        <h4> Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)</h4>
          <label className="textArea">          
            <textarea 
              name="estadoFavorito"
              rows="10"              
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <div className="inputs">
            <label for='nome'> Nome: 
              <input 
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </label>
            <label for="email"> E-mail:
            <input
                type="email"
                name="email"
                placeholder="Digite seu e-mai"                
                value={this.state.email}
                onChange={this.handleChange}
            />
            </label>
            <label for="idade"> Idade:
              <input 
                type="number"
                name="idade"
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <label>            
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            /> Vai Comparecer?
          </label>
          <label>
            Escolha sua palavra favorita:
              <select
                name="palavraChaveFavorita" 
                value={this.state.palavraChaveFavorita}
                onChange={this.handleChange}
              >
                <option value="Componente">Componente</option>
                <option value="Estado">Estado</option>
                <option value="Evento">Evento</option>
                <option value="Props">Props</option>
              </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;