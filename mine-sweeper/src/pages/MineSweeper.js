import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate/PageTemplate';

const GameWrapper = styled.div`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const MineSweeper = () => {
   return (
      <PageTemplate>
         <GameWrapper>
            <h1>hello</h1>
         </GameWrapper>
      </PageTemplate>
   );
};

export default MineSweeper;
