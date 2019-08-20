/**
 * assert that a type is exactly `true`
 */
export type Assert<T extends true> = T;
export function assert<T extends true>(): T {
  return true as T;
}

/**
 * convert all types that are not `true` to `false`
 */
export type Normalize<A extends boolean> = (A extends never
  ? false
  : A extends true
  ? never
  : false) extends never
  ? true
  : false;

/**
 * and together two boolean literal types
 */
export type And<A extends boolean, B extends boolean> = Normalize<
  A extends true ? (B extends true ? true : false) : false
>;

/**
 * or together two boolean literal types
 */
export type Or<A extends boolean, B extends boolean> = Normalize<
  A extends true ? true : B extends true ? true : false
>;

/**
 * negate a boolean literal type. i.e. turn `true` into `false` and `false` into `true`
 */
export type Not<A extends boolean> = Normalize<A extends true ? false : true>;

/**
 * xor together two boolean literal types
 */
export type XOr<A extends boolean, B extends boolean> = Normalize<
  And<Or<A, B>, Not<And<A, B>>>
>;

/**
 * `true` if `Actual` extends `Expected`
 */
export type Extends<Actual, Expected> = Normalize<
  Actual extends Expected ? true : false
>;

/**
 * `true` if `Actual` and `Expected` are the same type, i.e.
 * `Actual` extends `Expected` and `Expected` extends `Actual`
 */
export type Equal<Actual, Expected> = Normalize<
  And<Extends<Actual, Expected>, Extends<Expected, Actual>>
>;

/**
 * Returns `true` if the exact type `ExpectedElement` appears
 * in the union `ActualUnion`.
 *
 * e.g. `UnionIncludesExact<1 | 2 | 3, 2>` => `true`
 * e.g. `UnionIncludesExact<number, 2>` => `false`
 */
export type UnionIncludesExact<ActualUnion, ExpectedElement> = Normalize<
  Equal<Extract<ActualUnion, ExpectedElement>, ExpectedElement>
>;
