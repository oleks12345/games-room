import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Lost from './Lost';
import Won from './Won';

const StyledWrapper = styled.div`
   position: absolute;
   display: ${( { gameState } ) => ( gameState === 'started' ? 'none' : 'flex' )};
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   font-size: 100px;
   justify-content: center;
   align-items: center;
`;

const GameStates = ( { gameState, restart } ) => {
   const handleGameStates = ( gameStates, restart ) => {
      switch ( gameStates ) {
      case 'lost':
         return <Lost restart={ restart } />;
      case 'won':
         return <Won restart={ restart } />;
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
