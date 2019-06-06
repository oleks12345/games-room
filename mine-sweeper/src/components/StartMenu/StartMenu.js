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

const StartMenu = ( { start, changeSettings, settings } ) => {
   const [ isSettingsOpen, setIsSettingsOpen ] = useState( false );
   const toogleSettingsMenu = () => setIsSettingsOpen( !isSettingsOpen );
   return (
      <StyledWrapper>
         {isSettingsOpen ? (
            <Settings
               toogleSettingsMenu={ toogleSettingsMenu }
               changeSettings={ changeSettings }
               settings={ settings }
            />
         ) : (
            <Menu
               start={ start }
               toogleSettingsMenu={ toogleSettingsMenu }
               changeSettings={ changeSettings }
            />
         )}
      </StyledWrapper>
   );
};
StartMenu.propTypes = {
   start: PropTypes.func.isRequired,
   changeSettings: PropTypes.func.isRequired,
   settings: PropTypes.shape().isRequired,
};

export default StartMenu;
