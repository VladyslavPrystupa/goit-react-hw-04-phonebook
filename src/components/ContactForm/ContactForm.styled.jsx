import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 10px;

  border: 1px solid black;
  border-radius: 8px;

  background-color: #b9e5f8;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 320px;
  font-weight: 600;
  color: coral;
`;

export const Input = styled.input`
  font-family: 'Courier New', Courier, monospace;
  padding: 8px;

  border: 1px solid black;
  border-radius: 8px;
  transition: background-color 200ms linear;

  :hover,
  :focus {
    background-color: #ffffff9e;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  margin-bottom: 10px;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;

  background-color: rgb(255, 127, 80);
  color: white;
  padding: 10px;
  transition: background-color 200ms linear;

  :hover {
    background-color: rgb(237, 112, 66);
  }
`;
