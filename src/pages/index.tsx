import React from 'react';
import { GetServerSideProps } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFeedbacks } from '../redux/actions/feedbackActions';
import FeedbackList from '../components/FeedbackList';
import Filters from '../components/Filters';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorNotification from '../components/ErrorNotification';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { feedbacks, loading, error } = useSelector((state) => state.feedbacks);

  React.useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feedback Threads</h1>
      <Filters />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  // Add server-side logic if needed
  return { props: {} };
};