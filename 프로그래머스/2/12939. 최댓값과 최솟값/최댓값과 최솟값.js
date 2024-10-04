const solution = (str) => {
  const arr = str.split(" ");

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};