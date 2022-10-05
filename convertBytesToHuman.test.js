/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(!'1 B')
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman()).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(Symbol("id"))).toBe(false)
  expect(convertBytesToHuman(Math)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1024428173892173)).toBe('931.71 TB')
  expect(convertBytesToHuman(4278)).toBe('4.18 KB')
  expect(convertBytesToHuman(0)).toBe('0 bytes')
  expect(convertBytesToHuman(52873)).toBe('51.63 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(4263267234)).toBe('3.97 GB')
});

// другая группа проверок
