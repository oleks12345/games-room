import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const GRID_SIZE = '30px';
const createGridStyle = ( amount ) => {
   let gridStyle = '';
   for ( let i = 0; i < amount; i++ ) {
      gridStyle += GRID_SIZE + ' ';
   }
   return css`
      ${gridStyle}
   `;
};

const Board = styled.div`
   display: grid;
   grid-template-columns: ${( { columns } ) => createGridStyle( columns )};
   grid-template-rows: ${( { rows } ) => createGridStyle( rows )};
`;

class GameBoard extends Component {
   state = {
      rows: 8,
      columns: 8,
   };
   createGameCells = () => {
      const { rows, columns } = this.state;
      const cells = [];
      for ( let i = 0; i < rows; i++ ) {
         for ( let j = 0; j < columns; j++ ) {
            cells.push( <div /> );
         }
      }
      return cells;
   };
   render() {
      const { rows, columns } = this.state;
      return (
         <Board rows={ rows } columns={ columns }>
            {this.createGameCells()}
         </Board>
      );
   }
}

export default GameBoard;
