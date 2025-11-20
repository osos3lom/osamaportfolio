// types/ionicons.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name: string;
        mode?: 'ios' | 'md';
        color?: string;
        size?: 'small' | 'large' | string;
        'flip-rtl'?: boolean;
        'aria-label'?: string;
        icon?: string;
        lazy?: boolean;
      };
    }
  }
}

export {};