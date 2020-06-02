export const up = (): string => {
  return "CREATE TABLE todo (id serial, text text, done boolean)";
};

export const down = (): string => {
  return "DROP TABLE todo"
};
