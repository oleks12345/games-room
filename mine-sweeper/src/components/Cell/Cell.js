import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import bombIcon from 'assets/images/mine.png';
import flagIcon from 'assets/images/flag.svg';

const StyledCell = styled.button`
   border-width: 10px;
   border-top-color: white;
   border-left-color: white;
   padding: 0;
   background-color: #dddddd;
   :active {
      border-right-color: white;
      border-bottom-color: white;
   }
`;
const EmptyCell = styled.div`
   background-color: #dddddd;
`;
const CellImg = styled.img`
   background-color: #dddddd;
   width: 100%;
   height: 100%;
`;

const Cell = ( { cellData, click } ) => {
   const { isOpen, isFlagged, type, row, column } = cellData;

   return (
      <>
         {isOpen ? (
            type === 'bomb' ? (
               <CellImg src={ bombIcon } />
            ) : (
               <EmptyCell />
            )
         ) : (
            <StyledCell
               onContextMenu={ ( e ) => {
                  e.preventDefault();
                  click( 'right', row, column );
               } }
               onClick={ () => {
                  click( 'left', row, column );
               } }
            >
               {isFlagged && <CellImg src={ flagIcon } />}
            </StyledCell>
         )}
      </>
   );
};
Cell.propTypes = {
   cellData: PropTypes.shape().isRequired,
   click: PropTypes.func.isRequired,
};
export default Cell;
