import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'assets/styles/GlobalStyle';

const PageTemplate = ( { children } ) => {
   return (
      <>
         <GlobalStyle />
         {children}f
      </>
   );
};
PageTemplate.propTypes = {
   children: PropTypes.oneOfType( [
      PropTypes.arrayOf( PropTypes.node ),
      PropTypes.node,
   ] ).isRequired,
};

export default PageTemplate;
