import React, { useState } from 'react';
import ContactList from './ContactList';

const ModalB = () => {
    const [showModalC, setShowModalC] = useState(false);

  const openModalC = () => {
    // Implement logic to open Modal C
    setShowModalC(true);
  };
    return (
        <div>
        {/* Modal B content */}
        <ContactList />
        {/* Button to open Modal C */}
        <button onClick={openModalC} className="btn btn-primary">
          Open Modal C
        </button>
      </div>
    );
};

export default ModalB;