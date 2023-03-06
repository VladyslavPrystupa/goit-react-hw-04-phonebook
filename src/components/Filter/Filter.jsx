import { Label, Input, Container, Icon } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const Filter = ({ onHandleChange, filter }) => {
  return (
    <Container>
      <Label>
        Find contact
        <IconContext.Provider value={{}}>
          <Icon>
            <AiOutlineSearch />
          </Icon>
        </IconContext.Provider>
        <Input
          onChange={onHandleChange}
          type="text"
          name="filter"
          value={filter}
        />
      </Label>
    </Container>
  );
};
