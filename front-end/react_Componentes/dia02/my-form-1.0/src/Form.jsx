import { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }

  handleChange(event){
    this.setState ({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1> Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label className="textArea"> Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
            <textarea 
              name="estadoFavorito"
              rows="10"              
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <div className="inputs">
            <input
                type="number"
                name="idade"
                placeholder="Digite sua idade"
            />
          </div>
          <label>            
            <input
            type="checkbox"
            name="vaiComparecer"
            /> Vai Comparecer?
          </label>
        </form>
      </div>
    );
  }
}

export default Form;