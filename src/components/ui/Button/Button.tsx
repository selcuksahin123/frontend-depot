import {ReactElement} from 'react';
import {Box, Button as MUIButton, ButtonProps} from '@mui/material';

type Props = {
  text: string;
  backgroundButton?: string;
  onHoverBackgroundButton?: string;
  padding?: string | number;
} & ButtonProps;

export default function Button({
  text,
  padding,

  ...props
}: Props): ReactElement {
  return (
    <Box
      sx={{
        backgroundSize: 'cover',
        minWidth: 160,
      }}
    >
      <MUIButton
        fullWidth
        sx={{
          borderRadius: 0,
          color: 'white',
          padding: padding ?? '14px',
          '&: hover': {
            color: '#53fbed'
          }
        }}
        variant="text"
        {...props}
      >
        {text}
      </MUIButton>
    </Box>
  );
}
