import styled from 'styled-components';
import { Form as SearchForm } from 'formik';

export const Input = styled.input`
  height: 48px;
  width: 100%;
  border: grey;
  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button``;

export const SearchBar = styled.form``;

export const Form = styled(SearchForm)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: 2px solid grey;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const FormField = styled.label`
  width: 100%;
  height: 100%;
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchButtonLabel = styled.span`
  font-size: 14px;
`;
