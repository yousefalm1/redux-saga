import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fetchUsersRequest } from '../redux/actions/users';

const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const UserCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  h2 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.8rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  margin: 30px 0;
  font-size: 2.5rem;
  font-weight: 600;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #7f8c8d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 50px;
  color: #e74c3c;
  font-size: 1.2rem;
`;

const Usernames = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleUserClick = (user) => {
    navigate(`/user/${user.id}`, { state: { user } });
  };

  if (loading)
    return (
      <LoadingContainer>
        <Spinner />
        <div>Loading users...</div>
      </LoadingContainer>
    );
  if (error) return <ErrorContainer>Error: {error}</ErrorContainer>;

  return (
    <div>
      <Title>Users</Title>
      <UsersContainer>
        {users.map((user) => (
          <UserCard key={user.id} onClick={() => handleUserClick(user)}>
            <h2>{user.name}</h2>
          </UserCard>
        ))}
      </UsersContainer>
    </div>
  );
};

export default Usernames;
