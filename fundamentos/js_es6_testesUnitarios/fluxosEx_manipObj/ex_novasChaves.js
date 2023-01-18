const pessoaEstudante = {};

// let newKey = 'name';
// const name = 'Sherly';

const addProperty = (Object, newProperty, value) => {
    Object[newProperty] = value
};

addProperty(pessoaEstudante, 'name', 'Sherly');
addProperty(pessoaEstudante, 'email', 'sherly@trybe.com');
addProperty(pessoaEstudante, 'telefone', '(00)0000-0000)');

console.log(pessoaEstudante);
