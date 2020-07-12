import React from 'react';
import Alert from '@material-ui/lab/Alert';

function AlertForm({ alert }) {
  return (
    <div>
      {
        alert ? (
          <Alert style={{marginBottom: 15}}  severity="error">Please add item</Alert>
        ) :
          null
      }
    </div>
  )
}
AlertForm.displayName = 'AlertForm';

export default AlertForm;
