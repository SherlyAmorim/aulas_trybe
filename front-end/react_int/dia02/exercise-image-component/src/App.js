import React from 'react';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {
  return (
    <main>
      <Image source={ staringCat } alternativeText="Cute cat staring" />
    </main>
    
  );
}

export default App;
