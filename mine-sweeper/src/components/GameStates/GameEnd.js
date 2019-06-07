import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   background: rgba(100, 100, 100, 0.9);
   text-align: center;
   padding: 2em;
`;
const StyledTitle = styled.h2`
   color: ${( { titleColor } ) => titleColor};
   font-size: 7em;
   margin: 0;
`;
const StyledButton = styled.button`
   font-size: 3em;
   margin: 0.8em;
   padding: 0.5em 1em;
   background-color: #fff;
`;

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
