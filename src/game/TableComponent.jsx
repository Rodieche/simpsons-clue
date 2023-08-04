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
            if(value){
                const textArea = document.getElementById(`${obj['name']}`);
                textArea.textContent = value;
                M.textareaAutoResize(textArea);
            }
        });
        setBand(true);
    }, []);

    const saveDataToLocalStorage = (e) => {
        if(band){
            const { id, value } = e.target;
            localStorage.setItem(id, value);
            console.log(id, value);
        }
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
                                <td><a className="waves-effect waves-light btn red z-depth-5"><i className="material-icons left">close</i>Descartar { name }</a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
