import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InputLabel, StyledInput, StyledButton } from './Settings-styles';

const Settings = ( { toogleSettingsMenu, settings, changeSettings } ) => {
   const [ inputs, setInputs ] = useState( settings );

   const handleInputChange = ( e ) => {
      setInputs( {
         ...inputs,
         [e.target.name]: parseInt( e.target.value ? e.target.value : 0 ),
      } );
   };

   const sendChanges = () => {
      if ( inputs.rows > 36 || inputs.columns > 36 ) {
         alert( 'board too big, it might have at most 36 columns and 36 rows' );
         return;
      }
      if ( inputs.rows < 3 || inputs.columns < 3 ) {
         alert( 'board must have at least 3 rows and 3 columns' );
         return;
      }
      if ( inputs.bombs > ( inputs.columns * inputs.rows ) / 2 ) {
         alert(
            `There can be at most 1/2 bombs ( ${Math.floor(
               ( inputs.columns * inputs.rows ) / 2
            )} ) `
         );
         return;
      }
      if ( inputs.bombs < 1 ) {
         alert( 'there must be at least 1 bomb' );
         return;
      }

      changeSettings( inputs );
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
         <StyledButton onClick={ sendChanges } type="button">
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
