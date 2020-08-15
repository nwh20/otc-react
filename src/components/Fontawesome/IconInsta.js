import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: rgb(95, 95, 95);
    cursor: pointer;
    }
`;

const IconInsta = () => {
    return (
        <StyledIcon icon={faInstagram} />
    );
}

export default IconInsta;