import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const DeleteBtn = styled.button`
  margin: 0;
  margin-left: 20px;
  height: 30px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 6px;
  border: 0;
  font-size: 15px;
  &:hover {
    background-color: #2ffcff;
  }
`;
