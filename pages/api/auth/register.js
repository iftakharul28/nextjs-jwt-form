import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import axios from 'axios';

export default async function registerHandler(req, res) {
  const postRes = await axios.post(
    'http://localhost:8000/api/v1/user/register',
    req.body
  );
  if (postRes.status === 200) {
    // expire in 30 days
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        token: postRes.data.token,
        name: postRes.data.name,
        number: postRes.data.number,
        email: postRes.data.email,
      },
      'secret'
    );

    const serialized = serialize('myTokenName', token, {
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
    console.log(postRes.data);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
