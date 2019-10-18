import classnames from "classnames";

export function gen_classname(
  curr: number,
  index: number,
  cls?: string
): string {
  return classnames(cls, { "gcs--selected": curr === index });
}

export function formatDate(date: Date): string {
  const month = date.getMonth() + 1;
  const monthString = month < 10 ? `0${month}` : `${month}`;
  const day = date.getDate();
  const dayString = day < 10 ? `0${day}` : `${day}`;

  return `${date.getFullYear()}-${monthString}-${dayString}`;
}
