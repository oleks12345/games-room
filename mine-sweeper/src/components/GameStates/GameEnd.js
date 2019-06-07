import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, StyledTitle, StyledButton } from './GameEnd-styles';

const GameEnd = ( { restart, title, titleColor } ) => {
   return (
      <StyledWrapper>
         <StyledTitle titleColor={ titleColor }>{title} </StyledTitle>
         <StyledButton onClick={ restart } type="button">
            Play again
         </StyledButton>
      </StyledWrapper>
   );
};

GameEnd.propTypes = {
   restart: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   titleColor: PropTypes.string.isRequired,
};
export default GameEnd;
