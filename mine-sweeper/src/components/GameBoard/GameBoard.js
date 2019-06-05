import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Cell from 'components/Cell/Cell';
import GameStates from 'components/GameStates/GameStates';

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
   position: relative;
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
      gameState: 'not started',
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

   handleCellClick = ( type, row, column ) => {
      this.setState( ( prevState ) => {
         const board = [ ...prevState.board ];
         const { rows, columns } = prevState;
         const cell = board[row][column];
         if ( type === 'left' && !cell.isFlagged ) {
            if ( cell.type === 'bomb' ) {
               cell.isOpen = true;
               this.lostGame();
            }
            if ( cell.type === 'normal' ) {
               cell.isOpen = true;
               if ( cell.number === 0 ) {
                  const queue = [ [ row, column ] ];
                  //there should be O(1) implementation of queue in JS...
                  const directions = [
                     [ 0, -1 ],
                     [ 0, 1 ],
                     [ -1, 0 ],
                     [ 1, 0 ],
                     [ -1, -1 ],
                     [ -1, 1 ],
                     [ 1, -1 ],
                     [ 1, 1 ],
                  ];
                  while ( queue.length ) {
                     const current = queue[0];

                     directions.forEach( ( direction ) => {
                        const row = current[0] + direction[0];
                        const column = current[1] + direction[1];
                        if (
                           row >= 0 &&
                           row < rows &&
                           column >= 0 &&
                           column < columns
                        ) {
                           if (
                              board[row][column].type !== 'bomb' &&
                              !board[row][column].isFlagged
                           ) {
                              if (
                                 board[row][column].number === 0 &&
                                 board[row][column].isOpen === false
                              )
                                 queue.push( [ row, column ] );
                              board[row][column].isOpen = true;
                           }
                        }
                     } );

                     queue.shift();
                  }
               }
            }
         }
         if ( type === 'right' ) {
            cell.isFlagged = !cell.isFlagged;
         }
         return { board };
      } );
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
   handleGameStates = () => {
      const { gameState } = this.state;
      return <GameStates gameState={ gameState } restart={ this.startGame } />;
   };
   lostGame = () => {
      this.setState( ( prevState ) => {
         const board = [ ...prevState.board ];
         const { rows, columns } = prevState;
         for ( let i = 0; i < rows; i++ ) {
            for ( let j = 0; j < columns; j++ ) {
               if ( board[i][j].type === 'bomb' ) board[i][j].isOpen = true;
            }
         }
         return { board: board, gameState: 'lost' };
      } );
   };
   startGame = () => {
      const board = this.generateBoard();
      this.setState( {
         board,
         gameState: 'started',
      } );
   };
   render() {
      const { rows, columns, gameState } = this.state;
      return (
         <>
            {gameState !== 'not started' ? (
               <Board
                  rows={ rows }
                  columns={ columns }
                  onContextMenu={ ( e ) => e.preventDefault() }
               >
                  {this.createGameCells()}
                  {this.handleGameStates()}
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
