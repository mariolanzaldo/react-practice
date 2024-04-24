function updateImmutable(obj, updates) {
    const updatedObj = { ...obj };

    for (const [path, value] of Object.entries(updates)) {
        const pathArray = path.split(".");
        let current = updatedObj;

        for (let i = 0; i < pathArray.length - 1; i++) {
            current = current[pathArray[i]];
        }

        current[pathArray[pathArray.length - 1]] = value;
    }

    return updatedObj;
}

export default updateImmutable;