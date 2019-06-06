import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Settings = ( { toogleSettingsMenu, settings, changeSettings } ) => {
   const [ inputs, setInputs ] = useState( settings );
   const handleInputChange = ( e ) => {
      setInputs( {
         ...inputs,
         [e.target.name]: parseInt( e.target.value ),
      } );
   };
   return (
      <>
         {Object.keys( settings ).map( ( setting ) => (
            <div key={ 'input=' + setting }>
               <label htmlFor={ setting }>
                  {setting}:
                  <input
                     value={ inputs[setting] }
                     onChange={ handleInputChange }
                     name={ setting }
                  />
               </label>
            </div>
         ) )}
         <button onClick={ () => changeSettings( inputs ) } type="button">
            Confirm Settings
         </button>
         <button onClick={ toogleSettingsMenu } type="button">
            Go back
         </button>
      </>
   );
};
Settings.propTypes = {
   toogleSettingsMenu: PropTypes.func.isRequired,
   settings: PropTypes.shape().isRequired,
   changeSettings: PropTypes.func.isRequired,
};
export default Settings;
