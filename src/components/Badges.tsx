import { Badge } from '@mui/material';
import { FC } from 'react';

interface Props {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginRight?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  text: string;
  borderRadius?: string;
  background?: string;
  className?: string;
}

const Badges: FC<Props> = ({
  paddingTop = '2px',
  paddingBottom = '2px',
  paddingLeft = '2px',
  paddingRight = '2px',
  marginRight = '0px',
  marginLeft = '0px',
  marginTop = '0px',
  marginBottom = '0px',
  background = '#f5f5f5',
  text,
  borderRadius = '10px',
  className,
}) => {
  return (
    <Badge
      className={className}
      sx={{
        borderRadius: borderRadius,
        background: background,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
      color="secondary"
    >
      {text}
    </Badge>
  );
};

export default Badges;
