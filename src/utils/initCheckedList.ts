import { checkList } from "@/types";

export const initCheckedList = () => {
  const checkedList: checkList = {};
  for (let i = 0; i < 47; i++) {
    checkedList[String(i + 1)] = false;
  }
  return checkedList;
};
