import { Label, Input, Container, Icon } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

export const Filter = ({ onHandleChange }) => {
  return (
    <Container>
      <Label>
        Find contact
        <IconContext.Provider value={{}}>
          <Icon>
            <AiOutlineSearch />
          </Icon>
        </IconContext.Provider>
        <Input onChange={onHandleChange} type="text" name="filter" />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};
