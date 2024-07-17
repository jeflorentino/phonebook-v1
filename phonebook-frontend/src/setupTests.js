import '@testing-library/jest-dom';
require('jest-fetch-mock').enableMocks();

// Mock para window.alert
global.alert = jest.fn();


