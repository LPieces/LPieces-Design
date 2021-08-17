import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'lpd-zoom-in-top' | 'lpd-zoom-in-left' | 'lpd-zoom-in-bottom' | 'lpd-zoom-in-right';
declare type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
};
declare const Transition: React.FC<TransitionProps>;
export default Transition;
