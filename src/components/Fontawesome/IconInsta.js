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

    const goInsta = () => {
        // 추후에 연결
    }

    return (
        <StyledIcon icon={faInstagram} onClick={goInsta} />
    )
}
export default IconInsta;