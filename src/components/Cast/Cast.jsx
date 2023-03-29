import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Image, Text, Container } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { nanoid } from 'nanoid';
import { fetchMovieActorDetails } from 'components/serviseAPI/fetchMoviesAPI';
import imageValidation from 'components/imageValidation';

const CastSection = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchActor = async () => {
      const result = await fetchMovieActorDetails(id, {
        signal: abortController.signal,
      });
      if (result) setCast(result);
      setStatus('loaded');
    };

    if (cast !== null) return;
    fetchActor();

    return () => {
      abortController.abort();
    };
  }, [cast, id]);

  return (
    <Container>
      {status === 'idle' && <Loader />}
      {cast !== null && (
        <List>
          {cast.map(el => {
            return (
              <Item key={nanoid()}>
                <Image src={imageValidation(el.profile_path, 300)} />
                <Text>{el.name}</Text>
                <Text>Character: {el.character}</Text>
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  );
};

export default CastSection;
