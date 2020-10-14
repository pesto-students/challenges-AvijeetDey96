import { count, cycle, repeat } from './iterInfinite';

describe('test count problem', () => {
  const iter = count(10);
  test('check count is working or not', () => {
    expect(iter.next()).toStrictEqual({ value: 10, done: false })
    expect(iter.next()).toStrictEqual({ value: 11, done: false })
    expect(iter.next()).toStrictEqual({ value: 12, done: false })
    expect(iter.next()).toStrictEqual({ value: 13, done: false })
    expect(iter.next()).toStrictEqual({ value: 14, done: false })
  })

})
describe('test cycle problem', () => {
  const iter = cycle([1, 2, 3, 4]);
  const iterString = cycle('ABCD');
  test('check cycle is working or not', () => {
    expect(iter.next()).toStrictEqual({ value: 1, done: false })
    expect(iter.next()).toStrictEqual({ value: 2, done: false })
    expect(iter.next()).toStrictEqual({ value: 3, done: false })
    expect(iter.next()).toStrictEqual({ value: 4, done: false })
    expect(iter.next()).toStrictEqual({ value: 1, done: false })
  })
  test('check cycle is working for string or not', () => {
    expect(iterString.next()).toStrictEqual({ value: 'A', done: false })
    expect(iterString.next()).toStrictEqual({ value: 'B', done: false })
    expect(iterString.next()).toStrictEqual({ value: 'C', done: false })
    expect(iterString.next()).toStrictEqual({ value: 'D', done: false })
    expect(iterString.next()).toStrictEqual({ value: 'A', done: false })
  })

})
describe('test repeat problem', () => {
  const iter = repeat(10, 3);
  test('check repeat is working or not', () => {
    expect(iter.next()).toStrictEqual({ value: 10, done: false })
    expect(iter.next()).toStrictEqual({ value: 10, done: false })
    expect(iter.next()).toStrictEqual({ value: 10, done: false })
    expect(iter.next()).toStrictEqual({ value: undefined, done: true })
    expect(iter.next()).toStrictEqual({ value: undefined, done: true })
  })
})

 
