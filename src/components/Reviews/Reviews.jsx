import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Text,
  List,
  Item,
  Avatar,
  Name,
  ProfileContainer,
  NoResult,
} from './Reviews.styled';
import { nanoid } from 'nanoid';
import { fetchMovieReviews } from 'components/serviseAPI/fetchMoviesAPI';

const ReviewsSection = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchReviews = async () => {
      const results = await fetchMovieReviews(id, {
        signal: abortController.signal,
      });
      if (results) setReviews(results);
      setStatus('loaded');
    };

    fetchReviews();
  }, [id]);

  return (
    <Container>
      {status === 'idle' && <Loader />}
      {reviews !== null && (
        <List>
          {reviews.length === 0 && <NoResult>Sorry, no result</NoResult>}
          {reviews.map(el => (
            <Item key={nanoid()}>
              <ProfileContainer>
                <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                <Name>{el.author}</Name>
              </ProfileContainer>
              <Text>{el.content}</Text>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ReviewsSection;
