import M from 'materialize-css';
import { useEffect, useState } from 'react';
import { AvatarCreator } from './AvatarCreator';

export const TableComponent = ({ ObjectPreset = [], name = '' }) => {

    const [band, setBand] = useState(false);

    useEffect(() => {
        const element = document.querySelector('.materialize-textarea');
        M.textareaAutoResize(element);
        ObjectPreset.forEach(function(obj){
            let value = localStorage.getItem(obj['name']);
            let valueDescartado = localStorage.getItem(`descartar_${obj['name']}`);
            if(value){
                const textArea = document.getElementById(`${obj['name']}`);
                textArea.textContent = value;
                M.textareaAutoResize(textArea);
            }
            if(!!valueDescartado){
                const button = document.getElementById(`descartar_${obj['name']}`);
                button.classList.remove('green');
                button.classList.add('red');
                const html = `${ name } Descartado`;
                button.innerHTML = html;
                setInterval(() => {
                    button.setAttribute('id', `considerar_${obj['name']}`);
                }, 500);
            }
        });
        setBand(true);
    }, []);

    const saveDataToLocalStorage = (e) => {
        if(band){
            const { id, value } = e.target;
            localStorage.setItem(id, value);
        }
    }

    const accionar = (e) => {
        const { id } = e.target;
        const [estado, item] = id.split('_');
        const button = document.getElementById(id);
        let html = null;
        if(estado === 'descartar'){
            button.classList.remove('green');
            button.classList.add('red');
            html = `${ name } Descartado`;
            localStorage.setItem(id, true);
            button.setAttribute('id', `considerar_${item}`);
        }

        if(estado === 'considerar'){
            button.classList.remove('red');
            button.classList.add('green');
            html = `Descartar ${ name }`;
            localStorage.removeItem(`descartar_${item}`);
            button.setAttribute('id', `descartar_${item}`);
        }
        button.innerHTML = html;

    }



    return (
        <table className='striped centered'>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Anotacion</th>
                <th>Descartado</th>
            </tr>
            </thead>

            <tbody>
                {
                    ObjectPreset.map(o => {
                        return (
                            <tr key={o['id']}>
                                <td>
                                    {
                                        (o['img'])? (<AvatarCreator img={o['img']} />) : null
                                    }
                                    <b><i>{o['name']}</i></b>
                                </td>
                                <td><textarea id={`${o['name']}`} className="materialize-textarea" onChange={(e) => saveDataToLocalStorage(e)}></textarea></td>
                                <td><button className="waves-effect waves-light btn green z-depth-5" id={`descartar_${o['name']}`} onClick={(e) => accionar(e)} >Descartar { name }</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
