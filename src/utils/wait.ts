

export const wait = async (time: number) => {
    return new Promise((resolve) => {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            resolve(true);
        }, time);
    });
}
