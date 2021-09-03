import React from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>; // 原生的ButtonProps
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>; // 原生的AnchorProps (a标签)
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>; // 联合

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, size, disabled, children, href, className, ...restProps } = props;

  const classes = classNames('lpd-btn', className, {
    [`lpd-btn-${btnType}`]: btnType,
    [`lpd-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link') {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
};

export default Button;