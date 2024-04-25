import { createPortal } from "react-dom";


interface ModalProps {
    message: string;
    onDismiss: () => void;
    onDelete:() => void;
    title: string;
}


function Modal ({ message, onDismiss, onDelete, title }: ModalProps) {

    return (
        createPortal(
< div className="modal d-block" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {title}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            onClick={onDismiss}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={onDismiss}
                        >Cancel</button>
                        <button type="button" className="btn btn-danger"
                            onClick={onDelete}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div >, document.body
        )
        
    );

}

export default Modal;