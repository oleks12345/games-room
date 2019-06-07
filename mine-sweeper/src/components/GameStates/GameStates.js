import React from 'react';
import PropTypes from 'prop-types';
import GameEnd from './GameEnd';

import { StyledWrapper } from './GameStates-styles';

const GameStates = ( { gameState, restart } ) => {
   const handleGameStates = ( gameStates, restart ) => {
      switch ( gameStates ) {
      case 'lost':
         return (
            <GameEnd title="You lost" titleColor="red" restart={ restart } />
         );
      case 'won':
         return (
            <GameEnd title="You won" titleColor="lime" restart={ restart } />
         );
      default:
         return '';
      }
   };
   return (
      <StyledWrapper gameState={ gameState }>
         {handleGameStates( gameState, restart )}
      </StyledWrapper>
   );
};
GameStates.propTypes = {
   gameState: PropTypes.string.isRequired,
   restart: PropTypes.func.isRequired,
};

export default GameStates;
