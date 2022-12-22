import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px dotted black;
  padding: 20px;
  margin-bottom: 40px;
`;
export const LabelName = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: normal;
`;

export const InputName = styled.input`
  display: block;
  width: 200px;
  height: 20px;
  padding: 5px;
  margin: 0;
  margin-bottom: 20px;
  border: 0.5px solid grey;
  border-radius: 4px;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 5px;
  border-radius: 6px;
  border: 0;
  font-size: 15px;
  &:hover{
 background-color: #2FFCFF;
 }
`;
