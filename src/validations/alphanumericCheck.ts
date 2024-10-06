export const alphanumericCheck = (str: string): boolean => {
    const re = /^[a-z0-9]+$/i;
    return re.test(str);
};