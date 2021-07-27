import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

type TypeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

const Icon: React.FC = (): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faCoffee} />
    )
}

export default Icon;
