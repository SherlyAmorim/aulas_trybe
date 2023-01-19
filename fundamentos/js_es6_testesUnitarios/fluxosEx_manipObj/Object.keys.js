const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
  console.log(Object.keys(coolestTvShow));
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]


  const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

  const habilidades = (student) => {
    const arrayHabilidades = Object.keys(student);
    for (let index in arrayHabilidades) {
    console.log(`${arrayHabilidades[index]}, Nível: ${student[arrayHabilidades[index]]}`);
    }
  };

console.log('Estudante 1:');
habilidades(student1);

console.log('Estudante 2');
habilidades(student2);