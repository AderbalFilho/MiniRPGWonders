import { ICard } from "./ICard";

export interface ICreator extends ICard {
  id: number;
  alias?: string;
};
