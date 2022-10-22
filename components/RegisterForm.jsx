import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

const RegisterForm = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    password_confirmation: '',
    tc: true,
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/auth/register', input);
      if (data) {
        router.push('/dashboard');
      }
    } catch (error) {
      if (error.status === !200) {
        console.log(error.status);
      }
    }
  };
  return (
    <form className="form" method="post" onSubmit={handleSignup}>
      <h5 className="form__heading">Register Form</h5>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="form__input"
          placeholder="Jone Due"
          required
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
      </div>
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
          required
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="number" className="form__label">
          Number
        </label>
        <input
          type="number"
          name="number"
          id="number"
          className="form__input"
          placeholder="+88017*****"
          required
          value={input.number}
          onChange={(e) =>
            setInput({ ...input, number: e.target.value.replace(/\D/g, '') })
          }
        />
      </div>
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
          required
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">
          Re-Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input"
          placeholder="••••••••"
          required
          value={input.password_confirmation}
          onChange={(e) =>
            setInput({ ...input, password_confirmation: e.target.value })
          }
        />
      </div>
      <button type="submit" className="form__button">
        Register
      </button>
      <Link href="/login">
        <a className="form__regester">
          Alrady registered?
          <span>Login account</span>
        </a>
      </Link>
    </form>
  );
};

export default RegisterForm;
