type Callback = (err:Error | null, res:number | null) => Error | number;

export function superComputer(nb1: number, operator: string, nb2: number, callback: Callback): number | Error {
  if (operator === '+') {
    return callback(null, nb1 + nb2);
  }
  if (operator === '-') {
    return callback(null, nb1 - nb2);
  }
  if (operator === '*') {
    return callback(null, nb1 * nb2);
  }
  if (operator === '/') {
    if (nb2 === 0) {
      return callback(new Error('Division by 0'), null);
    }
    return callback(null, nb1 / nb2);
  }
  if (operator === '%') {
    if (nb2 === 0) {
      return callback(new Error('Modulo by 0'), null);
    }
    return callback(null, nb1 % nb2);
  }
  return callback(new Error('Invalid operator'), null);
}
