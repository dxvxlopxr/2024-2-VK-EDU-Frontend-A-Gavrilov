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
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman([1024])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(1)).toBe('1 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
  expect(convertBytesToHuman(5368709120000)).toBe('4.88 TB');
});

test('Проверка на корректное округление и удаление лишних нулей', () => {
  expect(convertBytesToHuman(1536)).toBe('1.5 KB');
  expect(convertBytesToHuman(10485760)).toBe('10 MB');
  expect(convertBytesToHuman(1500)).toBe('1.46 KB');
});
