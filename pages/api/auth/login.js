import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import axios from 'axios';

export default async function loginHandler(req, res) {
  const postRes = await axios.post(
    'http://localhost:8000/api/v1/user/login',
    req.body
  );
  if (postRes.status === 200) {
    // expire in 30 days
    const userToken = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        token: postRes.data.token,
        name: postRes.data.name,
        number: postRes.data.number,
        email: postRes.data.email,
      },
      'secret'
    );
    const clientDetails = {
      name: postRes.data.name,
      number: postRes.data.number,
    };

    const serialized = serialize('myTokenName', userToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);
    return res.status(200).json({
      message: 'Login successful',
    });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
