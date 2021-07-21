


// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from './HeroImage';
import Grid from './Grid/'
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch'

// Image
import NoImage from '../images/no_image.jpg'

const Home =()=>{
    const { state, loading, error, setSearchTerm ,searchTerm, setIsLoadingMore} = useHomeFetch();  //Custom Hook Call

    if(error){
        return( 
            <div>Something Went Wrong</div>
        )
    }

    return (
        <>
            { !searchTerm && state.results[0] &&
            <HeroImage 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
            />
            }
            <SearchBar  setSearchTerm={setSearchTerm}/>
            <Grid header={!searchTerm?'Popular Movies':'Search Result' }>
            {state.results.map(movie =>(
                <Thumb      /* each thumb is passed as children prop to Grid component*/
                key={movie.id}
                clickable
                image={
                    movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: NoImage
                }
                movieId={movie.id}
                />
            ))}
            </Grid>
            { loading &&<Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={()=>setIsLoadingMore(true)} />
            )}
        </>
    )
}

export default Home