import React from 'react';

const ContactCircle = ({ contact, onEdit }) => {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-gray-500'];
    const color = colors[contact.id % colors.length];

    return (
        <div className="flex flex-col items-center cursor-pointer" onClick={() => onEdit(contact)}>
            <div className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${color}`}>
                {contact.name.charAt(0).toUpperCase()}
            </div>
            <p className="text-xs mt-2">{contact.name}</p>
        </div>
    );
};

export default ContactCircle;