import React from 'react';
import Modal from './Modal'


function DeleteBadgeModal(props) {
    return (
        <Modal
            isOpen={props.modalIsOpen} 
            onCloseModal={props.onCloseModal}

        >
            <div className="DeleteBadgeModal">
                <h1>Are you sure?</h1>
                <p>You are about to delete this badge.</p>
                <React.Fragment>
                    <button onClick={props.onDeleteBadge} className="btn btn-primary mr-4">Delete</button>
                    <button onClick={props.onCloseModal} className="btn btn-danger">Cancel</button>
                </React.Fragment>
            </div>
        </Modal>
    );
}

export default DeleteBadgeModal;