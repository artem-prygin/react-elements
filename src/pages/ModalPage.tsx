import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const actionBar = <Button onClick={() => setShowModal(false)}
                              variation="primary">I Accept</Button>;

    const modal = <Modal actionBar={actionBar}>
        <p className="mb-20">Here is something</p>
    </Modal>;

    return <div>
        <Button variation="primary"
                onClick={() => setShowModal(true)}>Show Modal</Button>
        {showModal && modal}
    </div>;
};

export default ModalPage;
