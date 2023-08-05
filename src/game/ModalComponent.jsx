import M from 'materialize-css';
import { useEffect } from 'react';

export const ModalComponent = ({ id, name, img, }) => {

    useEffect(() => {
        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, []);
    })

    return (
    <div id={id} className="modal" key={id}>
        <div className="modal-content">
            <h4>{ name }</h4>
            <div className="center-align">
                <img src={ img } />
            </div>
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
        </div>
    </div>
  )
}
