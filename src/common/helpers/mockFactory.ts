import { Repository } from 'typeorm';

export type MockType<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]: jest.Mock<{}>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    find: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    create: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    delete: jest.fn((entity) => entity),
  }),
);
