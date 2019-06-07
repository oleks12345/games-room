import styled, { css } from 'styled-components';

export const StyledCell = styled.button`
   font-size: 0.2em;
   position: relative;
   border-width: 1em;
   border-top-color: white;
   border-left-color: white;
   padding: 0;
   background-color: #dddddd;
   :active {
      border-right-color: white;
      border-bottom-color: white;
   }
   ${( { color } ) =>
      color &&
      css`
         ::after {
            content: '';
            position: absolute;
            left: -1em;
            right: -1em;
            top: -1em;
            bottom: -1em;
            background-color: ${color};
            opacity: 0.5;
         }
      `}
`;
export const EmptyCell = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   font-family: arial;
   font-weight: bold;
   background-color: #dddddd;
   font-size: 1em;
`;
export const CellImg = styled.img`
   background-color: ${( { color } ) => ( color ? color : '#dddddd' )};
   width: 100%;
   height: 100%;
   padding: 2px;
`;
