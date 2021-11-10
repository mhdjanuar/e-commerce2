import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { getHome } from './services';
import { useHistory } from 'react-router';
import { Button, Typography } from 'antd';

const Home: React.FC = () => {
  const { Title } = Typography;

  const jsonPlacholder = async () => {
    const data = await getHome();
  }

  useEffect(() => {
    jsonPlacholder()
  })

  const dispatch = useDispatch()
  const error = useSelector((state: ApplicationState) => state.home.error)
  
  return (
    <>
      <Title>Dashboard</Title>
      <p onClick={() => dispatch({ type: 'Home_Test_Redux' })}>Home</p>
    </>
  );
};

export default Home;
