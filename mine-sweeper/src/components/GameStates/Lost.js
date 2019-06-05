import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LostWrapper = styled.div`
   color: red;
   background: rgba(100, 100, 100, 0.9);
   text-align: center;
   padding: 20px;
`;
const StyledButton = styled.button`
   font-size: 50px;
   margin: 20px;
   background-color: #fff;
`;

const Lost = ( { restart } ) => {
   return (
      <LostWrapper>
         <div> You lost </div>
         <StyledButton onClick={ restart } type="button">
            Play again
         </StyledButton>
      </LostWrapper>
   );
};
Lost.propTypes = {
   restart: PropTypes.func.isRequired,
};

export default Lost;
