import React from 'react';
import PropTypes from 'prop-types';

import bombIcon from 'assets/images/mine.png';
import flagIcon from 'assets/images/flag.svg';

import { StyledCell, EmptyCell, CellImg } from './Cell-styles';
import { cellColor } from './cellColor';

const Cell = ( { cellData, click } ) => {
   const { isOpen, isFlagged, number, type, row, column, color } = cellData;

   return (
      <>
         {isOpen ? (
            type === 'bomb' ? (
               <CellImg color={ color } src={ bombIcon } />
            ) : (
               <EmptyCell style={ { color: cellColor( number ) } }>
                  {number !== 0 && number}
               </EmptyCell>
            )
         ) : (
            <StyledCell
               color={ color }
               onContextMenu={ () => {
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
