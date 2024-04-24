function customClsx(...args) {
    return args
        .reduce((previousValue, currentValue) => {
            if (!currentValue) return previousValue;

            if (Array.isArray(currentValue)) {
                previousValue.concat(customClsx(...currentValue));
                return previousValue;
            }

            if (typeof currentValue === "object") {
                Object.entries(currentValue).forEach(([k, v]) => {
                    if (v) previousValue.push(k);
                });
                return previousValue;
            }

            previousValue.push(currentValue);
            return previousValue;
        }, [])
        .join(" ");
}

export default customClsx;