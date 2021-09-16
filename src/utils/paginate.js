import _ from "lodash";

export const pagination = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1)*pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};