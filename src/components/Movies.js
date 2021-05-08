import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movies/moviesSlice";
import { useSelector} from "react-redux"


const Movies = () => {

  const movies = useSelector(selectMovies);
  //console.log("This is movies ", movies);

  
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {
          movies && movies.map(movie => (
            <Wrap key={movie.id}>
            <img src={movie.cardImg}/>
          </Wrap>
          ))
        }
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
overflow: hidden;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.01);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
