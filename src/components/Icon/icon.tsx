import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

interface IconProos extends FontAwesomeIconProps {
    theme?: ThemeProps
}

const Icon: React.FC<IconProos> = (props): React.ReactElement => {
    const { className, theme, ...restProps } = props;
    const classes = classNames('lpd-icon', className, {
        [`lpd-icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={ classes } { ...restProps } />
    )
}

export default Icon;
