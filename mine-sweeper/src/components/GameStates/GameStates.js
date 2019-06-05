import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GameEnd from './GameEnd';

const StyledWrapper = styled.div`
   position: absolute;
   display: ${( { gameState } ) => ( gameState === 'started' ? 'none' : 'flex' )};
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   justify-content: center;
   align-items: center;
`;

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
