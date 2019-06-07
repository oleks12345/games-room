import styled from 'styled-components';

export const StyledWrapper = styled.div`
   position: fixed;
   display: ${( { gameState } ) => ( gameState === 'started' ? 'none' : 'flex' )};
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   justify-content: center;
   align-items: center;
`;
