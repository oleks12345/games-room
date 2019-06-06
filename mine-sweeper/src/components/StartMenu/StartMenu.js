import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: #ddd;
   border-radius: 5em;
   font-size: 5px;
   padding: 4em;
   @media (min-width: 640px) {
      font-size: 8px;
   }
   @media (min-width: 768px) {
      font-size: 10px;
   }
`;

const StartButton = styled.button`
   position: relative;
   overflow: hidden;
   font-size: 5em;
   font-weight: bold;
   padding: 0.1em 0.5em;
   background-color: black;
   color: white;
   border: 0.1em solid black;
   border-radius: 0.5em;
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
      transition: transform 0.3s linear, opacity 0.3s linear;
      transform: translate(-50%, 100%);
   }
   :hover::before {
      opacity: 1;
      transform: translate(-50%, -50%);
   }
   ::after {
      border-radius: 0.3em;
      background-color: black;
      width: calc(100% - 0.3em);
      height: calc(100% - 0.3em);
   }
`;
const SpanTop = styled.span`
   position: relative;
   z-index: 10;
`;
const StyledTitle = styled.h1`
   font-size: 7.5em;
   font-weight: bold;
   margin-top: 0.25em;
   margin-bottom: 0.25em;
`;
const SettingsButton = styled.button`
   font-size: 2.5em;
   margin-top: 0.75em;
   padding: 0.5em 1em;
`;
const StartMenu = ( { start } ) => {
   return (
      <StyledWrapper>
         <StyledTitle>MineSweeper</StyledTitle>
         <StartButton onClick={ start }>
            <SpanTop>Start</SpanTop>
         </StartButton>
         <SettingsButton>Settings</SettingsButton>
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
};

export default StartMenu;
