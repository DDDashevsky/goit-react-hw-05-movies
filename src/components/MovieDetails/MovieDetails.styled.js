import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20px;
`;

export const Poster = styled.img`
  border-radius: 10px;
  width: 270px;
  height: 400px;
`;

export const Button = styled(Link)`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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

export const Text = styled.p``;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100% - 10px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const TextContainer = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`;

export const FilmWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const BackBtn = styled(Link)`
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
  display: block;
  width: 80px;
  margin-bottom: 20px;
  text-align: center;
`;
