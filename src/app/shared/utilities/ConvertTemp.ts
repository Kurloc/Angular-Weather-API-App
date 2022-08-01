/*
  Converts temperature to and from fahrenheit and celsius.
  @param temp: number - The temperature value to convert.
  @param startingUnit: 'f' | 'c' - The unit of the temperature value.
  @returns: number - The converted temperature value. F returns C, C returns F.
 */
export function convertTemp(temp: number, startingUnit: 'f' | 'c'): number {
  if (startingUnit === 'f')
    return (temp - 32) * .55555555555;
  else
    return (temp * 1.8) + 32;
}
