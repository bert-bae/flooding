export const replaceString = (
  originalStr: string,
  replacement: string,
  regex: RegExp
) => {
  return originalStr.replace(regex, replacement);
};
