import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: grey;
  background-color: lightgrey;
  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;
