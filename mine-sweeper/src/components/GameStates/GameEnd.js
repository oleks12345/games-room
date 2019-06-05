import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
   background: rgba(100, 100, 100, 0.9);
   text-align: center;
   padding: 20px;
`;
const StyledTitle = styled.h2`
   color: ${( { titleColor } ) => titleColor};
   font-size: 50px;
   margin: 0;
`;
const StyledButton = styled.button`
   font-size: 30px;
   margin: 20px;
   padding: 5px 10px;
   background-color: #fff;
`;

const GameEnd = ( { restart, title, titleColor } ) => {
   return (
      <StyledWrapper>
         <StyledTitle titleColor={ titleColor }>{title} </StyledTitle>
         <StyledButton onClick={ restart } type="button">
            Play again
         </StyledButton>
      </StyledWrapper>
   );
};
GameEnd.propTypes = {
   restart: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   titleColor: PropTypes.string.isRequired,
};
export default GameEnd;
