import { Request, Response } from 'express';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const newUser: PlatformUser = {
    id: '',
    email,
    password
  };

  try {
    const user = await createUser(newUser);

    if (!user) {
      res.status(400).json({ message: 'Could not create user' });
      return;
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Could not create user' });
  }
};
