import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: baseline;
  padding: 3px 350px;
  border-bottom: 1px solid black;
`;

export const Title = styled.span`
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
`;
export const Button = styled(Link)`
  display: flex;
  width: 100px;
  height: 20px;
  background-color: white;
  border: 1px solid grey;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  border-radius: 5px;
  color: black;
  &:visited,
  &:active {
    color: blue;
  }
  &:hover,
  &:focus {
    color: lightgreen;
  }
`;
// ---
export const Input = styled.input``;
