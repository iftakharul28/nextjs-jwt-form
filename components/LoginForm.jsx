import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const LoginForm = () => {
  const router = useRouter();
  const [forget, setForget] = useState(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/login', input);
      if (data) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="form"
      method="post"
      onSubmit={forget ? handleReset : handleLogin}
    >
      <h5 className="form__heading">LogIn Form</h5>
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          placeholder="name@company.com"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          required
        />
      </div>
      {!forget && (
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form__input"
            placeholder="••••••••"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            required
          />
        </div>
      )}
      <button type="submit" className="form__button">
        {forget ? 'Submit' : 'Login'}
      </button>

      <div className="form__regester" onClick={() => setForget(!forget)}>
        <label htmlFor="checkbox" className="form__checkbox">
          checkbox
        </label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        forget Password ?
      </div>
      <Link href="/register">
        <a className="form__regester">
          Not registered?
          <span>Create account</span>
        </a>
      </Link>
    </form>
  );
};

export default LoginForm;
