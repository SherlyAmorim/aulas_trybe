const coolestTvShow = {
    name: 'BoJack Horseman',
    genre: 'adult animation',
    createdBy: 'Raphael Bob-Waksberg',
    favoriteCharacter: 'Princess Carolyn',
    quote: 'Princess Carolyn always lands on her feet.',
    seasons: 6,
  };

 
  for (const property in coolestTvShow) {
    console.log(coolestTvShow[property]);
  }
  console.log(Object.values(coolestTvShow));




//   ---------------------------------------------------

// Com Object.values
  const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
    
  const listSkills = (student) => {
    return Object.values(student);
  }  
      
  console.log(listSkills(student1));

//   ---------------------------------------------------
  // Sem Object.values

  const student = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskill: 'Ótimo',
  };
  
  const ValuesWithFor = (student) => {
    const skills = [];
    for(skills in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };

  console.log(ValuesWithFor(student));