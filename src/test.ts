import * as ta from './';

export const t1: ta.Not<ta.Equal<{x: 1}, never>> = true;
export type t1 = ta.Assert<ta.Not<ta.Equal<{x: 1}, never>>>;
export const t1a: ta.Not<ta.Equal<never, {x: 1}>> = true;
export type t1a = ta.Assert<ta.Not<ta.Equal<never, {x: 1}>>>;
export const t11: ta.Not<ta.Equal<{x: 1}, any>> = true;
export type t11 = ta.Assert<ta.Not<ta.Equal<{x: 1}, any>>>;
export const t11a: ta.Not<ta.Equal<any, {x: 1}>> = true;
export type t11a = ta.Assert<ta.Not<ta.Equal<any, {x: 1}>>>;

export const t2: ta.Not<ta.Equal<{x: 1}, {y: 1}>> = true;
export type t2 = ta.Assert<ta.Not<ta.Equal<{x: 1}, {y: 1}>>>;
export const t2a: ta.Not<ta.Equal<{y: 1}, {x: 1}>> = true;
export type t2a = ta.Assert<ta.Not<ta.Equal<{y: 1}, {x: 1}>>>;

export const t3: ta.Extends<{x: 1}, any> = true;
export type t3 = ta.Assert<ta.Extends<{x: 1}, any>>;
export const t4: ta.Extends<any, {x: 1}> = false;
export type t4 = ta.Assert<ta.Not<ta.Extends<any, {x: 1}>>>;

export const t5: ta.UnionIncludesExact<string | number, string> = true;
export type t5 = ta.Assert<ta.UnionIncludesExact<string | number, string>>;
export const t6: ta.UnionIncludesExact<string | number, 'hello'> = false;
export type t6 = ta.Assert<
  ta.Not<ta.UnionIncludesExact<string | number, 'hello'>>
>;
export const t7: ta.UnionIncludesExact<number, 'hello'> = false;
export type t7 = ta.Assert<ta.Not<ta.UnionIncludesExact<number, 'hello'>>>;
