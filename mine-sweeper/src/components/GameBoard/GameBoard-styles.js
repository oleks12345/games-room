import styled, { css } from 'styled-components';

const createGridStyle = ( amount ) => {
   let gridStyle = '';
   for ( let i = 0; i < amount; i++ ) {
      gridStyle += '1em ';
   }
   return css`
      ${gridStyle}
   `;
};

export const Board = styled.div`
   margin: auto;
   padding: 1px;
   font-size: 25px;
   position: relative;
   display: grid;
   grid-gap: 1px;
   background-color: #222;
   grid-template-columns: ${( { columns } ) => createGridStyle( columns )};
   grid-template-rows: ${( { rows } ) => createGridStyle( rows )};
   @media (min-width: 768px) {
      font-size: 35px;
   }
`;
