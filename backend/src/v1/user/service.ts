import { UserResponseDto } from "./dtos";
import * as UserQueries from "./queries";

export const getAllUsers = async (): Promise<UserResponseDto[]> => {
  const users = await UserQueries.getUsers();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
  }));
};

export const getUser = async (
  userId: string
): Promise<UserResponseDto | null> => {
  const user = await UserQueries.getUserById(userId);
  if (!user) {
    return null;
  }
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
  };
};
