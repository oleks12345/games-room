import React from 'react';
import PropTypes from 'prop-types';

const Settings = ( { isSettingsOpen, setIsSettingsOpen } ) => {
   return (
      <div>
         <button
            onClick={ () => setIsSettingsOpen( !isSettingsOpen ) }
            type="button"
         >
            Go back
         </button>
      </div>
   );
};
Settings.propTypes = {
   isSettingsOpen: PropTypes.bool.isRequired,
   setIsSettingsOpen: PropTypes.func.isRequired,
};
export default Settings;
