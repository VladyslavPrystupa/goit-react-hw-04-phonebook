import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #000000cb;
  font-size: 18px;
  font-weight: 500;

  padding: 8px;
  width: 340px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ff9d79;
`;

export const Button = styled.button`
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;

  background-color: #b9e5f8;
  color: black;
  padding: 6px;
  transition: background-color 200ms linear;

  :hover {
    background-color: #88cfed;
  }
`;

export const ContactName = styled.span`
  width: 220px;
  word-wrap: break-word;
`;
