export type Post = {
  id: number;
  _id: number;
  user: { username: string };
  title: string;
  tags: string[];
  score: number;
};
