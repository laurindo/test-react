const get = (key: string) => {
    try {
        let type = localStorage.getItem(key);
        if (!type) { type = ''; }
        return JSON.parse(type);
    } catch (e) {
        return null;
    }
};

const set = (key: string, data: Object) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const removeItem = (key: string) => {
    localStorage.removeItem(key);
};

export { get, set, removeItem };