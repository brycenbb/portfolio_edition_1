import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels({ smooth, setSmooth }) {
  function toggleSmooth() {
    setSmooth((smooth) => {
      return !smooth;
    });
  }
  return (
    <FormGroup
      sx={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: 'fit-content',
      }}
    >
      <FormControlLabel
        control={<Switch defaultChecked color="warning" />}
        label="Smooth-Scroll"
        sx={{ color: 'var(--leaf)' }}
        onClick={toggleSmooth}
      />
    </FormGroup>
  );
}
