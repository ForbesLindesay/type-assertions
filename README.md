# Type Assertions

Assertions to test your TypeScript types.

## Usage

Define a `type-tests.ts` file and you can make assertions like:

```ts
import * as ta from 'type-assertions';

ta.assert<ta.Not<ta.Equal<{x: 1}, never>>>();
ta.assert<ta.Not<ta.Equal<never, {x: 1}>>>();

ta.assert<ta.Not<ta.Equal<{x: 1}, {y: 1}>>>();
ta.assert<ta.Not<ta.Equal<{y: 1}, {x: 1}>>>();

ta.assert<ta.Extends<{x: 1}, any>>();
ta.assert<ta.Not<ta.Extends<any, {x: 1}>>>();

ta.assert<ta.UnionIncludesExact<string | number, string>>();
ta.assert<ta.Not<ta.UnionIncludesExact<string | number, 'hello'>>>();
ta.assert<ta.Not<ta.UnionIncludesExact<number, 'hello'>>>();
```

When you run the build, you will get errors in typesctipt if any of your assertions are not valid.

## License

MIT
