import React from 'react';
import PropTypes from 'prop-types';

const Settings = ( { toogleSettingsMenu } ) => {
   return (
      <div>
         <button onClick={ toogleSettingsMenu } type="button">
            Go back
         </button>
      </div>
   );
};
Settings.propTypes = {
   toogleSettingsMenu: PropTypes.bool.isRequired,
};
export default Settings;
