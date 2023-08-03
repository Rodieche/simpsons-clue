import M from 'materialize-css';
import { useEffect } from 'react';
import { AvatarCreator } from './AvatarCreator';

export const TableComponent = ({ ObjectPreset = [], name = '' }) => {

    useEffect(() => {
        var element = document.querySelector('#textarea1');
        M.textareaAutoResize(element);
    });

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
                                <td><textarea id="textarea1" className="materialize-textarea"></textarea></td>
                                <td><a className="waves-effect waves-light btn red z-depth-5"><i className="material-icons left">close</i>Descartar { name }</a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
