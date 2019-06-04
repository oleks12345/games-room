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
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-family: arial;
   font-weight: bold;
   background-color: #dddddd;
   font-size: 50px;
`;
const CellImg = styled.img`
   background-color: #dddddd;
   width: 100%;
   height: 100%;
`;

const Cell = ( { cellData, click } ) => {
   const { isOpen, isFlagged, number, type, row, column } = cellData;
   let cellColor = '';
   switch ( number ) {
   case 1:
      cellColor = 'blue';
      break;
   case 2:
      cellColor = 'green';
      break;
   case 3:
      cellColor = 'red';
      break;
   case 4:
      cellColor = 'purple';
      break;
   case 5:
      cellColor = 'maroon';
      break;
   case 6:
      cellColor = 'turquoise';
      break;
   case 7:
      cellColor = 'black';
      break;
   case 8:
      cellColor = 'grey';
      break;
   default:
      break;
   }
   return (
      <>
         {isOpen ? (
            type === 'bomb' ? (
               <CellImg src={ bombIcon } />
            ) : (
               <EmptyCell style={ { color: cellColor } }>
                  {number !== 0 && number}
               </EmptyCell>
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
