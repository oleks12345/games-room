import React from 'react';
import PropTypes from 'prop-types';

import bombIcon from 'assets/images/mine.png';
import flagIcon from 'assets/images/flag.svg';

import { StyledCell, EmptyCell, CellImg } from './Cell-styles';

const Cell = ( { cellData, click } ) => {
   const { isOpen, isFlagged, number, type, row, column, color } = cellData;
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
               <CellImg color={ color } src={ bombIcon } />
            ) : (
               <EmptyCell style={ { color: cellColor } }>
                  {number !== 0 && number}
               </EmptyCell>
            )
         ) : (
            <StyledCell
               color={ color }
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
