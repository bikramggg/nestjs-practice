// src/users/schemas/index.ts
import { User, UserSchema } from './user.schema';
// Add other schema imports here

export const schemas = [
  { name: User.name, schema: UserSchema },
  // Add other schemas here
];
