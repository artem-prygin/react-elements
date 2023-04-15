import ReactDOM from 'react-dom';
import '../styles/modal.scss';
import { ModalInterface } from '../interfaces/modal.interface';
import { useEffect } from 'react';

const Modal = ({ onClose, children, actionBar }: ModalInterface) => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => document.body.classList.remove('overflow-hidden');
    }, []);

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-body">
                {children}
                {actionBar}
            </div>
        </div>,

        document.querySelector('.modal-container'),
    );
};

export default Modal;
