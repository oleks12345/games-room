import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.button`
   border-width: 5px;
   border-top-color: white;
   border-left-color: white;
   :active {
      border-right-color: white;
      border-bottom-color: white;
   }
`;

const Cell = () => {
   return (
      <StyledCell>
         <div />
      </StyledCell>
   );
};

export default Cell;
