import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WonWrapper = styled.div`
   color: lime;
   background: rgba(100, 100, 100, 0.9);
   text-align: center;
   padding: 20px;
`;
const StyledButton = styled.button`
   font-size: 50px;
   margin: 20px;
   background-color: #fff;
`;

const Won = ( { restart } ) => {
   return (
      <WonWrapper>
         <div> You won </div>
         <StyledButton onClick={ restart } type="button">
            Play again
         </StyledButton>
      </WonWrapper>
   );
};
Won.propTypes = {
   restart: PropTypes.func.isRequired,
};
export default Won;
