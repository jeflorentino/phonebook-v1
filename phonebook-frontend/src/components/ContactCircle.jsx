import React from 'react';

const ContactCircle = ({ contact, onEdit }) => {
    const colors = ['bg-circle-one', 'bg-yellowzim-primary', 'bg-circle-two', 'bg-circle-three', 'bg-circle-four', 'bg-circle-five'];
    const color = colors[contact.id % colors.length];

    return (
        <div className="flex flex-col items-center cursor-pointer"
            onClick={() => onEdit(contact)}>
            <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${color}`}>
                {contact.name.charAt(0).toUpperCase()}
            </div>
            <p className="text-sm mt-2 text-gray-dark">{contact.name}</p>
        </div>
    );
};

export default ContactCircle;