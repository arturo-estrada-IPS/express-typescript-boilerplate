import express from 'express';
import { helloWorld } from '../controllers/helloWorld';

export default function Router() {
  const router = express.Router();

  router.route('/')
    .get(helloWorld);

  return router;
}
