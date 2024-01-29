import styled from 'styled-components';

export const HeaderStyle = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(24, 49, 29, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  text-decoration: none;
`;

export const Linked = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  color: orangered;
`;
