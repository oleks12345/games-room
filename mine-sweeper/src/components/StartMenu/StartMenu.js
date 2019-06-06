import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu/Menu';

export const StyledWrapper = styled.div`
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

const StartMenu = ( { start } ) => {
   return (
      <StyledWrapper>
         <Menu start={ start } />
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
};

export default StartMenu;
