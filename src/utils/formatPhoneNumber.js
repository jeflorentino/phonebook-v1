export const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  
    const isBrazilian = cleaned.startsWith('55');
    const isAmerican = cleaned.startsWith('1');
  
    if (isBrazilian && cleaned.length === 13) {
      return `+55 (${cleaned.slice(2, 4)}) ${cleaned.slice(4, 9)}-${cleaned.slice(9)}`;
    } else if (isAmerican && cleaned.length === 11) {
      return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    } else {
      return phoneNumber;
    }
};