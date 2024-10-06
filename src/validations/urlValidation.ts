const urlValidation = (url: string): boolean => {
    const re = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
    return re.test(url);
};

const ipV4Validation = (ip: string): boolean => {
    const re = /^(\d{1,3}\.){3}\d{1,3}$/;
    return re.test(ip);
}

const ipV6Validation = (ip: string): boolean => {
    const re = /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})$/;
    return re.test(ip);
}

export { urlValidation, ipV4Validation, ipV6Validation };