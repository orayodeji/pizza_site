import { ExtraPizzaTiles, MenuPageCateProps } from "./menu";

export const splitIntoThree = (arr: MenuPageCateProps[]) => {
  const firstHalf = Math.ceil(arr.length / 2);
  const first = arr.slice(0, firstHalf);
  const remaining = arr.slice(firstHalf);
  const secondHalf = Math.ceil(remaining.length / 2);
  const second = remaining.slice(0, secondHalf);
  const third = remaining.slice(secondHalf);
  return [first, second, third];
};

export const getNameById = (id: number) =>
  ExtraPizzaTiles.find((obj) => obj.id === id)?.name;
