import className, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * Merge ClassName with TwMerge
 * @param {ArgumentArray[]} classLists - ClassNameValue[]
 */
export const cn = (...classLists: ArgumentArray | string[]) => twMerge(className(classLists));
