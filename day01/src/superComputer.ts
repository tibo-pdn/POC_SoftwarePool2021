type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

function superComputer(nb1: number, operator: string, nb2: number, callback: Callback) : number | Error {
    if (operator === '+')
        return callback(null, nb1 + nb2);
    if (operator === '-')
        return callback(null, nb1 - nb2);
    if (operator === '*')
        return callback(null, nb1 * nb2);
    if (operator === '/') {
        if (nb2 === 0)
            return callback(new Error('Division by 0'));
        return callback(null, nb1 / nb2);
    }
    if (operator === '%') {
        if (nb2 === 0)
            return callback(new Error('Modulo by 0'));
        return callback(null, nb1 % nb2);
    }
    return callback(new Error('Invalid operator'));
}

superComputer(5, '/', 0, callback);
