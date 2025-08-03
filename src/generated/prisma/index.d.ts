
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model attendance
 * 
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>
/**
 * Model Renamedclass
 * This model has been renamed to 'Renamedclass' during introspection, because the original name 'class' is reserved.
 */
export type Renamedclass = $Result.DefaultSelection<Prisma.$RenamedclassPayload>
/**
 * Model classsection
 * 
 */
export type classsection = $Result.DefaultSelection<Prisma.$classsectionPayload>
/**
 * Model section
 * 
 */
export type section = $Result.DefaultSelection<Prisma.$sectionPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model teacher
 * 
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>
/**
 * Model metricgroup
 * 
 */
export type metricgroup = $Result.DefaultSelection<Prisma.$metricgroupPayload>
/**
 * Model metric
 * 
 */
export type metric = $Result.DefaultSelection<Prisma.$metricPayload>
/**
 * Model metricscorecard
 * 
 */
export type metricscorecard = $Result.DefaultSelection<Prisma.$metricscorecardPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const attendance_status: {
  P: 'P',
  A: 'A',
  L: 'L',
  V: 'V'
};

export type attendance_status = (typeof attendance_status)[keyof typeof attendance_status]

}

export type attendance_status = $Enums.attendance_status

export const attendance_status: typeof $Enums.attendance_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renamedclass`: Exposes CRUD operations for the **Renamedclass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Renamedclasses
    * const renamedclasses = await prisma.renamedclass.findMany()
    * ```
    */
  get renamedclass(): Prisma.RenamedclassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classsection`: Exposes CRUD operations for the **classsection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classsections
    * const classsections = await prisma.classsection.findMany()
    * ```
    */
  get classsection(): Prisma.classsectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.sectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.teacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricgroup`: Exposes CRUD operations for the **metricgroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metricgroups
    * const metricgroups = await prisma.metricgroup.findMany()
    * ```
    */
  get metricgroup(): Prisma.metricgroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.metricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricscorecard`: Exposes CRUD operations for the **metricscorecard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metricscorecards
    * const metricscorecards = await prisma.metricscorecard.findMany()
    * ```
    */
  get metricscorecard(): Prisma.metricscorecardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    attendance: 'attendance',
    Renamedclass: 'Renamedclass',
    classsection: 'classsection',
    section: 'section',
    student: 'student',
    teacher: 'teacher',
    metricgroup: 'metricgroup',
    metric: 'metric',
    metricscorecard: 'metricscorecard',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "attendance" | "renamedclass" | "classsection" | "section" | "student" | "teacher" | "metricgroup" | "metric" | "metricscorecard" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>
        fields: Prisma.attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Renamedclass: {
        payload: Prisma.$RenamedclassPayload<ExtArgs>
        fields: Prisma.RenamedclassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenamedclassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenamedclassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          findFirst: {
            args: Prisma.RenamedclassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenamedclassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          findMany: {
            args: Prisma.RenamedclassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>[]
          }
          create: {
            args: Prisma.RenamedclassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          createMany: {
            args: Prisma.RenamedclassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RenamedclassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          update: {
            args: Prisma.RenamedclassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          deleteMany: {
            args: Prisma.RenamedclassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenamedclassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RenamedclassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>
          }
          aggregate: {
            args: Prisma.RenamedclassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenamedclass>
          }
          groupBy: {
            args: Prisma.RenamedclassGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenamedclassGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenamedclassCountArgs<ExtArgs>
            result: $Utils.Optional<RenamedclassCountAggregateOutputType> | number
          }
        }
      }
      classsection: {
        payload: Prisma.$classsectionPayload<ExtArgs>
        fields: Prisma.classsectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classsectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classsectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          findFirst: {
            args: Prisma.classsectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classsectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          findMany: {
            args: Prisma.classsectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>[]
          }
          create: {
            args: Prisma.classsectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          createMany: {
            args: Prisma.classsectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.classsectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          update: {
            args: Prisma.classsectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          deleteMany: {
            args: Prisma.classsectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classsectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.classsectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classsectionPayload>
          }
          aggregate: {
            args: Prisma.ClasssectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasssection>
          }
          groupBy: {
            args: Prisma.classsectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasssectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.classsectionCountArgs<ExtArgs>
            result: $Utils.Optional<ClasssectionCountAggregateOutputType> | number
          }
        }
      }
      section: {
        payload: Prisma.$sectionPayload<ExtArgs>
        fields: Prisma.sectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          findFirst: {
            args: Prisma.sectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          findMany: {
            args: Prisma.sectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>[]
          }
          create: {
            args: Prisma.sectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          createMany: {
            args: Prisma.sectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          update: {
            args: Prisma.sectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          deleteMany: {
            args: Prisma.sectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.sectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>
        fields: Prisma.teacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      metricgroup: {
        payload: Prisma.$metricgroupPayload<ExtArgs>
        fields: Prisma.metricgroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metricgroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metricgroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          findFirst: {
            args: Prisma.metricgroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metricgroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          findMany: {
            args: Prisma.metricgroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>[]
          }
          create: {
            args: Prisma.metricgroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          createMany: {
            args: Prisma.metricgroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.metricgroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          update: {
            args: Prisma.metricgroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          deleteMany: {
            args: Prisma.metricgroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metricgroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.metricgroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricgroupPayload>
          }
          aggregate: {
            args: Prisma.MetricgroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricgroup>
          }
          groupBy: {
            args: Prisma.metricgroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricgroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.metricgroupCountArgs<ExtArgs>
            result: $Utils.Optional<MetricgroupCountAggregateOutputType> | number
          }
        }
      }
      metric: {
        payload: Prisma.$metricPayload<ExtArgs>
        fields: Prisma.metricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          findFirst: {
            args: Prisma.metricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          findMany: {
            args: Prisma.metricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>[]
          }
          create: {
            args: Prisma.metricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          createMany: {
            args: Prisma.metricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.metricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          update: {
            args: Prisma.metricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          deleteMany: {
            args: Prisma.metricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.metricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.metricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.metricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      metricscorecard: {
        payload: Prisma.$metricscorecardPayload<ExtArgs>
        fields: Prisma.metricscorecardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.metricscorecardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.metricscorecardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          findFirst: {
            args: Prisma.metricscorecardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.metricscorecardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          findMany: {
            args: Prisma.metricscorecardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>[]
          }
          create: {
            args: Prisma.metricscorecardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          createMany: {
            args: Prisma.metricscorecardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.metricscorecardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          update: {
            args: Prisma.metricscorecardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          deleteMany: {
            args: Prisma.metricscorecardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.metricscorecardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.metricscorecardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$metricscorecardPayload>
          }
          aggregate: {
            args: Prisma.MetricscorecardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricscorecard>
          }
          groupBy: {
            args: Prisma.metricscorecardGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricscorecardGroupByOutputType>[]
          }
          count: {
            args: Prisma.metricscorecardCountArgs<ExtArgs>
            result: $Utils.Optional<MetricscorecardCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    attendance?: attendanceOmit
    renamedclass?: RenamedclassOmit
    classsection?: classsectionOmit
    section?: sectionOmit
    student?: studentOmit
    teacher?: teacherOmit
    metricgroup?: metricgroupOmit
    metric?: metricOmit
    metricscorecard?: metricscorecardOmit
    user?: userOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RenamedclassCountOutputType
   */

  export type RenamedclassCountOutputType = {
    classsection: number
  }

  export type RenamedclassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection?: boolean | RenamedclassCountOutputTypeCountClasssectionArgs
  }

  // Custom InputTypes
  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenamedclassCountOutputType
     */
    select?: RenamedclassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeCountClasssectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classsectionWhereInput
  }


  /**
   * Count Type ClasssectionCountOutputType
   */

  export type ClasssectionCountOutputType = {
    attendance: number
    metricscorecards: number
    student: number
  }

  export type ClasssectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | ClasssectionCountOutputTypeCountAttendanceArgs
    metricscorecards?: boolean | ClasssectionCountOutputTypeCountMetricscorecardsArgs
    student?: boolean | ClasssectionCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * ClasssectionCountOutputType without action
   */
  export type ClasssectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasssectionCountOutputType
     */
    select?: ClasssectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasssectionCountOutputType without action
   */
  export type ClasssectionCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * ClasssectionCountOutputType without action
   */
  export type ClasssectionCountOutputTypeCountMetricscorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricscorecardWhereInput
  }

  /**
   * ClasssectionCountOutputType without action
   */
  export type ClasssectionCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    classsection: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection?: boolean | SectionCountOutputTypeCountClasssectionArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountClasssectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classsectionWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendance: number
    metricScorecards: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    metricScorecards?: boolean | StudentCountOutputTypeCountMetricScorecardsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMetricScorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricscorecardWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    classsection_classsection_subjectHeadIdToteacher: number
    classsection_classsection_teacherIdToteacher: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection_classsection_subjectHeadIdToteacher?: boolean | TeacherCountOutputTypeCountClasssection_classsection_subjectHeadIdToteacherArgs
    classsection_classsection_teacherIdToteacher?: boolean | TeacherCountOutputTypeCountClasssection_classsection_teacherIdToteacherArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClasssection_classsection_subjectHeadIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classsectionWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClasssection_classsection_teacherIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classsectionWhereInput
  }


  /**
   * Count Type MetricgroupCountOutputType
   */

  export type MetricgroupCountOutputType = {
    metrics: number
  }

  export type MetricgroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | MetricgroupCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * MetricgroupCountOutputType without action
   */
  export type MetricgroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricgroupCountOutputType
     */
    select?: MetricgroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetricgroupCountOutputType without action
   */
  export type MetricgroupCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricWhereInput
  }


  /**
   * Count Type MetricCountOutputType
   */

  export type MetricCountOutputType = {
    scorecards: number
  }

  export type MetricCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scorecards?: boolean | MetricCountOutputTypeCountScorecardsArgs
  }

  // Custom InputTypes
  /**
   * MetricCountOutputType without action
   */
  export type MetricCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricCountOutputType
     */
    select?: MetricCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetricCountOutputType without action
   */
  export type MetricCountOutputTypeCountScorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricscorecardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    adate: Date | null
    status: $Enums.attendance_status | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    adate: Date | null
    status: $Enums.attendance_status | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    classSectionId: number
    adate: number
    status: number
    updatedBy: number
    updatedDate: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    status?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    status?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    status?: true
    updatedBy?: true
    updatedDate?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    studentId: number
    classSectionId: number
    adate: Date
    status: $Enums.attendance_status
    updatedBy: string | null
    updatedDate: Date | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    classSectionId?: boolean
    adate?: boolean
    status?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type attendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    classSectionId?: boolean
    adate?: boolean
    status?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
  }

  export type attendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "classSectionId" | "adate" | "status" | "updatedBy" | "updatedDate", ExtArgs["result"]["attendance"]>
  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
  }

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      classsection: Prisma.$classsectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      classSectionId: number
      adate: Date
      status: $Enums.attendance_status
      updatedBy: string | null
      updatedDate: Date | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<Prisma.$attendancePayload, S>

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance'], meta: { name: 'attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendanceFindUniqueArgs>(args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendanceFindFirstArgs>(args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendanceFindManyArgs>(args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends attendanceCreateArgs>(args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendanceCreateManyArgs>(args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends attendanceDeleteArgs>(args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendanceUpdateArgs>(args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendanceDeleteManyArgs>(args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendanceUpdateManyArgs>(args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends attendanceUpsertArgs>(args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
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
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance model
   */
  readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classsection<T extends classsectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classsectionDefaultArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<"attendance", 'Int'>
    readonly studentId: FieldRef<"attendance", 'Int'>
    readonly classSectionId: FieldRef<"attendance", 'Int'>
    readonly adate: FieldRef<"attendance", 'DateTime'>
    readonly status: FieldRef<"attendance", 'attendance_status'>
    readonly updatedBy: FieldRef<"attendance", 'String'>
    readonly updatedDate: FieldRef<"attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
  }

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to delete.
     */
    limit?: number
  }

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
  }


  /**
   * Model Renamedclass
   */

  export type AggregateRenamedclass = {
    _count: RenamedclassCountAggregateOutputType | null
    _avg: RenamedclassAvgAggregateOutputType | null
    _sum: RenamedclassSumAggregateOutputType | null
    _min: RenamedclassMinAggregateOutputType | null
    _max: RenamedclassMaxAggregateOutputType | null
  }

  export type RenamedclassAvgAggregateOutputType = {
    id: number | null
  }

  export type RenamedclassSumAggregateOutputType = {
    id: number | null
  }

  export type RenamedclassMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type RenamedclassMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type RenamedclassCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type RenamedclassAvgAggregateInputType = {
    id?: true
  }

  export type RenamedclassSumAggregateInputType = {
    id?: true
  }

  export type RenamedclassMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RenamedclassMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type RenamedclassCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type RenamedclassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclass to aggregate.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Renamedclasses
    **/
    _count?: true | RenamedclassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RenamedclassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RenamedclassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenamedclassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenamedclassMaxAggregateInputType
  }

  export type GetRenamedclassAggregateType<T extends RenamedclassAggregateArgs> = {
        [P in keyof T & keyof AggregateRenamedclass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenamedclass[P]>
      : GetScalarType<T[P], AggregateRenamedclass[P]>
  }




  export type RenamedclassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenamedclassWhereInput
    orderBy?: RenamedclassOrderByWithAggregationInput | RenamedclassOrderByWithAggregationInput[]
    by: RenamedclassScalarFieldEnum[] | RenamedclassScalarFieldEnum
    having?: RenamedclassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenamedclassCountAggregateInputType | true
    _avg?: RenamedclassAvgAggregateInputType
    _sum?: RenamedclassSumAggregateInputType
    _min?: RenamedclassMinAggregateInputType
    _max?: RenamedclassMaxAggregateInputType
  }

  export type RenamedclassGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: RenamedclassCountAggregateOutputType | null
    _avg: RenamedclassAvgAggregateOutputType | null
    _sum: RenamedclassSumAggregateOutputType | null
    _min: RenamedclassMinAggregateOutputType | null
    _max: RenamedclassMaxAggregateOutputType | null
  }

  type GetRenamedclassGroupByPayload<T extends RenamedclassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenamedclassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenamedclassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>
            : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>
        }
      >
    >


  export type RenamedclassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    classsection?: boolean | Renamedclass$classsectionArgs<ExtArgs>
    _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renamedclass"]>



  export type RenamedclassSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type RenamedclassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["renamedclass"]>
  export type RenamedclassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection?: boolean | Renamedclass$classsectionArgs<ExtArgs>
    _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RenamedclassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Renamedclass"
    objects: {
      classsection: Prisma.$classsectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["renamedclass"]>
    composites: {}
  }

  type RenamedclassGetPayload<S extends boolean | null | undefined | RenamedclassDefaultArgs> = $Result.GetResult<Prisma.$RenamedclassPayload, S>

  type RenamedclassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenamedclassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenamedclassCountAggregateInputType | true
    }

  export interface RenamedclassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Renamedclass'], meta: { name: 'Renamedclass' } }
    /**
     * Find zero or one Renamedclass that matches the filter.
     * @param {RenamedclassFindUniqueArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenamedclassFindUniqueArgs>(args: SelectSubset<T, RenamedclassFindUniqueArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Renamedclass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenamedclassFindUniqueOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenamedclassFindUniqueOrThrowArgs>(args: SelectSubset<T, RenamedclassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renamedclass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenamedclassFindFirstArgs>(args?: SelectSubset<T, RenamedclassFindFirstArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renamedclass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenamedclassFindFirstOrThrowArgs>(args?: SelectSubset<T, RenamedclassFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Renamedclasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany()
     * 
     * // Get first 10 Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renamedclassWithIdOnly = await prisma.renamedclass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenamedclassFindManyArgs>(args?: SelectSubset<T, RenamedclassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Renamedclass.
     * @param {RenamedclassCreateArgs} args - Arguments to create a Renamedclass.
     * @example
     * // Create one Renamedclass
     * const Renamedclass = await prisma.renamedclass.create({
     *   data: {
     *     // ... data to create a Renamedclass
     *   }
     * })
     * 
     */
    create<T extends RenamedclassCreateArgs>(args: SelectSubset<T, RenamedclassCreateArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Renamedclasses.
     * @param {RenamedclassCreateManyArgs} args - Arguments to create many Renamedclasses.
     * @example
     * // Create many Renamedclasses
     * const renamedclass = await prisma.renamedclass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenamedclassCreateManyArgs>(args?: SelectSubset<T, RenamedclassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Renamedclass.
     * @param {RenamedclassDeleteArgs} args - Arguments to delete one Renamedclass.
     * @example
     * // Delete one Renamedclass
     * const Renamedclass = await prisma.renamedclass.delete({
     *   where: {
     *     // ... filter to delete one Renamedclass
     *   }
     * })
     * 
     */
    delete<T extends RenamedclassDeleteArgs>(args: SelectSubset<T, RenamedclassDeleteArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Renamedclass.
     * @param {RenamedclassUpdateArgs} args - Arguments to update one Renamedclass.
     * @example
     * // Update one Renamedclass
     * const renamedclass = await prisma.renamedclass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenamedclassUpdateArgs>(args: SelectSubset<T, RenamedclassUpdateArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Renamedclasses.
     * @param {RenamedclassDeleteManyArgs} args - Arguments to filter Renamedclasses to delete.
     * @example
     * // Delete a few Renamedclasses
     * const { count } = await prisma.renamedclass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenamedclassDeleteManyArgs>(args?: SelectSubset<T, RenamedclassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Renamedclasses
     * const renamedclass = await prisma.renamedclass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenamedclassUpdateManyArgs>(args: SelectSubset<T, RenamedclassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Renamedclass.
     * @param {RenamedclassUpsertArgs} args - Arguments to update or create a Renamedclass.
     * @example
     * // Update or create a Renamedclass
     * const renamedclass = await prisma.renamedclass.upsert({
     *   create: {
     *     // ... data to create a Renamedclass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Renamedclass we want to update
     *   }
     * })
     */
    upsert<T extends RenamedclassUpsertArgs>(args: SelectSubset<T, RenamedclassUpsertArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassCountArgs} args - Arguments to filter Renamedclasses to count.
     * @example
     * // Count the number of Renamedclasses
     * const count = await prisma.renamedclass.count({
     *   where: {
     *     // ... the filter for the Renamedclasses we want to count
     *   }
     * })
    **/
    count<T extends RenamedclassCountArgs>(
      args?: Subset<T, RenamedclassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenamedclassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RenamedclassAggregateArgs>(args: Subset<T, RenamedclassAggregateArgs>): Prisma.PrismaPromise<GetRenamedclassAggregateType<T>>

    /**
     * Group by Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassGroupByArgs} args - Group by arguments.
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
      T extends RenamedclassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenamedclassGroupByArgs['orderBy'] }
        : { orderBy?: RenamedclassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RenamedclassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenamedclassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Renamedclass model
   */
  readonly fields: RenamedclassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Renamedclass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenamedclassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classsection<T extends Renamedclass$classsectionArgs<ExtArgs> = {}>(args?: Subset<T, Renamedclass$classsectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Renamedclass model
   */
  interface RenamedclassFieldRefs {
    readonly id: FieldRef<"Renamedclass", 'Int'>
    readonly name: FieldRef<"Renamedclass", 'String'>
    readonly createdAt: FieldRef<"Renamedclass", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Renamedclass findUnique
   */
  export type RenamedclassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass findUniqueOrThrow
   */
  export type RenamedclassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass findFirst
   */
  export type RenamedclassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass findFirstOrThrow
   */
  export type RenamedclassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass findMany
   */
  export type RenamedclassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter, which Renamedclasses to fetch.
     */
    where?: RenamedclassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renamedclasses.
     */
    skip?: number
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[]
  }

  /**
   * Renamedclass create
   */
  export type RenamedclassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The data needed to create a Renamedclass.
     */
    data: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>
  }

  /**
   * Renamedclass createMany
   */
  export type RenamedclassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Renamedclasses.
     */
    data: RenamedclassCreateManyInput | RenamedclassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Renamedclass update
   */
  export type RenamedclassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The data needed to update a Renamedclass.
     */
    data: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>
    /**
     * Choose, which Renamedclass to update.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass updateMany
   */
  export type RenamedclassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Renamedclasses.
     */
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyInput>
    /**
     * Filter which Renamedclasses to update
     */
    where?: RenamedclassWhereInput
    /**
     * Limit how many Renamedclasses to update.
     */
    limit?: number
  }

  /**
   * Renamedclass upsert
   */
  export type RenamedclassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * The filter to search for the Renamedclass to update in case it exists.
     */
    where: RenamedclassWhereUniqueInput
    /**
     * In case the Renamedclass found by the `where` argument doesn't exist, create a new Renamedclass with this data.
     */
    create: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>
    /**
     * In case the Renamedclass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>
  }

  /**
   * Renamedclass delete
   */
  export type RenamedclassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
    /**
     * Filter which Renamedclass to delete.
     */
    where: RenamedclassWhereUniqueInput
  }

  /**
   * Renamedclass deleteMany
   */
  export type RenamedclassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclasses to delete
     */
    where?: RenamedclassWhereInput
    /**
     * Limit how many Renamedclasses to delete.
     */
    limit?: number
  }

  /**
   * Renamedclass.classsection
   */
  export type Renamedclass$classsectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    where?: classsectionWhereInput
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    cursor?: classsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * Renamedclass without action
   */
  export type RenamedclassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renamedclass
     */
    omit?: RenamedclassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenamedclassInclude<ExtArgs> | null
  }


  /**
   * Model classsection
   */

  export type AggregateClasssection = {
    _count: ClasssectionCountAggregateOutputType | null
    _avg: ClasssectionAvgAggregateOutputType | null
    _sum: ClasssectionSumAggregateOutputType | null
    _min: ClasssectionMinAggregateOutputType | null
    _max: ClasssectionMaxAggregateOutputType | null
  }

  export type ClasssectionAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    sectionId: number | null
    teacherId: number | null
    subjectHeadId: number | null
  }

  export type ClasssectionSumAggregateOutputType = {
    id: number | null
    classId: number | null
    sectionId: number | null
    teacherId: number | null
    subjectHeadId: number | null
  }

  export type ClasssectionMinAggregateOutputType = {
    id: number | null
    classId: number | null
    sectionId: number | null
    teacherId: number | null
    subjectHeadId: number | null
  }

  export type ClasssectionMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    sectionId: number | null
    teacherId: number | null
    subjectHeadId: number | null
  }

  export type ClasssectionCountAggregateOutputType = {
    id: number
    classId: number
    sectionId: number
    teacherId: number
    subjectHeadId: number
    _all: number
  }


  export type ClasssectionAvgAggregateInputType = {
    id?: true
    classId?: true
    sectionId?: true
    teacherId?: true
    subjectHeadId?: true
  }

  export type ClasssectionSumAggregateInputType = {
    id?: true
    classId?: true
    sectionId?: true
    teacherId?: true
    subjectHeadId?: true
  }

  export type ClasssectionMinAggregateInputType = {
    id?: true
    classId?: true
    sectionId?: true
    teacherId?: true
    subjectHeadId?: true
  }

  export type ClasssectionMaxAggregateInputType = {
    id?: true
    classId?: true
    sectionId?: true
    teacherId?: true
    subjectHeadId?: true
  }

  export type ClasssectionCountAggregateInputType = {
    id?: true
    classId?: true
    sectionId?: true
    teacherId?: true
    subjectHeadId?: true
    _all?: true
  }

  export type ClasssectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classsection to aggregate.
     */
    where?: classsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classsections to fetch.
     */
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classsections
    **/
    _count?: true | ClasssectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasssectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasssectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasssectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasssectionMaxAggregateInputType
  }

  export type GetClasssectionAggregateType<T extends ClasssectionAggregateArgs> = {
        [P in keyof T & keyof AggregateClasssection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasssection[P]>
      : GetScalarType<T[P], AggregateClasssection[P]>
  }




  export type classsectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classsectionWhereInput
    orderBy?: classsectionOrderByWithAggregationInput | classsectionOrderByWithAggregationInput[]
    by: ClasssectionScalarFieldEnum[] | ClasssectionScalarFieldEnum
    having?: classsectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasssectionCountAggregateInputType | true
    _avg?: ClasssectionAvgAggregateInputType
    _sum?: ClasssectionSumAggregateInputType
    _min?: ClasssectionMinAggregateInputType
    _max?: ClasssectionMaxAggregateInputType
  }

  export type ClasssectionGroupByOutputType = {
    id: number
    classId: number
    sectionId: number
    teacherId: number | null
    subjectHeadId: number | null
    _count: ClasssectionCountAggregateOutputType | null
    _avg: ClasssectionAvgAggregateOutputType | null
    _sum: ClasssectionSumAggregateOutputType | null
    _min: ClasssectionMinAggregateOutputType | null
    _max: ClasssectionMaxAggregateOutputType | null
  }

  type GetClasssectionGroupByPayload<T extends classsectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasssectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasssectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasssectionGroupByOutputType[P]>
            : GetScalarType<T[P], ClasssectionGroupByOutputType[P]>
        }
      >
    >


  export type classsectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    sectionId?: boolean
    teacherId?: boolean
    subjectHeadId?: boolean
    attendance?: boolean | classsection$attendanceArgs<ExtArgs>
    metricscorecards?: boolean | classsection$metricscorecardsArgs<ExtArgs>
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    section?: boolean | sectionDefaultArgs<ExtArgs>
    teacher_classsection_subjectHeadIdToteacher?: boolean | classsection$teacher_classsection_subjectHeadIdToteacherArgs<ExtArgs>
    teacher_classsection_teacherIdToteacher?: boolean | classsection$teacher_classsection_teacherIdToteacherArgs<ExtArgs>
    student?: boolean | classsection$studentArgs<ExtArgs>
    _count?: boolean | ClasssectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classsection"]>



  export type classsectionSelectScalar = {
    id?: boolean
    classId?: boolean
    sectionId?: boolean
    teacherId?: boolean
    subjectHeadId?: boolean
  }

  export type classsectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "sectionId" | "teacherId" | "subjectHeadId", ExtArgs["result"]["classsection"]>
  export type classsectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | classsection$attendanceArgs<ExtArgs>
    metricscorecards?: boolean | classsection$metricscorecardsArgs<ExtArgs>
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>
    section?: boolean | sectionDefaultArgs<ExtArgs>
    teacher_classsection_subjectHeadIdToteacher?: boolean | classsection$teacher_classsection_subjectHeadIdToteacherArgs<ExtArgs>
    teacher_classsection_teacherIdToteacher?: boolean | classsection$teacher_classsection_teacherIdToteacherArgs<ExtArgs>
    student?: boolean | classsection$studentArgs<ExtArgs>
    _count?: boolean | ClasssectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $classsectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classsection"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      metricscorecards: Prisma.$metricscorecardPayload<ExtArgs>[]
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>
      section: Prisma.$sectionPayload<ExtArgs>
      teacher_classsection_subjectHeadIdToteacher: Prisma.$teacherPayload<ExtArgs> | null
      teacher_classsection_teacherIdToteacher: Prisma.$teacherPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      sectionId: number
      teacherId: number | null
      subjectHeadId: number | null
    }, ExtArgs["result"]["classsection"]>
    composites: {}
  }

  type classsectionGetPayload<S extends boolean | null | undefined | classsectionDefaultArgs> = $Result.GetResult<Prisma.$classsectionPayload, S>

  type classsectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classsectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasssectionCountAggregateInputType | true
    }

  export interface classsectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classsection'], meta: { name: 'classsection' } }
    /**
     * Find zero or one Classsection that matches the filter.
     * @param {classsectionFindUniqueArgs} args - Arguments to find a Classsection
     * @example
     * // Get one Classsection
     * const classsection = await prisma.classsection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classsectionFindUniqueArgs>(args: SelectSubset<T, classsectionFindUniqueArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classsection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classsectionFindUniqueOrThrowArgs} args - Arguments to find a Classsection
     * @example
     * // Get one Classsection
     * const classsection = await prisma.classsection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classsectionFindUniqueOrThrowArgs>(args: SelectSubset<T, classsectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classsection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionFindFirstArgs} args - Arguments to find a Classsection
     * @example
     * // Get one Classsection
     * const classsection = await prisma.classsection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classsectionFindFirstArgs>(args?: SelectSubset<T, classsectionFindFirstArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classsection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionFindFirstOrThrowArgs} args - Arguments to find a Classsection
     * @example
     * // Get one Classsection
     * const classsection = await prisma.classsection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classsectionFindFirstOrThrowArgs>(args?: SelectSubset<T, classsectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classsections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classsections
     * const classsections = await prisma.classsection.findMany()
     * 
     * // Get first 10 Classsections
     * const classsections = await prisma.classsection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classsectionWithIdOnly = await prisma.classsection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classsectionFindManyArgs>(args?: SelectSubset<T, classsectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classsection.
     * @param {classsectionCreateArgs} args - Arguments to create a Classsection.
     * @example
     * // Create one Classsection
     * const Classsection = await prisma.classsection.create({
     *   data: {
     *     // ... data to create a Classsection
     *   }
     * })
     * 
     */
    create<T extends classsectionCreateArgs>(args: SelectSubset<T, classsectionCreateArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classsections.
     * @param {classsectionCreateManyArgs} args - Arguments to create many Classsections.
     * @example
     * // Create many Classsections
     * const classsection = await prisma.classsection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classsectionCreateManyArgs>(args?: SelectSubset<T, classsectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classsection.
     * @param {classsectionDeleteArgs} args - Arguments to delete one Classsection.
     * @example
     * // Delete one Classsection
     * const Classsection = await prisma.classsection.delete({
     *   where: {
     *     // ... filter to delete one Classsection
     *   }
     * })
     * 
     */
    delete<T extends classsectionDeleteArgs>(args: SelectSubset<T, classsectionDeleteArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classsection.
     * @param {classsectionUpdateArgs} args - Arguments to update one Classsection.
     * @example
     * // Update one Classsection
     * const classsection = await prisma.classsection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classsectionUpdateArgs>(args: SelectSubset<T, classsectionUpdateArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classsections.
     * @param {classsectionDeleteManyArgs} args - Arguments to filter Classsections to delete.
     * @example
     * // Delete a few Classsections
     * const { count } = await prisma.classsection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classsectionDeleteManyArgs>(args?: SelectSubset<T, classsectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classsections
     * const classsection = await prisma.classsection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classsectionUpdateManyArgs>(args: SelectSubset<T, classsectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classsection.
     * @param {classsectionUpsertArgs} args - Arguments to update or create a Classsection.
     * @example
     * // Update or create a Classsection
     * const classsection = await prisma.classsection.upsert({
     *   create: {
     *     // ... data to create a Classsection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classsection we want to update
     *   }
     * })
     */
    upsert<T extends classsectionUpsertArgs>(args: SelectSubset<T, classsectionUpsertArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionCountArgs} args - Arguments to filter Classsections to count.
     * @example
     * // Count the number of Classsections
     * const count = await prisma.classsection.count({
     *   where: {
     *     // ... the filter for the Classsections we want to count
     *   }
     * })
    **/
    count<T extends classsectionCountArgs>(
      args?: Subset<T, classsectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasssectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasssectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClasssectionAggregateArgs>(args: Subset<T, ClasssectionAggregateArgs>): Prisma.PrismaPromise<GetClasssectionAggregateType<T>>

    /**
     * Group by Classsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classsectionGroupByArgs} args - Group by arguments.
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
      T extends classsectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classsectionGroupByArgs['orderBy'] }
        : { orderBy?: classsectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, classsectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasssectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classsection model
   */
  readonly fields: classsectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classsection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classsectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends classsection$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, classsection$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricscorecards<T extends classsection$metricscorecardsArgs<ExtArgs> = {}>(args?: Subset<T, classsection$metricscorecardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Renamedclass<T extends RenamedclassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RenamedclassDefaultArgs<ExtArgs>>): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    section<T extends sectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sectionDefaultArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher_classsection_subjectHeadIdToteacher<T extends classsection$teacher_classsection_subjectHeadIdToteacherArgs<ExtArgs> = {}>(args?: Subset<T, classsection$teacher_classsection_subjectHeadIdToteacherArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teacher_classsection_teacherIdToteacher<T extends classsection$teacher_classsection_teacherIdToteacherArgs<ExtArgs> = {}>(args?: Subset<T, classsection$teacher_classsection_teacherIdToteacherArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends classsection$studentArgs<ExtArgs> = {}>(args?: Subset<T, classsection$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classsection model
   */
  interface classsectionFieldRefs {
    readonly id: FieldRef<"classsection", 'Int'>
    readonly classId: FieldRef<"classsection", 'Int'>
    readonly sectionId: FieldRef<"classsection", 'Int'>
    readonly teacherId: FieldRef<"classsection", 'Int'>
    readonly subjectHeadId: FieldRef<"classsection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * classsection findUnique
   */
  export type classsectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter, which classsection to fetch.
     */
    where: classsectionWhereUniqueInput
  }

  /**
   * classsection findUniqueOrThrow
   */
  export type classsectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter, which classsection to fetch.
     */
    where: classsectionWhereUniqueInput
  }

  /**
   * classsection findFirst
   */
  export type classsectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter, which classsection to fetch.
     */
    where?: classsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classsections to fetch.
     */
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classsections.
     */
    cursor?: classsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classsections.
     */
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * classsection findFirstOrThrow
   */
  export type classsectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter, which classsection to fetch.
     */
    where?: classsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classsections to fetch.
     */
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classsections.
     */
    cursor?: classsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classsections.
     */
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * classsection findMany
   */
  export type classsectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter, which classsections to fetch.
     */
    where?: classsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classsections to fetch.
     */
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classsections.
     */
    cursor?: classsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classsections.
     */
    skip?: number
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * classsection create
   */
  export type classsectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * The data needed to create a classsection.
     */
    data: XOR<classsectionCreateInput, classsectionUncheckedCreateInput>
  }

  /**
   * classsection createMany
   */
  export type classsectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classsections.
     */
    data: classsectionCreateManyInput | classsectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classsection update
   */
  export type classsectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * The data needed to update a classsection.
     */
    data: XOR<classsectionUpdateInput, classsectionUncheckedUpdateInput>
    /**
     * Choose, which classsection to update.
     */
    where: classsectionWhereUniqueInput
  }

  /**
   * classsection updateMany
   */
  export type classsectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classsections.
     */
    data: XOR<classsectionUpdateManyMutationInput, classsectionUncheckedUpdateManyInput>
    /**
     * Filter which classsections to update
     */
    where?: classsectionWhereInput
    /**
     * Limit how many classsections to update.
     */
    limit?: number
  }

  /**
   * classsection upsert
   */
  export type classsectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * The filter to search for the classsection to update in case it exists.
     */
    where: classsectionWhereUniqueInput
    /**
     * In case the classsection found by the `where` argument doesn't exist, create a new classsection with this data.
     */
    create: XOR<classsectionCreateInput, classsectionUncheckedCreateInput>
    /**
     * In case the classsection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classsectionUpdateInput, classsectionUncheckedUpdateInput>
  }

  /**
   * classsection delete
   */
  export type classsectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    /**
     * Filter which classsection to delete.
     */
    where: classsectionWhereUniqueInput
  }

  /**
   * classsection deleteMany
   */
  export type classsectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classsections to delete
     */
    where?: classsectionWhereInput
    /**
     * Limit how many classsections to delete.
     */
    limit?: number
  }

  /**
   * classsection.attendance
   */
  export type classsection$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * classsection.metricscorecards
   */
  export type classsection$metricscorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    where?: metricscorecardWhereInput
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    cursor?: metricscorecardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * classsection.teacher_classsection_subjectHeadIdToteacher
   */
  export type classsection$teacher_classsection_subjectHeadIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    where?: teacherWhereInput
  }

  /**
   * classsection.teacher_classsection_teacherIdToteacher
   */
  export type classsection$teacher_classsection_teacherIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    where?: teacherWhereInput
  }

  /**
   * classsection.student
   */
  export type classsection$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * classsection without action
   */
  export type classsectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
  }


  /**
   * Model section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which section to aggregate.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type sectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionWhereInput
    orderBy?: sectionOrderByWithAggregationInput | sectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: sectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    name: string
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends sectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type sectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    classsection?: boolean | section$classsectionArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>



  export type sectionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type sectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["section"]>
  export type sectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection?: boolean | section$classsectionArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "section"
    objects: {
      classsection: Prisma.$classsectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type sectionGetPayload<S extends boolean | null | undefined | sectionDefaultArgs> = $Result.GetResult<Prisma.$sectionPayload, S>

  type sectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface sectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['section'], meta: { name: 'section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {sectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sectionFindUniqueArgs>(args: SelectSubset<T, sectionFindUniqueArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sectionFindUniqueOrThrowArgs>(args: SelectSubset<T, sectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sectionFindFirstArgs>(args?: SelectSubset<T, sectionFindFirstArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sectionFindFirstOrThrowArgs>(args?: SelectSubset<T, sectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sectionFindManyArgs>(args?: SelectSubset<T, sectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {sectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends sectionCreateArgs>(args: SelectSubset<T, sectionCreateArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {sectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sectionCreateManyArgs>(args?: SelectSubset<T, sectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {sectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends sectionDeleteArgs>(args: SelectSubset<T, sectionDeleteArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {sectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sectionUpdateArgs>(args: SelectSubset<T, sectionUpdateArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {sectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sectionDeleteManyArgs>(args?: SelectSubset<T, sectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sectionUpdateManyArgs>(args: SelectSubset<T, sectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {sectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends sectionUpsertArgs>(args: SelectSubset<T, sectionUpsertArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends sectionCountArgs>(
      args?: Subset<T, sectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionGroupByArgs} args - Group by arguments.
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
      T extends sectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectionGroupByArgs['orderBy'] }
        : { orderBy?: sectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, sectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the section model
   */
  readonly fields: sectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classsection<T extends section$classsectionArgs<ExtArgs> = {}>(args?: Subset<T, section$classsectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the section model
   */
  interface sectionFieldRefs {
    readonly id: FieldRef<"section", 'Int'>
    readonly name: FieldRef<"section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * section findUnique
   */
  export type sectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where: sectionWhereUniqueInput
  }

  /**
   * section findUniqueOrThrow
   */
  export type sectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where: sectionWhereUniqueInput
  }

  /**
   * section findFirst
   */
  export type sectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * section findFirstOrThrow
   */
  export type sectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * section findMany
   */
  export type sectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * section create
   */
  export type sectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The data needed to create a section.
     */
    data: XOR<sectionCreateInput, sectionUncheckedCreateInput>
  }

  /**
   * section createMany
   */
  export type sectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sections.
     */
    data: sectionCreateManyInput | sectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * section update
   */
  export type sectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The data needed to update a section.
     */
    data: XOR<sectionUpdateInput, sectionUncheckedUpdateInput>
    /**
     * Choose, which section to update.
     */
    where: sectionWhereUniqueInput
  }

  /**
   * section updateMany
   */
  export type sectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sections.
     */
    data: XOR<sectionUpdateManyMutationInput, sectionUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionWhereInput
    /**
     * Limit how many sections to update.
     */
    limit?: number
  }

  /**
   * section upsert
   */
  export type sectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The filter to search for the section to update in case it exists.
     */
    where: sectionWhereUniqueInput
    /**
     * In case the section found by the `where` argument doesn't exist, create a new section with this data.
     */
    create: XOR<sectionCreateInput, sectionUncheckedCreateInput>
    /**
     * In case the section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectionUpdateInput, sectionUncheckedUpdateInput>
  }

  /**
   * section delete
   */
  export type sectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter which section to delete.
     */
    where: sectionWhereUniqueInput
  }

  /**
   * section deleteMany
   */
  export type sectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to delete
     */
    where?: sectionWhereInput
    /**
     * Limit how many sections to delete.
     */
    limit?: number
  }

  /**
   * section.classsection
   */
  export type section$classsectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    where?: classsectionWhereInput
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    cursor?: classsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * section without action
   */
  export type sectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the section
     */
    omit?: sectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sectionInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    classSectionId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    classSectionId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    gender: string | null
    dateOfBirth: Date | null
    rollNumber: string | null
    classSectionId: number | null
    admissionDate: Date | null
    previousSchool: string | null
    fatherNic: string | null
    email: string | null
    phone: string | null
    address: string | null
    religion: string | null
    guardianName: string | null
    guardianContact: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    gender: string | null
    dateOfBirth: Date | null
    rollNumber: string | null
    classSectionId: number | null
    admissionDate: Date | null
    previousSchool: string | null
    fatherNic: string | null
    email: string | null
    phone: string | null
    address: string | null
    religion: string | null
    guardianName: string | null
    guardianContact: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    gender: number
    dateOfBirth: number
    rollNumber: number
    classSectionId: number
    admissionDate: number
    previousSchool: number
    fatherNic: number
    email: number
    phone: number
    address: number
    religion: number
    guardianName: number
    guardianContact: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    classSectionId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    classSectionId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    dateOfBirth?: true
    rollNumber?: true
    classSectionId?: true
    admissionDate?: true
    previousSchool?: true
    fatherNic?: true
    email?: true
    phone?: true
    address?: true
    religion?: true
    guardianName?: true
    guardianContact?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    dateOfBirth?: true
    rollNumber?: true
    classSectionId?: true
    admissionDate?: true
    previousSchool?: true
    fatherNic?: true
    email?: true
    phone?: true
    address?: true
    religion?: true
    guardianName?: true
    guardianContact?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    dateOfBirth?: true
    rollNumber?: true
    classSectionId?: true
    admissionDate?: true
    previousSchool?: true
    fatherNic?: true
    email?: true
    phone?: true
    address?: true
    religion?: true
    guardianName?: true
    guardianContact?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date
    rollNumber: string | null
    classSectionId: number
    admissionDate: Date
    previousSchool: string | null
    fatherNic: string | null
    email: string | null
    phone: string | null
    address: string | null
    religion: string | null
    guardianName: string | null
    guardianContact: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    rollNumber?: boolean
    classSectionId?: boolean
    admissionDate?: boolean
    previousSchool?: boolean
    fatherNic?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    religion?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendance?: boolean | student$attendanceArgs<ExtArgs>
    metricScorecards?: boolean | student$metricScorecardsArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type studentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    rollNumber?: boolean
    classSectionId?: boolean
    admissionDate?: boolean
    previousSchool?: boolean
    fatherNic?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    religion?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "gender" | "dateOfBirth" | "rollNumber" | "classSectionId" | "admissionDate" | "previousSchool" | "fatherNic" | "email" | "phone" | "address" | "religion" | "guardianName" | "guardianContact" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | student$attendanceArgs<ExtArgs>
    metricScorecards?: boolean | student$metricScorecardsArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      metricScorecards: Prisma.$metricscorecardPayload<ExtArgs>[]
      classsection: Prisma.$classsectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      gender: string
      dateOfBirth: Date
      rollNumber: string | null
      classSectionId: number
      admissionDate: Date
      previousSchool: string | null
      fatherNic: string | null
      email: string | null
      phone: string | null
      address: string | null
      religion: string | null
      guardianName: string | null
      guardianContact: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends student$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, student$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricScorecards<T extends student$metricScorecardsArgs<ExtArgs> = {}>(args?: Subset<T, student$metricScorecardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classsection<T extends classsectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classsectionDefaultArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'Int'>
    readonly firstName: FieldRef<"student", 'String'>
    readonly lastName: FieldRef<"student", 'String'>
    readonly gender: FieldRef<"student", 'String'>
    readonly dateOfBirth: FieldRef<"student", 'DateTime'>
    readonly rollNumber: FieldRef<"student", 'String'>
    readonly classSectionId: FieldRef<"student", 'Int'>
    readonly admissionDate: FieldRef<"student", 'DateTime'>
    readonly previousSchool: FieldRef<"student", 'String'>
    readonly fatherNic: FieldRef<"student", 'String'>
    readonly email: FieldRef<"student", 'String'>
    readonly phone: FieldRef<"student", 'String'>
    readonly address: FieldRef<"student", 'String'>
    readonly religion: FieldRef<"student", 'String'>
    readonly guardianName: FieldRef<"student", 'String'>
    readonly guardianContact: FieldRef<"student", 'String'>
    readonly isActive: FieldRef<"student", 'Boolean'>
    readonly createdAt: FieldRef<"student", 'DateTime'>
    readonly updatedAt: FieldRef<"student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.attendance
   */
  export type student$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * student.metricScorecards
   */
  export type student$metricScorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    where?: metricscorecardWhereInput
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    cursor?: metricscorecardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    nic: string | null
    subjectSpecialty: string | null
    hireDate: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    nic: string | null
    subjectSpecialty: string | null
    hireDate: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    nic: number
    subjectSpecialty: number
    hireDate: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    nic?: true
    subjectSpecialty?: true
    hireDate?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    nic?: true
    subjectSpecialty?: true
    hireDate?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    nic?: true
    subjectSpecialty?: true
    hireDate?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: teacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string | null
    nic: string | null
    subjectSpecialty: string | null
    hireDate: Date | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nic?: boolean
    subjectSpecialty?: boolean
    hireDate?: boolean
    classsection_classsection_subjectHeadIdToteacher?: boolean | teacher$classsection_classsection_subjectHeadIdToteacherArgs<ExtArgs>
    classsection_classsection_teacherIdToteacher?: boolean | teacher$classsection_classsection_teacherIdToteacherArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type teacherSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nic?: boolean
    subjectSpecialty?: boolean
    hireDate?: boolean
  }

  export type teacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "nic" | "subjectSpecialty" | "hireDate", ExtArgs["result"]["teacher"]>
  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classsection_classsection_subjectHeadIdToteacher?: boolean | teacher$classsection_classsection_subjectHeadIdToteacherArgs<ExtArgs>
    classsection_classsection_teacherIdToteacher?: boolean | teacher$classsection_classsection_teacherIdToteacherArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher"
    objects: {
      classsection_classsection_subjectHeadIdToteacher: Prisma.$classsectionPayload<ExtArgs>[]
      classsection_classsection_teacherIdToteacher: Prisma.$classsectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string | null
      nic: string | null
      subjectSpecialty: string | null
      hireDate: Date | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<Prisma.$teacherPayload, S>

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher'], meta: { name: 'teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacherFindUniqueArgs>(args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs>(args: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacherFindFirstArgs>(args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs>(args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teacherFindManyArgs>(args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends teacherCreateArgs>(args: SelectSubset<T, teacherCreateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacherCreateManyArgs>(args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends teacherDeleteArgs>(args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacherUpdateArgs>(args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacherDeleteManyArgs>(args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacherUpdateManyArgs>(args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends teacherUpsertArgs>(args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
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
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher model
   */
  readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classsection_classsection_subjectHeadIdToteacher<T extends teacher$classsection_classsection_subjectHeadIdToteacherArgs<ExtArgs> = {}>(args?: Subset<T, teacher$classsection_classsection_subjectHeadIdToteacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classsection_classsection_teacherIdToteacher<T extends teacher$classsection_classsection_teacherIdToteacherArgs<ExtArgs> = {}>(args?: Subset<T, teacher$classsection_classsection_teacherIdToteacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<"teacher", 'Int'>
    readonly name: FieldRef<"teacher", 'String'>
    readonly email: FieldRef<"teacher", 'String'>
    readonly phone: FieldRef<"teacher", 'String'>
    readonly nic: FieldRef<"teacher", 'String'>
    readonly subjectSpecialty: FieldRef<"teacher", 'String'>
    readonly hireDate: FieldRef<"teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>
  }

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to update.
     */
    limit?: number
  }

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
  }

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to delete.
     */
    limit?: number
  }

  /**
   * teacher.classsection_classsection_subjectHeadIdToteacher
   */
  export type teacher$classsection_classsection_subjectHeadIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    where?: classsectionWhereInput
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    cursor?: classsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * teacher.classsection_classsection_teacherIdToteacher
   */
  export type teacher$classsection_classsection_teacherIdToteacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classsection
     */
    select?: classsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classsection
     */
    omit?: classsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classsectionInclude<ExtArgs> | null
    where?: classsectionWhereInput
    orderBy?: classsectionOrderByWithRelationInput | classsectionOrderByWithRelationInput[]
    cursor?: classsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasssectionScalarFieldEnum | ClasssectionScalarFieldEnum[]
  }

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
  }


  /**
   * Model metricgroup
   */

  export type AggregateMetricgroup = {
    _count: MetricgroupCountAggregateOutputType | null
    _avg: MetricgroupAvgAggregateOutputType | null
    _sum: MetricgroupSumAggregateOutputType | null
    _min: MetricgroupMinAggregateOutputType | null
    _max: MetricgroupMaxAggregateOutputType | null
  }

  export type MetricgroupAvgAggregateOutputType = {
    id: number | null
  }

  export type MetricgroupSumAggregateOutputType = {
    id: number | null
  }

  export type MetricgroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricgroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricgroupCountAggregateOutputType = {
    id: number
    name: number
    updatedBy: number
    updatedDate: number
    _all: number
  }


  export type MetricgroupAvgAggregateInputType = {
    id?: true
  }

  export type MetricgroupSumAggregateInputType = {
    id?: true
  }

  export type MetricgroupMinAggregateInputType = {
    id?: true
    name?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricgroupMaxAggregateInputType = {
    id?: true
    name?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricgroupCountAggregateInputType = {
    id?: true
    name?: true
    updatedBy?: true
    updatedDate?: true
    _all?: true
  }

  export type MetricgroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metricgroup to aggregate.
     */
    where?: metricgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricgroups to fetch.
     */
    orderBy?: metricgroupOrderByWithRelationInput | metricgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metricgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metricgroups
    **/
    _count?: true | MetricgroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricgroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricgroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricgroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricgroupMaxAggregateInputType
  }

  export type GetMetricgroupAggregateType<T extends MetricgroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricgroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricgroup[P]>
      : GetScalarType<T[P], AggregateMetricgroup[P]>
  }




  export type metricgroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricgroupWhereInput
    orderBy?: metricgroupOrderByWithAggregationInput | metricgroupOrderByWithAggregationInput[]
    by: MetricgroupScalarFieldEnum[] | MetricgroupScalarFieldEnum
    having?: metricgroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricgroupCountAggregateInputType | true
    _avg?: MetricgroupAvgAggregateInputType
    _sum?: MetricgroupSumAggregateInputType
    _min?: MetricgroupMinAggregateInputType
    _max?: MetricgroupMaxAggregateInputType
  }

  export type MetricgroupGroupByOutputType = {
    id: number
    name: string
    updatedBy: string | null
    updatedDate: Date | null
    _count: MetricgroupCountAggregateOutputType | null
    _avg: MetricgroupAvgAggregateOutputType | null
    _sum: MetricgroupSumAggregateOutputType | null
    _min: MetricgroupMinAggregateOutputType | null
    _max: MetricgroupMaxAggregateOutputType | null
  }

  type GetMetricgroupGroupByPayload<T extends metricgroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricgroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricgroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricgroupGroupByOutputType[P]>
            : GetScalarType<T[P], MetricgroupGroupByOutputType[P]>
        }
      >
    >


  export type metricgroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
    metrics?: boolean | metricgroup$metricsArgs<ExtArgs>
    _count?: boolean | MetricgroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricgroup"]>



  export type metricgroupSelectScalar = {
    id?: boolean
    name?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
  }

  export type metricgroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "updatedBy" | "updatedDate", ExtArgs["result"]["metricgroup"]>
  export type metricgroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | metricgroup$metricsArgs<ExtArgs>
    _count?: boolean | MetricgroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $metricgroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metricgroup"
    objects: {
      metrics: Prisma.$metricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      updatedBy: string | null
      updatedDate: Date | null
    }, ExtArgs["result"]["metricgroup"]>
    composites: {}
  }

  type metricgroupGetPayload<S extends boolean | null | undefined | metricgroupDefaultArgs> = $Result.GetResult<Prisma.$metricgroupPayload, S>

  type metricgroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metricgroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricgroupCountAggregateInputType | true
    }

  export interface metricgroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metricgroup'], meta: { name: 'metricgroup' } }
    /**
     * Find zero or one Metricgroup that matches the filter.
     * @param {metricgroupFindUniqueArgs} args - Arguments to find a Metricgroup
     * @example
     * // Get one Metricgroup
     * const metricgroup = await prisma.metricgroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metricgroupFindUniqueArgs>(args: SelectSubset<T, metricgroupFindUniqueArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metricgroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metricgroupFindUniqueOrThrowArgs} args - Arguments to find a Metricgroup
     * @example
     * // Get one Metricgroup
     * const metricgroup = await prisma.metricgroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metricgroupFindUniqueOrThrowArgs>(args: SelectSubset<T, metricgroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metricgroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupFindFirstArgs} args - Arguments to find a Metricgroup
     * @example
     * // Get one Metricgroup
     * const metricgroup = await prisma.metricgroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metricgroupFindFirstArgs>(args?: SelectSubset<T, metricgroupFindFirstArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metricgroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupFindFirstOrThrowArgs} args - Arguments to find a Metricgroup
     * @example
     * // Get one Metricgroup
     * const metricgroup = await prisma.metricgroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metricgroupFindFirstOrThrowArgs>(args?: SelectSubset<T, metricgroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metricgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metricgroups
     * const metricgroups = await prisma.metricgroup.findMany()
     * 
     * // Get first 10 Metricgroups
     * const metricgroups = await prisma.metricgroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricgroupWithIdOnly = await prisma.metricgroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends metricgroupFindManyArgs>(args?: SelectSubset<T, metricgroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metricgroup.
     * @param {metricgroupCreateArgs} args - Arguments to create a Metricgroup.
     * @example
     * // Create one Metricgroup
     * const Metricgroup = await prisma.metricgroup.create({
     *   data: {
     *     // ... data to create a Metricgroup
     *   }
     * })
     * 
     */
    create<T extends metricgroupCreateArgs>(args: SelectSubset<T, metricgroupCreateArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metricgroups.
     * @param {metricgroupCreateManyArgs} args - Arguments to create many Metricgroups.
     * @example
     * // Create many Metricgroups
     * const metricgroup = await prisma.metricgroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metricgroupCreateManyArgs>(args?: SelectSubset<T, metricgroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metricgroup.
     * @param {metricgroupDeleteArgs} args - Arguments to delete one Metricgroup.
     * @example
     * // Delete one Metricgroup
     * const Metricgroup = await prisma.metricgroup.delete({
     *   where: {
     *     // ... filter to delete one Metricgroup
     *   }
     * })
     * 
     */
    delete<T extends metricgroupDeleteArgs>(args: SelectSubset<T, metricgroupDeleteArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metricgroup.
     * @param {metricgroupUpdateArgs} args - Arguments to update one Metricgroup.
     * @example
     * // Update one Metricgroup
     * const metricgroup = await prisma.metricgroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metricgroupUpdateArgs>(args: SelectSubset<T, metricgroupUpdateArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metricgroups.
     * @param {metricgroupDeleteManyArgs} args - Arguments to filter Metricgroups to delete.
     * @example
     * // Delete a few Metricgroups
     * const { count } = await prisma.metricgroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metricgroupDeleteManyArgs>(args?: SelectSubset<T, metricgroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metricgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metricgroups
     * const metricgroup = await prisma.metricgroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metricgroupUpdateManyArgs>(args: SelectSubset<T, metricgroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metricgroup.
     * @param {metricgroupUpsertArgs} args - Arguments to update or create a Metricgroup.
     * @example
     * // Update or create a Metricgroup
     * const metricgroup = await prisma.metricgroup.upsert({
     *   create: {
     *     // ... data to create a Metricgroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metricgroup we want to update
     *   }
     * })
     */
    upsert<T extends metricgroupUpsertArgs>(args: SelectSubset<T, metricgroupUpsertArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metricgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupCountArgs} args - Arguments to filter Metricgroups to count.
     * @example
     * // Count the number of Metricgroups
     * const count = await prisma.metricgroup.count({
     *   where: {
     *     // ... the filter for the Metricgroups we want to count
     *   }
     * })
    **/
    count<T extends metricgroupCountArgs>(
      args?: Subset<T, metricgroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricgroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metricgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricgroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricgroupAggregateArgs>(args: Subset<T, MetricgroupAggregateArgs>): Prisma.PrismaPromise<GetMetricgroupAggregateType<T>>

    /**
     * Group by Metricgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricgroupGroupByArgs} args - Group by arguments.
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
      T extends metricgroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metricgroupGroupByArgs['orderBy'] }
        : { orderBy?: metricgroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, metricgroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricgroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metricgroup model
   */
  readonly fields: metricgroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metricgroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metricgroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metrics<T extends metricgroup$metricsArgs<ExtArgs> = {}>(args?: Subset<T, metricgroup$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the metricgroup model
   */
  interface metricgroupFieldRefs {
    readonly id: FieldRef<"metricgroup", 'Int'>
    readonly name: FieldRef<"metricgroup", 'String'>
    readonly updatedBy: FieldRef<"metricgroup", 'String'>
    readonly updatedDate: FieldRef<"metricgroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * metricgroup findUnique
   */
  export type metricgroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter, which metricgroup to fetch.
     */
    where: metricgroupWhereUniqueInput
  }

  /**
   * metricgroup findUniqueOrThrow
   */
  export type metricgroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter, which metricgroup to fetch.
     */
    where: metricgroupWhereUniqueInput
  }

  /**
   * metricgroup findFirst
   */
  export type metricgroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter, which metricgroup to fetch.
     */
    where?: metricgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricgroups to fetch.
     */
    orderBy?: metricgroupOrderByWithRelationInput | metricgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metricgroups.
     */
    cursor?: metricgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metricgroups.
     */
    distinct?: MetricgroupScalarFieldEnum | MetricgroupScalarFieldEnum[]
  }

  /**
   * metricgroup findFirstOrThrow
   */
  export type metricgroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter, which metricgroup to fetch.
     */
    where?: metricgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricgroups to fetch.
     */
    orderBy?: metricgroupOrderByWithRelationInput | metricgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metricgroups.
     */
    cursor?: metricgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metricgroups.
     */
    distinct?: MetricgroupScalarFieldEnum | MetricgroupScalarFieldEnum[]
  }

  /**
   * metricgroup findMany
   */
  export type metricgroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter, which metricgroups to fetch.
     */
    where?: metricgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricgroups to fetch.
     */
    orderBy?: metricgroupOrderByWithRelationInput | metricgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metricgroups.
     */
    cursor?: metricgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricgroups.
     */
    skip?: number
    distinct?: MetricgroupScalarFieldEnum | MetricgroupScalarFieldEnum[]
  }

  /**
   * metricgroup create
   */
  export type metricgroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * The data needed to create a metricgroup.
     */
    data: XOR<metricgroupCreateInput, metricgroupUncheckedCreateInput>
  }

  /**
   * metricgroup createMany
   */
  export type metricgroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metricgroups.
     */
    data: metricgroupCreateManyInput | metricgroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metricgroup update
   */
  export type metricgroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * The data needed to update a metricgroup.
     */
    data: XOR<metricgroupUpdateInput, metricgroupUncheckedUpdateInput>
    /**
     * Choose, which metricgroup to update.
     */
    where: metricgroupWhereUniqueInput
  }

  /**
   * metricgroup updateMany
   */
  export type metricgroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metricgroups.
     */
    data: XOR<metricgroupUpdateManyMutationInput, metricgroupUncheckedUpdateManyInput>
    /**
     * Filter which metricgroups to update
     */
    where?: metricgroupWhereInput
    /**
     * Limit how many metricgroups to update.
     */
    limit?: number
  }

  /**
   * metricgroup upsert
   */
  export type metricgroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * The filter to search for the metricgroup to update in case it exists.
     */
    where: metricgroupWhereUniqueInput
    /**
     * In case the metricgroup found by the `where` argument doesn't exist, create a new metricgroup with this data.
     */
    create: XOR<metricgroupCreateInput, metricgroupUncheckedCreateInput>
    /**
     * In case the metricgroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metricgroupUpdateInput, metricgroupUncheckedUpdateInput>
  }

  /**
   * metricgroup delete
   */
  export type metricgroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    /**
     * Filter which metricgroup to delete.
     */
    where: metricgroupWhereUniqueInput
  }

  /**
   * metricgroup deleteMany
   */
  export type metricgroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metricgroups to delete
     */
    where?: metricgroupWhereInput
    /**
     * Limit how many metricgroups to delete.
     */
    limit?: number
  }

  /**
   * metricgroup.metrics
   */
  export type metricgroup$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    where?: metricWhereInput
    orderBy?: metricOrderByWithRelationInput | metricOrderByWithRelationInput[]
    cursor?: metricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * metricgroup without action
   */
  export type metricgroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
  }


  /**
   * Model metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type MetricSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    groupId: number | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    groupId: number | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    name: number
    description: number
    groupId: number
    updatedBy: number
    updatedDate: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type MetricSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    groupId?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    groupId?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    groupId?: true
    updatedBy?: true
    updatedDate?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metric to aggregate.
     */
    where?: metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metrics to fetch.
     */
    orderBy?: metricOrderByWithRelationInput | metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type metricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricWhereInput
    orderBy?: metricOrderByWithAggregationInput | metricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: metricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    groupId: number | null
    updatedBy: string | null
    updatedDate: Date | null
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends metricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type metricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    groupId?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
    group?: boolean | metric$groupArgs<ExtArgs>
    scorecards?: boolean | metric$scorecardsArgs<ExtArgs>
    _count?: boolean | MetricCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>



  export type metricSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    groupId?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
  }

  export type metricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "groupId" | "updatedBy" | "updatedDate", ExtArgs["result"]["metric"]>
  export type metricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | metric$groupArgs<ExtArgs>
    scorecards?: boolean | metric$scorecardsArgs<ExtArgs>
    _count?: boolean | MetricCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $metricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metric"
    objects: {
      group: Prisma.$metricgroupPayload<ExtArgs> | null
      scorecards: Prisma.$metricscorecardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      groupId: number | null
      updatedBy: string | null
      updatedDate: Date | null
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type metricGetPayload<S extends boolean | null | undefined | metricDefaultArgs> = $Result.GetResult<Prisma.$metricPayload, S>

  type metricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface metricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metric'], meta: { name: 'metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {metricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metricFindUniqueArgs>(args: SelectSubset<T, metricFindUniqueArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metricFindUniqueOrThrowArgs>(args: SelectSubset<T, metricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metricFindFirstArgs>(args?: SelectSubset<T, metricFindFirstArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metricFindFirstOrThrowArgs>(args?: SelectSubset<T, metricFindFirstOrThrowArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends metricFindManyArgs>(args?: SelectSubset<T, metricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {metricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends metricCreateArgs>(args: SelectSubset<T, metricCreateArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {metricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metricCreateManyArgs>(args?: SelectSubset<T, metricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metric.
     * @param {metricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends metricDeleteArgs>(args: SelectSubset<T, metricDeleteArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {metricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metricUpdateArgs>(args: SelectSubset<T, metricUpdateArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {metricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metricDeleteManyArgs>(args?: SelectSubset<T, metricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metricUpdateManyArgs>(args: SelectSubset<T, metricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metric.
     * @param {metricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends metricUpsertArgs>(args: SelectSubset<T, metricUpsertArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends metricCountArgs>(
      args?: Subset<T, metricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricGroupByArgs} args - Group by arguments.
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
      T extends metricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metricGroupByArgs['orderBy'] }
        : { orderBy?: metricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, metricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metric model
   */
  readonly fields: metricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends metric$groupArgs<ExtArgs> = {}>(args?: Subset<T, metric$groupArgs<ExtArgs>>): Prisma__metricgroupClient<$Result.GetResult<Prisma.$metricgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scorecards<T extends metric$scorecardsArgs<ExtArgs> = {}>(args?: Subset<T, metric$scorecardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the metric model
   */
  interface metricFieldRefs {
    readonly id: FieldRef<"metric", 'Int'>
    readonly name: FieldRef<"metric", 'String'>
    readonly description: FieldRef<"metric", 'String'>
    readonly groupId: FieldRef<"metric", 'Int'>
    readonly updatedBy: FieldRef<"metric", 'String'>
    readonly updatedDate: FieldRef<"metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * metric findUnique
   */
  export type metricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter, which metric to fetch.
     */
    where: metricWhereUniqueInput
  }

  /**
   * metric findUniqueOrThrow
   */
  export type metricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter, which metric to fetch.
     */
    where: metricWhereUniqueInput
  }

  /**
   * metric findFirst
   */
  export type metricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter, which metric to fetch.
     */
    where?: metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metrics to fetch.
     */
    orderBy?: metricOrderByWithRelationInput | metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metrics.
     */
    cursor?: metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * metric findFirstOrThrow
   */
  export type metricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter, which metric to fetch.
     */
    where?: metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metrics to fetch.
     */
    orderBy?: metricOrderByWithRelationInput | metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metrics.
     */
    cursor?: metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * metric findMany
   */
  export type metricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter, which metrics to fetch.
     */
    where?: metricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metrics to fetch.
     */
    orderBy?: metricOrderByWithRelationInput | metricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metrics.
     */
    cursor?: metricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * metric create
   */
  export type metricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * The data needed to create a metric.
     */
    data?: XOR<metricCreateInput, metricUncheckedCreateInput>
  }

  /**
   * metric createMany
   */
  export type metricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metrics.
     */
    data: metricCreateManyInput | metricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metric update
   */
  export type metricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * The data needed to update a metric.
     */
    data: XOR<metricUpdateInput, metricUncheckedUpdateInput>
    /**
     * Choose, which metric to update.
     */
    where: metricWhereUniqueInput
  }

  /**
   * metric updateMany
   */
  export type metricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metrics.
     */
    data: XOR<metricUpdateManyMutationInput, metricUncheckedUpdateManyInput>
    /**
     * Filter which metrics to update
     */
    where?: metricWhereInput
    /**
     * Limit how many metrics to update.
     */
    limit?: number
  }

  /**
   * metric upsert
   */
  export type metricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * The filter to search for the metric to update in case it exists.
     */
    where: metricWhereUniqueInput
    /**
     * In case the metric found by the `where` argument doesn't exist, create a new metric with this data.
     */
    create: XOR<metricCreateInput, metricUncheckedCreateInput>
    /**
     * In case the metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metricUpdateInput, metricUncheckedUpdateInput>
  }

  /**
   * metric delete
   */
  export type metricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
    /**
     * Filter which metric to delete.
     */
    where: metricWhereUniqueInput
  }

  /**
   * metric deleteMany
   */
  export type metricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metrics to delete
     */
    where?: metricWhereInput
    /**
     * Limit how many metrics to delete.
     */
    limit?: number
  }

  /**
   * metric.group
   */
  export type metric$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricgroup
     */
    select?: metricgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricgroup
     */
    omit?: metricgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricgroupInclude<ExtArgs> | null
    where?: metricgroupWhereInput
  }

  /**
   * metric.scorecards
   */
  export type metric$scorecardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    where?: metricscorecardWhereInput
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    cursor?: metricscorecardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * metric without action
   */
  export type metricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metric
     */
    select?: metricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metric
     */
    omit?: metricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricInclude<ExtArgs> | null
  }


  /**
   * Model metricscorecard
   */

  export type AggregateMetricscorecard = {
    _count: MetricscorecardCountAggregateOutputType | null
    _avg: MetricscorecardAvgAggregateOutputType | null
    _sum: MetricscorecardSumAggregateOutputType | null
    _min: MetricscorecardMinAggregateOutputType | null
    _max: MetricscorecardMaxAggregateOutputType | null
  }

  export type MetricscorecardAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    metricId: number | null
    score: number | null
  }

  export type MetricscorecardSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    metricId: number | null
    score: number | null
  }

  export type MetricscorecardMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    adate: Date | null
    metricId: number | null
    score: number | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricscorecardMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    classSectionId: number | null
    adate: Date | null
    metricId: number | null
    score: number | null
    updatedBy: string | null
    updatedDate: Date | null
  }

  export type MetricscorecardCountAggregateOutputType = {
    id: number
    studentId: number
    classSectionId: number
    adate: number
    metricId: number
    score: number
    updatedBy: number
    updatedDate: number
    _all: number
  }


  export type MetricscorecardAvgAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    metricId?: true
    score?: true
  }

  export type MetricscorecardSumAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    metricId?: true
    score?: true
  }

  export type MetricscorecardMinAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    metricId?: true
    score?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricscorecardMaxAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    metricId?: true
    score?: true
    updatedBy?: true
    updatedDate?: true
  }

  export type MetricscorecardCountAggregateInputType = {
    id?: true
    studentId?: true
    classSectionId?: true
    adate?: true
    metricId?: true
    score?: true
    updatedBy?: true
    updatedDate?: true
    _all?: true
  }

  export type MetricscorecardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metricscorecard to aggregate.
     */
    where?: metricscorecardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricscorecards to fetch.
     */
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: metricscorecardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricscorecards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricscorecards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned metricscorecards
    **/
    _count?: true | MetricscorecardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricscorecardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricscorecardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricscorecardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricscorecardMaxAggregateInputType
  }

  export type GetMetricscorecardAggregateType<T extends MetricscorecardAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricscorecard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricscorecard[P]>
      : GetScalarType<T[P], AggregateMetricscorecard[P]>
  }




  export type metricscorecardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: metricscorecardWhereInput
    orderBy?: metricscorecardOrderByWithAggregationInput | metricscorecardOrderByWithAggregationInput[]
    by: MetricscorecardScalarFieldEnum[] | MetricscorecardScalarFieldEnum
    having?: metricscorecardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricscorecardCountAggregateInputType | true
    _avg?: MetricscorecardAvgAggregateInputType
    _sum?: MetricscorecardSumAggregateInputType
    _min?: MetricscorecardMinAggregateInputType
    _max?: MetricscorecardMaxAggregateInputType
  }

  export type MetricscorecardGroupByOutputType = {
    id: number
    studentId: number
    classSectionId: number
    adate: Date
    metricId: number
    score: number
    updatedBy: string | null
    updatedDate: Date | null
    _count: MetricscorecardCountAggregateOutputType | null
    _avg: MetricscorecardAvgAggregateOutputType | null
    _sum: MetricscorecardSumAggregateOutputType | null
    _min: MetricscorecardMinAggregateOutputType | null
    _max: MetricscorecardMaxAggregateOutputType | null
  }

  type GetMetricscorecardGroupByPayload<T extends metricscorecardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricscorecardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricscorecardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricscorecardGroupByOutputType[P]>
            : GetScalarType<T[P], MetricscorecardGroupByOutputType[P]>
        }
      >
    >


  export type metricscorecardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    classSectionId?: boolean
    adate?: boolean
    metricId?: boolean
    score?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
    metric?: boolean | metricDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricscorecard"]>



  export type metricscorecardSelectScalar = {
    id?: boolean
    studentId?: boolean
    classSectionId?: boolean
    adate?: boolean
    metricId?: boolean
    score?: boolean
    updatedBy?: boolean
    updatedDate?: boolean
  }

  export type metricscorecardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "classSectionId" | "adate" | "metricId" | "score" | "updatedBy" | "updatedDate", ExtArgs["result"]["metricscorecard"]>
  export type metricscorecardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    classsection?: boolean | classsectionDefaultArgs<ExtArgs>
    metric?: boolean | metricDefaultArgs<ExtArgs>
  }

  export type $metricscorecardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "metricscorecard"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      classsection: Prisma.$classsectionPayload<ExtArgs>
      metric: Prisma.$metricPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      classSectionId: number
      adate: Date
      metricId: number
      score: number
      updatedBy: string | null
      updatedDate: Date | null
    }, ExtArgs["result"]["metricscorecard"]>
    composites: {}
  }

  type metricscorecardGetPayload<S extends boolean | null | undefined | metricscorecardDefaultArgs> = $Result.GetResult<Prisma.$metricscorecardPayload, S>

  type metricscorecardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<metricscorecardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricscorecardCountAggregateInputType | true
    }

  export interface metricscorecardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['metricscorecard'], meta: { name: 'metricscorecard' } }
    /**
     * Find zero or one Metricscorecard that matches the filter.
     * @param {metricscorecardFindUniqueArgs} args - Arguments to find a Metricscorecard
     * @example
     * // Get one Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends metricscorecardFindUniqueArgs>(args: SelectSubset<T, metricscorecardFindUniqueArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metricscorecard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {metricscorecardFindUniqueOrThrowArgs} args - Arguments to find a Metricscorecard
     * @example
     * // Get one Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends metricscorecardFindUniqueOrThrowArgs>(args: SelectSubset<T, metricscorecardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metricscorecard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardFindFirstArgs} args - Arguments to find a Metricscorecard
     * @example
     * // Get one Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends metricscorecardFindFirstArgs>(args?: SelectSubset<T, metricscorecardFindFirstArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metricscorecard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardFindFirstOrThrowArgs} args - Arguments to find a Metricscorecard
     * @example
     * // Get one Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends metricscorecardFindFirstOrThrowArgs>(args?: SelectSubset<T, metricscorecardFindFirstOrThrowArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metricscorecards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metricscorecards
     * const metricscorecards = await prisma.metricscorecard.findMany()
     * 
     * // Get first 10 Metricscorecards
     * const metricscorecards = await prisma.metricscorecard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricscorecardWithIdOnly = await prisma.metricscorecard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends metricscorecardFindManyArgs>(args?: SelectSubset<T, metricscorecardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metricscorecard.
     * @param {metricscorecardCreateArgs} args - Arguments to create a Metricscorecard.
     * @example
     * // Create one Metricscorecard
     * const Metricscorecard = await prisma.metricscorecard.create({
     *   data: {
     *     // ... data to create a Metricscorecard
     *   }
     * })
     * 
     */
    create<T extends metricscorecardCreateArgs>(args: SelectSubset<T, metricscorecardCreateArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metricscorecards.
     * @param {metricscorecardCreateManyArgs} args - Arguments to create many Metricscorecards.
     * @example
     * // Create many Metricscorecards
     * const metricscorecard = await prisma.metricscorecard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends metricscorecardCreateManyArgs>(args?: SelectSubset<T, metricscorecardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metricscorecard.
     * @param {metricscorecardDeleteArgs} args - Arguments to delete one Metricscorecard.
     * @example
     * // Delete one Metricscorecard
     * const Metricscorecard = await prisma.metricscorecard.delete({
     *   where: {
     *     // ... filter to delete one Metricscorecard
     *   }
     * })
     * 
     */
    delete<T extends metricscorecardDeleteArgs>(args: SelectSubset<T, metricscorecardDeleteArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metricscorecard.
     * @param {metricscorecardUpdateArgs} args - Arguments to update one Metricscorecard.
     * @example
     * // Update one Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends metricscorecardUpdateArgs>(args: SelectSubset<T, metricscorecardUpdateArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metricscorecards.
     * @param {metricscorecardDeleteManyArgs} args - Arguments to filter Metricscorecards to delete.
     * @example
     * // Delete a few Metricscorecards
     * const { count } = await prisma.metricscorecard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends metricscorecardDeleteManyArgs>(args?: SelectSubset<T, metricscorecardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metricscorecards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metricscorecards
     * const metricscorecard = await prisma.metricscorecard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends metricscorecardUpdateManyArgs>(args: SelectSubset<T, metricscorecardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metricscorecard.
     * @param {metricscorecardUpsertArgs} args - Arguments to update or create a Metricscorecard.
     * @example
     * // Update or create a Metricscorecard
     * const metricscorecard = await prisma.metricscorecard.upsert({
     *   create: {
     *     // ... data to create a Metricscorecard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metricscorecard we want to update
     *   }
     * })
     */
    upsert<T extends metricscorecardUpsertArgs>(args: SelectSubset<T, metricscorecardUpsertArgs<ExtArgs>>): Prisma__metricscorecardClient<$Result.GetResult<Prisma.$metricscorecardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metricscorecards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardCountArgs} args - Arguments to filter Metricscorecards to count.
     * @example
     * // Count the number of Metricscorecards
     * const count = await prisma.metricscorecard.count({
     *   where: {
     *     // ... the filter for the Metricscorecards we want to count
     *   }
     * })
    **/
    count<T extends metricscorecardCountArgs>(
      args?: Subset<T, metricscorecardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricscorecardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metricscorecard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricscorecardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricscorecardAggregateArgs>(args: Subset<T, MetricscorecardAggregateArgs>): Prisma.PrismaPromise<GetMetricscorecardAggregateType<T>>

    /**
     * Group by Metricscorecard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {metricscorecardGroupByArgs} args - Group by arguments.
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
      T extends metricscorecardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: metricscorecardGroupByArgs['orderBy'] }
        : { orderBy?: metricscorecardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, metricscorecardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricscorecardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the metricscorecard model
   */
  readonly fields: metricscorecardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for metricscorecard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__metricscorecardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classsection<T extends classsectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classsectionDefaultArgs<ExtArgs>>): Prisma__classsectionClient<$Result.GetResult<Prisma.$classsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metric<T extends metricDefaultArgs<ExtArgs> = {}>(args?: Subset<T, metricDefaultArgs<ExtArgs>>): Prisma__metricClient<$Result.GetResult<Prisma.$metricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the metricscorecard model
   */
  interface metricscorecardFieldRefs {
    readonly id: FieldRef<"metricscorecard", 'Int'>
    readonly studentId: FieldRef<"metricscorecard", 'Int'>
    readonly classSectionId: FieldRef<"metricscorecard", 'Int'>
    readonly adate: FieldRef<"metricscorecard", 'DateTime'>
    readonly metricId: FieldRef<"metricscorecard", 'Int'>
    readonly score: FieldRef<"metricscorecard", 'Int'>
    readonly updatedBy: FieldRef<"metricscorecard", 'String'>
    readonly updatedDate: FieldRef<"metricscorecard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * metricscorecard findUnique
   */
  export type metricscorecardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter, which metricscorecard to fetch.
     */
    where: metricscorecardWhereUniqueInput
  }

  /**
   * metricscorecard findUniqueOrThrow
   */
  export type metricscorecardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter, which metricscorecard to fetch.
     */
    where: metricscorecardWhereUniqueInput
  }

  /**
   * metricscorecard findFirst
   */
  export type metricscorecardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter, which metricscorecard to fetch.
     */
    where?: metricscorecardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricscorecards to fetch.
     */
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metricscorecards.
     */
    cursor?: metricscorecardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricscorecards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricscorecards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metricscorecards.
     */
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * metricscorecard findFirstOrThrow
   */
  export type metricscorecardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter, which metricscorecard to fetch.
     */
    where?: metricscorecardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricscorecards to fetch.
     */
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for metricscorecards.
     */
    cursor?: metricscorecardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricscorecards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricscorecards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of metricscorecards.
     */
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * metricscorecard findMany
   */
  export type metricscorecardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter, which metricscorecards to fetch.
     */
    where?: metricscorecardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of metricscorecards to fetch.
     */
    orderBy?: metricscorecardOrderByWithRelationInput | metricscorecardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing metricscorecards.
     */
    cursor?: metricscorecardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` metricscorecards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` metricscorecards.
     */
    skip?: number
    distinct?: MetricscorecardScalarFieldEnum | MetricscorecardScalarFieldEnum[]
  }

  /**
   * metricscorecard create
   */
  export type metricscorecardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * The data needed to create a metricscorecard.
     */
    data: XOR<metricscorecardCreateInput, metricscorecardUncheckedCreateInput>
  }

  /**
   * metricscorecard createMany
   */
  export type metricscorecardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many metricscorecards.
     */
    data: metricscorecardCreateManyInput | metricscorecardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * metricscorecard update
   */
  export type metricscorecardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * The data needed to update a metricscorecard.
     */
    data: XOR<metricscorecardUpdateInput, metricscorecardUncheckedUpdateInput>
    /**
     * Choose, which metricscorecard to update.
     */
    where: metricscorecardWhereUniqueInput
  }

  /**
   * metricscorecard updateMany
   */
  export type metricscorecardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update metricscorecards.
     */
    data: XOR<metricscorecardUpdateManyMutationInput, metricscorecardUncheckedUpdateManyInput>
    /**
     * Filter which metricscorecards to update
     */
    where?: metricscorecardWhereInput
    /**
     * Limit how many metricscorecards to update.
     */
    limit?: number
  }

  /**
   * metricscorecard upsert
   */
  export type metricscorecardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * The filter to search for the metricscorecard to update in case it exists.
     */
    where: metricscorecardWhereUniqueInput
    /**
     * In case the metricscorecard found by the `where` argument doesn't exist, create a new metricscorecard with this data.
     */
    create: XOR<metricscorecardCreateInput, metricscorecardUncheckedCreateInput>
    /**
     * In case the metricscorecard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<metricscorecardUpdateInput, metricscorecardUncheckedUpdateInput>
  }

  /**
   * metricscorecard delete
   */
  export type metricscorecardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
    /**
     * Filter which metricscorecard to delete.
     */
    where: metricscorecardWhereUniqueInput
  }

  /**
   * metricscorecard deleteMany
   */
  export type metricscorecardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which metricscorecards to delete
     */
    where?: metricscorecardWhereInput
    /**
     * Limit how many metricscorecards to delete.
     */
    limit?: number
  }

  /**
   * metricscorecard without action
   */
  export type metricscorecardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the metricscorecard
     */
    select?: metricscorecardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the metricscorecard
     */
    omit?: metricscorecardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: metricscorecardInclude<ExtArgs> | null
  }


  /**
   * Model user
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    rights: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    rights?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
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
    name: string
    email: string
    password: string
    rights: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    rights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "rights" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      rights: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly rights: FieldRef<"user", 'Json'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    classSectionId: 'classSectionId',
    adate: 'adate',
    status: 'status',
    updatedBy: 'updatedBy',
    updatedDate: 'updatedDate'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const RenamedclassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type RenamedclassScalarFieldEnum = (typeof RenamedclassScalarFieldEnum)[keyof typeof RenamedclassScalarFieldEnum]


  export const ClasssectionScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    sectionId: 'sectionId',
    teacherId: 'teacherId',
    subjectHeadId: 'subjectHeadId'
  };

  export type ClasssectionScalarFieldEnum = (typeof ClasssectionScalarFieldEnum)[keyof typeof ClasssectionScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    rollNumber: 'rollNumber',
    classSectionId: 'classSectionId',
    admissionDate: 'admissionDate',
    previousSchool: 'previousSchool',
    fatherNic: 'fatherNic',
    email: 'email',
    phone: 'phone',
    address: 'address',
    religion: 'religion',
    guardianName: 'guardianName',
    guardianContact: 'guardianContact',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    nic: 'nic',
    subjectSpecialty: 'subjectSpecialty',
    hireDate: 'hireDate'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const MetricgroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    updatedBy: 'updatedBy',
    updatedDate: 'updatedDate'
  };

  export type MetricgroupScalarFieldEnum = (typeof MetricgroupScalarFieldEnum)[keyof typeof MetricgroupScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    groupId: 'groupId',
    updatedBy: 'updatedBy',
    updatedDate: 'updatedDate'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const MetricscorecardScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    classSectionId: 'classSectionId',
    adate: 'adate',
    metricId: 'metricId',
    score: 'score',
    updatedBy: 'updatedBy',
    updatedDate: 'updatedDate'
  };

  export type MetricscorecardScalarFieldEnum = (typeof MetricscorecardScalarFieldEnum)[keyof typeof MetricscorecardScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    rights: 'rights',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const attendanceOrderByRelevanceFieldEnum: {
    updatedBy: 'updatedBy'
  };

  export type attendanceOrderByRelevanceFieldEnum = (typeof attendanceOrderByRelevanceFieldEnum)[keyof typeof attendanceOrderByRelevanceFieldEnum]


  export const RenamedclassOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RenamedclassOrderByRelevanceFieldEnum = (typeof RenamedclassOrderByRelevanceFieldEnum)[keyof typeof RenamedclassOrderByRelevanceFieldEnum]


  export const sectionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type sectionOrderByRelevanceFieldEnum = (typeof sectionOrderByRelevanceFieldEnum)[keyof typeof sectionOrderByRelevanceFieldEnum]


  export const studentOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    rollNumber: 'rollNumber',
    previousSchool: 'previousSchool',
    fatherNic: 'fatherNic',
    email: 'email',
    phone: 'phone',
    address: 'address',
    religion: 'religion',
    guardianName: 'guardianName',
    guardianContact: 'guardianContact'
  };

  export type studentOrderByRelevanceFieldEnum = (typeof studentOrderByRelevanceFieldEnum)[keyof typeof studentOrderByRelevanceFieldEnum]


  export const teacherOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    nic: 'nic',
    subjectSpecialty: 'subjectSpecialty'
  };

  export type teacherOrderByRelevanceFieldEnum = (typeof teacherOrderByRelevanceFieldEnum)[keyof typeof teacherOrderByRelevanceFieldEnum]


  export const metricgroupOrderByRelevanceFieldEnum: {
    name: 'name',
    updatedBy: 'updatedBy'
  };

  export type metricgroupOrderByRelevanceFieldEnum = (typeof metricgroupOrderByRelevanceFieldEnum)[keyof typeof metricgroupOrderByRelevanceFieldEnum]


  export const metricOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    updatedBy: 'updatedBy'
  };

  export type metricOrderByRelevanceFieldEnum = (typeof metricOrderByRelevanceFieldEnum)[keyof typeof metricOrderByRelevanceFieldEnum]


  export const metricscorecardOrderByRelevanceFieldEnum: {
    updatedBy: 'updatedBy'
  };

  export type metricscorecardOrderByRelevanceFieldEnum = (typeof metricscorecardOrderByRelevanceFieldEnum)[keyof typeof metricscorecardOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'attendance_status'
   */
  export type Enumattendance_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attendance_status'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    id?: IntFilter<"attendance"> | number
    studentId?: IntFilter<"attendance"> | number
    classSectionId?: IntFilter<"attendance"> | number
    adate?: DateTimeFilter<"attendance"> | Date | string
    status?: Enumattendance_statusFilter<"attendance"> | $Enums.attendance_status
    updatedBy?: StringNullableFilter<"attendance"> | string | null
    updatedDate?: DateTimeNullableFilter<"attendance"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
  }

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    status?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    student?: studentOrderByWithRelationInput
    classsection?: classsectionOrderByWithRelationInput
    _relevance?: attendanceOrderByRelevanceInput
  }

  export type attendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_adate?: attendanceStudentIdAdateCompoundUniqueInput
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    studentId?: IntFilter<"attendance"> | number
    classSectionId?: IntFilter<"attendance"> | number
    adate?: DateTimeFilter<"attendance"> | Date | string
    status?: Enumattendance_statusFilter<"attendance"> | $Enums.attendance_status
    updatedBy?: StringNullableFilter<"attendance"> | string | null
    updatedDate?: DateTimeNullableFilter<"attendance"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
  }, "id" | "studentId_adate">

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    status?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _avg?: attendanceAvgOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
    _sum?: attendanceSumOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    OR?: attendanceScalarWhereWithAggregatesInput[]
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendance"> | number
    studentId?: IntWithAggregatesFilter<"attendance"> | number
    classSectionId?: IntWithAggregatesFilter<"attendance"> | number
    adate?: DateTimeWithAggregatesFilter<"attendance"> | Date | string
    status?: Enumattendance_statusWithAggregatesFilter<"attendance"> | $Enums.attendance_status
    updatedBy?: StringNullableWithAggregatesFilter<"attendance"> | string | null
    updatedDate?: DateTimeNullableWithAggregatesFilter<"attendance"> | Date | string | null
  }

  export type RenamedclassWhereInput = {
    AND?: RenamedclassWhereInput | RenamedclassWhereInput[]
    OR?: RenamedclassWhereInput[]
    NOT?: RenamedclassWhereInput | RenamedclassWhereInput[]
    id?: IntFilter<"Renamedclass"> | number
    name?: StringFilter<"Renamedclass"> | string
    createdAt?: DateTimeFilter<"Renamedclass"> | Date | string
    classsection?: ClasssectionListRelationFilter
  }

  export type RenamedclassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    classsection?: classsectionOrderByRelationAggregateInput
    _relevance?: RenamedclassOrderByRelevanceInput
  }

  export type RenamedclassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RenamedclassWhereInput | RenamedclassWhereInput[]
    OR?: RenamedclassWhereInput[]
    NOT?: RenamedclassWhereInput | RenamedclassWhereInput[]
    name?: StringFilter<"Renamedclass"> | string
    createdAt?: DateTimeFilter<"Renamedclass"> | Date | string
    classsection?: ClasssectionListRelationFilter
  }, "id">

  export type RenamedclassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: RenamedclassCountOrderByAggregateInput
    _avg?: RenamedclassAvgOrderByAggregateInput
    _max?: RenamedclassMaxOrderByAggregateInput
    _min?: RenamedclassMinOrderByAggregateInput
    _sum?: RenamedclassSumOrderByAggregateInput
  }

  export type RenamedclassScalarWhereWithAggregatesInput = {
    AND?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[]
    OR?: RenamedclassScalarWhereWithAggregatesInput[]
    NOT?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Renamedclass"> | number
    name?: StringWithAggregatesFilter<"Renamedclass"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Renamedclass"> | Date | string
  }

  export type classsectionWhereInput = {
    AND?: classsectionWhereInput | classsectionWhereInput[]
    OR?: classsectionWhereInput[]
    NOT?: classsectionWhereInput | classsectionWhereInput[]
    id?: IntFilter<"classsection"> | number
    classId?: IntFilter<"classsection"> | number
    sectionId?: IntFilter<"classsection"> | number
    teacherId?: IntNullableFilter<"classsection"> | number | null
    subjectHeadId?: IntNullableFilter<"classsection"> | number | null
    attendance?: AttendanceListRelationFilter
    metricscorecards?: MetricscorecardListRelationFilter
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
    section?: XOR<SectionScalarRelationFilter, sectionWhereInput>
    teacher_classsection_subjectHeadIdToteacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    teacher_classsection_teacherIdToteacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    student?: StudentListRelationFilter
  }

  export type classsectionOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    subjectHeadId?: SortOrderInput | SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    metricscorecards?: metricscorecardOrderByRelationAggregateInput
    Renamedclass?: RenamedclassOrderByWithRelationInput
    section?: sectionOrderByWithRelationInput
    teacher_classsection_subjectHeadIdToteacher?: teacherOrderByWithRelationInput
    teacher_classsection_teacherIdToteacher?: teacherOrderByWithRelationInput
    student?: studentOrderByRelationAggregateInput
  }

  export type classsectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    classId_sectionId?: classsectionClassIdSectionIdCompoundUniqueInput
    AND?: classsectionWhereInput | classsectionWhereInput[]
    OR?: classsectionWhereInput[]
    NOT?: classsectionWhereInput | classsectionWhereInput[]
    classId?: IntFilter<"classsection"> | number
    sectionId?: IntFilter<"classsection"> | number
    teacherId?: IntNullableFilter<"classsection"> | number | null
    subjectHeadId?: IntNullableFilter<"classsection"> | number | null
    attendance?: AttendanceListRelationFilter
    metricscorecards?: MetricscorecardListRelationFilter
    Renamedclass?: XOR<RenamedclassScalarRelationFilter, RenamedclassWhereInput>
    section?: XOR<SectionScalarRelationFilter, sectionWhereInput>
    teacher_classsection_subjectHeadIdToteacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    teacher_classsection_teacherIdToteacher?: XOR<TeacherNullableScalarRelationFilter, teacherWhereInput> | null
    student?: StudentListRelationFilter
  }, "id" | "classId_sectionId">

  export type classsectionOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    subjectHeadId?: SortOrderInput | SortOrder
    _count?: classsectionCountOrderByAggregateInput
    _avg?: classsectionAvgOrderByAggregateInput
    _max?: classsectionMaxOrderByAggregateInput
    _min?: classsectionMinOrderByAggregateInput
    _sum?: classsectionSumOrderByAggregateInput
  }

  export type classsectionScalarWhereWithAggregatesInput = {
    AND?: classsectionScalarWhereWithAggregatesInput | classsectionScalarWhereWithAggregatesInput[]
    OR?: classsectionScalarWhereWithAggregatesInput[]
    NOT?: classsectionScalarWhereWithAggregatesInput | classsectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"classsection"> | number
    classId?: IntWithAggregatesFilter<"classsection"> | number
    sectionId?: IntWithAggregatesFilter<"classsection"> | number
    teacherId?: IntNullableWithAggregatesFilter<"classsection"> | number | null
    subjectHeadId?: IntNullableWithAggregatesFilter<"classsection"> | number | null
  }

  export type sectionWhereInput = {
    AND?: sectionWhereInput | sectionWhereInput[]
    OR?: sectionWhereInput[]
    NOT?: sectionWhereInput | sectionWhereInput[]
    id?: IntFilter<"section"> | number
    name?: StringFilter<"section"> | string
    classsection?: ClasssectionListRelationFilter
  }

  export type sectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    classsection?: classsectionOrderByRelationAggregateInput
    _relevance?: sectionOrderByRelevanceInput
  }

  export type sectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sectionWhereInput | sectionWhereInput[]
    OR?: sectionWhereInput[]
    NOT?: sectionWhereInput | sectionWhereInput[]
    name?: StringFilter<"section"> | string
    classsection?: ClasssectionListRelationFilter
  }, "id">

  export type sectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: sectionCountOrderByAggregateInput
    _avg?: sectionAvgOrderByAggregateInput
    _max?: sectionMaxOrderByAggregateInput
    _min?: sectionMinOrderByAggregateInput
    _sum?: sectionSumOrderByAggregateInput
  }

  export type sectionScalarWhereWithAggregatesInput = {
    AND?: sectionScalarWhereWithAggregatesInput | sectionScalarWhereWithAggregatesInput[]
    OR?: sectionScalarWhereWithAggregatesInput[]
    NOT?: sectionScalarWhereWithAggregatesInput | sectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"section"> | number
    name?: StringWithAggregatesFilter<"section"> | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: IntFilter<"student"> | number
    firstName?: StringFilter<"student"> | string
    lastName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    dateOfBirth?: DateTimeFilter<"student"> | Date | string
    rollNumber?: StringNullableFilter<"student"> | string | null
    classSectionId?: IntFilter<"student"> | number
    admissionDate?: DateTimeFilter<"student"> | Date | string
    previousSchool?: StringNullableFilter<"student"> | string | null
    fatherNic?: StringNullableFilter<"student"> | string | null
    email?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    address?: StringNullableFilter<"student"> | string | null
    religion?: StringNullableFilter<"student"> | string | null
    guardianName?: StringNullableFilter<"student"> | string | null
    guardianContact?: StringNullableFilter<"student"> | string | null
    isActive?: BoolFilter<"student"> | boolean
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    attendance?: AttendanceListRelationFilter
    metricScorecards?: MetricscorecardListRelationFilter
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    rollNumber?: SortOrderInput | SortOrder
    classSectionId?: SortOrder
    admissionDate?: SortOrder
    previousSchool?: SortOrderInput | SortOrder
    fatherNic?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianContact?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendance?: attendanceOrderByRelationAggregateInput
    metricScorecards?: metricscorecardOrderByRelationAggregateInput
    classsection?: classsectionOrderByWithRelationInput
    _relevance?: studentOrderByRelevanceInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rollNumber?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    firstName?: StringFilter<"student"> | string
    lastName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    dateOfBirth?: DateTimeFilter<"student"> | Date | string
    classSectionId?: IntFilter<"student"> | number
    admissionDate?: DateTimeFilter<"student"> | Date | string
    previousSchool?: StringNullableFilter<"student"> | string | null
    fatherNic?: StringNullableFilter<"student"> | string | null
    email?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    address?: StringNullableFilter<"student"> | string | null
    religion?: StringNullableFilter<"student"> | string | null
    guardianName?: StringNullableFilter<"student"> | string | null
    guardianContact?: StringNullableFilter<"student"> | string | null
    isActive?: BoolFilter<"student"> | boolean
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    attendance?: AttendanceListRelationFilter
    metricScorecards?: MetricscorecardListRelationFilter
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
  }, "id" | "rollNumber">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    rollNumber?: SortOrderInput | SortOrder
    classSectionId?: SortOrder
    admissionDate?: SortOrder
    previousSchool?: SortOrderInput | SortOrder
    fatherNic?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianContact?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student"> | number
    firstName?: StringWithAggregatesFilter<"student"> | string
    lastName?: StringWithAggregatesFilter<"student"> | string
    gender?: StringWithAggregatesFilter<"student"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"student"> | Date | string
    rollNumber?: StringNullableWithAggregatesFilter<"student"> | string | null
    classSectionId?: IntWithAggregatesFilter<"student"> | number
    admissionDate?: DateTimeWithAggregatesFilter<"student"> | Date | string
    previousSchool?: StringNullableWithAggregatesFilter<"student"> | string | null
    fatherNic?: StringNullableWithAggregatesFilter<"student"> | string | null
    email?: StringNullableWithAggregatesFilter<"student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"student"> | string | null
    address?: StringNullableWithAggregatesFilter<"student"> | string | null
    religion?: StringNullableWithAggregatesFilter<"student"> | string | null
    guardianName?: StringNullableWithAggregatesFilter<"student"> | string | null
    guardianContact?: StringNullableWithAggregatesFilter<"student"> | string | null
    isActive?: BoolWithAggregatesFilter<"student"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
  }

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    id?: IntFilter<"teacher"> | number
    name?: StringFilter<"teacher"> | string
    email?: StringFilter<"teacher"> | string
    phone?: StringNullableFilter<"teacher"> | string | null
    nic?: StringNullableFilter<"teacher"> | string | null
    subjectSpecialty?: StringNullableFilter<"teacher"> | string | null
    hireDate?: DateTimeNullableFilter<"teacher"> | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: ClasssectionListRelationFilter
    classsection_classsection_teacherIdToteacher?: ClasssectionListRelationFilter
  }

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    nic?: SortOrderInput | SortOrder
    subjectSpecialty?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    classsection_classsection_subjectHeadIdToteacher?: classsectionOrderByRelationAggregateInput
    classsection_classsection_teacherIdToteacher?: classsectionOrderByRelationAggregateInput
    _relevance?: teacherOrderByRelevanceInput
  }

  export type teacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    name?: StringFilter<"teacher"> | string
    phone?: StringNullableFilter<"teacher"> | string | null
    nic?: StringNullableFilter<"teacher"> | string | null
    subjectSpecialty?: StringNullableFilter<"teacher"> | string | null
    hireDate?: DateTimeNullableFilter<"teacher"> | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: ClasssectionListRelationFilter
    classsection_classsection_teacherIdToteacher?: ClasssectionListRelationFilter
  }, "id" | "email">

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    nic?: SortOrderInput | SortOrder
    subjectSpecialty?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    _count?: teacherCountOrderByAggregateInput
    _avg?: teacherAvgOrderByAggregateInput
    _max?: teacherMaxOrderByAggregateInput
    _min?: teacherMinOrderByAggregateInput
    _sum?: teacherSumOrderByAggregateInput
  }

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    OR?: teacherScalarWhereWithAggregatesInput[]
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teacher"> | number
    name?: StringWithAggregatesFilter<"teacher"> | string
    email?: StringWithAggregatesFilter<"teacher"> | string
    phone?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    nic?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    subjectSpecialty?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    hireDate?: DateTimeNullableWithAggregatesFilter<"teacher"> | Date | string | null
  }

  export type metricgroupWhereInput = {
    AND?: metricgroupWhereInput | metricgroupWhereInput[]
    OR?: metricgroupWhereInput[]
    NOT?: metricgroupWhereInput | metricgroupWhereInput[]
    id?: IntFilter<"metricgroup"> | number
    name?: StringFilter<"metricgroup"> | string
    updatedBy?: StringNullableFilter<"metricgroup"> | string | null
    updatedDate?: DateTimeNullableFilter<"metricgroup"> | Date | string | null
    metrics?: MetricListRelationFilter
  }

  export type metricgroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    metrics?: metricOrderByRelationAggregateInput
    _relevance?: metricgroupOrderByRelevanceInput
  }

  export type metricgroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: metricgroupWhereInput | metricgroupWhereInput[]
    OR?: metricgroupWhereInput[]
    NOT?: metricgroupWhereInput | metricgroupWhereInput[]
    name?: StringFilter<"metricgroup"> | string
    updatedBy?: StringNullableFilter<"metricgroup"> | string | null
    updatedDate?: DateTimeNullableFilter<"metricgroup"> | Date | string | null
    metrics?: MetricListRelationFilter
  }, "id">

  export type metricgroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: metricgroupCountOrderByAggregateInput
    _avg?: metricgroupAvgOrderByAggregateInput
    _max?: metricgroupMaxOrderByAggregateInput
    _min?: metricgroupMinOrderByAggregateInput
    _sum?: metricgroupSumOrderByAggregateInput
  }

  export type metricgroupScalarWhereWithAggregatesInput = {
    AND?: metricgroupScalarWhereWithAggregatesInput | metricgroupScalarWhereWithAggregatesInput[]
    OR?: metricgroupScalarWhereWithAggregatesInput[]
    NOT?: metricgroupScalarWhereWithAggregatesInput | metricgroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"metricgroup"> | number
    name?: StringWithAggregatesFilter<"metricgroup"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"metricgroup"> | string | null
    updatedDate?: DateTimeNullableWithAggregatesFilter<"metricgroup"> | Date | string | null
  }

  export type metricWhereInput = {
    AND?: metricWhereInput | metricWhereInput[]
    OR?: metricWhereInput[]
    NOT?: metricWhereInput | metricWhereInput[]
    id?: IntFilter<"metric"> | number
    name?: StringNullableFilter<"metric"> | string | null
    description?: StringNullableFilter<"metric"> | string | null
    groupId?: IntNullableFilter<"metric"> | number | null
    updatedBy?: StringNullableFilter<"metric"> | string | null
    updatedDate?: DateTimeNullableFilter<"metric"> | Date | string | null
    group?: XOR<MetricgroupNullableScalarRelationFilter, metricgroupWhereInput> | null
    scorecards?: MetricscorecardListRelationFilter
  }

  export type metricOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    group?: metricgroupOrderByWithRelationInput
    scorecards?: metricscorecardOrderByRelationAggregateInput
    _relevance?: metricOrderByRelevanceInput
  }

  export type metricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: metricWhereInput | metricWhereInput[]
    OR?: metricWhereInput[]
    NOT?: metricWhereInput | metricWhereInput[]
    name?: StringNullableFilter<"metric"> | string | null
    description?: StringNullableFilter<"metric"> | string | null
    groupId?: IntNullableFilter<"metric"> | number | null
    updatedBy?: StringNullableFilter<"metric"> | string | null
    updatedDate?: DateTimeNullableFilter<"metric"> | Date | string | null
    group?: XOR<MetricgroupNullableScalarRelationFilter, metricgroupWhereInput> | null
    scorecards?: MetricscorecardListRelationFilter
  }, "id">

  export type metricOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: metricCountOrderByAggregateInput
    _avg?: metricAvgOrderByAggregateInput
    _max?: metricMaxOrderByAggregateInput
    _min?: metricMinOrderByAggregateInput
    _sum?: metricSumOrderByAggregateInput
  }

  export type metricScalarWhereWithAggregatesInput = {
    AND?: metricScalarWhereWithAggregatesInput | metricScalarWhereWithAggregatesInput[]
    OR?: metricScalarWhereWithAggregatesInput[]
    NOT?: metricScalarWhereWithAggregatesInput | metricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"metric"> | number
    name?: StringNullableWithAggregatesFilter<"metric"> | string | null
    description?: StringNullableWithAggregatesFilter<"metric"> | string | null
    groupId?: IntNullableWithAggregatesFilter<"metric"> | number | null
    updatedBy?: StringNullableWithAggregatesFilter<"metric"> | string | null
    updatedDate?: DateTimeNullableWithAggregatesFilter<"metric"> | Date | string | null
  }

  export type metricscorecardWhereInput = {
    AND?: metricscorecardWhereInput | metricscorecardWhereInput[]
    OR?: metricscorecardWhereInput[]
    NOT?: metricscorecardWhereInput | metricscorecardWhereInput[]
    id?: IntFilter<"metricscorecard"> | number
    studentId?: IntFilter<"metricscorecard"> | number
    classSectionId?: IntFilter<"metricscorecard"> | number
    adate?: DateTimeFilter<"metricscorecard"> | Date | string
    metricId?: IntFilter<"metricscorecard"> | number
    score?: IntFilter<"metricscorecard"> | number
    updatedBy?: StringNullableFilter<"metricscorecard"> | string | null
    updatedDate?: DateTimeNullableFilter<"metricscorecard"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
    metric?: XOR<MetricScalarRelationFilter, metricWhereInput>
  }

  export type metricscorecardOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    student?: studentOrderByWithRelationInput
    classsection?: classsectionOrderByWithRelationInput
    metric?: metricOrderByWithRelationInput
    _relevance?: metricscorecardOrderByRelevanceInput
  }

  export type metricscorecardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: metricscorecardWhereInput | metricscorecardWhereInput[]
    OR?: metricscorecardWhereInput[]
    NOT?: metricscorecardWhereInput | metricscorecardWhereInput[]
    studentId?: IntFilter<"metricscorecard"> | number
    classSectionId?: IntFilter<"metricscorecard"> | number
    adate?: DateTimeFilter<"metricscorecard"> | Date | string
    metricId?: IntFilter<"metricscorecard"> | number
    score?: IntFilter<"metricscorecard"> | number
    updatedBy?: StringNullableFilter<"metricscorecard"> | string | null
    updatedDate?: DateTimeNullableFilter<"metricscorecard"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    classsection?: XOR<ClasssectionScalarRelationFilter, classsectionWhereInput>
    metric?: XOR<MetricScalarRelationFilter, metricWhereInput>
  }, "id">

  export type metricscorecardOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedDate?: SortOrderInput | SortOrder
    _count?: metricscorecardCountOrderByAggregateInput
    _avg?: metricscorecardAvgOrderByAggregateInput
    _max?: metricscorecardMaxOrderByAggregateInput
    _min?: metricscorecardMinOrderByAggregateInput
    _sum?: metricscorecardSumOrderByAggregateInput
  }

  export type metricscorecardScalarWhereWithAggregatesInput = {
    AND?: metricscorecardScalarWhereWithAggregatesInput | metricscorecardScalarWhereWithAggregatesInput[]
    OR?: metricscorecardScalarWhereWithAggregatesInput[]
    NOT?: metricscorecardScalarWhereWithAggregatesInput | metricscorecardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"metricscorecard"> | number
    studentId?: IntWithAggregatesFilter<"metricscorecard"> | number
    classSectionId?: IntWithAggregatesFilter<"metricscorecard"> | number
    adate?: DateTimeWithAggregatesFilter<"metricscorecard"> | Date | string
    metricId?: IntWithAggregatesFilter<"metricscorecard"> | number
    score?: IntWithAggregatesFilter<"metricscorecard"> | number
    updatedBy?: StringNullableWithAggregatesFilter<"metricscorecard"> | string | null
    updatedDate?: DateTimeNullableWithAggregatesFilter<"metricscorecard"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    rights?: JsonFilter<"user">
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    rights?: JsonFilter<"user">
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    rights?: JsonWithAggregatesFilter<"user">
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type attendanceCreateInput = {
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
    student: studentCreateNestedOneWithoutAttendanceInput
    classsection: classsectionCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type attendanceUpdateInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutAttendanceNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceCreateManyInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type attendanceUpdateManyMutationInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenamedclassCreateInput = {
    name: string
    createdAt?: Date | string
    classsection?: classsectionCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    classsection?: classsectionUncheckedCreateNestedManyWithoutRenamedclassInput
  }

  export type RenamedclassUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classsection?: classsectionUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classsection?: classsectionUncheckedUpdateManyWithoutRenamedclassNestedInput
  }

  export type RenamedclassCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type RenamedclassUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenamedclassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type classsectionCreateInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUpdateInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionCreateManyInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
  }

  export type classsectionUpdateManyMutationInput = {

  }

  export type classsectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sectionCreateInput = {
    name: string
    classsection?: classsectionCreateNestedManyWithoutSectionInput
  }

  export type sectionUncheckedCreateInput = {
    id?: number
    name: string
    classsection?: classsectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type sectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    classsection?: classsectionUpdateManyWithoutSectionNestedInput
  }

  export type sectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    classsection?: classsectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type sectionCreateManyInput = {
    id?: number
    name: string
  }

  export type sectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateInput = {
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    metricScorecards?: metricscorecardCreateNestedManyWithoutStudentInput
    classsection: classsectionCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    classSectionId: number
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    metricScorecards?: metricscorecardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    metricScorecards?: metricscorecardUpdateManyWithoutStudentNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classSectionId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    metricScorecards?: metricscorecardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    classSectionId: number
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classSectionId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teacherCreateInput = {
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput
    classsection_classsection_teacherIdToteacher?: classsectionCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput
  }

  export type teacherUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput
    classsection_classsection_teacherIdToteacher?: classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput
  }

  export type teacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput
    classsection_classsection_teacherIdToteacher?: classsectionUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput
  }

  export type teacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUncheckedUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput
    classsection_classsection_teacherIdToteacher?: classsectionUncheckedUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput
  }

  export type teacherCreateManyInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
  }

  export type teacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type teacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricgroupCreateInput = {
    name: string
    updatedBy?: string | null
    updatedDate?: Date | string | null
    metrics?: metricCreateNestedManyWithoutGroupInput
  }

  export type metricgroupUncheckedCreateInput = {
    id?: number
    name: string
    updatedBy?: string | null
    updatedDate?: Date | string | null
    metrics?: metricUncheckedCreateNestedManyWithoutGroupInput
  }

  export type metricgroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metrics?: metricUpdateManyWithoutGroupNestedInput
  }

  export type metricgroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metrics?: metricUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type metricgroupCreateManyInput = {
    id?: number
    name: string
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricgroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricgroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricCreateInput = {
    name?: string | null
    description?: string | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
    group?: metricgroupCreateNestedOneWithoutMetricsInput
    scorecards?: metricscorecardCreateNestedManyWithoutMetricInput
  }

  export type metricUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    groupId?: number | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
    scorecards?: metricscorecardUncheckedCreateNestedManyWithoutMetricInput
  }

  export type metricUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: metricgroupUpdateOneWithoutMetricsNestedInput
    scorecards?: metricscorecardUpdateManyWithoutMetricNestedInput
  }

  export type metricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scorecards?: metricscorecardUncheckedUpdateManyWithoutMetricNestedInput
  }

  export type metricCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    groupId?: number | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardCreateInput = {
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
    student: studentCreateNestedOneWithoutMetricScorecardsInput
    classsection: classsectionCreateNestedOneWithoutMetricscorecardsInput
    metric: metricCreateNestedOneWithoutScorecardsInput
  }

  export type metricscorecardUncheckedCreateInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardUpdateInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutMetricScorecardsNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutMetricscorecardsNestedInput
    metric?: metricUpdateOneRequiredWithoutScorecardsNestedInput
  }

  export type metricscorecardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardCreateManyInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardUpdateManyMutationInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    rights: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    rights: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rights?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rights?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    rights: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rights?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rights?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumattendance_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel>
    in?: $Enums.attendance_status[]
    notIn?: $Enums.attendance_status[]
    not?: NestedEnumattendance_statusFilter<$PrismaModel> | $Enums.attendance_status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type ClasssectionScalarRelationFilter = {
    is?: classsectionWhereInput
    isNot?: classsectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type attendanceOrderByRelevanceInput = {
    fields: attendanceOrderByRelevanceFieldEnum | attendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type attendanceStudentIdAdateCompoundUniqueInput = {
    studentId: number
    adate: Date | string
  }

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    status?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type attendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    status?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    status?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type attendanceSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumattendance_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel>
    in?: $Enums.attendance_status[]
    notIn?: $Enums.attendance_status[]
    not?: NestedEnumattendance_statusWithAggregatesFilter<$PrismaModel> | $Enums.attendance_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattendance_statusFilter<$PrismaModel>
    _max?: NestedEnumattendance_statusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ClasssectionListRelationFilter = {
    every?: classsectionWhereInput
    some?: classsectionWhereInput
    none?: classsectionWhereInput
  }

  export type classsectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenamedclassOrderByRelevanceInput = {
    fields: RenamedclassOrderByRelevanceFieldEnum | RenamedclassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RenamedclassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RenamedclassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RenamedclassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RenamedclassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type RenamedclassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type MetricscorecardListRelationFilter = {
    every?: metricscorecardWhereInput
    some?: metricscorecardWhereInput
    none?: metricscorecardWhereInput
  }

  export type RenamedclassScalarRelationFilter = {
    is?: RenamedclassWhereInput
    isNot?: RenamedclassWhereInput
  }

  export type SectionScalarRelationFilter = {
    is?: sectionWhereInput
    isNot?: sectionWhereInput
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: teacherWhereInput | null
    isNot?: teacherWhereInput | null
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type metricscorecardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classsectionClassIdSectionIdCompoundUniqueInput = {
    classId: number
    sectionId: number
  }

  export type classsectionCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrder
    subjectHeadId?: SortOrder
  }

  export type classsectionAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrder
    subjectHeadId?: SortOrder
  }

  export type classsectionMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrder
    subjectHeadId?: SortOrder
  }

  export type classsectionMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrder
    subjectHeadId?: SortOrder
  }

  export type classsectionSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sectionId?: SortOrder
    teacherId?: SortOrder
    subjectHeadId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type sectionOrderByRelevanceInput = {
    fields: sectionOrderByRelevanceFieldEnum | sectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type sectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type sectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type sectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type studentOrderByRelevanceInput = {
    fields: studentOrderByRelevanceFieldEnum | studentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    rollNumber?: SortOrder
    classSectionId?: SortOrder
    admissionDate?: SortOrder
    previousSchool?: SortOrder
    fatherNic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    religion?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    rollNumber?: SortOrder
    classSectionId?: SortOrder
    admissionDate?: SortOrder
    previousSchool?: SortOrder
    fatherNic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    religion?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    rollNumber?: SortOrder
    classSectionId?: SortOrder
    admissionDate?: SortOrder
    previousSchool?: SortOrder
    fatherNic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    religion?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    id?: SortOrder
    classSectionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type teacherOrderByRelevanceInput = {
    fields: teacherOrderByRelevanceFieldEnum | teacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    subjectSpecialty?: SortOrder
    hireDate?: SortOrder
  }

  export type teacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    subjectSpecialty?: SortOrder
    hireDate?: SortOrder
  }

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nic?: SortOrder
    subjectSpecialty?: SortOrder
    hireDate?: SortOrder
  }

  export type teacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetricListRelationFilter = {
    every?: metricWhereInput
    some?: metricWhereInput
    none?: metricWhereInput
  }

  export type metricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type metricgroupOrderByRelevanceInput = {
    fields: metricgroupOrderByRelevanceFieldEnum | metricgroupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type metricgroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricgroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type metricgroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricgroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricgroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetricgroupNullableScalarRelationFilter = {
    is?: metricgroupWhereInput | null
    isNot?: metricgroupWhereInput | null
  }

  export type metricOrderByRelevanceInput = {
    fields: metricOrderByRelevanceFieldEnum | metricOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type metricCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type metricMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type MetricScalarRelationFilter = {
    is?: metricWhereInput
    isNot?: metricWhereInput
  }

  export type metricscorecardOrderByRelevanceInput = {
    fields: metricscorecardOrderByRelevanceFieldEnum | metricscorecardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type metricscorecardCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricscorecardAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
  }

  export type metricscorecardMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricscorecardMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    adate?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
    updatedBy?: SortOrder
    updatedDate?: SortOrder
  }

  export type metricscorecardSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    classSectionId?: SortOrder
    metricId?: SortOrder
    score?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type studentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput
    connect?: studentWhereUniqueInput
  }

  export type classsectionCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<classsectionCreateWithoutAttendanceInput, classsectionUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutAttendanceInput
    connect?: classsectionWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumattendance_statusFieldUpdateOperationsInput = {
    set?: $Enums.attendance_status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type studentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput
    upsert?: studentUpsertWithoutAttendanceInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutAttendanceInput, studentUpdateWithoutAttendanceInput>, studentUncheckedUpdateWithoutAttendanceInput>
  }

  export type classsectionUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<classsectionCreateWithoutAttendanceInput, classsectionUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutAttendanceInput
    upsert?: classsectionUpsertWithoutAttendanceInput
    connect?: classsectionWhereUniqueInput
    update?: XOR<XOR<classsectionUpdateToOneWithWhereWithoutAttendanceInput, classsectionUpdateWithoutAttendanceInput>, classsectionUncheckedUpdateWithoutAttendanceInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type classsectionCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput> | classsectionCreateWithoutRenamedclassInput[] | classsectionUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutRenamedclassInput | classsectionCreateOrConnectWithoutRenamedclassInput[]
    createMany?: classsectionCreateManyRenamedclassInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUncheckedCreateNestedManyWithoutRenamedclassInput = {
    create?: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput> | classsectionCreateWithoutRenamedclassInput[] | classsectionUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutRenamedclassInput | classsectionCreateOrConnectWithoutRenamedclassInput[]
    createMany?: classsectionCreateManyRenamedclassInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type classsectionUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput> | classsectionCreateWithoutRenamedclassInput[] | classsectionUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutRenamedclassInput | classsectionCreateOrConnectWithoutRenamedclassInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutRenamedclassInput | classsectionUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: classsectionCreateManyRenamedclassInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutRenamedclassInput | classsectionUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutRenamedclassInput | classsectionUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type classsectionUncheckedUpdateManyWithoutRenamedclassNestedInput = {
    create?: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput> | classsectionCreateWithoutRenamedclassInput[] | classsectionUncheckedCreateWithoutRenamedclassInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutRenamedclassInput | classsectionCreateOrConnectWithoutRenamedclassInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutRenamedclassInput | classsectionUpsertWithWhereUniqueWithoutRenamedclassInput[]
    createMany?: classsectionCreateManyRenamedclassInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutRenamedclassInput | classsectionUpdateWithWhereUniqueWithoutRenamedclassInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutRenamedclassInput | classsectionUpdateManyWithWhereWithoutRenamedclassInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type attendanceCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput> | attendanceCreateWithoutClasssectionInput[] | attendanceUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClasssectionInput | attendanceCreateOrConnectWithoutClasssectionInput[]
    createMany?: attendanceCreateManyClasssectionInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type metricscorecardCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput> | metricscorecardCreateWithoutClasssectionInput[] | metricscorecardUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutClasssectionInput | metricscorecardCreateOrConnectWithoutClasssectionInput[]
    createMany?: metricscorecardCreateManyClasssectionInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type RenamedclassCreateNestedOneWithoutClasssectionInput = {
    create?: XOR<RenamedclassCreateWithoutClasssectionInput, RenamedclassUncheckedCreateWithoutClasssectionInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutClasssectionInput
    connect?: RenamedclassWhereUniqueInput
  }

  export type sectionCreateNestedOneWithoutClasssectionInput = {
    create?: XOR<sectionCreateWithoutClasssectionInput, sectionUncheckedCreateWithoutClasssectionInput>
    connectOrCreate?: sectionCreateOrConnectWithoutClasssectionInput
    connect?: sectionWhereUniqueInput
  }

  export type teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    create?: XOR<teacherCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
    connectOrCreate?: teacherCreateOrConnectWithoutClasssection_classsection_subjectHeadIdToteacherInput
    connect?: teacherWhereUniqueInput
  }

  export type teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput = {
    create?: XOR<teacherCreateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_teacherIdToteacherInput>
    connectOrCreate?: teacherCreateOrConnectWithoutClasssection_classsection_teacherIdToteacherInput
    connect?: teacherWhereUniqueInput
  }

  export type studentCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput> | studentCreateWithoutClasssectionInput[] | studentUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: studentCreateOrConnectWithoutClasssectionInput | studentCreateOrConnectWithoutClasssectionInput[]
    createMany?: studentCreateManyClasssectionInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput> | attendanceCreateWithoutClasssectionInput[] | attendanceUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClasssectionInput | attendanceCreateOrConnectWithoutClasssectionInput[]
    createMany?: attendanceCreateManyClasssectionInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput> | metricscorecardCreateWithoutClasssectionInput[] | metricscorecardUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutClasssectionInput | metricscorecardCreateOrConnectWithoutClasssectionInput[]
    createMany?: metricscorecardCreateManyClasssectionInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutClasssectionInput = {
    create?: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput> | studentCreateWithoutClasssectionInput[] | studentUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: studentCreateOrConnectWithoutClasssectionInput | studentCreateOrConnectWithoutClasssectionInput[]
    createMany?: studentCreateManyClasssectionInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type attendanceUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput> | attendanceCreateWithoutClasssectionInput[] | attendanceUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClasssectionInput | attendanceCreateOrConnectWithoutClasssectionInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutClasssectionInput | attendanceUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: attendanceCreateManyClasssectionInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutClasssectionInput | attendanceUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutClasssectionInput | attendanceUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type metricscorecardUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput> | metricscorecardCreateWithoutClasssectionInput[] | metricscorecardUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutClasssectionInput | metricscorecardCreateOrConnectWithoutClasssectionInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutClasssectionInput | metricscorecardUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: metricscorecardCreateManyClasssectionInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutClasssectionInput | metricscorecardUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutClasssectionInput | metricscorecardUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput = {
    create?: XOR<RenamedclassCreateWithoutClasssectionInput, RenamedclassUncheckedCreateWithoutClasssectionInput>
    connectOrCreate?: RenamedclassCreateOrConnectWithoutClasssectionInput
    upsert?: RenamedclassUpsertWithoutClasssectionInput
    connect?: RenamedclassWhereUniqueInput
    update?: XOR<XOR<RenamedclassUpdateToOneWithWhereWithoutClasssectionInput, RenamedclassUpdateWithoutClasssectionInput>, RenamedclassUncheckedUpdateWithoutClasssectionInput>
  }

  export type sectionUpdateOneRequiredWithoutClasssectionNestedInput = {
    create?: XOR<sectionCreateWithoutClasssectionInput, sectionUncheckedCreateWithoutClasssectionInput>
    connectOrCreate?: sectionCreateOrConnectWithoutClasssectionInput
    upsert?: sectionUpsertWithoutClasssectionInput
    connect?: sectionWhereUniqueInput
    update?: XOR<XOR<sectionUpdateToOneWithWhereWithoutClasssectionInput, sectionUpdateWithoutClasssectionInput>, sectionUncheckedUpdateWithoutClasssectionInput>
  }

  export type teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput = {
    create?: XOR<teacherCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
    connectOrCreate?: teacherCreateOrConnectWithoutClasssection_classsection_subjectHeadIdToteacherInput
    upsert?: teacherUpsertWithoutClasssection_classsection_subjectHeadIdToteacherInput
    disconnect?: teacherWhereInput | boolean
    delete?: teacherWhereInput | boolean
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput>, teacherUncheckedUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
  }

  export type teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput = {
    create?: XOR<teacherCreateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_teacherIdToteacherInput>
    connectOrCreate?: teacherCreateOrConnectWithoutClasssection_classsection_teacherIdToteacherInput
    upsert?: teacherUpsertWithoutClasssection_classsection_teacherIdToteacherInput
    disconnect?: teacherWhereInput | boolean
    delete?: teacherWhereInput | boolean
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutClasssection_classsection_teacherIdToteacherInput, teacherUpdateWithoutClasssection_classsection_teacherIdToteacherInput>, teacherUncheckedUpdateWithoutClasssection_classsection_teacherIdToteacherInput>
  }

  export type studentUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput> | studentCreateWithoutClasssectionInput[] | studentUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: studentCreateOrConnectWithoutClasssectionInput | studentCreateOrConnectWithoutClasssectionInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutClasssectionInput | studentUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: studentCreateManyClasssectionInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutClasssectionInput | studentUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: studentUpdateManyWithWhereWithoutClasssectionInput | studentUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type attendanceUncheckedUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput> | attendanceCreateWithoutClasssectionInput[] | attendanceUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutClasssectionInput | attendanceCreateOrConnectWithoutClasssectionInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutClasssectionInput | attendanceUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: attendanceCreateManyClasssectionInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutClasssectionInput | attendanceUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutClasssectionInput | attendanceUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput> | metricscorecardCreateWithoutClasssectionInput[] | metricscorecardUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutClasssectionInput | metricscorecardCreateOrConnectWithoutClasssectionInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutClasssectionInput | metricscorecardUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: metricscorecardCreateManyClasssectionInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutClasssectionInput | metricscorecardUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutClasssectionInput | metricscorecardUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutClasssectionNestedInput = {
    create?: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput> | studentCreateWithoutClasssectionInput[] | studentUncheckedCreateWithoutClasssectionInput[]
    connectOrCreate?: studentCreateOrConnectWithoutClasssectionInput | studentCreateOrConnectWithoutClasssectionInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutClasssectionInput | studentUpsertWithWhereUniqueWithoutClasssectionInput[]
    createMany?: studentCreateManyClasssectionInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutClasssectionInput | studentUpdateWithWhereUniqueWithoutClasssectionInput[]
    updateMany?: studentUpdateManyWithWhereWithoutClasssectionInput | studentUpdateManyWithWhereWithoutClasssectionInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type classsectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput> | classsectionCreateWithoutSectionInput[] | classsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutSectionInput | classsectionCreateOrConnectWithoutSectionInput[]
    createMany?: classsectionCreateManySectionInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput> | classsectionCreateWithoutSectionInput[] | classsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutSectionInput | classsectionCreateOrConnectWithoutSectionInput[]
    createMany?: classsectionCreateManySectionInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput> | classsectionCreateWithoutSectionInput[] | classsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutSectionInput | classsectionCreateOrConnectWithoutSectionInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutSectionInput | classsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: classsectionCreateManySectionInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutSectionInput | classsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutSectionInput | classsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type classsectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput> | classsectionCreateWithoutSectionInput[] | classsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutSectionInput | classsectionCreateOrConnectWithoutSectionInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutSectionInput | classsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: classsectionCreateManySectionInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutSectionInput | classsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutSectionInput | classsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type attendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type metricscorecardCreateNestedManyWithoutStudentInput = {
    create?: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput> | metricscorecardCreateWithoutStudentInput[] | metricscorecardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutStudentInput | metricscorecardCreateOrConnectWithoutStudentInput[]
    createMany?: metricscorecardCreateManyStudentInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type classsectionCreateNestedOneWithoutStudentInput = {
    create?: XOR<classsectionCreateWithoutStudentInput, classsectionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutStudentInput
    connect?: classsectionWhereUniqueInput
  }

  export type attendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type metricscorecardUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput> | metricscorecardCreateWithoutStudentInput[] | metricscorecardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutStudentInput | metricscorecardCreateOrConnectWithoutStudentInput[]
    createMany?: metricscorecardCreateManyStudentInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type attendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type metricscorecardUpdateManyWithoutStudentNestedInput = {
    create?: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput> | metricscorecardCreateWithoutStudentInput[] | metricscorecardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutStudentInput | metricscorecardCreateOrConnectWithoutStudentInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutStudentInput | metricscorecardUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: metricscorecardCreateManyStudentInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutStudentInput | metricscorecardUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutStudentInput | metricscorecardUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type classsectionUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<classsectionCreateWithoutStudentInput, classsectionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutStudentInput
    upsert?: classsectionUpsertWithoutStudentInput
    connect?: classsectionWhereUniqueInput
    update?: XOR<XOR<classsectionUpdateToOneWithWhereWithoutStudentInput, classsectionUpdateWithoutStudentInput>, classsectionUncheckedUpdateWithoutStudentInput>
  }

  export type attendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type metricscorecardUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput> | metricscorecardCreateWithoutStudentInput[] | metricscorecardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutStudentInput | metricscorecardCreateOrConnectWithoutStudentInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutStudentInput | metricscorecardUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: metricscorecardCreateManyStudentInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutStudentInput | metricscorecardUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutStudentInput | metricscorecardUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type classsectionCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_teacherIdToteacherInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_teacherIdToteacherInputEnvelope
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
  }

  export type classsectionUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpdateManyWithWhereWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type classsectionUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_teacherIdToteacherInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpdateManyWithWhereWithoutTeacher_classsection_teacherIdToteacherInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type classsectionUncheckedUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutTeacher_classsection_subjectHeadIdToteacherInput | classsectionUpdateManyWithWhereWithoutTeacher_classsection_subjectHeadIdToteacherInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type classsectionUncheckedUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput = {
    create?: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput> | classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput[] | classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput[]
    connectOrCreate?: classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput | classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput[]
    upsert?: classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput[]
    createMany?: classsectionCreateManyTeacher_classsection_teacherIdToteacherInputEnvelope
    set?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    disconnect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    delete?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    connect?: classsectionWhereUniqueInput | classsectionWhereUniqueInput[]
    update?: classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput[]
    updateMany?: classsectionUpdateManyWithWhereWithoutTeacher_classsection_teacherIdToteacherInput | classsectionUpdateManyWithWhereWithoutTeacher_classsection_teacherIdToteacherInput[]
    deleteMany?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
  }

  export type metricCreateNestedManyWithoutGroupInput = {
    create?: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput> | metricCreateWithoutGroupInput[] | metricUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: metricCreateOrConnectWithoutGroupInput | metricCreateOrConnectWithoutGroupInput[]
    createMany?: metricCreateManyGroupInputEnvelope
    connect?: metricWhereUniqueInput | metricWhereUniqueInput[]
  }

  export type metricUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput> | metricCreateWithoutGroupInput[] | metricUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: metricCreateOrConnectWithoutGroupInput | metricCreateOrConnectWithoutGroupInput[]
    createMany?: metricCreateManyGroupInputEnvelope
    connect?: metricWhereUniqueInput | metricWhereUniqueInput[]
  }

  export type metricUpdateManyWithoutGroupNestedInput = {
    create?: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput> | metricCreateWithoutGroupInput[] | metricUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: metricCreateOrConnectWithoutGroupInput | metricCreateOrConnectWithoutGroupInput[]
    upsert?: metricUpsertWithWhereUniqueWithoutGroupInput | metricUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: metricCreateManyGroupInputEnvelope
    set?: metricWhereUniqueInput | metricWhereUniqueInput[]
    disconnect?: metricWhereUniqueInput | metricWhereUniqueInput[]
    delete?: metricWhereUniqueInput | metricWhereUniqueInput[]
    connect?: metricWhereUniqueInput | metricWhereUniqueInput[]
    update?: metricUpdateWithWhereUniqueWithoutGroupInput | metricUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: metricUpdateManyWithWhereWithoutGroupInput | metricUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: metricScalarWhereInput | metricScalarWhereInput[]
  }

  export type metricUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput> | metricCreateWithoutGroupInput[] | metricUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: metricCreateOrConnectWithoutGroupInput | metricCreateOrConnectWithoutGroupInput[]
    upsert?: metricUpsertWithWhereUniqueWithoutGroupInput | metricUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: metricCreateManyGroupInputEnvelope
    set?: metricWhereUniqueInput | metricWhereUniqueInput[]
    disconnect?: metricWhereUniqueInput | metricWhereUniqueInput[]
    delete?: metricWhereUniqueInput | metricWhereUniqueInput[]
    connect?: metricWhereUniqueInput | metricWhereUniqueInput[]
    update?: metricUpdateWithWhereUniqueWithoutGroupInput | metricUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: metricUpdateManyWithWhereWithoutGroupInput | metricUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: metricScalarWhereInput | metricScalarWhereInput[]
  }

  export type metricgroupCreateNestedOneWithoutMetricsInput = {
    create?: XOR<metricgroupCreateWithoutMetricsInput, metricgroupUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: metricgroupCreateOrConnectWithoutMetricsInput
    connect?: metricgroupWhereUniqueInput
  }

  export type metricscorecardCreateNestedManyWithoutMetricInput = {
    create?: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput> | metricscorecardCreateWithoutMetricInput[] | metricscorecardUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutMetricInput | metricscorecardCreateOrConnectWithoutMetricInput[]
    createMany?: metricscorecardCreateManyMetricInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type metricscorecardUncheckedCreateNestedManyWithoutMetricInput = {
    create?: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput> | metricscorecardCreateWithoutMetricInput[] | metricscorecardUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutMetricInput | metricscorecardCreateOrConnectWithoutMetricInput[]
    createMany?: metricscorecardCreateManyMetricInputEnvelope
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
  }

  export type metricgroupUpdateOneWithoutMetricsNestedInput = {
    create?: XOR<metricgroupCreateWithoutMetricsInput, metricgroupUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: metricgroupCreateOrConnectWithoutMetricsInput
    upsert?: metricgroupUpsertWithoutMetricsInput
    disconnect?: metricgroupWhereInput | boolean
    delete?: metricgroupWhereInput | boolean
    connect?: metricgroupWhereUniqueInput
    update?: XOR<XOR<metricgroupUpdateToOneWithWhereWithoutMetricsInput, metricgroupUpdateWithoutMetricsInput>, metricgroupUncheckedUpdateWithoutMetricsInput>
  }

  export type metricscorecardUpdateManyWithoutMetricNestedInput = {
    create?: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput> | metricscorecardCreateWithoutMetricInput[] | metricscorecardUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutMetricInput | metricscorecardCreateOrConnectWithoutMetricInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutMetricInput | metricscorecardUpsertWithWhereUniqueWithoutMetricInput[]
    createMany?: metricscorecardCreateManyMetricInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutMetricInput | metricscorecardUpdateWithWhereUniqueWithoutMetricInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutMetricInput | metricscorecardUpdateManyWithWhereWithoutMetricInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type metricscorecardUncheckedUpdateManyWithoutMetricNestedInput = {
    create?: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput> | metricscorecardCreateWithoutMetricInput[] | metricscorecardUncheckedCreateWithoutMetricInput[]
    connectOrCreate?: metricscorecardCreateOrConnectWithoutMetricInput | metricscorecardCreateOrConnectWithoutMetricInput[]
    upsert?: metricscorecardUpsertWithWhereUniqueWithoutMetricInput | metricscorecardUpsertWithWhereUniqueWithoutMetricInput[]
    createMany?: metricscorecardCreateManyMetricInputEnvelope
    set?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    disconnect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    delete?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    connect?: metricscorecardWhereUniqueInput | metricscorecardWhereUniqueInput[]
    update?: metricscorecardUpdateWithWhereUniqueWithoutMetricInput | metricscorecardUpdateWithWhereUniqueWithoutMetricInput[]
    updateMany?: metricscorecardUpdateManyWithWhereWithoutMetricInput | metricscorecardUpdateManyWithWhereWithoutMetricInput[]
    deleteMany?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutMetricScorecardsInput = {
    create?: XOR<studentCreateWithoutMetricScorecardsInput, studentUncheckedCreateWithoutMetricScorecardsInput>
    connectOrCreate?: studentCreateOrConnectWithoutMetricScorecardsInput
    connect?: studentWhereUniqueInput
  }

  export type classsectionCreateNestedOneWithoutMetricscorecardsInput = {
    create?: XOR<classsectionCreateWithoutMetricscorecardsInput, classsectionUncheckedCreateWithoutMetricscorecardsInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutMetricscorecardsInput
    connect?: classsectionWhereUniqueInput
  }

  export type metricCreateNestedOneWithoutScorecardsInput = {
    create?: XOR<metricCreateWithoutScorecardsInput, metricUncheckedCreateWithoutScorecardsInput>
    connectOrCreate?: metricCreateOrConnectWithoutScorecardsInput
    connect?: metricWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutMetricScorecardsNestedInput = {
    create?: XOR<studentCreateWithoutMetricScorecardsInput, studentUncheckedCreateWithoutMetricScorecardsInput>
    connectOrCreate?: studentCreateOrConnectWithoutMetricScorecardsInput
    upsert?: studentUpsertWithoutMetricScorecardsInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutMetricScorecardsInput, studentUpdateWithoutMetricScorecardsInput>, studentUncheckedUpdateWithoutMetricScorecardsInput>
  }

  export type classsectionUpdateOneRequiredWithoutMetricscorecardsNestedInput = {
    create?: XOR<classsectionCreateWithoutMetricscorecardsInput, classsectionUncheckedCreateWithoutMetricscorecardsInput>
    connectOrCreate?: classsectionCreateOrConnectWithoutMetricscorecardsInput
    upsert?: classsectionUpsertWithoutMetricscorecardsInput
    connect?: classsectionWhereUniqueInput
    update?: XOR<XOR<classsectionUpdateToOneWithWhereWithoutMetricscorecardsInput, classsectionUpdateWithoutMetricscorecardsInput>, classsectionUncheckedUpdateWithoutMetricscorecardsInput>
  }

  export type metricUpdateOneRequiredWithoutScorecardsNestedInput = {
    create?: XOR<metricCreateWithoutScorecardsInput, metricUncheckedCreateWithoutScorecardsInput>
    connectOrCreate?: metricCreateOrConnectWithoutScorecardsInput
    upsert?: metricUpsertWithoutScorecardsInput
    connect?: metricWhereUniqueInput
    update?: XOR<XOR<metricUpdateToOneWithWhereWithoutScorecardsInput, metricUpdateWithoutScorecardsInput>, metricUncheckedUpdateWithoutScorecardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumattendance_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel>
    in?: $Enums.attendance_status[]
    notIn?: $Enums.attendance_status[]
    not?: NestedEnumattendance_statusFilter<$PrismaModel> | $Enums.attendance_status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumattendance_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attendance_status | Enumattendance_statusFieldRefInput<$PrismaModel>
    in?: $Enums.attendance_status[]
    notIn?: $Enums.attendance_status[]
    not?: NestedEnumattendance_statusWithAggregatesFilter<$PrismaModel> | $Enums.attendance_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattendance_statusFilter<$PrismaModel>
    _max?: NestedEnumattendance_statusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type studentCreateWithoutAttendanceInput = {
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    metricScorecards?: metricscorecardCreateNestedManyWithoutStudentInput
    classsection: classsectionCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutAttendanceInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    classSectionId: number
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    metricScorecards?: metricscorecardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutAttendanceInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
  }

  export type classsectionCreateWithoutAttendanceInput = {
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutAttendanceInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutAttendanceInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutAttendanceInput, classsectionUncheckedCreateWithoutAttendanceInput>
  }

  export type studentUpsertWithoutAttendanceInput = {
    update: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>
  }

  export type studentUpdateWithoutAttendanceInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricScorecards?: metricscorecardUpdateManyWithoutStudentNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classSectionId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricScorecards?: metricscorecardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type classsectionUpsertWithoutAttendanceInput = {
    update: XOR<classsectionUpdateWithoutAttendanceInput, classsectionUncheckedUpdateWithoutAttendanceInput>
    create: XOR<classsectionCreateWithoutAttendanceInput, classsectionUncheckedCreateWithoutAttendanceInput>
    where?: classsectionWhereInput
  }

  export type classsectionUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: classsectionWhereInput
    data: XOR<classsectionUpdateWithoutAttendanceInput, classsectionUncheckedUpdateWithoutAttendanceInput>
  }

  export type classsectionUpdateWithoutAttendanceInput = {
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionCreateWithoutRenamedclassInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutRenamedclassInput = {
    id?: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutRenamedclassInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput>
  }

  export type classsectionCreateManyRenamedclassInputEnvelope = {
    data: classsectionCreateManyRenamedclassInput | classsectionCreateManyRenamedclassInput[]
    skipDuplicates?: boolean
  }

  export type classsectionUpsertWithWhereUniqueWithoutRenamedclassInput = {
    where: classsectionWhereUniqueInput
    update: XOR<classsectionUpdateWithoutRenamedclassInput, classsectionUncheckedUpdateWithoutRenamedclassInput>
    create: XOR<classsectionCreateWithoutRenamedclassInput, classsectionUncheckedCreateWithoutRenamedclassInput>
  }

  export type classsectionUpdateWithWhereUniqueWithoutRenamedclassInput = {
    where: classsectionWhereUniqueInput
    data: XOR<classsectionUpdateWithoutRenamedclassInput, classsectionUncheckedUpdateWithoutRenamedclassInput>
  }

  export type classsectionUpdateManyWithWhereWithoutRenamedclassInput = {
    where: classsectionScalarWhereInput
    data: XOR<classsectionUpdateManyMutationInput, classsectionUncheckedUpdateManyWithoutRenamedclassInput>
  }

  export type classsectionScalarWhereInput = {
    AND?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
    OR?: classsectionScalarWhereInput[]
    NOT?: classsectionScalarWhereInput | classsectionScalarWhereInput[]
    id?: IntFilter<"classsection"> | number
    classId?: IntFilter<"classsection"> | number
    sectionId?: IntFilter<"classsection"> | number
    teacherId?: IntNullableFilter<"classsection"> | number | null
    subjectHeadId?: IntNullableFilter<"classsection"> | number | null
  }

  export type attendanceCreateWithoutClasssectionInput = {
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
    student: studentCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutClasssectionInput = {
    id?: number
    studentId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type attendanceCreateOrConnectWithoutClasssectionInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput>
  }

  export type attendanceCreateManyClasssectionInputEnvelope = {
    data: attendanceCreateManyClasssectionInput | attendanceCreateManyClasssectionInput[]
    skipDuplicates?: boolean
  }

  export type metricscorecardCreateWithoutClasssectionInput = {
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
    student: studentCreateNestedOneWithoutMetricScorecardsInput
    metric: metricCreateNestedOneWithoutScorecardsInput
  }

  export type metricscorecardUncheckedCreateWithoutClasssectionInput = {
    id?: number
    studentId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardCreateOrConnectWithoutClasssectionInput = {
    where: metricscorecardWhereUniqueInput
    create: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput>
  }

  export type metricscorecardCreateManyClasssectionInputEnvelope = {
    data: metricscorecardCreateManyClasssectionInput | metricscorecardCreateManyClasssectionInput[]
    skipDuplicates?: boolean
  }

  export type RenamedclassCreateWithoutClasssectionInput = {
    name: string
    createdAt?: Date | string
  }

  export type RenamedclassUncheckedCreateWithoutClasssectionInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type RenamedclassCreateOrConnectWithoutClasssectionInput = {
    where: RenamedclassWhereUniqueInput
    create: XOR<RenamedclassCreateWithoutClasssectionInput, RenamedclassUncheckedCreateWithoutClasssectionInput>
  }

  export type sectionCreateWithoutClasssectionInput = {
    name: string
  }

  export type sectionUncheckedCreateWithoutClasssectionInput = {
    id?: number
    name: string
  }

  export type sectionCreateOrConnectWithoutClasssectionInput = {
    where: sectionWhereUniqueInput
    create: XOR<sectionCreateWithoutClasssectionInput, sectionUncheckedCreateWithoutClasssectionInput>
  }

  export type teacherCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_teacherIdToteacher?: classsectionCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput
  }

  export type teacherUncheckedCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_teacherIdToteacher?: classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_teacherIdToteacherInput
  }

  export type teacherCreateOrConnectWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
  }

  export type teacherCreateWithoutClasssection_classsection_teacherIdToteacherInput = {
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput
  }

  export type teacherUncheckedCreateWithoutClasssection_classsection_teacherIdToteacherInput = {
    id?: number
    name: string
    email: string
    phone?: string | null
    nic?: string | null
    subjectSpecialty?: string | null
    hireDate?: Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUncheckedCreateNestedManyWithoutTeacher_classsection_subjectHeadIdToteacherInput
  }

  export type teacherCreateOrConnectWithoutClasssection_classsection_teacherIdToteacherInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_teacherIdToteacherInput>
  }

  export type studentCreateWithoutClasssectionInput = {
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    metricScorecards?: metricscorecardCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutClasssectionInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    metricScorecards?: metricscorecardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutClasssectionInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput>
  }

  export type studentCreateManyClasssectionInputEnvelope = {
    data: studentCreateManyClasssectionInput | studentCreateManyClasssectionInput[]
    skipDuplicates?: boolean
  }

  export type attendanceUpsertWithWhereUniqueWithoutClasssectionInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutClasssectionInput, attendanceUncheckedUpdateWithoutClasssectionInput>
    create: XOR<attendanceCreateWithoutClasssectionInput, attendanceUncheckedCreateWithoutClasssectionInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutClasssectionInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutClasssectionInput, attendanceUncheckedUpdateWithoutClasssectionInput>
  }

  export type attendanceUpdateManyWithWhereWithoutClasssectionInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutClasssectionInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    OR?: attendanceScalarWhereInput[]
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    id?: IntFilter<"attendance"> | number
    studentId?: IntFilter<"attendance"> | number
    classSectionId?: IntFilter<"attendance"> | number
    adate?: DateTimeFilter<"attendance"> | Date | string
    status?: Enumattendance_statusFilter<"attendance"> | $Enums.attendance_status
    updatedBy?: StringNullableFilter<"attendance"> | string | null
    updatedDate?: DateTimeNullableFilter<"attendance"> | Date | string | null
  }

  export type metricscorecardUpsertWithWhereUniqueWithoutClasssectionInput = {
    where: metricscorecardWhereUniqueInput
    update: XOR<metricscorecardUpdateWithoutClasssectionInput, metricscorecardUncheckedUpdateWithoutClasssectionInput>
    create: XOR<metricscorecardCreateWithoutClasssectionInput, metricscorecardUncheckedCreateWithoutClasssectionInput>
  }

  export type metricscorecardUpdateWithWhereUniqueWithoutClasssectionInput = {
    where: metricscorecardWhereUniqueInput
    data: XOR<metricscorecardUpdateWithoutClasssectionInput, metricscorecardUncheckedUpdateWithoutClasssectionInput>
  }

  export type metricscorecardUpdateManyWithWhereWithoutClasssectionInput = {
    where: metricscorecardScalarWhereInput
    data: XOR<metricscorecardUpdateManyMutationInput, metricscorecardUncheckedUpdateManyWithoutClasssectionInput>
  }

  export type metricscorecardScalarWhereInput = {
    AND?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
    OR?: metricscorecardScalarWhereInput[]
    NOT?: metricscorecardScalarWhereInput | metricscorecardScalarWhereInput[]
    id?: IntFilter<"metricscorecard"> | number
    studentId?: IntFilter<"metricscorecard"> | number
    classSectionId?: IntFilter<"metricscorecard"> | number
    adate?: DateTimeFilter<"metricscorecard"> | Date | string
    metricId?: IntFilter<"metricscorecard"> | number
    score?: IntFilter<"metricscorecard"> | number
    updatedBy?: StringNullableFilter<"metricscorecard"> | string | null
    updatedDate?: DateTimeNullableFilter<"metricscorecard"> | Date | string | null
  }

  export type RenamedclassUpsertWithoutClasssectionInput = {
    update: XOR<RenamedclassUpdateWithoutClasssectionInput, RenamedclassUncheckedUpdateWithoutClasssectionInput>
    create: XOR<RenamedclassCreateWithoutClasssectionInput, RenamedclassUncheckedCreateWithoutClasssectionInput>
    where?: RenamedclassWhereInput
  }

  export type RenamedclassUpdateToOneWithWhereWithoutClasssectionInput = {
    where?: RenamedclassWhereInput
    data: XOR<RenamedclassUpdateWithoutClasssectionInput, RenamedclassUncheckedUpdateWithoutClasssectionInput>
  }

  export type RenamedclassUpdateWithoutClasssectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenamedclassUncheckedUpdateWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sectionUpsertWithoutClasssectionInput = {
    update: XOR<sectionUpdateWithoutClasssectionInput, sectionUncheckedUpdateWithoutClasssectionInput>
    create: XOR<sectionCreateWithoutClasssectionInput, sectionUncheckedCreateWithoutClasssectionInput>
    where?: sectionWhereInput
  }

  export type sectionUpdateToOneWithWhereWithoutClasssectionInput = {
    where?: sectionWhereInput
    data: XOR<sectionUpdateWithoutClasssectionInput, sectionUncheckedUpdateWithoutClasssectionInput>
  }

  export type sectionUpdateWithoutClasssectionInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type sectionUncheckedUpdateWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teacherUpsertWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    update: XOR<teacherUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
    create: XOR<teacherCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput, teacherUncheckedUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput>
  }

  export type teacherUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_teacherIdToteacher?: classsectionUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutClasssection_classsection_subjectHeadIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_teacherIdToteacher?: classsectionUncheckedUpdateManyWithoutTeacher_classsection_teacherIdToteacherNestedInput
  }

  export type teacherUpsertWithoutClasssection_classsection_teacherIdToteacherInput = {
    update: XOR<teacherUpdateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedUpdateWithoutClasssection_classsection_teacherIdToteacherInput>
    create: XOR<teacherCreateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedCreateWithoutClasssection_classsection_teacherIdToteacherInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutClasssection_classsection_teacherIdToteacherInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutClasssection_classsection_teacherIdToteacherInput, teacherUncheckedUpdateWithoutClasssection_classsection_teacherIdToteacherInput>
  }

  export type teacherUpdateWithoutClasssection_classsection_teacherIdToteacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutClasssection_classsection_teacherIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nic?: NullableStringFieldUpdateOperationsInput | string | null
    subjectSpecialty?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection_classsection_subjectHeadIdToteacher?: classsectionUncheckedUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherNestedInput
  }

  export type studentUpsertWithWhereUniqueWithoutClasssectionInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutClasssectionInput, studentUncheckedUpdateWithoutClasssectionInput>
    create: XOR<studentCreateWithoutClasssectionInput, studentUncheckedCreateWithoutClasssectionInput>
  }

  export type studentUpdateWithWhereUniqueWithoutClasssectionInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutClasssectionInput, studentUncheckedUpdateWithoutClasssectionInput>
  }

  export type studentUpdateManyWithWhereWithoutClasssectionInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutClasssectionInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    id?: IntFilter<"student"> | number
    firstName?: StringFilter<"student"> | string
    lastName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    dateOfBirth?: DateTimeFilter<"student"> | Date | string
    rollNumber?: StringNullableFilter<"student"> | string | null
    classSectionId?: IntFilter<"student"> | number
    admissionDate?: DateTimeFilter<"student"> | Date | string
    previousSchool?: StringNullableFilter<"student"> | string | null
    fatherNic?: StringNullableFilter<"student"> | string | null
    email?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    address?: StringNullableFilter<"student"> | string | null
    religion?: StringNullableFilter<"student"> | string | null
    guardianName?: StringNullableFilter<"student"> | string | null
    guardianContact?: StringNullableFilter<"student"> | string | null
    isActive?: BoolFilter<"student"> | boolean
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
  }

  export type classsectionCreateWithoutSectionInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutSectionInput = {
    id?: number
    classId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutSectionInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput>
  }

  export type classsectionCreateManySectionInputEnvelope = {
    data: classsectionCreateManySectionInput | classsectionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type classsectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: classsectionWhereUniqueInput
    update: XOR<classsectionUpdateWithoutSectionInput, classsectionUncheckedUpdateWithoutSectionInput>
    create: XOR<classsectionCreateWithoutSectionInput, classsectionUncheckedCreateWithoutSectionInput>
  }

  export type classsectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: classsectionWhereUniqueInput
    data: XOR<classsectionUpdateWithoutSectionInput, classsectionUncheckedUpdateWithoutSectionInput>
  }

  export type classsectionUpdateManyWithWhereWithoutSectionInput = {
    where: classsectionScalarWhereInput
    data: XOR<classsectionUpdateManyMutationInput, classsectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type attendanceCreateWithoutStudentInput = {
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
    classsection: classsectionCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    classSectionId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type attendanceCreateOrConnectWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceCreateManyStudentInputEnvelope = {
    data: attendanceCreateManyStudentInput | attendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type metricscorecardCreateWithoutStudentInput = {
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
    classsection: classsectionCreateNestedOneWithoutMetricscorecardsInput
    metric: metricCreateNestedOneWithoutScorecardsInput
  }

  export type metricscorecardUncheckedCreateWithoutStudentInput = {
    id?: number
    classSectionId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardCreateOrConnectWithoutStudentInput = {
    where: metricscorecardWhereUniqueInput
    create: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput>
  }

  export type metricscorecardCreateManyStudentInputEnvelope = {
    data: metricscorecardCreateManyStudentInput | metricscorecardCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type classsectionCreateWithoutStudentInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
  }

  export type classsectionUncheckedCreateWithoutStudentInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutStudentInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutStudentInput, classsectionUncheckedCreateWithoutStudentInput>
  }

  export type attendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
  }

  export type attendanceUpdateManyWithWhereWithoutStudentInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type metricscorecardUpsertWithWhereUniqueWithoutStudentInput = {
    where: metricscorecardWhereUniqueInput
    update: XOR<metricscorecardUpdateWithoutStudentInput, metricscorecardUncheckedUpdateWithoutStudentInput>
    create: XOR<metricscorecardCreateWithoutStudentInput, metricscorecardUncheckedCreateWithoutStudentInput>
  }

  export type metricscorecardUpdateWithWhereUniqueWithoutStudentInput = {
    where: metricscorecardWhereUniqueInput
    data: XOR<metricscorecardUpdateWithoutStudentInput, metricscorecardUncheckedUpdateWithoutStudentInput>
  }

  export type metricscorecardUpdateManyWithWhereWithoutStudentInput = {
    where: metricscorecardScalarWhereInput
    data: XOR<metricscorecardUpdateManyMutationInput, metricscorecardUncheckedUpdateManyWithoutStudentInput>
  }

  export type classsectionUpsertWithoutStudentInput = {
    update: XOR<classsectionUpdateWithoutStudentInput, classsectionUncheckedUpdateWithoutStudentInput>
    create: XOR<classsectionCreateWithoutStudentInput, classsectionUncheckedCreateWithoutStudentInput>
    where?: classsectionWhereInput
  }

  export type classsectionUpdateToOneWithWhereWithoutStudentInput = {
    where?: classsectionWhereInput
    data: XOR<classsectionUpdateWithoutStudentInput, classsectionUncheckedUpdateWithoutStudentInput>
  }

  export type classsectionUpdateWithoutStudentInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
  }

  export type classsectionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput>
  }

  export type classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInputEnvelope = {
    data: classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInput | classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInput[]
    skipDuplicates?: boolean
  }

  export type classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput = {
    id?: number
    classId: number
    sectionId: number
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    metricscorecards?: metricscorecardUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutTeacher_classsection_teacherIdToteacherInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput>
  }

  export type classsectionCreateManyTeacher_classsection_teacherIdToteacherInputEnvelope = {
    data: classsectionCreateManyTeacher_classsection_teacherIdToteacherInput | classsectionCreateManyTeacher_classsection_teacherIdToteacherInput[]
    skipDuplicates?: boolean
  }

  export type classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    where: classsectionWhereUniqueInput
    update: XOR<classsectionUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput>
    create: XOR<classsectionCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_subjectHeadIdToteacherInput>
  }

  export type classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    where: classsectionWhereUniqueInput
    data: XOR<classsectionUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput, classsectionUncheckedUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput>
  }

  export type classsectionUpdateManyWithWhereWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    where: classsectionScalarWhereInput
    data: XOR<classsectionUpdateManyMutationInput, classsectionUncheckedUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherInput>
  }

  export type classsectionUpsertWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput = {
    where: classsectionWhereUniqueInput
    update: XOR<classsectionUpdateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedUpdateWithoutTeacher_classsection_teacherIdToteacherInput>
    create: XOR<classsectionCreateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedCreateWithoutTeacher_classsection_teacherIdToteacherInput>
  }

  export type classsectionUpdateWithWhereUniqueWithoutTeacher_classsection_teacherIdToteacherInput = {
    where: classsectionWhereUniqueInput
    data: XOR<classsectionUpdateWithoutTeacher_classsection_teacherIdToteacherInput, classsectionUncheckedUpdateWithoutTeacher_classsection_teacherIdToteacherInput>
  }

  export type classsectionUpdateManyWithWhereWithoutTeacher_classsection_teacherIdToteacherInput = {
    where: classsectionScalarWhereInput
    data: XOR<classsectionUpdateManyMutationInput, classsectionUncheckedUpdateManyWithoutTeacher_classsection_teacherIdToteacherInput>
  }

  export type metricCreateWithoutGroupInput = {
    name?: string | null
    description?: string | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
    scorecards?: metricscorecardCreateNestedManyWithoutMetricInput
  }

  export type metricUncheckedCreateWithoutGroupInput = {
    id?: number
    name?: string | null
    description?: string | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
    scorecards?: metricscorecardUncheckedCreateNestedManyWithoutMetricInput
  }

  export type metricCreateOrConnectWithoutGroupInput = {
    where: metricWhereUniqueInput
    create: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput>
  }

  export type metricCreateManyGroupInputEnvelope = {
    data: metricCreateManyGroupInput | metricCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type metricUpsertWithWhereUniqueWithoutGroupInput = {
    where: metricWhereUniqueInput
    update: XOR<metricUpdateWithoutGroupInput, metricUncheckedUpdateWithoutGroupInput>
    create: XOR<metricCreateWithoutGroupInput, metricUncheckedCreateWithoutGroupInput>
  }

  export type metricUpdateWithWhereUniqueWithoutGroupInput = {
    where: metricWhereUniqueInput
    data: XOR<metricUpdateWithoutGroupInput, metricUncheckedUpdateWithoutGroupInput>
  }

  export type metricUpdateManyWithWhereWithoutGroupInput = {
    where: metricScalarWhereInput
    data: XOR<metricUpdateManyMutationInput, metricUncheckedUpdateManyWithoutGroupInput>
  }

  export type metricScalarWhereInput = {
    AND?: metricScalarWhereInput | metricScalarWhereInput[]
    OR?: metricScalarWhereInput[]
    NOT?: metricScalarWhereInput | metricScalarWhereInput[]
    id?: IntFilter<"metric"> | number
    name?: StringNullableFilter<"metric"> | string | null
    description?: StringNullableFilter<"metric"> | string | null
    groupId?: IntNullableFilter<"metric"> | number | null
    updatedBy?: StringNullableFilter<"metric"> | string | null
    updatedDate?: DateTimeNullableFilter<"metric"> | Date | string | null
  }

  export type metricgroupCreateWithoutMetricsInput = {
    name: string
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricgroupUncheckedCreateWithoutMetricsInput = {
    id?: number
    name: string
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricgroupCreateOrConnectWithoutMetricsInput = {
    where: metricgroupWhereUniqueInput
    create: XOR<metricgroupCreateWithoutMetricsInput, metricgroupUncheckedCreateWithoutMetricsInput>
  }

  export type metricscorecardCreateWithoutMetricInput = {
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
    student: studentCreateNestedOneWithoutMetricScorecardsInput
    classsection: classsectionCreateNestedOneWithoutMetricscorecardsInput
  }

  export type metricscorecardUncheckedCreateWithoutMetricInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardCreateOrConnectWithoutMetricInput = {
    where: metricscorecardWhereUniqueInput
    create: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput>
  }

  export type metricscorecardCreateManyMetricInputEnvelope = {
    data: metricscorecardCreateManyMetricInput | metricscorecardCreateManyMetricInput[]
    skipDuplicates?: boolean
  }

  export type metricgroupUpsertWithoutMetricsInput = {
    update: XOR<metricgroupUpdateWithoutMetricsInput, metricgroupUncheckedUpdateWithoutMetricsInput>
    create: XOR<metricgroupCreateWithoutMetricsInput, metricgroupUncheckedCreateWithoutMetricsInput>
    where?: metricgroupWhereInput
  }

  export type metricgroupUpdateToOneWithWhereWithoutMetricsInput = {
    where?: metricgroupWhereInput
    data: XOR<metricgroupUpdateWithoutMetricsInput, metricgroupUncheckedUpdateWithoutMetricsInput>
  }

  export type metricgroupUpdateWithoutMetricsInput = {
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricgroupUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUpsertWithWhereUniqueWithoutMetricInput = {
    where: metricscorecardWhereUniqueInput
    update: XOR<metricscorecardUpdateWithoutMetricInput, metricscorecardUncheckedUpdateWithoutMetricInput>
    create: XOR<metricscorecardCreateWithoutMetricInput, metricscorecardUncheckedCreateWithoutMetricInput>
  }

  export type metricscorecardUpdateWithWhereUniqueWithoutMetricInput = {
    where: metricscorecardWhereUniqueInput
    data: XOR<metricscorecardUpdateWithoutMetricInput, metricscorecardUncheckedUpdateWithoutMetricInput>
  }

  export type metricscorecardUpdateManyWithWhereWithoutMetricInput = {
    where: metricscorecardScalarWhereInput
    data: XOR<metricscorecardUpdateManyMutationInput, metricscorecardUncheckedUpdateManyWithoutMetricInput>
  }

  export type studentCreateWithoutMetricScorecardsInput = {
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceCreateNestedManyWithoutStudentInput
    classsection: classsectionCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutMetricScorecardsInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    classSectionId: number
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutMetricScorecardsInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutMetricScorecardsInput, studentUncheckedCreateWithoutMetricScorecardsInput>
  }

  export type classsectionCreateWithoutMetricscorecardsInput = {
    attendance?: attendanceCreateNestedManyWithoutClasssectionInput
    Renamedclass: RenamedclassCreateNestedOneWithoutClasssectionInput
    section: sectionCreateNestedOneWithoutClasssectionInput
    teacher_classsection_subjectHeadIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_subjectHeadIdToteacherInput
    teacher_classsection_teacherIdToteacher?: teacherCreateNestedOneWithoutClasssection_classsection_teacherIdToteacherInput
    student?: studentCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionUncheckedCreateWithoutMetricscorecardsInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
    attendance?: attendanceUncheckedCreateNestedManyWithoutClasssectionInput
    student?: studentUncheckedCreateNestedManyWithoutClasssectionInput
  }

  export type classsectionCreateOrConnectWithoutMetricscorecardsInput = {
    where: classsectionWhereUniqueInput
    create: XOR<classsectionCreateWithoutMetricscorecardsInput, classsectionUncheckedCreateWithoutMetricscorecardsInput>
  }

  export type metricCreateWithoutScorecardsInput = {
    name?: string | null
    description?: string | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
    group?: metricgroupCreateNestedOneWithoutMetricsInput
  }

  export type metricUncheckedCreateWithoutScorecardsInput = {
    id?: number
    name?: string | null
    description?: string | null
    groupId?: number | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricCreateOrConnectWithoutScorecardsInput = {
    where: metricWhereUniqueInput
    create: XOR<metricCreateWithoutScorecardsInput, metricUncheckedCreateWithoutScorecardsInput>
  }

  export type studentUpsertWithoutMetricScorecardsInput = {
    update: XOR<studentUpdateWithoutMetricScorecardsInput, studentUncheckedUpdateWithoutMetricScorecardsInput>
    create: XOR<studentCreateWithoutMetricScorecardsInput, studentUncheckedCreateWithoutMetricScorecardsInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutMetricScorecardsInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutMetricScorecardsInput, studentUncheckedUpdateWithoutMetricScorecardsInput>
  }

  export type studentUpdateWithoutMetricScorecardsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutMetricScorecardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    classSectionId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type classsectionUpsertWithoutMetricscorecardsInput = {
    update: XOR<classsectionUpdateWithoutMetricscorecardsInput, classsectionUncheckedUpdateWithoutMetricscorecardsInput>
    create: XOR<classsectionCreateWithoutMetricscorecardsInput, classsectionUncheckedCreateWithoutMetricscorecardsInput>
    where?: classsectionWhereInput
  }

  export type classsectionUpdateToOneWithWhereWithoutMetricscorecardsInput = {
    where?: classsectionWhereInput
    data: XOR<classsectionUpdateWithoutMetricscorecardsInput, classsectionUncheckedUpdateWithoutMetricscorecardsInput>
  }

  export type classsectionUpdateWithoutMetricscorecardsInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutMetricscorecardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type metricUpsertWithoutScorecardsInput = {
    update: XOR<metricUpdateWithoutScorecardsInput, metricUncheckedUpdateWithoutScorecardsInput>
    create: XOR<metricCreateWithoutScorecardsInput, metricUncheckedCreateWithoutScorecardsInput>
    where?: metricWhereInput
  }

  export type metricUpdateToOneWithWhereWithoutScorecardsInput = {
    where?: metricWhereInput
    data: XOR<metricUpdateWithoutScorecardsInput, metricUncheckedUpdateWithoutScorecardsInput>
  }

  export type metricUpdateWithoutScorecardsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: metricgroupUpdateOneWithoutMetricsNestedInput
  }

  export type metricUncheckedUpdateWithoutScorecardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classsectionCreateManyRenamedclassInput = {
    id?: number
    sectionId: number
    teacherId?: number | null
    subjectHeadId?: number | null
  }

  export type classsectionUpdateWithoutRenamedclassInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutRenamedclassInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateManyWithoutRenamedclassInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type attendanceCreateManyClasssectionInput = {
    id?: number
    studentId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardCreateManyClasssectionInput = {
    id?: number
    studentId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type studentCreateManyClasssectionInput = {
    id?: number
    firstName: string
    lastName: string
    gender: string
    dateOfBirth: Date | string
    rollNumber?: string | null
    admissionDate: Date | string
    previousSchool?: string | null
    fatherNic?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    religion?: string | null
    guardianName?: string | null
    guardianContact?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type attendanceUpdateWithoutClasssectionInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceUncheckedUpdateManyWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUpdateWithoutClasssectionInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutMetricScorecardsNestedInput
    metric?: metricUpdateOneRequiredWithoutScorecardsNestedInput
  }

  export type metricscorecardUncheckedUpdateWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUncheckedUpdateManyWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentUpdateWithoutClasssectionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUpdateManyWithoutStudentNestedInput
    metricScorecards?: metricscorecardUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    metricScorecards?: metricscorecardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutClasssectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    fatherNic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianContact?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type classsectionCreateManySectionInput = {
    id?: number
    classId: number
    teacherId?: number | null
    subjectHeadId?: number | null
  }

  export type classsectionUpdateWithoutSectionInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type attendanceCreateManyStudentInput = {
    id?: number
    classSectionId: number
    adate: Date | string
    status: $Enums.attendance_status
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardCreateManyStudentInput = {
    id?: number
    classSectionId: number
    adate: Date | string
    metricId: number
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type attendanceUpdateWithoutStudentInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection?: classsectionUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumattendance_statusFieldUpdateOperationsInput | $Enums.attendance_status
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUpdateWithoutStudentInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classsection?: classsectionUpdateOneRequiredWithoutMetricscorecardsNestedInput
    metric?: metricUpdateOneRequiredWithoutScorecardsNestedInput
  }

  export type metricscorecardUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    metricId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classsectionCreateManyTeacher_classsection_subjectHeadIdToteacherInput = {
    id?: number
    classId: number
    sectionId: number
    teacherId?: number | null
  }

  export type classsectionCreateManyTeacher_classsection_teacherIdToteacherInput = {
    id?: number
    classId: number
    sectionId: number
    subjectHeadId?: number | null
  }

  export type classsectionUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_teacherIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_teacherIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateManyWithoutTeacher_classsection_subjectHeadIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type classsectionUpdateWithoutTeacher_classsection_teacherIdToteacherInput = {
    attendance?: attendanceUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUpdateManyWithoutClasssectionNestedInput
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutClasssectionNestedInput
    section?: sectionUpdateOneRequiredWithoutClasssectionNestedInput
    teacher_classsection_subjectHeadIdToteacher?: teacherUpdateOneWithoutClasssection_classsection_subjectHeadIdToteacherNestedInput
    student?: studentUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateWithoutTeacher_classsection_teacherIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: attendanceUncheckedUpdateManyWithoutClasssectionNestedInput
    metricscorecards?: metricscorecardUncheckedUpdateManyWithoutClasssectionNestedInput
    student?: studentUncheckedUpdateManyWithoutClasssectionNestedInput
  }

  export type classsectionUncheckedUpdateManyWithoutTeacher_classsection_teacherIdToteacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    subjectHeadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type metricCreateManyGroupInput = {
    id?: number
    name?: string | null
    description?: string | null
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricUpdateWithoutGroupInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scorecards?: metricscorecardUpdateManyWithoutMetricNestedInput
  }

  export type metricUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scorecards?: metricscorecardUncheckedUpdateManyWithoutMetricNestedInput
  }

  export type metricUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardCreateManyMetricInput = {
    id?: number
    studentId: number
    classSectionId: number
    adate: Date | string
    score: number
    updatedBy?: string | null
    updatedDate?: Date | string | null
  }

  export type metricscorecardUpdateWithoutMetricInput = {
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutMetricScorecardsNestedInput
    classsection?: classsectionUpdateOneRequiredWithoutMetricscorecardsNestedInput
  }

  export type metricscorecardUncheckedUpdateWithoutMetricInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type metricscorecardUncheckedUpdateManyWithoutMetricInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    classSectionId?: IntFieldUpdateOperationsInput | number
    adate?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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