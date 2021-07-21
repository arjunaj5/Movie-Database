import React from 'react';
import PropTypes from 'prop-types'
//Styled divs
import { Wrapper, Content } from '../Grid/Grid.styles';


//Component
const Grid = ({ header, children}) =>(  
    <Wrapper>
        {/* Special prop called children*/}
        <h1>
            {header}
        </h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid