import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InputLabel, StyledInput, StyledButton } from './Settings-styles';
import { sendChanges } from './sendChanges';

const Settings = ( { toogleSettingsMenu, settings, changeSettings } ) => {
   const [ inputs, setInputs ] = useState( settings );

   const handleInputChange = ( e ) => {
      setInputs( {
         ...inputs,
         [e.target.name]: parseInt( e.target.value ? e.target.value : 0 ),
      } );
   };

   return (
      <>
         {Object.keys( settings ).map( ( setting ) => (
            <InputLabel key={ 'input=' + setting } htmlFor={ setting }>
               {setting}:
               <StyledInput
                  value={ inputs[setting] }
                  onChange={ handleInputChange }
                  name={ setting }
               />
            </InputLabel>
         ) )}
         <StyledButton
            onClick={ () => {
               sendChanges( inputs, changeSettings );
               toogleSettingsMenu();
            } }
            type="button"
         >
            Confirm Settings
         </StyledButton>
         <StyledButton
            disabled={ settings === inputs }
            onClick={ () => setInputs( settings ) }
            type="button"
         >
            Revert hanges
         </StyledButton>
         <StyledButton onClick={ toogleSettingsMenu } type="button">
            Go back
         </StyledButton>
      </>
   );
};
Settings.propTypes = {
   toogleSettingsMenu: PropTypes.func.isRequired,
   settings: PropTypes.shape().isRequired,
   changeSettings: PropTypes.func.isRequired,
};
export default Settings;
