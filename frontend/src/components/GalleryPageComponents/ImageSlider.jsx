import React from 'react';
import { Linkedin } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Github } from 'lucide-react'
import { Twitter } from 'lucide-react'

const App = () => {
  return (
    <>
      <div>
        <div>
          <div><img src='logo.png' alt='' /></div>
          <div>
            <div><i><Linkedin color='blue' /></i></div>
            <div><i><Instagram color="#ef2eb5" /></i></div>
            <div><i><Github color='white' /></i></div>
            <div><i><Twitter color="#97dee8" /></i></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </>
  );
};

export default App;

