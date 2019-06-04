import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import GameBoard from 'components/GameBoard/GameBoard';

const GameWrapper = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   padding: 25px;
   justify-content: center;
   align-items: center;
`;

const MineSweeper = () => {
   return (
      <PageTemplate>
         <GameWrapper>
            <GameBoard />
         </GameWrapper>
      </PageTemplate>
   );
};

export default MineSweeper;
