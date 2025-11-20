// components/IonIcon.tsx
import React from 'react';

interface IonIconProps {
  name: string;
  className?: string;
  size?: 'small' | 'large' | string;
  color?: string;
  mode?: 'ios' | 'md';
}

const IonIcon = React.forwardRef<HTMLElement, IonIconProps>(
  ({ name, className, size, color, mode }, ref) => {
    const props: any = {
      ref,
      name,
    };

    if (className) props.class = className;
    if (size) props.size = size;
    if (color) props.color = color;
    if (mode) props.mode = mode;

    return React.createElement('ion-icon', props);
  }
);

IonIcon.displayName = 'IonIcon';

export default IonIcon;