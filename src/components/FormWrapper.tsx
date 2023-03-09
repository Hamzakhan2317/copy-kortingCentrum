import { FC, ReactElement } from 'react';
import { Grid, Input, Typography } from '@mui/material';

interface Props {
  children?: ReactElement;
  heading?: string;
}

const FormWrapper: FC<Props> = ({ children, heading }) => {
  return (
    <Grid>
      {heading ? (
        <Typography variant="h6" marginLeft={0.6} marginBottom={2} gutterBottom>
          {heading}
        </Typography>
      ) : null}
      {children}
    </Grid>
  );
};

export default FormWrapper;
