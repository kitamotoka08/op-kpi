export function consumeWithTimeout(iterator, timeoutSeconds) {

    const startTime = Date.now();

    while (Date.now() - startTime < timeoutSeconds * 1000) {
        const value = iterator.next().value;
        console.log(value);
    }

}