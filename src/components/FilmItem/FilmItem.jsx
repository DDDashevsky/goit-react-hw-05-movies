import { Button,  Item, Title } from './FilmItem.styled';

export const FilmItem = ({ imageLink, title, id, to, state }) => (
  <Item>
    <Title>{title}</Title>
    <Button to={`${to}${id}`} state={state}>
      Details{' '}
    </Button>
  </Item>
);
