import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  max-width: 900px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const DetailsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  h1 {
    color: #2c3e50;
    margin-bottom: 35px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3498db;
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

const DetailSection = styled.div`
  margin-bottom: 35px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;

  h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 500;
  }

  p {
    margin: 12px 0;
    color: #34495e;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  strong {
    color: #2c3e50;
    margin-right: 10px;
    font-weight: 600;
  }
`;

const NotFoundMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #7f8c8d;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

const Userdetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return (
      <Container>
        <BackButton onClick={() => navigate('/')}>← Back to Users</BackButton>
        <NotFoundMessage>User not found</NotFoundMessage>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>← Back to Users</BackButton>

      <DetailsCard>
        <h1>{user.name}</h1>

        <DetailSection>
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </DetailSection>

        <DetailSection>
          <h2>Company</h2>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </DetailSection>

        <DetailSection>
          <h2>Address</h2>
          <p>
            <strong>Street:</strong> {user.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {user.address.suite}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.address.zipcode}
          </p>
        </DetailSection>
      </DetailsCard>
    </Container>
  );
};

export default Userdetails;
