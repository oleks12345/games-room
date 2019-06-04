import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Cell from 'components/Cell/Cell';

const GRID_SIZE = '50px';
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
   grid-gap: 1px;
   background-color: #222;
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
            cells.push(
               <Cell
                  key={ 'r' + i + 'c' + j }
                  click={ this.handleCellClick }
                  cellData={ board[i][j] }
               />
            );
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
            board[i].push( {
               type: 'normal',
               number: -1,
               isOpen: false,
               isFlagged: false,
               row: i,
               column: j,
            } );
         }
      }
      for ( let i = 0; i < bombs; i++ ) {
         const column = Math.floor( Math.random() * columns );
         const row = Math.floor( Math.random() * rows );
         if ( board[row][column].type === 'normal' ) {
            board[row][column].type = 'bomb';
         } else i--;
      }
      const directions = [ -1, 0, 1 ];
      for ( let i = 0; i < rows; i++ ) {
         for ( let j = 0; j < columns; j++ ) {
            if ( board[i][j].type === 'bomb' ) continue;
            let bombsCount = 0;
            directions.forEach( ( directionY ) => {
               directions.forEach( ( directionX ) => {
                  if (
                     i + directionY >= 0 &&
                     i + directionY < rows &&
                     j + directionX >= 0 &&
                     j + directionX < columns
                  ) {
                     if ( board[i + directionY][j + directionX].type === 'bomb' )
                        bombsCount++;
                  }
               } );
            } );
            board[i][j].number = bombsCount;
         }
      }
      return board;
   };

   startGame = () => {
      const board = this.generateBoard();
      this.setState( {
         board,
         started: true,
      } );
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
