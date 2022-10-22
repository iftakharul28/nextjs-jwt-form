import React from 'react';
import { LoginForm } from '../components';
import { Layout } from '../layout';

export default function Login() {
  return (
    <Layout title="Login">
      <main className="main">
        <div className="form__wrapper">
          <LoginForm />
        </div>
      </main>
    </Layout>
  );
}
