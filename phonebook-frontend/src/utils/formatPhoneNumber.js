export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');

    const isBrazilian = cleaned.startsWith('55');
    const isAmerican = cleaned.startsWith('1');

    if (isBrazilian) {
        if (cleaned.length === 13 && cleaned[4] === '9') { // Número móvel
            return `+55 (${cleaned.slice(2, 4)}) ${cleaned.slice(4, 9)}-${cleaned.slice(9)}`;
        } else if (cleaned.length === 12 && cleaned[4] !== '9') { // Número fixo
            return `+55 (${cleaned.slice(2, 4)}) ${cleaned.slice(4, 8)}-${cleaned.slice(8)}`;
        } else {
            throw new Error('Número inválido');
        }
    } else if (isAmerican && cleaned.length === 11) {
        return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    } else {
        throw new Error('Número inválido');
    }
};