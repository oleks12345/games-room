import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Cell from 'components/Cell/Cell';

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
      rows: 16,
      columns: 16,
      bombs: 40,
      board: [],
      started: false,
   };

   createGameCells = () => {
      const { rows, columns, board } = this.state;
      const cells = [];

      for ( let i = 0; i < rows; i++ ) {
         for ( let j = 0; j < columns; j++ ) {
            cells.push( <Cell cellData={ board[i][j] } /> );
         }
      }
      return cells;
   };
   generateBoard = () => {
      const { rows, columns, bombs } = this.state;

      const board = [];
      for ( let i = 0; i < rows; i++ ) {
         board.push( [] );
         for ( let j = 0; j < columns; j++ ) {
            board[i].push( { type: null, isOpen: false } );
         }
      }
      for ( let i = 0; i < bombs; i++ ) {
         const column = Math.floor( Math.random() * columns );
         const row = Math.floor( Math.random() * rows );
         if ( board[row][column].type === null ) {
            board[row][column].type = 'bomb';
         } else i--;
      }
   };

   startGame = () => {
      this.generateBoard();
   };
   render() {
      const { rows, columns, started } = this.state;
      return (
         <>
            {started ? (
               <Board rows={ rows } columns={ columns }>
                  {this.createGameCells()}
               </Board>
            ) : (
               <button onClick={ this.startGame } type="button">
                  Start
               </button>
            )}
         </>
      );
   }
}

export default GameBoard;
