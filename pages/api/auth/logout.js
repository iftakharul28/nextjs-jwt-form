import { serialize } from 'cookie';
import axios from 'axios';

export default async function logoutHandler(req, res) {
  console.log(`Bearer ${req.body.token}`);

  // const postRes = await axios.post('http://localhost:8000/api/v1/user/logout', {
  //   headers: {
  //     Authorization: `Bearer ${req.body.token}`,
  //   },
  // });
  // if (postRes.status === 200) {
  //   const { myTokenName } = req.cookies;
  //   if (!myTokenName) {
  //     return res.status(401).json({ error: 'Not logged in' });
  //   }
  //   const serialized = serialize('myTokenName', null, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: 'strict',
  //     maxAge: 0,
  //     path: '/',
  //   });

  //   res.setHeader('Set-Cookie', serialized);
  //   return res.status(200).json({
  //     message: 'Logout successful',
  //   });
  // }
}
