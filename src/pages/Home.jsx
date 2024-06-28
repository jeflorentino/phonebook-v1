import React from 'react';
import AddContactForm from '../components/AddContactForm';
import RecentAdditions from '../components/RecentAdditions';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Home = () => {
  return (
    <body class="bg-gray-100 p-6">
    <header class="mb-6">
    <h1 class="text-3xl font-bold text-left text-yellow-600">Yellowzim</h1>
    </header>
    <div class="bg-gray-100">
        <div class="flex justify-between mb-6">
            <AddContactForm />
            <RecentAdditions />
        </div>
        <div class="w-full p-4 bg-white shadow-md">
            <Filter />
            <ContactList />
        </div>
    </div>
    </body>
  );
};

export default Home;