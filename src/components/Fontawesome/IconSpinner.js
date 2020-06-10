import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: rgb(187, 108, 108);
    animation: spin .7s linear infinite;

    @keyframes spin {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
    }
`;

const IconSpinner = () => {
    return (
        <StyledIcon icon={faSpinner} />
    )
}
export default IconSpinner;