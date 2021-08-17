import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
interface IconProos extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProos>;
export default Icon;
