export interface ShiftData {
  id: string;
  userId: string;
  locationId: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  // createdAt: Date;
  // isDeleted: boolean;
}

const DATA = {
  id: '1',
  userId: '2',
  locationId: '3',
  startDate: new Date(),
  endDate: new Date(),
  duration: 120,
};

export const list = async (userId: string, filter: { user: string }): Promise<ShiftData[]> => {
  return [DATA];
};

export const retrieve = async (userId: string, shiftId: string): Promise<ShiftData> => {
  return DATA;
};

export const create = async (userId: string, data: Partial<ShiftData>): Promise<ShiftData> => {
  const shiftId = '1';
  const userData = await retrieve(userId, shiftId);
  return userData;
};

export const update = async (userId: string, shiftId: string, data: Partial<ShiftData>): Promise<ShiftData> => {
  const userData = await retrieve(userId, shiftId);
  return userData;
};

export const remove = async (userId: string, shiftId: string) => {};
