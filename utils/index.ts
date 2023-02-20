export const filterWords = (words: string[], search: string) => {
  if (
    words.some((word) => word.startsWith(search)) ||
    search.split(" ").every((word) => words.some((w) => w.startsWith(word)))
  ) {
    return 1;
  }

  return 0;
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};