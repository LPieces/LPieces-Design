import React, { ChangeEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames';
import Icon from '../Icon/icon';

type InputSize = 'lg' | 'sm'
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> { // Omit
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | React.ReactElement;
    append?: string | React.ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props):React.ReactElement => {
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props;
    const cnames = classNames('lpd-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })
    const fixControlledValue = (value: any) => {
        if(typeof value === 'undefined' || value === null) {
            return ''
        } else {
            return value
        }
    }
    if('value' in props) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(restProps.value)
    }
    return (
        <div className={cnames} style={style}>
            {prepend && <div className="lpd-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}></Icon></div>}
            <input 
                className="lpd-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="lpd-input-group-append">{append}</div>}
        </div>
    )
}

export default Input;