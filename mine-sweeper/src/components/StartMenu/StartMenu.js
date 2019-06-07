import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';
import { StyledWrapper } from './StartMenu-styles';

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
