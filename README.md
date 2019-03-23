# Type Assertions

Assertions to test your TypeScript types.

## Usage

Define a `type-tests.ts` file and you can make assertions like:

```ts
import * as ta from 'type-assertions';

export type t1 = ta.Assert<ta.Not<ta.Equal<{x: 1}, never>>>;
export type t1a = ta.Assert<ta.Not<ta.Equal<never, {x: 1}>>>;

export type t2 = ta.Assert<ta.Not<ta.Equal<{x: 1}, {y: 1}>>>;
export type t2a = ta.Assert<ta.Not<ta.Equal<{y: 1}, {x: 1}>>>;

export type t3 = ta.Assert<ta.Extends<{x: 1}, any>>;
export type t4 = ta.Assert<ta.Not<ta.Extends<any, {x: 1}>>>;

export type t5 = ta.Assert<ta.UnionIncludesExact<string | number, string>>;
export type t6 = ta.Assert<
  ta.Not<ta.UnionIncludesExact<string | number, 'hello'>>
>;
export type t7 = ta.Assert<ta.Not<ta.UnionIncludesExact<number, 'hello'>>>;
```

When you run the build, you will get errors in typesctipt if any of your assertions are not valid.

## License

MIT
