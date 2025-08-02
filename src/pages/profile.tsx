import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../redux/actions/userActions';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorNotification from '../components/ErrorNotification';
import FeedbackHistory from '../components/FeedbackHistory';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const { userProfile, loading, error } = useSelector((state) => state.userProfile);

  React.useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{userProfile.username}</h2>
        <p>Email: {userProfile.email}</p>
        <FeedbackHistory feedbacks={userProfile.feedbacks} />
      </div>
    </div>
  );
};

export default ProfilePage;