import { ReactNode } from "react";

export interface IBook {
  Year: ReactNode;
  id: number;
  Title: string;
  author: string;
  releaseDate: string;
}
