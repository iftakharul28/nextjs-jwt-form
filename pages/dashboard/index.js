import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../layout';

function Dashboard() {
  const [user, setUser] = useState({
    token: '',
    email: '',
    name: '',
    number: '',
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get('/api/profile');
    setUser({
      ...user,
      token: profile.data.token,
      email: profile.data.email,
      name: profile.data.name,
      number: profile.data.number,
    });
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout', user);
    } catch (error) {
      console.error(error.message);
    }
    router.push('/login');
  };
  return (
    <Layout title="Dashboard">
      <div>
        {user.email}
        {user.name}
        {user.number}
        <button onClick={() => getProfile()}>profile</button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </Layout>
  );
}

export default Dashboard;
