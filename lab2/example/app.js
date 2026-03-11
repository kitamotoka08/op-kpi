import { randomNumberGenerator, consumeWithTimeout } from "../src/index.js";

const generator = randomNumberGenerator();

consumeWithTimeout(generator, 3);