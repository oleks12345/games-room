import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: #ddd;
   padding: 40px;
`;

const StyledButton = styled.button`
   position: relative;
   overflow: hidden;
   font-size: 50px;
   font-weight: bold;
   padding: 10px 50px;
   background-color: black;
   color: white;
   border: 10px solid black;
   ::before,
   ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
   ::before {
      background-color: red;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: transform 0.5s linear, opacity 0.5s linear;
      transform: translate(-50%, 200px);
   }
   :hover::before {
      opacity: 1;
      transform: translate(-50%, -50%);
   }
   ::after {
      background-color: black;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
   }
`;
const SpanTop = styled.span`
   position: relative;
   z-index: 10;
`;
const StyledTitle = styled.h1`
   font-size: 75px;
   font-weight: bold;
`;
const StartMenu = ( { start } ) => {
   return (
      <StyledWrapper>
         <StyledTitle>MineSweeper</StyledTitle>
         <StyledButton onClick={ start }>
            <SpanTop>Start</SpanTop>
         </StyledButton>
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
};

export default StartMenu;
