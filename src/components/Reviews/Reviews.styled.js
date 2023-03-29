import styled from 'styled-components';
export const Container = styled.div``;

export const Text = styled.p``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  padding: 10px;
  &:nth-child(2n + 1) {
    background-color: lightgray;
    border-radius: 10px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const NoResult = styled.div`
  width: 100%;
  background-color: lightgray;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 30px;
`;
