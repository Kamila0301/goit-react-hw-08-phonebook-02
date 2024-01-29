import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  margin: 15px 15px;
  background-color: whitesmoke;
  border: solid 2px black;
  width: auto;
  height: 15px;
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  width: 150px;
  padding: 4px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 12px;
`;

export const Username = styled.div`
  font-weight: 700;
`;
