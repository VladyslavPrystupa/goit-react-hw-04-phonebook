import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  width: 220px;

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
    background-color: #87cfdf47;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 50%;
  top: 3px;
  color: #000000;
`;
