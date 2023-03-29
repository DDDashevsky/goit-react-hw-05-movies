import { Container, StyledNav } from './Header.styled';

export const Header = () => (
  <Container>
    <StyledNav to="/">Home</StyledNav>
    <StyledNav to="/Movies">Movies</StyledNav>
  </Container>
);
