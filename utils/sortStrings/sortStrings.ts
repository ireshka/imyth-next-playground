type SortStringsArgs = {
  (a: string, b: string, order?: "ascend" | "descend"): number;
};

const sortStrings: SortStringsArgs = (a, b, order = "ascend") => {
  let result;
  const stringA = a.toLowerCase();
  const stringB = b.toLowerCase();

  result = stringA.localeCompare(stringB, undefined, {
    ignorePunctuation: true,
    sensitivity: "accent",
  });

  if (order === "descend") {
    result *= -1;
  }
  return result;
};

export { sortStrings };
