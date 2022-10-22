import React from 'react';
import { RegisterForm } from '../components';
import { Layout } from '../layout';

const register = () => {
  return (
    <Layout title="Register">
      <main className="main">
        <div className="form__wrapper">
          <RegisterForm />
        </div>
      </main>
    </Layout>
  );
};

export default register;
