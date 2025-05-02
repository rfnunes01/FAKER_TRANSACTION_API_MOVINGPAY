import { faker } from '@faker-js/faker';
import moment from 'moment';

export const generateAlphaNumeric = (length: number): string => faker.string.alphanumeric(length);

export const generateRandomNumber = (min: number, max: number): number => faker.number.int({ min, max });

export const pickRandom           = <T>(lista: T[]): T => faker.helpers.arrayElement(lista);

export const getCurrentDateTime   = (format?: string): string => moment().format(format ?? 'YYYY-MM-DD HH:mm:ss');

