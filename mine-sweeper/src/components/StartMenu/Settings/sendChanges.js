export const sendChanges = ( inputs, changeSettings ) => {
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
