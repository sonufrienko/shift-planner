import express, { Request, Response } from 'express';
import * as shifts from './services/shifts';
import { getErrorMessage } from './common';
export const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = 'test-user-id';
    const data = await shifts.list(userId, { user: req.query.user as string });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
});

router.get('/:shiftId', async (req: Request, res: Response) => {
  try {
    const userId = 'test-user-id';
    const data = await shifts.retrieve(userId, req.params.shiftId);
    if (data) {
      res.status(200).send(data);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const userId = 'test-user-id';
    const data = await shifts.create(userId, req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
});

router.patch('/:shiftId', async (req: Request, res: Response) => {
  try {
    const userId = 'test-user-id';
    const data = await shifts.update(userId, req.params.shiftId, req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
});

router.delete('/:shiftId', async (req: Request, res: Response) => {
  try {
    const userId = 'test-user-id';
    await shifts.remove(userId, req.params.shiftId);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(getErrorMessage(err));
  }
});
