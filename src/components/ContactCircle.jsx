import React from 'react';

const ContactCircle = ({ contact, onEdit }) => {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
    const color = colors[contact.id % colors.length];

    return (
        <div
            className={`w-16 h-16 flex items-center justify-center rounded-full text-white cursor-pointer ${color}`}
            onClick={() => onEdit(contact)}
            title={contact.name}
        >
            {contact.name.charAt(0).toUpperCase()}
        </div>
    );
};

export default ContactCircle;

