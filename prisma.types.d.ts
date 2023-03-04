
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  discord_id: string
  level: number
  money: number
}

/**
 * Model Warning
 * 
 */
export type Warning = {
  warning_id: number
  warning_reason: string | null
  warning_date: string
  userId: number | null
}

/**
 * Model Inventory
 * 
 */
export type Inventory = {
  item_id: number
  item_amount: number
  userId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.warning`: Exposes CRUD operations for the **Warning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warnings
    * const warnings = await prisma.warning.findMany()
    * ```
    */
  get warning(): Prisma.WarningDelegate<GlobalReject>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Warning: 'Warning',
    Inventory: 'Inventory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    warnings: number
    inventory: number
  }

  export type UserCountOutputTypeSelect = {
    warnings?: boolean
    inventory?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    level: number | null
    money: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    level: number | null
    money: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    discord_id: string | null
    level: number | null
    money: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    discord_id: string | null
    level: number | null
    money: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    discord_id: number
    level: number
    money: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    level?: true
    money?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    level?: true
    money?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    discord_id?: true
    level?: true
    money?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    discord_id?: true
    level?: true
    money?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    discord_id?: true
    level?: true
    money?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    discord_id: string
    level: number
    money: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    discord_id?: boolean
    level?: boolean
    money?: boolean
    warnings?: boolean | User$warningsArgs
    inventory?: boolean | User$inventoryArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    warnings?: boolean | User$warningsArgs
    inventory?: boolean | User$inventoryArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'warnings' ? Array < WarningGetPayload<S['include'][P]>>  :
        P extends 'inventory' ? Array < InventoryGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'warnings' ? Array < WarningGetPayload<S['select'][P]>>  :
        P extends 'inventory' ? Array < InventoryGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    warnings<T extends User$warningsArgs= {}>(args?: Subset<T, User$warningsArgs>): Prisma.PrismaPromise<Array<WarningGetPayload<T>>| Null>;

    inventory<T extends User$inventoryArgs= {}>(args?: Subset<T, User$inventoryArgs>): Prisma.PrismaPromise<Array<InventoryGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.warnings
   */
  export type User$warningsArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    where?: WarningWhereInput
    orderBy?: Enumerable<WarningOrderByWithRelationInput>
    cursor?: WarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WarningScalarFieldEnum>
  }


  /**
   * User.inventory
   */
  export type User$inventoryArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    where?: InventoryWhereInput
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Warning
   */


  export type AggregateWarning = {
    _count: WarningCountAggregateOutputType | null
    _avg: WarningAvgAggregateOutputType | null
    _sum: WarningSumAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  export type WarningAvgAggregateOutputType = {
    warning_id: number | null
    userId: number | null
  }

  export type WarningSumAggregateOutputType = {
    warning_id: number | null
    userId: number | null
  }

  export type WarningMinAggregateOutputType = {
    warning_id: number | null
    warning_reason: string | null
    warning_date: string | null
    userId: number | null
  }

  export type WarningMaxAggregateOutputType = {
    warning_id: number | null
    warning_reason: string | null
    warning_date: string | null
    userId: number | null
  }

  export type WarningCountAggregateOutputType = {
    warning_id: number
    warning_reason: number
    warning_date: number
    userId: number
    _all: number
  }


  export type WarningAvgAggregateInputType = {
    warning_id?: true
    userId?: true
  }

  export type WarningSumAggregateInputType = {
    warning_id?: true
    userId?: true
  }

  export type WarningMinAggregateInputType = {
    warning_id?: true
    warning_reason?: true
    warning_date?: true
    userId?: true
  }

  export type WarningMaxAggregateInputType = {
    warning_id?: true
    warning_reason?: true
    warning_date?: true
    userId?: true
  }

  export type WarningCountAggregateInputType = {
    warning_id?: true
    warning_reason?: true
    warning_date?: true
    userId?: true
    _all?: true
  }

  export type WarningAggregateArgs = {
    /**
     * Filter which Warning to aggregate.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: Enumerable<WarningOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warnings
    **/
    _count?: true | WarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarningMaxAggregateInputType
  }

  export type GetWarningAggregateType<T extends WarningAggregateArgs> = {
        [P in keyof T & keyof AggregateWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarning[P]>
      : GetScalarType<T[P], AggregateWarning[P]>
  }




  export type WarningGroupByArgs = {
    where?: WarningWhereInput
    orderBy?: Enumerable<WarningOrderByWithAggregationInput>
    by: WarningScalarFieldEnum[]
    having?: WarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarningCountAggregateInputType | true
    _avg?: WarningAvgAggregateInputType
    _sum?: WarningSumAggregateInputType
    _min?: WarningMinAggregateInputType
    _max?: WarningMaxAggregateInputType
  }


  export type WarningGroupByOutputType = {
    warning_id: number
    warning_reason: string | null
    warning_date: string
    userId: number | null
    _count: WarningCountAggregateOutputType | null
    _avg: WarningAvgAggregateOutputType | null
    _sum: WarningSumAggregateOutputType | null
    _min: WarningMinAggregateOutputType | null
    _max: WarningMaxAggregateOutputType | null
  }

  type GetWarningGroupByPayload<T extends WarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarningGroupByOutputType[P]>
            : GetScalarType<T[P], WarningGroupByOutputType[P]>
        }
      >
    >


  export type WarningSelect = {
    warning_id?: boolean
    warning_reason?: boolean
    warning_date?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }


  export type WarningInclude = {
    User?: boolean | UserArgs
  }

  export type WarningGetPayload<S extends boolean | null | undefined | WarningArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Warning :
    S extends undefined ? never :
    S extends { include: any } & (WarningArgs | WarningFindManyArgs)
    ? Warning  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (WarningArgs | WarningFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Warning ? Warning[P] : never
  } 
      : Warning


  type WarningCountArgs = 
    Omit<WarningFindManyArgs, 'select' | 'include'> & {
      select?: WarningCountAggregateInputType | true
    }

  export interface WarningDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Warning that matches the filter.
     * @param {WarningFindUniqueArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WarningFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WarningFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Warning'> extends True ? Prisma__WarningClient<WarningGetPayload<T>> : Prisma__WarningClient<WarningGetPayload<T> | null, null>

    /**
     * Find one Warning that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WarningFindUniqueOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WarningFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WarningFindUniqueOrThrowArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Find the first Warning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WarningFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WarningFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Warning'> extends True ? Prisma__WarningClient<WarningGetPayload<T>> : Prisma__WarningClient<WarningGetPayload<T> | null, null>

    /**
     * Find the first Warning that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindFirstOrThrowArgs} args - Arguments to find a Warning
     * @example
     * // Get one Warning
     * const warning = await prisma.warning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WarningFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WarningFindFirstOrThrowArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Find zero or more Warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warnings
     * const warnings = await prisma.warning.findMany()
     * 
     * // Get first 10 Warnings
     * const warnings = await prisma.warning.findMany({ take: 10 })
     * 
     * // Only select the `warning_id`
     * const warningWithWarning_idOnly = await prisma.warning.findMany({ select: { warning_id: true } })
     * 
    **/
    findMany<T extends WarningFindManyArgs>(
      args?: SelectSubset<T, WarningFindManyArgs>
    ): Prisma.PrismaPromise<Array<WarningGetPayload<T>>>

    /**
     * Create a Warning.
     * @param {WarningCreateArgs} args - Arguments to create a Warning.
     * @example
     * // Create one Warning
     * const Warning = await prisma.warning.create({
     *   data: {
     *     // ... data to create a Warning
     *   }
     * })
     * 
    **/
    create<T extends WarningCreateArgs>(
      args: SelectSubset<T, WarningCreateArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Delete a Warning.
     * @param {WarningDeleteArgs} args - Arguments to delete one Warning.
     * @example
     * // Delete one Warning
     * const Warning = await prisma.warning.delete({
     *   where: {
     *     // ... filter to delete one Warning
     *   }
     * })
     * 
    **/
    delete<T extends WarningDeleteArgs>(
      args: SelectSubset<T, WarningDeleteArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Update one Warning.
     * @param {WarningUpdateArgs} args - Arguments to update one Warning.
     * @example
     * // Update one Warning
     * const warning = await prisma.warning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WarningUpdateArgs>(
      args: SelectSubset<T, WarningUpdateArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Delete zero or more Warnings.
     * @param {WarningDeleteManyArgs} args - Arguments to filter Warnings to delete.
     * @example
     * // Delete a few Warnings
     * const { count } = await prisma.warning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WarningDeleteManyArgs>(
      args?: SelectSubset<T, WarningDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warnings
     * const warning = await prisma.warning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WarningUpdateManyArgs>(
      args: SelectSubset<T, WarningUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Warning.
     * @param {WarningUpsertArgs} args - Arguments to update or create a Warning.
     * @example
     * // Update or create a Warning
     * const warning = await prisma.warning.upsert({
     *   create: {
     *     // ... data to create a Warning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warning we want to update
     *   }
     * })
    **/
    upsert<T extends WarningUpsertArgs>(
      args: SelectSubset<T, WarningUpsertArgs>
    ): Prisma__WarningClient<WarningGetPayload<T>>

    /**
     * Count the number of Warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningCountArgs} args - Arguments to filter Warnings to count.
     * @example
     * // Count the number of Warnings
     * const count = await prisma.warning.count({
     *   where: {
     *     // ... the filter for the Warnings we want to count
     *   }
     * })
    **/
    count<T extends WarningCountArgs>(
      args?: Subset<T, WarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarningAggregateArgs>(args: Subset<T, WarningAggregateArgs>): Prisma.PrismaPromise<GetWarningAggregateType<T>>

    /**
     * Group by Warning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarningGroupByArgs['orderBy'] }
        : { orderBy?: WarningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Warning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WarningClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Warning base type for findUnique actions
   */
  export type WarningFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }

  /**
   * Warning findUnique
   */
  export interface WarningFindUniqueArgs extends WarningFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Warning findUniqueOrThrow
   */
  export type WarningFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter, which Warning to fetch.
     */
    where: WarningWhereUniqueInput
  }


  /**
   * Warning base type for findFirst actions
   */
  export type WarningFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: Enumerable<WarningOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: Enumerable<WarningScalarFieldEnum>
  }

  /**
   * Warning findFirst
   */
  export interface WarningFindFirstArgs extends WarningFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Warning findFirstOrThrow
   */
  export type WarningFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter, which Warning to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: Enumerable<WarningOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warnings.
     */
    distinct?: Enumerable<WarningScalarFieldEnum>
  }


  /**
   * Warning findMany
   */
  export type WarningFindManyArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter, which Warnings to fetch.
     */
    where?: WarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warnings to fetch.
     */
    orderBy?: Enumerable<WarningOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warnings.
     */
    cursor?: WarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warnings.
     */
    skip?: number
    distinct?: Enumerable<WarningScalarFieldEnum>
  }


  /**
   * Warning create
   */
  export type WarningCreateArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * The data needed to create a Warning.
     */
    data: XOR<WarningCreateInput, WarningUncheckedCreateInput>
  }


  /**
   * Warning update
   */
  export type WarningUpdateArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * The data needed to update a Warning.
     */
    data: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
    /**
     * Choose, which Warning to update.
     */
    where: WarningWhereUniqueInput
  }


  /**
   * Warning updateMany
   */
  export type WarningUpdateManyArgs = {
    /**
     * The data used to update Warnings.
     */
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyInput>
    /**
     * Filter which Warnings to update
     */
    where?: WarningWhereInput
  }


  /**
   * Warning upsert
   */
  export type WarningUpsertArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * The filter to search for the Warning to update in case it exists.
     */
    where: WarningWhereUniqueInput
    /**
     * In case the Warning found by the `where` argument doesn't exist, create a new Warning with this data.
     */
    create: XOR<WarningCreateInput, WarningUncheckedCreateInput>
    /**
     * In case the Warning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarningUpdateInput, WarningUncheckedUpdateInput>
  }


  /**
   * Warning delete
   */
  export type WarningDeleteArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
    /**
     * Filter which Warning to delete.
     */
    where: WarningWhereUniqueInput
  }


  /**
   * Warning deleteMany
   */
  export type WarningDeleteManyArgs = {
    /**
     * Filter which Warnings to delete
     */
    where?: WarningWhereInput
  }


  /**
   * Warning without action
   */
  export type WarningArgs = {
    /**
     * Select specific fields to fetch from the Warning
     */
    select?: WarningSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WarningInclude | null
  }



  /**
   * Model Inventory
   */


  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    item_id: number | null
    item_amount: number | null
    userId: number | null
  }

  export type InventorySumAggregateOutputType = {
    item_id: number | null
    item_amount: number | null
    userId: number | null
  }

  export type InventoryMinAggregateOutputType = {
    item_id: number | null
    item_amount: number | null
    userId: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    item_id: number | null
    item_amount: number | null
    userId: number | null
  }

  export type InventoryCountAggregateOutputType = {
    item_id: number
    item_amount: number
    userId: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    item_id?: true
    item_amount?: true
    userId?: true
  }

  export type InventorySumAggregateInputType = {
    item_id?: true
    item_amount?: true
    userId?: true
  }

  export type InventoryMinAggregateInputType = {
    item_id?: true
    item_amount?: true
    userId?: true
  }

  export type InventoryMaxAggregateInputType = {
    item_id?: true
    item_amount?: true
    userId?: true
  }

  export type InventoryCountAggregateInputType = {
    item_id?: true
    item_amount?: true
    userId?: true
    _all?: true
  }

  export type InventoryAggregateArgs = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs = {
    where?: InventoryWhereInput
    orderBy?: Enumerable<InventoryOrderByWithAggregationInput>
    by: InventoryScalarFieldEnum[]
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }


  export type InventoryGroupByOutputType = {
    item_id: number
    item_amount: number
    userId: number | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect = {
    item_id?: boolean
    item_amount?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }


  export type InventoryInclude = {
    User?: boolean | UserArgs
  }

  export type InventoryGetPayload<S extends boolean | null | undefined | InventoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Inventory :
    S extends undefined ? never :
    S extends { include: any } & (InventoryArgs | InventoryFindManyArgs)
    ? Inventory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (InventoryArgs | InventoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Inventory ? Inventory[P] : never
  } 
      : Inventory


  type InventoryCountArgs = 
    Omit<InventoryFindManyArgs, 'select' | 'include'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InventoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InventoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Inventory'> extends True ? Prisma__InventoryClient<InventoryGetPayload<T>> : Prisma__InventoryClient<InventoryGetPayload<T> | null, null>

    /**
     * Find one Inventory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindUniqueOrThrowArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InventoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InventoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Inventory'> extends True ? Prisma__InventoryClient<InventoryGetPayload<T>> : Prisma__InventoryClient<InventoryGetPayload<T> | null, null>

    /**
     * Find the first Inventory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InventoryFindFirstOrThrowArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `item_id`
     * const inventoryWithItem_idOnly = await prisma.inventory.findMany({ select: { item_id: true } })
     * 
    **/
    findMany<T extends InventoryFindManyArgs>(
      args?: SelectSubset<T, InventoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<InventoryGetPayload<T>>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
    **/
    create<T extends InventoryCreateArgs>(
      args: SelectSubset<T, InventoryCreateArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
    **/
    delete<T extends InventoryDeleteArgs>(
      args: SelectSubset<T, InventoryDeleteArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InventoryUpdateArgs>(
      args: SelectSubset<T, InventoryUpdateArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InventoryDeleteManyArgs>(
      args?: SelectSubset<T, InventoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InventoryUpdateManyArgs>(
      args: SelectSubset<T, InventoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
    **/
    upsert<T extends InventoryUpsertArgs>(
      args: SelectSubset<T, InventoryUpsertArgs>
    ): Prisma__InventoryClient<InventoryGetPayload<T>>

    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InventoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Inventory base type for findUnique actions
   */
  export type InventoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUnique
   */
  export interface InventoryFindUniqueArgs extends InventoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory base type for findFirst actions
   */
  export type InventoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }

  /**
   * Inventory findFirst
   */
  export interface InventoryFindFirstArgs extends InventoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: Enumerable<InventoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: Enumerable<InventoryScalarFieldEnum>
  }


  /**
   * Inventory create
   */
  export type InventoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }


  /**
   * Inventory update
   */
  export type InventoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }


  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }


  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }


  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }


  /**
   * Inventory without action
   */
  export type InventoryArgs = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InventoryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const InventoryScalarFieldEnum: {
    item_id: 'item_id',
    item_amount: 'item_amount',
    userId: 'userId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    discord_id: 'discord_id',
    level: 'level',
    money: 'money'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WarningScalarFieldEnum: {
    warning_id: 'warning_id',
    warning_reason: 'warning_reason',
    warning_date: 'warning_date',
    userId: 'userId'
  };

  export type WarningScalarFieldEnum = (typeof WarningScalarFieldEnum)[keyof typeof WarningScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    discord_id?: StringFilter | string
    level?: IntFilter | number
    money?: IntFilter | number
    warnings?: WarningListRelationFilter
    inventory?: InventoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    level?: SortOrder
    money?: SortOrder
    warnings?: WarningOrderByRelationAggregateInput
    inventory?: InventoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    discord_id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    discord_id?: SortOrder
    level?: SortOrder
    money?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    discord_id?: StringWithAggregatesFilter | string
    level?: IntWithAggregatesFilter | number
    money?: IntWithAggregatesFilter | number
  }

  export type WarningWhereInput = {
    AND?: Enumerable<WarningWhereInput>
    OR?: Enumerable<WarningWhereInput>
    NOT?: Enumerable<WarningWhereInput>
    warning_id?: IntFilter | number
    warning_reason?: StringNullableFilter | string | null
    warning_date?: StringFilter | string
    userId?: IntNullableFilter | number | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type WarningOrderByWithRelationInput = {
    warning_id?: SortOrder
    warning_reason?: SortOrder
    warning_date?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type WarningWhereUniqueInput = {
    warning_id?: number
  }

  export type WarningOrderByWithAggregationInput = {
    warning_id?: SortOrder
    warning_reason?: SortOrder
    warning_date?: SortOrder
    userId?: SortOrder
    _count?: WarningCountOrderByAggregateInput
    _avg?: WarningAvgOrderByAggregateInput
    _max?: WarningMaxOrderByAggregateInput
    _min?: WarningMinOrderByAggregateInput
    _sum?: WarningSumOrderByAggregateInput
  }

  export type WarningScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WarningScalarWhereWithAggregatesInput>
    OR?: Enumerable<WarningScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WarningScalarWhereWithAggregatesInput>
    warning_id?: IntWithAggregatesFilter | number
    warning_reason?: StringNullableWithAggregatesFilter | string | null
    warning_date?: StringWithAggregatesFilter | string
    userId?: IntNullableWithAggregatesFilter | number | null
  }

  export type InventoryWhereInput = {
    AND?: Enumerable<InventoryWhereInput>
    OR?: Enumerable<InventoryWhereInput>
    NOT?: Enumerable<InventoryWhereInput>
    item_id?: IntFilter | number
    item_amount?: IntFilter | number
    userId?: IntNullableFilter | number | null
    User?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type InventoryOrderByWithRelationInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = {
    item_id?: number
  }

  export type InventoryOrderByWithAggregationInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InventoryScalarWhereWithAggregatesInput>
    item_id?: IntWithAggregatesFilter | number
    item_amount?: IntWithAggregatesFilter | number
    userId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserCreateInput = {
    discord_id: string
    level?: number
    money?: number
    warnings?: WarningCreateNestedManyWithoutUserInput
    inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    discord_id: string
    level?: number
    money?: number
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    warnings?: WarningUpdateManyWithoutUserNestedInput
    inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
  }

  export type WarningCreateInput = {
    warning_reason?: string | null
    warning_date: string
    User?: UserCreateNestedOneWithoutWarningsInput
  }

  export type WarningUncheckedCreateInput = {
    warning_id?: number
    warning_reason?: string | null
    warning_date: string
    userId?: number | null
  }

  export type WarningUpdateInput = {
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutWarningsNestedInput
  }

  export type WarningUncheckedUpdateInput = {
    warning_id?: IntFieldUpdateOperationsInput | number
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WarningUpdateManyMutationInput = {
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUncheckedUpdateManyInput = {
    warning_id?: IntFieldUpdateOperationsInput | number
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateInput = {
    item_id: number
    item_amount?: number
    User?: UserCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    item_id: number
    item_amount?: number
    userId?: number | null
  }

  export type InventoryUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryUpdateManyMutationInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type WarningListRelationFilter = {
    every?: WarningWhereInput
    some?: WarningWhereInput
    none?: WarningWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type WarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    level?: SortOrder
    money?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    money?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    level?: SortOrder
    money?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    discord_id?: SortOrder
    level?: SortOrder
    money?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    money?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WarningCountOrderByAggregateInput = {
    warning_id?: SortOrder
    warning_reason?: SortOrder
    warning_date?: SortOrder
    userId?: SortOrder
  }

  export type WarningAvgOrderByAggregateInput = {
    warning_id?: SortOrder
    userId?: SortOrder
  }

  export type WarningMaxOrderByAggregateInput = {
    warning_id?: SortOrder
    warning_reason?: SortOrder
    warning_date?: SortOrder
    userId?: SortOrder
  }

  export type WarningMinOrderByAggregateInput = {
    warning_id?: SortOrder
    warning_reason?: SortOrder
    warning_date?: SortOrder
    userId?: SortOrder
  }

  export type WarningSumOrderByAggregateInput = {
    warning_id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type InventoryCountOrderByAggregateInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    item_id?: SortOrder
    item_amount?: SortOrder
    userId?: SortOrder
  }

  export type WarningCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WarningCreateWithoutUserInput>, Enumerable<WarningUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WarningCreateOrConnectWithoutUserInput>
    connect?: Enumerable<WarningWhereUniqueInput>
  }

  export type InventoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InventoryCreateWithoutUserInput>, Enumerable<InventoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InventoryCreateOrConnectWithoutUserInput>
    connect?: Enumerable<InventoryWhereUniqueInput>
  }

  export type WarningUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WarningCreateWithoutUserInput>, Enumerable<WarningUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WarningCreateOrConnectWithoutUserInput>
    connect?: Enumerable<WarningWhereUniqueInput>
  }

  export type InventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InventoryCreateWithoutUserInput>, Enumerable<InventoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InventoryCreateOrConnectWithoutUserInput>
    connect?: Enumerable<InventoryWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WarningUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WarningCreateWithoutUserInput>, Enumerable<WarningUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WarningCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WarningUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<WarningWhereUniqueInput>
    disconnect?: Enumerable<WarningWhereUniqueInput>
    delete?: Enumerable<WarningWhereUniqueInput>
    connect?: Enumerable<WarningWhereUniqueInput>
    update?: Enumerable<WarningUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WarningUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WarningScalarWhereInput>
  }

  export type InventoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<InventoryCreateWithoutUserInput>, Enumerable<InventoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InventoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InventoryUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<InventoryWhereUniqueInput>
    disconnect?: Enumerable<InventoryWhereUniqueInput>
    delete?: Enumerable<InventoryWhereUniqueInput>
    connect?: Enumerable<InventoryWhereUniqueInput>
    update?: Enumerable<InventoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InventoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InventoryScalarWhereInput>
  }

  export type WarningUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WarningCreateWithoutUserInput>, Enumerable<WarningUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WarningCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WarningUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<WarningWhereUniqueInput>
    disconnect?: Enumerable<WarningWhereUniqueInput>
    delete?: Enumerable<WarningWhereUniqueInput>
    connect?: Enumerable<WarningWhereUniqueInput>
    update?: Enumerable<WarningUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WarningUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WarningScalarWhereInput>
  }

  export type InventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<InventoryCreateWithoutUserInput>, Enumerable<InventoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InventoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InventoryUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<InventoryWhereUniqueInput>
    disconnect?: Enumerable<InventoryWhereUniqueInput>
    delete?: Enumerable<InventoryWhereUniqueInput>
    connect?: Enumerable<InventoryWhereUniqueInput>
    update?: Enumerable<InventoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InventoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InventoryScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutWarningsInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutWarningsNestedInput = {
    create?: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWarningsInput
    upsert?: UserUpsertWithoutWarningsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput
    upsert?: UserUpsertWithoutInventoryInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type WarningCreateWithoutUserInput = {
    warning_reason?: string | null
    warning_date: string
  }

  export type WarningUncheckedCreateWithoutUserInput = {
    warning_id?: number
    warning_reason?: string | null
    warning_date: string
  }

  export type WarningCreateOrConnectWithoutUserInput = {
    where: WarningWhereUniqueInput
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type InventoryCreateWithoutUserInput = {
    item_id: number
    item_amount?: number
  }

  export type InventoryUncheckedCreateWithoutUserInput = {
    item_id: number
    item_amount?: number
  }

  export type InventoryCreateOrConnectWithoutUserInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type WarningUpsertWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    update: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
    create: XOR<WarningCreateWithoutUserInput, WarningUncheckedCreateWithoutUserInput>
  }

  export type WarningUpdateWithWhereUniqueWithoutUserInput = {
    where: WarningWhereUniqueInput
    data: XOR<WarningUpdateWithoutUserInput, WarningUncheckedUpdateWithoutUserInput>
  }

  export type WarningUpdateManyWithWhereWithoutUserInput = {
    where: WarningScalarWhereInput
    data: XOR<WarningUpdateManyMutationInput, WarningUncheckedUpdateManyWithoutWarningsInput>
  }

  export type WarningScalarWhereInput = {
    AND?: Enumerable<WarningScalarWhereInput>
    OR?: Enumerable<WarningScalarWhereInput>
    NOT?: Enumerable<WarningScalarWhereInput>
    warning_id?: IntFilter | number
    warning_reason?: StringNullableFilter | string | null
    warning_date?: StringFilter | string
    userId?: IntNullableFilter | number | null
  }

  export type InventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
    create: XOR<InventoryCreateWithoutUserInput, InventoryUncheckedCreateWithoutUserInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutUserInput, InventoryUncheckedUpdateWithoutUserInput>
  }

  export type InventoryUpdateManyWithWhereWithoutUserInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: Enumerable<InventoryScalarWhereInput>
    OR?: Enumerable<InventoryScalarWhereInput>
    NOT?: Enumerable<InventoryScalarWhereInput>
    item_id?: IntFilter | number
    item_amount?: IntFilter | number
    userId?: IntNullableFilter | number | null
  }

  export type UserCreateWithoutWarningsInput = {
    discord_id: string
    level?: number
    money?: number
    inventory?: InventoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWarningsInput = {
    id?: number
    discord_id: string
    level?: number
    money?: number
    inventory?: InventoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWarningsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
  }

  export type UserUpsertWithoutWarningsInput = {
    update: XOR<UserUpdateWithoutWarningsInput, UserUncheckedUpdateWithoutWarningsInput>
    create: XOR<UserCreateWithoutWarningsInput, UserUncheckedCreateWithoutWarningsInput>
  }

  export type UserUpdateWithoutWarningsInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    inventory?: InventoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWarningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    inventory?: InventoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInventoryInput = {
    discord_id: string
    level?: number
    money?: number
    warnings?: WarningCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInventoryInput = {
    id?: number
    discord_id: string
    level?: number
    money?: number
    warnings?: WarningUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInventoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type UserUpsertWithoutInventoryInput = {
    update: XOR<UserUpdateWithoutInventoryInput, UserUncheckedUpdateWithoutInventoryInput>
    create: XOR<UserCreateWithoutInventoryInput, UserUncheckedCreateWithoutInventoryInput>
  }

  export type UserUpdateWithoutInventoryInput = {
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    warnings?: WarningUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    discord_id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    warnings?: WarningUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WarningUpdateWithoutUserInput = {
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUncheckedUpdateWithoutUserInput = {
    warning_id?: IntFieldUpdateOperationsInput | number
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
  }

  export type WarningUncheckedUpdateManyWithoutWarningsInput = {
    warning_id?: IntFieldUpdateOperationsInput | number
    warning_reason?: NullableStringFieldUpdateOperationsInput | string | null
    warning_date?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryUpdateWithoutUserInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateWithoutUserInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryUncheckedUpdateManyWithoutInventoryInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    item_amount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}