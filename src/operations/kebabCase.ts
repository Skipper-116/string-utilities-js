export const kebabCase = (str: string): string => {
    return str
      .replace(/\s+/g, '-')
      .toLowerCase();
  };