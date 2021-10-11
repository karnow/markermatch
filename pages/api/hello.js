// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {user} from 'models';


export default async(req, res)=>{
  const allUsers =await user.findMany();

  res.status=200;
  res.json({ allUsers })
};
