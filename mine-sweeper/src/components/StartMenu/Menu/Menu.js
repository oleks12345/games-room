import React from 'react';
import PropTypes from 'prop-types';
import { StartButton, SpanTop, StyledTitle, SettingsButton } from './styles';

const Menu = ( { start, toogleSettingsMenu } ) => {
   return (
      <>
         <StyledTitle>MineSweeper</StyledTitle>
         <StartButton onClick={ start }>
            <SpanTop>Start</SpanTop>
         </StartButton>
         <SettingsButton onClick={ toogleSettingsMenu }>Settings</SettingsButton>
      </>
   );
};

Menu.propTypes = {
   start: PropTypes.func.isRequired,
   toogleSettingsMenu: PropTypes.bool.isRequired,
};

export default Menu;
