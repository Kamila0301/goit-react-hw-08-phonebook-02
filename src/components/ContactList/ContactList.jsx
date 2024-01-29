import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import { UlStyled, DeleteButton } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <UlStyled>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name}: {number}
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteButton>
          </li>
        );
      })}
    </UlStyled>
  );
};
