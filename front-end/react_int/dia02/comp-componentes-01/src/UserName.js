import React, { Component } from 'react'
import './UserName.css'

//Componente que renderiza o Nome do usuário na tabela

class UserName extends Component {
  render() {
    const name = this.props.name //propriedade que faz conexão com a tabela e o retorno dela

    return (<span className='name' >{name}</span>) //Sempre colocar a constante que queremos usar entre {}, se não o React entender ser uma string e não uma propriedade
  }
}

export default UserName