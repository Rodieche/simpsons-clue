import { useEffect } from 'react';

import M from 'materialize-css';

import { Characters, Places, Weapons } from '../helpers';

import { TableComponent } from '../game/TableComponent';


export const TableGame = () => {

  useEffect(() => {
    var element = document.querySelector('.tabs');
    M.Tabs.init(element, []);
}, []);

  return (
    <>
      <div className="center-align">
        <img src='https://res.cloudinary.com/echeniquer/image/upload/v1691096891/Simpsons%20Clue%20Game/A_Simpsons_logo.png' height='100' />
      </div>
        <div className="row">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a className='active' href="#Characters">Personajes</a></li>
          <li className="tab col s3"><a href="#Weapons">Armas</a></li>
          <li className="tab col s3"><a href="#Places">Lugares</a></li>
          <li className="tab col s3"><a href="#General">Referencias</a></li>
        </ul>
      </div>
      <div id="Characters" className="col s12">
        <h1 className='center-align'>Personajes</h1>
        <TableComponent ObjectPreset={ Characters } name='personaje' />
      </div>
      <div id="Weapons" className="col s12">
        <h1 className='center-align'>Armas</h1>
        <TableComponent ObjectPreset={ Weapons } name='arma' />
      </div>
      <div id="Places" className="col s12">
        <h1 className='center-align'>Lugares</h1>
        <TableComponent ObjectPreset={ Places } name='lugar' />
      </div>
      <div id="General" className="col s12">Temas Generales</div>
    </div>
      
      
      
    </>
  )
}
