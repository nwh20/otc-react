import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 13px;
    color: rgb(95, 95, 95);
    cursor: pointer;
    }
`;

const IconSearch = () => {

    const goEbay = () => {
        window.open('https://www.ebay.com/usr/bummesasak_0?_trksid=p2047675.l2559', 'newWindow');
    }
    
    return (
        <StyledIcon icon={faSearch} onClick={goEbay} />
    )
}
export default IconSearch;