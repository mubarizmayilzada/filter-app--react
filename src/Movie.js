import {motion} from "framer-motion";
const Movie = ({movie}) => {
  return (
    <motion.div
    animate={{opacity: 1}} 
    initial={{opacity: 0}} 
    exit={{opacity: 0}} 
    transition={{duration: 1}}
    layout>
        <h2>
           {movie.title}
        </h2>
        <img src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path}/>
    </motion.div>
  )
}

export default Movie;