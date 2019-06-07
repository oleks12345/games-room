import styled from 'styled-components';

export const StyledWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background-color: #ddd;
   border-radius: 5em;
   font-size: 5px;
   margin: auto;
   padding: 4em;
   @media (min-width: 640px) {
      font-size: 8px;
   }
   @media (min-width: 768px) {
      font-size: 10px;
   }
`;
