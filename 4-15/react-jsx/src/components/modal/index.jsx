import { Component } from "react";

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { message, onDismiss, onDelete, title } = this.props
        return (
            < div className="modal d-block" tabIndex="-1">
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
            </div >
        );
    }
}