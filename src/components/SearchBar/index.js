import React, { useState,useEffect,useRef} from 'react';

//Image (search icon)
import searchIcon from '../../images/search-icon.svg'

//Styles
import { Wrapper,Content } from './SearchBar.styles';


//Component

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('') // Search term state
    const initial = useRef(true)
    // useRef wont trigger a re-render
    useEffect(() => {
        if (initial.current){
            initial.current=false;
            return
        }
        const timer = setTimeout(() => {
            setSearchTerm(state); //sets the search term into useHomeFetch custom hook
        },500)

        return () => clearTimeout(timer) //removes timer and prevents setSearchTerm if the user continues to give input
    },[setSearchTerm, state])
    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input type="text" 
                placeholder="Search Movie"
                onChange={event => setState(event.target.value)}
                value={state}
                />

            </Content>

        </Wrapper>
    )
}


export default SearchBar