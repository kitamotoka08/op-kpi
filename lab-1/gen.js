function* randomNumberGenerator() {

    while (true) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        yield randomNumber;
    }

}

function consumeWithTimeout(iterator, timeoutSeconds) {

    const startTime = Date.now();

    while (Date.now() - startTime < timeoutSeconds * 1000) {

        const value = iterator.next().value;
        console.log(value);

    }

}

const generator = randomNumberGenerator();

consumeWithTimeout(generator, 3);