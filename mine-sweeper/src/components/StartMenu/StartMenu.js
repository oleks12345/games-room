import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const StyledButton = styled.button`
   font-size: 50px;
   font-weight: bold;
   padding: 10px 50px;
   background-color: black;
   color: white;
`;
const StyledTitle = styled.h1`
   font-size: 75px;
   font-weight: bold;
`;
const StartMenu = ( { start } ) => {
   return (
      <StyledWrapper>
         <StyledTitle>MineSweeper</StyledTitle>
         <StyledButton onClick={ start }>Start</StyledButton>
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
};

export default StartMenu;
