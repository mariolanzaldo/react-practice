type StringArg = string | number | null | undefined;
type ObjArg = Record<string, unknown>;
type ArrArg = Array<StringArg | ObjArg | ArrArg>;
export type ClsxArgs = Array<StringArg | ObjArg | ArrArg>;



function customClsx(...args: ClsxArgs) {
    return args
        .reduce<Array<string | number>>((previousValue, currentValue) => {
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