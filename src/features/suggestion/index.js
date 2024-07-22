import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestion, selectLoading, selectError, selectSuggestion } from './suggestion.slice'; // Adjust import based on your file structure

export default function Suggestion() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const suggestion = useSelector(selectSuggestion);

  useEffect(() => {
    dispatch(fetchSuggestion());
  }, [dispatch]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Sorry, we're having trouble loading the suggestion.</h3>;

  if (suggestion) {
    return (
        <div>
          <img alt={suggestion.caption} src={suggestion.imageUrl} />
          <p>{suggestion.caption}</p>
        </div>
    );
  }

  return null;
}
