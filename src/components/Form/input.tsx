import { FC } from 'react';
import { Grid, Input, TextField } from '@mui/material';

interface Props {
  id?: undefined | string;
  label?: string;
  className?: string;
  type?: string;
  onChange?: () => void;
  value?: string;
  readOnly?: boolean;
  rows?: string;
  placeholder?: string;
  disabled?: boolean;
  // icon?: boolean;
  isPhoneNumber?: boolean;
  defaultValue?: number | string;
}

const InputField: FC<Props> = ({
  type = 'text',
  label,
  id = 'field',
  ...rest
}) => {
  return (
    <Grid item display={'flex'} margin={1} xs={3} md={4}>
      <label style={{ width: '50%' }} htmlFor={id}>
        {`${label}:`}
      </label>
      <TextField
        id={id}
        InputProps={{ disableUnderline: true }}
        sx={{
          borderRadius: '12px',
          height: '22px',
          background: 'white',
          padding: '0px 12px',
          fontSize: '8px',
        }}
        variant="standard"
        fullWidth
        type={type}
        {...rest}
      />
    </Grid>
  );
};

export default InputField;
