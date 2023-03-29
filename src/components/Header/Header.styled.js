import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledNav = styled(NavLink)`
  background-color: darkgray;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: Sono;
  border: none;
  border-radius: 5px;
  border: 1px solid darkgray;
  &:hover {
    background-color: darkgray;
    border: 1px solid white;
    color: white;
  }
  &.active {
    background-color: darkgray;
    color: white;
    border: 1px solid white;
  }
`;
