import styled from 'styled-components';

export const StyledWrapper = styled.div`
   background: rgba(100, 100, 100, 0.9);
   text-align: center;
   padding: 2em;
`;
export const StyledTitle = styled.h2`
   color: ${( { titleColor } ) => titleColor};
   font-size: 7em;
   margin: 0;
`;
export const StyledButton = styled.button`
   font-size: 3em;
   margin: 0.8em;
   padding: 0.5em 1em;
   background-color: #fff;
`;
