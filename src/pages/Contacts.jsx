import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContact } from '../redux/operations';

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <section>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
}

export default Contacts;
