import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';

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

const StartMenu = ( { start, changeSettings } ) => {
   const [ isSettingsOpen, setIsSettingsOpen ] = useState( false );
   return (
      <StyledWrapper>
         {isSettingsOpen ? (
            <Settings
               isSettingsOpen={ isSettingsOpen }
               setIsSettingsOpen={ setIsSettingsOpen }
            />
         ) : (
            <Menu
               start={ start }
               isSettingsOpen={ isSettingsOpen }
               setIsSettingsOpen={ setIsSettingsOpen }
               changeSettings={ changeSettings }
            />
         )}
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
   changeSettings: PropTypes.func.isRequired,
};

export default StartMenu;
