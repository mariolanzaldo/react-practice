function updateImmutable<T extends Record<string, unknown>>(obj: T, updates: Record<string, unknown>): T {
    const updatedObj = { ...obj };

    for (const [path, value] of Object.entries(updates)) {
        const pathArray = path.split(".");

        // eslint-disable-next-line
        let current: { [key: string]: any } = updatedObj;

        for (let i = 0; i < pathArray.length - 1; i++) {
            const key = pathArray[i] as keyof typeof current;
            current = current[key];
        }

        // current[pathArray[pathArray.length - 1]] = value;
        const lastKey = pathArray[pathArray.length - 1] as keyof typeof current;
        current[lastKey] = value;
    }

    return updatedObj;
}

export default updateImmutable;