export function* randomNumberGenerator() {
    while (true) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        yield randomNumber;
    }
}