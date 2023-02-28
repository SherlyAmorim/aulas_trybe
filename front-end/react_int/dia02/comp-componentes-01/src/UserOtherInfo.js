import React, { Component } from 'react'

//Componente que renderiza as outras informações do usuário na tabela

class UserOtherInfo extends Component {
  render() {
    const { email, id } = this.props //
    //propriedade desistruturada que faz conexão com a tabela e o retorno dela

    return (<span> {email} {id} </span>) //Sempre colocar a constante que queremos usar entre {}, se não o React entender ser uma string e não uma propriedade    
  }
}

export default UserOtherInfo
