import styled, { css } from 'styled-components';

export const StyledCell = styled.button`
   font-size: 1em;
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
            left: -10px;
            right: -10px;
            top: -10px;
            bottom: -10px;
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
   font-size: 5em;
`;
export const CellImg = styled.img`
   background-color: ${( { color } ) => ( color ? color : '#dddddd' )};
   width: 100%;
   height: 100%;
`;
