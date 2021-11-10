import path from 'path';

//@ts-ignore
const isLocal = typeof process.pkg === 'undefined';

export const basePath = isLocal
  ? process.cwd()
  : path.dirname(process.execPath);

export const pathIsAbsolute = (path: string) => {
  if (/^[A-Za-z]:(\\|\/)/.test(path)) return true;
  if (path.indexOf('\\') == 0 && path.indexOf('/') == 0) return true;
  return false;
};
