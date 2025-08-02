
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model StudySet
 * 
 */
export type StudySet = $Result.DefaultSelection<Prisma.$StudySetPayload>
/**
 * Model Vocabulary
 * 
 */
export type Vocabulary = $Result.DefaultSelection<Prisma.$VocabularyPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model UserLikesStudySet
 * 
 */
export type UserLikesStudySet = $Result.DefaultSelection<Prisma.$UserLikesStudySetPayload>
/**
 * Model UserVocabularyProgress
 * 
 */
export type UserVocabularyProgress = $Result.DefaultSelection<Prisma.$UserVocabularyProgressPayload>
/**
 * Model UserUniqueWord
 * 
 */
export type UserUniqueWord = $Result.DefaultSelection<Prisma.$UserUniqueWordPayload>
/**
 * Model XPEvent
 * 
 */
export type XPEvent = $Result.DefaultSelection<Prisma.$XPEventPayload>
/**
 * Model DailyActivity
 * 
 */
export type DailyActivity = $Result.DefaultSelection<Prisma.$DailyActivityPayload>
/**
 * Model DictionaryWord
 * 
 */
export type DictionaryWord = $Result.DefaultSelection<Prisma.$DictionaryWordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Level: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type Level = (typeof Level)[keyof typeof Level]


export const VerificationType: {
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD'
};

export type VerificationType = (typeof VerificationType)[keyof typeof VerificationType]


export const PartOfSpeech: {
  NOUN: 'NOUN',
  VERB: 'VERB',
  ADJECTIVE: 'ADJECTIVE',
  ADVERB: 'ADVERB',
  PRONOUN: 'PRONOUN',
  PREPOSITION: 'PREPOSITION',
  CONJUNCTION: 'CONJUNCTION',
  INTERJECTION: 'INTERJECTION',
  DETERMINER: 'DETERMINER',
  OTHER: 'OTHER'
};

export type PartOfSpeech = (typeof PartOfSpeech)[keyof typeof PartOfSpeech]

}

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type VerificationType = $Enums.VerificationType

export const VerificationType: typeof $Enums.VerificationType

export type PartOfSpeech = $Enums.PartOfSpeech

export const PartOfSpeech: typeof $Enums.PartOfSpeech

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studySet`: Exposes CRUD operations for the **StudySet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudySets
    * const studySets = await prisma.studySet.findMany()
    * ```
    */
  get studySet(): Prisma.StudySetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocabulary`: Exposes CRUD operations for the **Vocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocabularies
    * const vocabularies = await prisma.vocabulary.findMany()
    * ```
    */
  get vocabulary(): Prisma.VocabularyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLikesStudySet`: Exposes CRUD operations for the **UserLikesStudySet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLikesStudySets
    * const userLikesStudySets = await prisma.userLikesStudySet.findMany()
    * ```
    */
  get userLikesStudySet(): Prisma.UserLikesStudySetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVocabularyProgress`: Exposes CRUD operations for the **UserVocabularyProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVocabularyProgresses
    * const userVocabularyProgresses = await prisma.userVocabularyProgress.findMany()
    * ```
    */
  get userVocabularyProgress(): Prisma.UserVocabularyProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userUniqueWord`: Exposes CRUD operations for the **UserUniqueWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserUniqueWords
    * const userUniqueWords = await prisma.userUniqueWord.findMany()
    * ```
    */
  get userUniqueWord(): Prisma.UserUniqueWordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.xPEvent`: Exposes CRUD operations for the **XPEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more XPEvents
    * const xPEvents = await prisma.xPEvent.findMany()
    * ```
    */
  get xPEvent(): Prisma.XPEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyActivity`: Exposes CRUD operations for the **DailyActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyActivities
    * const dailyActivities = await prisma.dailyActivity.findMany()
    * ```
    */
  get dailyActivity(): Prisma.DailyActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dictionaryWord`: Exposes CRUD operations for the **DictionaryWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DictionaryWords
    * const dictionaryWords = await prisma.dictionaryWord.findMany()
    * ```
    */
  get dictionaryWord(): Prisma.DictionaryWordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
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
    User: 'User',
    RefreshToken: 'RefreshToken',
    StudySet: 'StudySet',
    Vocabulary: 'Vocabulary',
    Category: 'Category',
    VerificationCode: 'VerificationCode',
    UserLikesStudySet: 'UserLikesStudySet',
    UserVocabularyProgress: 'UserVocabularyProgress',
    UserUniqueWord: 'UserUniqueWord',
    XPEvent: 'XPEvent',
    DailyActivity: 'DailyActivity',
    DictionaryWord: 'DictionaryWord'
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
      modelProps: "user" | "refreshToken" | "studySet" | "vocabulary" | "category" | "verificationCode" | "userLikesStudySet" | "userVocabularyProgress" | "userUniqueWord" | "xPEvent" | "dailyActivity" | "dictionaryWord"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      StudySet: {
        payload: Prisma.$StudySetPayload<ExtArgs>
        fields: Prisma.StudySetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudySetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudySetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          findFirst: {
            args: Prisma.StudySetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudySetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          findMany: {
            args: Prisma.StudySetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>[]
          }
          create: {
            args: Prisma.StudySetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          createMany: {
            args: Prisma.StudySetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudySetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          update: {
            args: Prisma.StudySetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          deleteMany: {
            args: Prisma.StudySetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudySetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudySetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudySetPayload>
          }
          aggregate: {
            args: Prisma.StudySetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudySet>
          }
          groupBy: {
            args: Prisma.StudySetGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudySetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudySetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudySetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudySetCountArgs<ExtArgs>
            result: $Utils.Optional<StudySetCountAggregateOutputType> | number
          }
        }
      }
      Vocabulary: {
        payload: Prisma.$VocabularyPayload<ExtArgs>
        fields: Prisma.VocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findFirst: {
            args: Prisma.VocabularyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findMany: {
            args: Prisma.VocabularyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          create: {
            args: Prisma.VocabularyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          createMany: {
            args: Prisma.VocabularyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VocabularyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          update: {
            args: Prisma.VocabularyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          aggregate: {
            args: Prisma.VocabularyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabulary>
          }
          groupBy: {
            args: Prisma.VocabularyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VocabularyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VocabularyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VocabularyCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationCodeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationCodeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      UserLikesStudySet: {
        payload: Prisma.$UserLikesStudySetPayload<ExtArgs>
        fields: Prisma.UserLikesStudySetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLikesStudySetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLikesStudySetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          findFirst: {
            args: Prisma.UserLikesStudySetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLikesStudySetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          findMany: {
            args: Prisma.UserLikesStudySetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>[]
          }
          create: {
            args: Prisma.UserLikesStudySetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          createMany: {
            args: Prisma.UserLikesStudySetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLikesStudySetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          update: {
            args: Prisma.UserLikesStudySetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          deleteMany: {
            args: Prisma.UserLikesStudySetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLikesStudySetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLikesStudySetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLikesStudySetPayload>
          }
          aggregate: {
            args: Prisma.UserLikesStudySetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLikesStudySet>
          }
          groupBy: {
            args: Prisma.UserLikesStudySetGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLikesStudySetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserLikesStudySetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserLikesStudySetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserLikesStudySetCountArgs<ExtArgs>
            result: $Utils.Optional<UserLikesStudySetCountAggregateOutputType> | number
          }
        }
      }
      UserVocabularyProgress: {
        payload: Prisma.$UserVocabularyProgressPayload<ExtArgs>
        fields: Prisma.UserVocabularyProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVocabularyProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVocabularyProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          findFirst: {
            args: Prisma.UserVocabularyProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVocabularyProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          findMany: {
            args: Prisma.UserVocabularyProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>[]
          }
          create: {
            args: Prisma.UserVocabularyProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          createMany: {
            args: Prisma.UserVocabularyProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserVocabularyProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          update: {
            args: Prisma.UserVocabularyProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserVocabularyProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVocabularyProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVocabularyProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVocabularyProgressPayload>
          }
          aggregate: {
            args: Prisma.UserVocabularyProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVocabularyProgress>
          }
          groupBy: {
            args: Prisma.UserVocabularyProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVocabularyProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserVocabularyProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserVocabularyProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserVocabularyProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserVocabularyProgressCountAggregateOutputType> | number
          }
        }
      }
      UserUniqueWord: {
        payload: Prisma.$UserUniqueWordPayload<ExtArgs>
        fields: Prisma.UserUniqueWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserUniqueWordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserUniqueWordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          findFirst: {
            args: Prisma.UserUniqueWordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserUniqueWordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          findMany: {
            args: Prisma.UserUniqueWordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>[]
          }
          create: {
            args: Prisma.UserUniqueWordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          createMany: {
            args: Prisma.UserUniqueWordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserUniqueWordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          update: {
            args: Prisma.UserUniqueWordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          deleteMany: {
            args: Prisma.UserUniqueWordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUniqueWordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUniqueWordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserUniqueWordPayload>
          }
          aggregate: {
            args: Prisma.UserUniqueWordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserUniqueWord>
          }
          groupBy: {
            args: Prisma.UserUniqueWordGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserUniqueWordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserUniqueWordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserUniqueWordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserUniqueWordCountArgs<ExtArgs>
            result: $Utils.Optional<UserUniqueWordCountAggregateOutputType> | number
          }
        }
      }
      XPEvent: {
        payload: Prisma.$XPEventPayload<ExtArgs>
        fields: Prisma.XPEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.XPEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.XPEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          findFirst: {
            args: Prisma.XPEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.XPEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          findMany: {
            args: Prisma.XPEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>[]
          }
          create: {
            args: Prisma.XPEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          createMany: {
            args: Prisma.XPEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.XPEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          update: {
            args: Prisma.XPEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          deleteMany: {
            args: Prisma.XPEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.XPEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.XPEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$XPEventPayload>
          }
          aggregate: {
            args: Prisma.XPEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateXPEvent>
          }
          groupBy: {
            args: Prisma.XPEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<XPEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.XPEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.XPEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.XPEventCountArgs<ExtArgs>
            result: $Utils.Optional<XPEventCountAggregateOutputType> | number
          }
        }
      }
      DailyActivity: {
        payload: Prisma.$DailyActivityPayload<ExtArgs>
        fields: Prisma.DailyActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          findFirst: {
            args: Prisma.DailyActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          findMany: {
            args: Prisma.DailyActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>[]
          }
          create: {
            args: Prisma.DailyActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          createMany: {
            args: Prisma.DailyActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          update: {
            args: Prisma.DailyActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          deleteMany: {
            args: Prisma.DailyActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyActivityPayload>
          }
          aggregate: {
            args: Prisma.DailyActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyActivity>
          }
          groupBy: {
            args: Prisma.DailyActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyActivityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DailyActivityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DailyActivityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DailyActivityCountArgs<ExtArgs>
            result: $Utils.Optional<DailyActivityCountAggregateOutputType> | number
          }
        }
      }
      DictionaryWord: {
        payload: Prisma.$DictionaryWordPayload<ExtArgs>
        fields: Prisma.DictionaryWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryWordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryWordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          findFirst: {
            args: Prisma.DictionaryWordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryWordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          findMany: {
            args: Prisma.DictionaryWordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>[]
          }
          create: {
            args: Prisma.DictionaryWordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          createMany: {
            args: Prisma.DictionaryWordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DictionaryWordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          update: {
            args: Prisma.DictionaryWordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryWordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryWordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DictionaryWordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryWordPayload>
          }
          aggregate: {
            args: Prisma.DictionaryWordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionaryWord>
          }
          groupBy: {
            args: Prisma.DictionaryWordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryWordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DictionaryWordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DictionaryWordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DictionaryWordCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryWordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    studySet?: StudySetOmit
    vocabulary?: VocabularyOmit
    category?: CategoryOmit
    verificationCode?: VerificationCodeOmit
    userLikesStudySet?: UserLikesStudySetOmit
    userVocabularyProgress?: UserVocabularyProgressOmit
    userUniqueWord?: UserUniqueWordOmit
    xPEvent?: XPEventOmit
    dailyActivity?: DailyActivityOmit
    dictionaryWord?: DictionaryWordOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    vocabularies: number
    studySets: number
    likedStudySets: number
    categories: number
    vocabularyProgress: number
    uniqueWordsLearned: number
    xpEvents: number
    dailyActivities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    vocabularies?: boolean | UserCountOutputTypeCountVocabulariesArgs
    studySets?: boolean | UserCountOutputTypeCountStudySetsArgs
    likedStudySets?: boolean | UserCountOutputTypeCountLikedStudySetsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    vocabularyProgress?: boolean | UserCountOutputTypeCountVocabularyProgressArgs
    uniqueWordsLearned?: boolean | UserCountOutputTypeCountUniqueWordsLearnedArgs
    xpEvents?: boolean | UserCountOutputTypeCountXpEventsArgs
    dailyActivities?: boolean | UserCountOutputTypeCountDailyActivitiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVocabulariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedStudySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesStudySetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVocabularyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVocabularyProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUniqueWordsLearnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserUniqueWordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountXpEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XPEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyActivityWhereInput
  }


  /**
   * Count Type StudySetCountOutputType
   */

  export type StudySetCountOutputType = {
    vocabularies: number
    likedBy: number
  }

  export type StudySetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabularies?: boolean | StudySetCountOutputTypeCountVocabulariesArgs
    likedBy?: boolean | StudySetCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * StudySetCountOutputType without action
   */
  export type StudySetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySetCountOutputType
     */
    select?: StudySetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudySetCountOutputType without action
   */
  export type StudySetCountOutputTypeCountVocabulariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }

  /**
   * StudySetCountOutputType without action
   */
  export type StudySetCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesStudySetWhereInput
  }


  /**
   * Count Type VocabularyCountOutputType
   */

  export type VocabularyCountOutputType = {
    vocabularyProgress: number
  }

  export type VocabularyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabularyProgress?: boolean | VocabularyCountOutputTypeCountVocabularyProgressArgs
  }

  // Custom InputTypes
  /**
   * VocabularyCountOutputType without action
   */
  export type VocabularyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyCountOutputType
     */
    select?: VocabularyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VocabularyCountOutputType without action
   */
  export type VocabularyCountOutputTypeCountVocabularyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVocabularyProgressWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    studySets: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studySets?: boolean | CategoryCountOutputTypeCountStudySetsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountStudySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySetWhereInput
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
    level: number | null
    xp: number | null
    streak: number | null
    totalWordsLearned: number | null
    dailyGoal: number | null
  }

  export type UserSumAggregateOutputType = {
    level: number | null
    xp: number | null
    streak: number | null
    totalWordsLearned: number | null
    dailyGoal: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    level: number | null
    xp: number | null
    streak: number | null
    lastLearningDate: Date | null
    totalWordsLearned: number | null
    dailyGoal: number | null
    difficultyPreference: string | null
    notificationsEnabled: boolean | null
    publicProfile: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatarUrl: string | null
    level: number | null
    xp: number | null
    streak: number | null
    lastLearningDate: Date | null
    totalWordsLearned: number | null
    dailyGoal: number | null
    difficultyPreference: string | null
    notificationsEnabled: boolean | null
    publicProfile: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatarUrl: number
    level: number
    xp: number
    streak: number
    lastLearningDate: number
    totalWordsLearned: number
    dailyGoal: number
    difficultyPreference: number
    notificationsEnabled: number
    publicProfile: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    level?: true
    xp?: true
    streak?: true
    totalWordsLearned?: true
    dailyGoal?: true
  }

  export type UserSumAggregateInputType = {
    level?: true
    xp?: true
    streak?: true
    totalWordsLearned?: true
    dailyGoal?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    level?: true
    xp?: true
    streak?: true
    lastLearningDate?: true
    totalWordsLearned?: true
    dailyGoal?: true
    difficultyPreference?: true
    notificationsEnabled?: true
    publicProfile?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    level?: true
    xp?: true
    streak?: true
    lastLearningDate?: true
    totalWordsLearned?: true
    dailyGoal?: true
    difficultyPreference?: true
    notificationsEnabled?: true
    publicProfile?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatarUrl?: true
    level?: true
    xp?: true
    streak?: true
    lastLearningDate?: true
    totalWordsLearned?: true
    dailyGoal?: true
    difficultyPreference?: true
    notificationsEnabled?: true
    publicProfile?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
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
    id: string
    name: string
    email: string
    password: string
    avatarUrl: string | null
    level: number
    xp: number
    streak: number
    lastLearningDate: Date | null
    totalWordsLearned: number
    dailyGoal: number
    difficultyPreference: string
    notificationsEnabled: boolean
    publicProfile: boolean
    createdAt: Date
    updatedAt: Date
    status: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    level?: boolean
    xp?: boolean
    streak?: boolean
    lastLearningDate?: boolean
    totalWordsLearned?: boolean
    dailyGoal?: boolean
    difficultyPreference?: boolean
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    vocabularies?: boolean | User$vocabulariesArgs<ExtArgs>
    studySets?: boolean | User$studySetsArgs<ExtArgs>
    likedStudySets?: boolean | User$likedStudySetsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    vocabularyProgress?: boolean | User$vocabularyProgressArgs<ExtArgs>
    uniqueWordsLearned?: boolean | User$uniqueWordsLearnedArgs<ExtArgs>
    xpEvents?: boolean | User$xpEventsArgs<ExtArgs>
    dailyActivities?: boolean | User$dailyActivitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatarUrl?: boolean
    level?: boolean
    xp?: boolean
    streak?: boolean
    lastLearningDate?: boolean
    totalWordsLearned?: boolean
    dailyGoal?: boolean
    difficultyPreference?: boolean
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatarUrl" | "level" | "xp" | "streak" | "lastLearningDate" | "totalWordsLearned" | "dailyGoal" | "difficultyPreference" | "notificationsEnabled" | "publicProfile" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    vocabularies?: boolean | User$vocabulariesArgs<ExtArgs>
    studySets?: boolean | User$studySetsArgs<ExtArgs>
    likedStudySets?: boolean | User$likedStudySetsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    vocabularyProgress?: boolean | User$vocabularyProgressArgs<ExtArgs>
    uniqueWordsLearned?: boolean | User$uniqueWordsLearnedArgs<ExtArgs>
    xpEvents?: boolean | User$xpEventsArgs<ExtArgs>
    dailyActivities?: boolean | User$dailyActivitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      vocabularies: Prisma.$VocabularyPayload<ExtArgs>[]
      studySets: Prisma.$StudySetPayload<ExtArgs>[]
      likedStudySets: Prisma.$UserLikesStudySetPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      vocabularyProgress: Prisma.$UserVocabularyProgressPayload<ExtArgs>[]
      uniqueWordsLearned: Prisma.$UserUniqueWordPayload<ExtArgs>[]
      xpEvents: Prisma.$XPEventPayload<ExtArgs>[]
      dailyActivities: Prisma.$DailyActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      avatarUrl: string | null
      level: number
      xp: number
      streak: number
      lastLearningDate: Date | null
      totalWordsLearned: number
      dailyGoal: number
      difficultyPreference: string
      notificationsEnabled: boolean
      publicProfile: boolean
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vocabularies<T extends User$vocabulariesArgs<ExtArgs> = {}>(args?: Subset<T, User$vocabulariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studySets<T extends User$studySetsArgs<ExtArgs> = {}>(args?: Subset<T, User$studySetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedStudySets<T extends User$likedStudySetsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedStudySetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vocabularyProgress<T extends User$vocabularyProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$vocabularyProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uniqueWordsLearned<T extends User$uniqueWordsLearnedArgs<ExtArgs> = {}>(args?: Subset<T, User$uniqueWordsLearnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    xpEvents<T extends User$xpEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$xpEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyActivities<T extends User$dailyActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly lastLearningDate: FieldRef<"User", 'DateTime'>
    readonly totalWordsLearned: FieldRef<"User", 'Int'>
    readonly dailyGoal: FieldRef<"User", 'Int'>
    readonly difficultyPreference: FieldRef<"User", 'String'>
    readonly notificationsEnabled: FieldRef<"User", 'Boolean'>
    readonly publicProfile: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.vocabularies
   */
  export type User$vocabulariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * User.studySets
   */
  export type User$studySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    where?: StudySetWhereInput
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    cursor?: StudySetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudySetScalarFieldEnum | StudySetScalarFieldEnum[]
  }

  /**
   * User.likedStudySets
   */
  export type User$likedStudySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    where?: UserLikesStudySetWhereInput
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    cursor?: UserLikesStudySetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikesStudySetScalarFieldEnum | UserLikesStudySetScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.vocabularyProgress
   */
  export type User$vocabularyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    where?: UserVocabularyProgressWhereInput
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    cursor?: UserVocabularyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVocabularyProgressScalarFieldEnum | UserVocabularyProgressScalarFieldEnum[]
  }

  /**
   * User.uniqueWordsLearned
   */
  export type User$uniqueWordsLearnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    where?: UserUniqueWordWhereInput
    orderBy?: UserUniqueWordOrderByWithRelationInput | UserUniqueWordOrderByWithRelationInput[]
    cursor?: UserUniqueWordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserUniqueWordScalarFieldEnum | UserUniqueWordScalarFieldEnum[]
  }

  /**
   * User.xpEvents
   */
  export type User$xpEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    where?: XPEventWhereInput
    orderBy?: XPEventOrderByWithRelationInput | XPEventOrderByWithRelationInput[]
    cursor?: XPEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: XPEventScalarFieldEnum | XPEventScalarFieldEnum[]
  }

  /**
   * User.dailyActivities
   */
  export type User$dailyActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    where?: DailyActivityWhereInput
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    cursor?: DailyActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * @param {RefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RefreshToken.
     * @param {RefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken findRaw
   */
  export type RefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken aggregateRaw
   */
  export type RefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model StudySet
   */

  export type AggregateStudySet = {
    _count: StudySetCountAggregateOutputType | null
    _avg: StudySetAvgAggregateOutputType | null
    _sum: StudySetSumAggregateOutputType | null
    _min: StudySetMinAggregateOutputType | null
    _max: StudySetMaxAggregateOutputType | null
  }

  export type StudySetAvgAggregateOutputType = {
    likesCount: number | null
  }

  export type StudySetSumAggregateOutputType = {
    likesCount: number | null
  }

  export type StudySetMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.Level | null
    isPublic: boolean | null
    likesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    categoryId: string | null
  }

  export type StudySetMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: $Enums.Level | null
    isPublic: boolean | null
    likesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    categoryId: string | null
  }

  export type StudySetCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    tags: number
    isPublic: number
    likesCount: number
    createdAt: number
    updatedAt: number
    authorId: number
    categoryId: number
    _all: number
  }


  export type StudySetAvgAggregateInputType = {
    likesCount?: true
  }

  export type StudySetSumAggregateInputType = {
    likesCount?: true
  }

  export type StudySetMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    isPublic?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    categoryId?: true
  }

  export type StudySetMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    isPublic?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    categoryId?: true
  }

  export type StudySetCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    tags?: true
    isPublic?: true
    likesCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    categoryId?: true
    _all?: true
  }

  export type StudySetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySet to aggregate.
     */
    where?: StudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySets to fetch.
     */
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudySets
    **/
    _count?: true | StudySetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudySetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudySetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudySetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudySetMaxAggregateInputType
  }

  export type GetStudySetAggregateType<T extends StudySetAggregateArgs> = {
        [P in keyof T & keyof AggregateStudySet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudySet[P]>
      : GetScalarType<T[P], AggregateStudySet[P]>
  }




  export type StudySetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudySetWhereInput
    orderBy?: StudySetOrderByWithAggregationInput | StudySetOrderByWithAggregationInput[]
    by: StudySetScalarFieldEnum[] | StudySetScalarFieldEnum
    having?: StudySetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudySetCountAggregateInputType | true
    _avg?: StudySetAvgAggregateInputType
    _sum?: StudySetSumAggregateInputType
    _min?: StudySetMinAggregateInputType
    _max?: StudySetMaxAggregateInputType
  }

  export type StudySetGroupByOutputType = {
    id: string
    title: string
    description: string | null
    level: $Enums.Level
    tags: string[]
    isPublic: boolean
    likesCount: number
    createdAt: Date
    updatedAt: Date
    authorId: string
    categoryId: string
    _count: StudySetCountAggregateOutputType | null
    _avg: StudySetAvgAggregateOutputType | null
    _sum: StudySetSumAggregateOutputType | null
    _min: StudySetMinAggregateOutputType | null
    _max: StudySetMaxAggregateOutputType | null
  }

  type GetStudySetGroupByPayload<T extends StudySetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudySetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudySetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudySetGroupByOutputType[P]>
            : GetScalarType<T[P], StudySetGroupByOutputType[P]>
        }
      >
    >


  export type StudySetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    tags?: boolean
    isPublic?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    categoryId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vocabularies?: boolean | StudySet$vocabulariesArgs<ExtArgs>
    likedBy?: boolean | StudySet$likedByArgs<ExtArgs>
    _count?: boolean | StudySetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studySet"]>



  export type StudySetSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    tags?: boolean
    isPublic?: boolean
    likesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    categoryId?: boolean
  }

  export type StudySetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "tags" | "isPublic" | "likesCount" | "createdAt" | "updatedAt" | "authorId" | "categoryId", ExtArgs["result"]["studySet"]>
  export type StudySetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vocabularies?: boolean | StudySet$vocabulariesArgs<ExtArgs>
    likedBy?: boolean | StudySet$likedByArgs<ExtArgs>
    _count?: boolean | StudySetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudySetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudySet"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      vocabularies: Prisma.$VocabularyPayload<ExtArgs>[]
      likedBy: Prisma.$UserLikesStudySetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      level: $Enums.Level
      tags: string[]
      isPublic: boolean
      likesCount: number
      createdAt: Date
      updatedAt: Date
      authorId: string
      categoryId: string
    }, ExtArgs["result"]["studySet"]>
    composites: {}
  }

  type StudySetGetPayload<S extends boolean | null | undefined | StudySetDefaultArgs> = $Result.GetResult<Prisma.$StudySetPayload, S>

  type StudySetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudySetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudySetCountAggregateInputType | true
    }

  export interface StudySetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudySet'], meta: { name: 'StudySet' } }
    /**
     * Find zero or one StudySet that matches the filter.
     * @param {StudySetFindUniqueArgs} args - Arguments to find a StudySet
     * @example
     * // Get one StudySet
     * const studySet = await prisma.studySet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudySetFindUniqueArgs>(args: SelectSubset<T, StudySetFindUniqueArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudySet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudySetFindUniqueOrThrowArgs} args - Arguments to find a StudySet
     * @example
     * // Get one StudySet
     * const studySet = await prisma.studySet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudySetFindUniqueOrThrowArgs>(args: SelectSubset<T, StudySetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetFindFirstArgs} args - Arguments to find a StudySet
     * @example
     * // Get one StudySet
     * const studySet = await prisma.studySet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudySetFindFirstArgs>(args?: SelectSubset<T, StudySetFindFirstArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudySet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetFindFirstOrThrowArgs} args - Arguments to find a StudySet
     * @example
     * // Get one StudySet
     * const studySet = await prisma.studySet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudySetFindFirstOrThrowArgs>(args?: SelectSubset<T, StudySetFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudySets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudySets
     * const studySets = await prisma.studySet.findMany()
     * 
     * // Get first 10 StudySets
     * const studySets = await prisma.studySet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studySetWithIdOnly = await prisma.studySet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudySetFindManyArgs>(args?: SelectSubset<T, StudySetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudySet.
     * @param {StudySetCreateArgs} args - Arguments to create a StudySet.
     * @example
     * // Create one StudySet
     * const StudySet = await prisma.studySet.create({
     *   data: {
     *     // ... data to create a StudySet
     *   }
     * })
     * 
     */
    create<T extends StudySetCreateArgs>(args: SelectSubset<T, StudySetCreateArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudySets.
     * @param {StudySetCreateManyArgs} args - Arguments to create many StudySets.
     * @example
     * // Create many StudySets
     * const studySet = await prisma.studySet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudySetCreateManyArgs>(args?: SelectSubset<T, StudySetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudySet.
     * @param {StudySetDeleteArgs} args - Arguments to delete one StudySet.
     * @example
     * // Delete one StudySet
     * const StudySet = await prisma.studySet.delete({
     *   where: {
     *     // ... filter to delete one StudySet
     *   }
     * })
     * 
     */
    delete<T extends StudySetDeleteArgs>(args: SelectSubset<T, StudySetDeleteArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudySet.
     * @param {StudySetUpdateArgs} args - Arguments to update one StudySet.
     * @example
     * // Update one StudySet
     * const studySet = await prisma.studySet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudySetUpdateArgs>(args: SelectSubset<T, StudySetUpdateArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudySets.
     * @param {StudySetDeleteManyArgs} args - Arguments to filter StudySets to delete.
     * @example
     * // Delete a few StudySets
     * const { count } = await prisma.studySet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudySetDeleteManyArgs>(args?: SelectSubset<T, StudySetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudySets
     * const studySet = await prisma.studySet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudySetUpdateManyArgs>(args: SelectSubset<T, StudySetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudySet.
     * @param {StudySetUpsertArgs} args - Arguments to update or create a StudySet.
     * @example
     * // Update or create a StudySet
     * const studySet = await prisma.studySet.upsert({
     *   create: {
     *     // ... data to create a StudySet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudySet we want to update
     *   }
     * })
     */
    upsert<T extends StudySetUpsertArgs>(args: SelectSubset<T, StudySetUpsertArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudySets that matches the filter.
     * @param {StudySetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const studySet = await prisma.studySet.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudySetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StudySet.
     * @param {StudySetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const studySet = await prisma.studySet.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudySetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StudySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetCountArgs} args - Arguments to filter StudySets to count.
     * @example
     * // Count the number of StudySets
     * const count = await prisma.studySet.count({
     *   where: {
     *     // ... the filter for the StudySets we want to count
     *   }
     * })
    **/
    count<T extends StudySetCountArgs>(
      args?: Subset<T, StudySetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudySetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudySetAggregateArgs>(args: Subset<T, StudySetAggregateArgs>): Prisma.PrismaPromise<GetStudySetAggregateType<T>>

    /**
     * Group by StudySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudySetGroupByArgs} args - Group by arguments.
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
      T extends StudySetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudySetGroupByArgs['orderBy'] }
        : { orderBy?: StudySetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudySetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudySetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudySet model
   */
  readonly fields: StudySetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudySet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudySetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vocabularies<T extends StudySet$vocabulariesArgs<ExtArgs> = {}>(args?: Subset<T, StudySet$vocabulariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedBy<T extends StudySet$likedByArgs<ExtArgs> = {}>(args?: Subset<T, StudySet$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudySet model
   */
  interface StudySetFieldRefs {
    readonly id: FieldRef<"StudySet", 'String'>
    readonly title: FieldRef<"StudySet", 'String'>
    readonly description: FieldRef<"StudySet", 'String'>
    readonly level: FieldRef<"StudySet", 'Level'>
    readonly tags: FieldRef<"StudySet", 'String[]'>
    readonly isPublic: FieldRef<"StudySet", 'Boolean'>
    readonly likesCount: FieldRef<"StudySet", 'Int'>
    readonly createdAt: FieldRef<"StudySet", 'DateTime'>
    readonly updatedAt: FieldRef<"StudySet", 'DateTime'>
    readonly authorId: FieldRef<"StudySet", 'String'>
    readonly categoryId: FieldRef<"StudySet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudySet findUnique
   */
  export type StudySetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter, which StudySet to fetch.
     */
    where: StudySetWhereUniqueInput
  }

  /**
   * StudySet findUniqueOrThrow
   */
  export type StudySetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter, which StudySet to fetch.
     */
    where: StudySetWhereUniqueInput
  }

  /**
   * StudySet findFirst
   */
  export type StudySetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter, which StudySet to fetch.
     */
    where?: StudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySets to fetch.
     */
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySets.
     */
    cursor?: StudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySets.
     */
    distinct?: StudySetScalarFieldEnum | StudySetScalarFieldEnum[]
  }

  /**
   * StudySet findFirstOrThrow
   */
  export type StudySetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter, which StudySet to fetch.
     */
    where?: StudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySets to fetch.
     */
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudySets.
     */
    cursor?: StudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudySets.
     */
    distinct?: StudySetScalarFieldEnum | StudySetScalarFieldEnum[]
  }

  /**
   * StudySet findMany
   */
  export type StudySetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter, which StudySets to fetch.
     */
    where?: StudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudySets to fetch.
     */
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudySets.
     */
    cursor?: StudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudySets.
     */
    skip?: number
    distinct?: StudySetScalarFieldEnum | StudySetScalarFieldEnum[]
  }

  /**
   * StudySet create
   */
  export type StudySetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * The data needed to create a StudySet.
     */
    data: XOR<StudySetCreateInput, StudySetUncheckedCreateInput>
  }

  /**
   * StudySet createMany
   */
  export type StudySetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudySets.
     */
    data: StudySetCreateManyInput | StudySetCreateManyInput[]
  }

  /**
   * StudySet update
   */
  export type StudySetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * The data needed to update a StudySet.
     */
    data: XOR<StudySetUpdateInput, StudySetUncheckedUpdateInput>
    /**
     * Choose, which StudySet to update.
     */
    where: StudySetWhereUniqueInput
  }

  /**
   * StudySet updateMany
   */
  export type StudySetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudySets.
     */
    data: XOR<StudySetUpdateManyMutationInput, StudySetUncheckedUpdateManyInput>
    /**
     * Filter which StudySets to update
     */
    where?: StudySetWhereInput
    /**
     * Limit how many StudySets to update.
     */
    limit?: number
  }

  /**
   * StudySet upsert
   */
  export type StudySetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * The filter to search for the StudySet to update in case it exists.
     */
    where: StudySetWhereUniqueInput
    /**
     * In case the StudySet found by the `where` argument doesn't exist, create a new StudySet with this data.
     */
    create: XOR<StudySetCreateInput, StudySetUncheckedCreateInput>
    /**
     * In case the StudySet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudySetUpdateInput, StudySetUncheckedUpdateInput>
  }

  /**
   * StudySet delete
   */
  export type StudySetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    /**
     * Filter which StudySet to delete.
     */
    where: StudySetWhereUniqueInput
  }

  /**
   * StudySet deleteMany
   */
  export type StudySetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudySets to delete
     */
    where?: StudySetWhereInput
    /**
     * Limit how many StudySets to delete.
     */
    limit?: number
  }

  /**
   * StudySet findRaw
   */
  export type StudySetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudySet aggregateRaw
   */
  export type StudySetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudySet.vocabularies
   */
  export type StudySet$vocabulariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * StudySet.likedBy
   */
  export type StudySet$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    where?: UserLikesStudySetWhereInput
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    cursor?: UserLikesStudySetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikesStudySetScalarFieldEnum | UserLikesStudySetScalarFieldEnum[]
  }

  /**
   * StudySet without action
   */
  export type StudySetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
  }


  /**
   * Model Vocabulary
   */

  export type AggregateVocabulary = {
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  export type VocabularyMinAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    meaning: string | null
    definition: string | null
    example: string | null
    imageUrl: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    createdAt: Date | null
    updatedAt: Date | null
    studySetId: string | null
    createdById: string | null
  }

  export type VocabularyMaxAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    meaning: string | null
    definition: string | null
    example: string | null
    imageUrl: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    createdAt: Date | null
    updatedAt: Date | null
    studySetId: string | null
    createdById: string | null
  }

  export type VocabularyCountAggregateOutputType = {
    id: number
    word: number
    pronunciation: number
    meaning: number
    definition: number
    example: number
    imageUrl: number
    audioUrl: number
    cefrLevel: number
    partOfSpeech: number
    alternativePartOfSpeech: number
    createdAt: number
    updatedAt: number
    studySetId: number
    createdById: number
    _all: number
  }


  export type VocabularyMinAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    imageUrl?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    studySetId?: true
    createdById?: true
  }

  export type VocabularyMaxAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    imageUrl?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    studySetId?: true
    createdById?: true
  }

  export type VocabularyCountAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    imageUrl?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    alternativePartOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    studySetId?: true
    createdById?: true
    _all?: true
  }

  export type VocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabulary to aggregate.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vocabularies
    **/
    _count?: true | VocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMaxAggregateInputType
  }

  export type GetVocabularyAggregateType<T extends VocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabulary[P]>
      : GetScalarType<T[P], AggregateVocabulary[P]>
  }




  export type VocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithAggregationInput | VocabularyOrderByWithAggregationInput[]
    by: VocabularyScalarFieldEnum[] | VocabularyScalarFieldEnum
    having?: VocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyCountAggregateInputType | true
    _min?: VocabularyMinAggregateInputType
    _max?: VocabularyMaxAggregateInputType
  }

  export type VocabularyGroupByOutputType = {
    id: string
    word: string
    pronunciation: string | null
    meaning: string
    definition: string | null
    example: string | null
    imageUrl: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech
    alternativePartOfSpeech: $Enums.PartOfSpeech[]
    createdAt: Date
    updatedAt: Date
    studySetId: string
    createdById: string
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  type GetVocabularyGroupByPayload<T extends VocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
        }
      >
    >


  export type VocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    meaning?: boolean
    definition?: boolean
    example?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    cefrLevel?: boolean
    partOfSpeech?: boolean
    alternativePartOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studySetId?: boolean
    createdById?: boolean
    studySet?: boolean | StudySetDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    vocabularyProgress?: boolean | Vocabulary$vocabularyProgressArgs<ExtArgs>
    _count?: boolean | VocabularyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>



  export type VocabularySelectScalar = {
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    meaning?: boolean
    definition?: boolean
    example?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    cefrLevel?: boolean
    partOfSpeech?: boolean
    alternativePartOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studySetId?: boolean
    createdById?: boolean
  }

  export type VocabularyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "pronunciation" | "meaning" | "definition" | "example" | "imageUrl" | "audioUrl" | "cefrLevel" | "partOfSpeech" | "alternativePartOfSpeech" | "createdAt" | "updatedAt" | "studySetId" | "createdById", ExtArgs["result"]["vocabulary"]>
  export type VocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studySet?: boolean | StudySetDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    vocabularyProgress?: boolean | Vocabulary$vocabularyProgressArgs<ExtArgs>
    _count?: boolean | VocabularyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vocabulary"
    objects: {
      studySet: Prisma.$StudySetPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      vocabularyProgress: Prisma.$UserVocabularyProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      pronunciation: string | null
      meaning: string
      definition: string | null
      example: string | null
      imageUrl: string | null
      audioUrl: string | null
      cefrLevel: string | null
      partOfSpeech: $Enums.PartOfSpeech
      alternativePartOfSpeech: $Enums.PartOfSpeech[]
      createdAt: Date
      updatedAt: Date
      studySetId: string
      createdById: string
    }, ExtArgs["result"]["vocabulary"]>
    composites: {}
  }

  type VocabularyGetPayload<S extends boolean | null | undefined | VocabularyDefaultArgs> = $Result.GetResult<Prisma.$VocabularyPayload, S>

  type VocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VocabularyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VocabularyCountAggregateInputType | true
    }

  export interface VocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vocabulary'], meta: { name: 'Vocabulary' } }
    /**
     * Find zero or one Vocabulary that matches the filter.
     * @param {VocabularyFindUniqueArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VocabularyFindUniqueArgs>(args: SelectSubset<T, VocabularyFindUniqueArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocabulary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VocabularyFindUniqueOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VocabularyFindUniqueOrThrowArgs>(args: SelectSubset<T, VocabularyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VocabularyFindFirstArgs>(args?: SelectSubset<T, VocabularyFindFirstArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VocabularyFindFirstOrThrowArgs>(args?: SelectSubset<T, VocabularyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany()
     * 
     * // Get first 10 Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VocabularyFindManyArgs>(args?: SelectSubset<T, VocabularyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocabulary.
     * @param {VocabularyCreateArgs} args - Arguments to create a Vocabulary.
     * @example
     * // Create one Vocabulary
     * const Vocabulary = await prisma.vocabulary.create({
     *   data: {
     *     // ... data to create a Vocabulary
     *   }
     * })
     * 
     */
    create<T extends VocabularyCreateArgs>(args: SelectSubset<T, VocabularyCreateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocabularies.
     * @param {VocabularyCreateManyArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VocabularyCreateManyArgs>(args?: SelectSubset<T, VocabularyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocabulary.
     * @param {VocabularyDeleteArgs} args - Arguments to delete one Vocabulary.
     * @example
     * // Delete one Vocabulary
     * const Vocabulary = await prisma.vocabulary.delete({
     *   where: {
     *     // ... filter to delete one Vocabulary
     *   }
     * })
     * 
     */
    delete<T extends VocabularyDeleteArgs>(args: SelectSubset<T, VocabularyDeleteArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocabulary.
     * @param {VocabularyUpdateArgs} args - Arguments to update one Vocabulary.
     * @example
     * // Update one Vocabulary
     * const vocabulary = await prisma.vocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VocabularyUpdateArgs>(args: SelectSubset<T, VocabularyUpdateArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocabularies.
     * @param {VocabularyDeleteManyArgs} args - Arguments to filter Vocabularies to delete.
     * @example
     * // Delete a few Vocabularies
     * const { count } = await prisma.vocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VocabularyDeleteManyArgs>(args?: SelectSubset<T, VocabularyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VocabularyUpdateManyArgs>(args: SelectSubset<T, VocabularyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocabulary.
     * @param {VocabularyUpsertArgs} args - Arguments to update or create a Vocabulary.
     * @example
     * // Update or create a Vocabulary
     * const vocabulary = await prisma.vocabulary.upsert({
     *   create: {
     *     // ... data to create a Vocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocabulary we want to update
     *   }
     * })
     */
    upsert<T extends VocabularyUpsertArgs>(args: SelectSubset<T, VocabularyUpsertArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * @param {VocabularyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vocabulary = await prisma.vocabulary.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VocabularyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vocabulary.
     * @param {VocabularyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vocabulary = await prisma.vocabulary.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VocabularyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyCountArgs} args - Arguments to filter Vocabularies to count.
     * @example
     * // Count the number of Vocabularies
     * const count = await prisma.vocabulary.count({
     *   where: {
     *     // ... the filter for the Vocabularies we want to count
     *   }
     * })
    **/
    count<T extends VocabularyCountArgs>(
      args?: Subset<T, VocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VocabularyAggregateArgs>(args: Subset<T, VocabularyAggregateArgs>): Prisma.PrismaPromise<GetVocabularyAggregateType<T>>

    /**
     * Group by Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyGroupByArgs} args - Group by arguments.
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
      T extends VocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vocabulary model
   */
  readonly fields: VocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studySet<T extends StudySetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudySetDefaultArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vocabularyProgress<T extends Vocabulary$vocabularyProgressArgs<ExtArgs> = {}>(args?: Subset<T, Vocabulary$vocabularyProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vocabulary model
   */
  interface VocabularyFieldRefs {
    readonly id: FieldRef<"Vocabulary", 'String'>
    readonly word: FieldRef<"Vocabulary", 'String'>
    readonly pronunciation: FieldRef<"Vocabulary", 'String'>
    readonly meaning: FieldRef<"Vocabulary", 'String'>
    readonly definition: FieldRef<"Vocabulary", 'String'>
    readonly example: FieldRef<"Vocabulary", 'String'>
    readonly imageUrl: FieldRef<"Vocabulary", 'String'>
    readonly audioUrl: FieldRef<"Vocabulary", 'String'>
    readonly cefrLevel: FieldRef<"Vocabulary", 'String'>
    readonly partOfSpeech: FieldRef<"Vocabulary", 'PartOfSpeech'>
    readonly alternativePartOfSpeech: FieldRef<"Vocabulary", 'PartOfSpeech[]'>
    readonly createdAt: FieldRef<"Vocabulary", 'DateTime'>
    readonly updatedAt: FieldRef<"Vocabulary", 'DateTime'>
    readonly studySetId: FieldRef<"Vocabulary", 'String'>
    readonly createdById: FieldRef<"Vocabulary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vocabulary findUnique
   */
  export type VocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findUniqueOrThrow
   */
  export type VocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findFirst
   */
  export type VocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findFirstOrThrow
   */
  export type VocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findMany
   */
  export type VocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabularies to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary create
   */
  export type VocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a Vocabulary.
     */
    data: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
  }

  /**
   * Vocabulary createMany
   */
  export type VocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
  }

  /**
   * Vocabulary update
   */
  export type VocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a Vocabulary.
     */
    data: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
    /**
     * Choose, which Vocabulary to update.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary updateMany
   */
  export type VocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vocabularies.
     */
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyInput>
    /**
     * Filter which Vocabularies to update
     */
    where?: VocabularyWhereInput
    /**
     * Limit how many Vocabularies to update.
     */
    limit?: number
  }

  /**
   * Vocabulary upsert
   */
  export type VocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the Vocabulary to update in case it exists.
     */
    where: VocabularyWhereUniqueInput
    /**
     * In case the Vocabulary found by the `where` argument doesn't exist, create a new Vocabulary with this data.
     */
    create: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
    /**
     * In case the Vocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
  }

  /**
   * Vocabulary delete
   */
  export type VocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter which Vocabulary to delete.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary deleteMany
   */
  export type VocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabularies to delete
     */
    where?: VocabularyWhereInput
    /**
     * Limit how many Vocabularies to delete.
     */
    limit?: number
  }

  /**
   * Vocabulary findRaw
   */
  export type VocabularyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vocabulary aggregateRaw
   */
  export type VocabularyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vocabulary.vocabularyProgress
   */
  export type Vocabulary$vocabularyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    where?: UserVocabularyProgressWhereInput
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    cursor?: UserVocabularyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVocabularyProgressScalarFieldEnum | UserVocabularyProgressScalarFieldEnum[]
  }

  /**
   * Vocabulary without action
   */
  export type VocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vocabulary
     */
    omit?: VocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    icon: number
    color: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    imageUrl: string | null
    icon: string
    color: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    studySets?: boolean | Category$studySetsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "icon" | "color" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studySets?: boolean | Category$studySetsArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      studySets: Prisma.$StudySetPayload<ExtArgs>[]
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      imageUrl: string | null
      icon: string
      color: string
      createdAt: Date
      updatedAt: Date
      authorId: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studySets<T extends Category$studySetsArgs<ExtArgs> = {}>(args?: Subset<T, Category$studySetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly imageUrl: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly authorId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.studySets
   */
  export type Category$studySetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudySet
     */
    select?: StudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudySet
     */
    omit?: StudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudySetInclude<ExtArgs> | null
    where?: StudySetWhereInput
    orderBy?: StudySetOrderByWithRelationInput | StudySetOrderByWithRelationInput[]
    cursor?: StudySetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudySetScalarFieldEnum | StudySetScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    type: $Enums.VerificationType | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    type: $Enums.VerificationType | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    email: number
    code: number
    type: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type VerificationCodeMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    email: string
    code: string
    type: $Enums.VerificationType
    expiresAt: Date
    createdAt: Date
    _count: VerificationCodeCountAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["verificationCode"]>



  export type VerificationCodeSelectScalar = {
    id?: boolean
    email?: boolean
    code?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "code" | "type" | "expiresAt" | "createdAt", ExtArgs["result"]["verificationCode"]>

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      code: string
      type: $Enums.VerificationType
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * @param {VerificationCodeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verificationCode = await prisma.verificationCode.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationCodeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VerificationCode.
     * @param {VerificationCodeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verificationCode = await prisma.verificationCode.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationCodeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly email: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly type: FieldRef<"VerificationCode", 'VerificationType'>
    readonly expiresAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode findRaw
   */
  export type VerificationCodeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationCode aggregateRaw
   */
  export type VerificationCodeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
  }


  /**
   * Model UserLikesStudySet
   */

  export type AggregateUserLikesStudySet = {
    _count: UserLikesStudySetCountAggregateOutputType | null
    _min: UserLikesStudySetMinAggregateOutputType | null
    _max: UserLikesStudySetMaxAggregateOutputType | null
  }

  export type UserLikesStudySetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    studySetId: string | null
    createdAt: Date | null
  }

  export type UserLikesStudySetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    studySetId: string | null
    createdAt: Date | null
  }

  export type UserLikesStudySetCountAggregateOutputType = {
    id: number
    userId: number
    studySetId: number
    createdAt: number
    _all: number
  }


  export type UserLikesStudySetMinAggregateInputType = {
    id?: true
    userId?: true
    studySetId?: true
    createdAt?: true
  }

  export type UserLikesStudySetMaxAggregateInputType = {
    id?: true
    userId?: true
    studySetId?: true
    createdAt?: true
  }

  export type UserLikesStudySetCountAggregateInputType = {
    id?: true
    userId?: true
    studySetId?: true
    createdAt?: true
    _all?: true
  }

  export type UserLikesStudySetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikesStudySet to aggregate.
     */
    where?: UserLikesStudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikesStudySets to fetch.
     */
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLikesStudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikesStudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikesStudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLikesStudySets
    **/
    _count?: true | UserLikesStudySetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLikesStudySetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLikesStudySetMaxAggregateInputType
  }

  export type GetUserLikesStudySetAggregateType<T extends UserLikesStudySetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLikesStudySet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLikesStudySet[P]>
      : GetScalarType<T[P], AggregateUserLikesStudySet[P]>
  }




  export type UserLikesStudySetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikesStudySetWhereInput
    orderBy?: UserLikesStudySetOrderByWithAggregationInput | UserLikesStudySetOrderByWithAggregationInput[]
    by: UserLikesStudySetScalarFieldEnum[] | UserLikesStudySetScalarFieldEnum
    having?: UserLikesStudySetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLikesStudySetCountAggregateInputType | true
    _min?: UserLikesStudySetMinAggregateInputType
    _max?: UserLikesStudySetMaxAggregateInputType
  }

  export type UserLikesStudySetGroupByOutputType = {
    id: string
    userId: string
    studySetId: string
    createdAt: Date
    _count: UserLikesStudySetCountAggregateOutputType | null
    _min: UserLikesStudySetMinAggregateOutputType | null
    _max: UserLikesStudySetMaxAggregateOutputType | null
  }

  type GetUserLikesStudySetGroupByPayload<T extends UserLikesStudySetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLikesStudySetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLikesStudySetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLikesStudySetGroupByOutputType[P]>
            : GetScalarType<T[P], UserLikesStudySetGroupByOutputType[P]>
        }
      >
    >


  export type UserLikesStudySetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    studySetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studySet?: boolean | StudySetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLikesStudySet"]>



  export type UserLikesStudySetSelectScalar = {
    id?: boolean
    userId?: boolean
    studySetId?: boolean
    createdAt?: boolean
  }

  export type UserLikesStudySetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "studySetId" | "createdAt", ExtArgs["result"]["userLikesStudySet"]>
  export type UserLikesStudySetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studySet?: boolean | StudySetDefaultArgs<ExtArgs>
  }

  export type $UserLikesStudySetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLikesStudySet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studySet: Prisma.$StudySetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      studySetId: string
      createdAt: Date
    }, ExtArgs["result"]["userLikesStudySet"]>
    composites: {}
  }

  type UserLikesStudySetGetPayload<S extends boolean | null | undefined | UserLikesStudySetDefaultArgs> = $Result.GetResult<Prisma.$UserLikesStudySetPayload, S>

  type UserLikesStudySetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLikesStudySetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLikesStudySetCountAggregateInputType | true
    }

  export interface UserLikesStudySetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLikesStudySet'], meta: { name: 'UserLikesStudySet' } }
    /**
     * Find zero or one UserLikesStudySet that matches the filter.
     * @param {UserLikesStudySetFindUniqueArgs} args - Arguments to find a UserLikesStudySet
     * @example
     * // Get one UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLikesStudySetFindUniqueArgs>(args: SelectSubset<T, UserLikesStudySetFindUniqueArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLikesStudySet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLikesStudySetFindUniqueOrThrowArgs} args - Arguments to find a UserLikesStudySet
     * @example
     * // Get one UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLikesStudySetFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLikesStudySetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLikesStudySet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetFindFirstArgs} args - Arguments to find a UserLikesStudySet
     * @example
     * // Get one UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLikesStudySetFindFirstArgs>(args?: SelectSubset<T, UserLikesStudySetFindFirstArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLikesStudySet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetFindFirstOrThrowArgs} args - Arguments to find a UserLikesStudySet
     * @example
     * // Get one UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLikesStudySetFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLikesStudySetFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLikesStudySets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLikesStudySets
     * const userLikesStudySets = await prisma.userLikesStudySet.findMany()
     * 
     * // Get first 10 UserLikesStudySets
     * const userLikesStudySets = await prisma.userLikesStudySet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLikesStudySetWithIdOnly = await prisma.userLikesStudySet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLikesStudySetFindManyArgs>(args?: SelectSubset<T, UserLikesStudySetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLikesStudySet.
     * @param {UserLikesStudySetCreateArgs} args - Arguments to create a UserLikesStudySet.
     * @example
     * // Create one UserLikesStudySet
     * const UserLikesStudySet = await prisma.userLikesStudySet.create({
     *   data: {
     *     // ... data to create a UserLikesStudySet
     *   }
     * })
     * 
     */
    create<T extends UserLikesStudySetCreateArgs>(args: SelectSubset<T, UserLikesStudySetCreateArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLikesStudySets.
     * @param {UserLikesStudySetCreateManyArgs} args - Arguments to create many UserLikesStudySets.
     * @example
     * // Create many UserLikesStudySets
     * const userLikesStudySet = await prisma.userLikesStudySet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLikesStudySetCreateManyArgs>(args?: SelectSubset<T, UserLikesStudySetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLikesStudySet.
     * @param {UserLikesStudySetDeleteArgs} args - Arguments to delete one UserLikesStudySet.
     * @example
     * // Delete one UserLikesStudySet
     * const UserLikesStudySet = await prisma.userLikesStudySet.delete({
     *   where: {
     *     // ... filter to delete one UserLikesStudySet
     *   }
     * })
     * 
     */
    delete<T extends UserLikesStudySetDeleteArgs>(args: SelectSubset<T, UserLikesStudySetDeleteArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLikesStudySet.
     * @param {UserLikesStudySetUpdateArgs} args - Arguments to update one UserLikesStudySet.
     * @example
     * // Update one UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLikesStudySetUpdateArgs>(args: SelectSubset<T, UserLikesStudySetUpdateArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLikesStudySets.
     * @param {UserLikesStudySetDeleteManyArgs} args - Arguments to filter UserLikesStudySets to delete.
     * @example
     * // Delete a few UserLikesStudySets
     * const { count } = await prisma.userLikesStudySet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLikesStudySetDeleteManyArgs>(args?: SelectSubset<T, UserLikesStudySetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikesStudySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLikesStudySets
     * const userLikesStudySet = await prisma.userLikesStudySet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLikesStudySetUpdateManyArgs>(args: SelectSubset<T, UserLikesStudySetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLikesStudySet.
     * @param {UserLikesStudySetUpsertArgs} args - Arguments to update or create a UserLikesStudySet.
     * @example
     * // Update or create a UserLikesStudySet
     * const userLikesStudySet = await prisma.userLikesStudySet.upsert({
     *   create: {
     *     // ... data to create a UserLikesStudySet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLikesStudySet we want to update
     *   }
     * })
     */
    upsert<T extends UserLikesStudySetUpsertArgs>(args: SelectSubset<T, UserLikesStudySetUpsertArgs<ExtArgs>>): Prisma__UserLikesStudySetClient<$Result.GetResult<Prisma.$UserLikesStudySetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLikesStudySets that matches the filter.
     * @param {UserLikesStudySetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userLikesStudySet = await prisma.userLikesStudySet.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserLikesStudySetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserLikesStudySet.
     * @param {UserLikesStudySetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userLikesStudySet = await prisma.userLikesStudySet.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserLikesStudySetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserLikesStudySets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetCountArgs} args - Arguments to filter UserLikesStudySets to count.
     * @example
     * // Count the number of UserLikesStudySets
     * const count = await prisma.userLikesStudySet.count({
     *   where: {
     *     // ... the filter for the UserLikesStudySets we want to count
     *   }
     * })
    **/
    count<T extends UserLikesStudySetCountArgs>(
      args?: Subset<T, UserLikesStudySetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLikesStudySetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLikesStudySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLikesStudySetAggregateArgs>(args: Subset<T, UserLikesStudySetAggregateArgs>): Prisma.PrismaPromise<GetUserLikesStudySetAggregateType<T>>

    /**
     * Group by UserLikesStudySet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikesStudySetGroupByArgs} args - Group by arguments.
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
      T extends UserLikesStudySetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLikesStudySetGroupByArgs['orderBy'] }
        : { orderBy?: UserLikesStudySetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLikesStudySetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLikesStudySetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLikesStudySet model
   */
  readonly fields: UserLikesStudySetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLikesStudySet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLikesStudySetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studySet<T extends StudySetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudySetDefaultArgs<ExtArgs>>): Prisma__StudySetClient<$Result.GetResult<Prisma.$StudySetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLikesStudySet model
   */
  interface UserLikesStudySetFieldRefs {
    readonly id: FieldRef<"UserLikesStudySet", 'String'>
    readonly userId: FieldRef<"UserLikesStudySet", 'String'>
    readonly studySetId: FieldRef<"UserLikesStudySet", 'String'>
    readonly createdAt: FieldRef<"UserLikesStudySet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLikesStudySet findUnique
   */
  export type UserLikesStudySetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter, which UserLikesStudySet to fetch.
     */
    where: UserLikesStudySetWhereUniqueInput
  }

  /**
   * UserLikesStudySet findUniqueOrThrow
   */
  export type UserLikesStudySetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter, which UserLikesStudySet to fetch.
     */
    where: UserLikesStudySetWhereUniqueInput
  }

  /**
   * UserLikesStudySet findFirst
   */
  export type UserLikesStudySetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter, which UserLikesStudySet to fetch.
     */
    where?: UserLikesStudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikesStudySets to fetch.
     */
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikesStudySets.
     */
    cursor?: UserLikesStudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikesStudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikesStudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikesStudySets.
     */
    distinct?: UserLikesStudySetScalarFieldEnum | UserLikesStudySetScalarFieldEnum[]
  }

  /**
   * UserLikesStudySet findFirstOrThrow
   */
  export type UserLikesStudySetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter, which UserLikesStudySet to fetch.
     */
    where?: UserLikesStudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikesStudySets to fetch.
     */
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikesStudySets.
     */
    cursor?: UserLikesStudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikesStudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikesStudySets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikesStudySets.
     */
    distinct?: UserLikesStudySetScalarFieldEnum | UserLikesStudySetScalarFieldEnum[]
  }

  /**
   * UserLikesStudySet findMany
   */
  export type UserLikesStudySetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter, which UserLikesStudySets to fetch.
     */
    where?: UserLikesStudySetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikesStudySets to fetch.
     */
    orderBy?: UserLikesStudySetOrderByWithRelationInput | UserLikesStudySetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLikesStudySets.
     */
    cursor?: UserLikesStudySetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikesStudySets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikesStudySets.
     */
    skip?: number
    distinct?: UserLikesStudySetScalarFieldEnum | UserLikesStudySetScalarFieldEnum[]
  }

  /**
   * UserLikesStudySet create
   */
  export type UserLikesStudySetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLikesStudySet.
     */
    data: XOR<UserLikesStudySetCreateInput, UserLikesStudySetUncheckedCreateInput>
  }

  /**
   * UserLikesStudySet createMany
   */
  export type UserLikesStudySetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLikesStudySets.
     */
    data: UserLikesStudySetCreateManyInput | UserLikesStudySetCreateManyInput[]
  }

  /**
   * UserLikesStudySet update
   */
  export type UserLikesStudySetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLikesStudySet.
     */
    data: XOR<UserLikesStudySetUpdateInput, UserLikesStudySetUncheckedUpdateInput>
    /**
     * Choose, which UserLikesStudySet to update.
     */
    where: UserLikesStudySetWhereUniqueInput
  }

  /**
   * UserLikesStudySet updateMany
   */
  export type UserLikesStudySetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLikesStudySets.
     */
    data: XOR<UserLikesStudySetUpdateManyMutationInput, UserLikesStudySetUncheckedUpdateManyInput>
    /**
     * Filter which UserLikesStudySets to update
     */
    where?: UserLikesStudySetWhereInput
    /**
     * Limit how many UserLikesStudySets to update.
     */
    limit?: number
  }

  /**
   * UserLikesStudySet upsert
   */
  export type UserLikesStudySetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLikesStudySet to update in case it exists.
     */
    where: UserLikesStudySetWhereUniqueInput
    /**
     * In case the UserLikesStudySet found by the `where` argument doesn't exist, create a new UserLikesStudySet with this data.
     */
    create: XOR<UserLikesStudySetCreateInput, UserLikesStudySetUncheckedCreateInput>
    /**
     * In case the UserLikesStudySet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLikesStudySetUpdateInput, UserLikesStudySetUncheckedUpdateInput>
  }

  /**
   * UserLikesStudySet delete
   */
  export type UserLikesStudySetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
    /**
     * Filter which UserLikesStudySet to delete.
     */
    where: UserLikesStudySetWhereUniqueInput
  }

  /**
   * UserLikesStudySet deleteMany
   */
  export type UserLikesStudySetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikesStudySets to delete
     */
    where?: UserLikesStudySetWhereInput
    /**
     * Limit how many UserLikesStudySets to delete.
     */
    limit?: number
  }

  /**
   * UserLikesStudySet findRaw
   */
  export type UserLikesStudySetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLikesStudySet aggregateRaw
   */
  export type UserLikesStudySetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLikesStudySet without action
   */
  export type UserLikesStudySetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikesStudySet
     */
    select?: UserLikesStudySetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLikesStudySet
     */
    omit?: UserLikesStudySetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLikesStudySetInclude<ExtArgs> | null
  }


  /**
   * Model UserVocabularyProgress
   */

  export type AggregateUserVocabularyProgress = {
    _count: UserVocabularyProgressCountAggregateOutputType | null
    _avg: UserVocabularyProgressAvgAggregateOutputType | null
    _sum: UserVocabularyProgressSumAggregateOutputType | null
    _min: UserVocabularyProgressMinAggregateOutputType | null
    _max: UserVocabularyProgressMaxAggregateOutputType | null
  }

  export type UserVocabularyProgressAvgAggregateOutputType = {
    reviewCount: number | null
    correctCount: number | null
    incorrectCount: number | null
    easeFactor: number | null
    interval: number | null
  }

  export type UserVocabularyProgressSumAggregateOutputType = {
    reviewCount: number | null
    correctCount: number | null
    incorrectCount: number | null
    easeFactor: number | null
    interval: number | null
  }

  export type UserVocabularyProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    vocabularyId: string | null
    status: string | null
    lastReviewedAt: Date | null
    nextReviewAt: Date | null
    reviewCount: number | null
    correctCount: number | null
    incorrectCount: number | null
    easeFactor: number | null
    interval: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVocabularyProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    vocabularyId: string | null
    status: string | null
    lastReviewedAt: Date | null
    nextReviewAt: Date | null
    reviewCount: number | null
    correctCount: number | null
    incorrectCount: number | null
    easeFactor: number | null
    interval: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserVocabularyProgressCountAggregateOutputType = {
    id: number
    userId: number
    vocabularyId: number
    status: number
    lastReviewedAt: number
    nextReviewAt: number
    reviewCount: number
    correctCount: number
    incorrectCount: number
    easeFactor: number
    interval: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserVocabularyProgressAvgAggregateInputType = {
    reviewCount?: true
    correctCount?: true
    incorrectCount?: true
    easeFactor?: true
    interval?: true
  }

  export type UserVocabularyProgressSumAggregateInputType = {
    reviewCount?: true
    correctCount?: true
    incorrectCount?: true
    easeFactor?: true
    interval?: true
  }

  export type UserVocabularyProgressMinAggregateInputType = {
    id?: true
    userId?: true
    vocabularyId?: true
    status?: true
    lastReviewedAt?: true
    nextReviewAt?: true
    reviewCount?: true
    correctCount?: true
    incorrectCount?: true
    easeFactor?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVocabularyProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    vocabularyId?: true
    status?: true
    lastReviewedAt?: true
    nextReviewAt?: true
    reviewCount?: true
    correctCount?: true
    incorrectCount?: true
    easeFactor?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserVocabularyProgressCountAggregateInputType = {
    id?: true
    userId?: true
    vocabularyId?: true
    status?: true
    lastReviewedAt?: true
    nextReviewAt?: true
    reviewCount?: true
    correctCount?: true
    incorrectCount?: true
    easeFactor?: true
    interval?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserVocabularyProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVocabularyProgress to aggregate.
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularyProgresses to fetch.
     */
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVocabularyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVocabularyProgresses
    **/
    _count?: true | UserVocabularyProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVocabularyProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVocabularyProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVocabularyProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVocabularyProgressMaxAggregateInputType
  }

  export type GetUserVocabularyProgressAggregateType<T extends UserVocabularyProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVocabularyProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVocabularyProgress[P]>
      : GetScalarType<T[P], AggregateUserVocabularyProgress[P]>
  }




  export type UserVocabularyProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVocabularyProgressWhereInput
    orderBy?: UserVocabularyProgressOrderByWithAggregationInput | UserVocabularyProgressOrderByWithAggregationInput[]
    by: UserVocabularyProgressScalarFieldEnum[] | UserVocabularyProgressScalarFieldEnum
    having?: UserVocabularyProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVocabularyProgressCountAggregateInputType | true
    _avg?: UserVocabularyProgressAvgAggregateInputType
    _sum?: UserVocabularyProgressSumAggregateInputType
    _min?: UserVocabularyProgressMinAggregateInputType
    _max?: UserVocabularyProgressMaxAggregateInputType
  }

  export type UserVocabularyProgressGroupByOutputType = {
    id: string
    userId: string
    vocabularyId: string
    status: string
    lastReviewedAt: Date | null
    nextReviewAt: Date | null
    reviewCount: number
    correctCount: number
    incorrectCount: number
    easeFactor: number
    interval: number
    createdAt: Date
    updatedAt: Date
    _count: UserVocabularyProgressCountAggregateOutputType | null
    _avg: UserVocabularyProgressAvgAggregateOutputType | null
    _sum: UserVocabularyProgressSumAggregateOutputType | null
    _min: UserVocabularyProgressMinAggregateOutputType | null
    _max: UserVocabularyProgressMaxAggregateOutputType | null
  }

  type GetUserVocabularyProgressGroupByPayload<T extends UserVocabularyProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVocabularyProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVocabularyProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVocabularyProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserVocabularyProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserVocabularyProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vocabularyId?: boolean
    status?: boolean
    lastReviewedAt?: boolean
    nextReviewAt?: boolean
    reviewCount?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    easeFactor?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vocabulary?: boolean | VocabularyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVocabularyProgress"]>



  export type UserVocabularyProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    vocabularyId?: boolean
    status?: boolean
    lastReviewedAt?: boolean
    nextReviewAt?: boolean
    reviewCount?: boolean
    correctCount?: boolean
    incorrectCount?: boolean
    easeFactor?: boolean
    interval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserVocabularyProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vocabularyId" | "status" | "lastReviewedAt" | "nextReviewAt" | "reviewCount" | "correctCount" | "incorrectCount" | "easeFactor" | "interval" | "createdAt" | "updatedAt", ExtArgs["result"]["userVocabularyProgress"]>
  export type UserVocabularyProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vocabulary?: boolean | VocabularyDefaultArgs<ExtArgs>
  }

  export type $UserVocabularyProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVocabularyProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vocabulary: Prisma.$VocabularyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vocabularyId: string
      status: string
      lastReviewedAt: Date | null
      nextReviewAt: Date | null
      reviewCount: number
      correctCount: number
      incorrectCount: number
      easeFactor: number
      interval: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userVocabularyProgress"]>
    composites: {}
  }

  type UserVocabularyProgressGetPayload<S extends boolean | null | undefined | UserVocabularyProgressDefaultArgs> = $Result.GetResult<Prisma.$UserVocabularyProgressPayload, S>

  type UserVocabularyProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVocabularyProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVocabularyProgressCountAggregateInputType | true
    }

  export interface UserVocabularyProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVocabularyProgress'], meta: { name: 'UserVocabularyProgress' } }
    /**
     * Find zero or one UserVocabularyProgress that matches the filter.
     * @param {UserVocabularyProgressFindUniqueArgs} args - Arguments to find a UserVocabularyProgress
     * @example
     * // Get one UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVocabularyProgressFindUniqueArgs>(args: SelectSubset<T, UserVocabularyProgressFindUniqueArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVocabularyProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVocabularyProgressFindUniqueOrThrowArgs} args - Arguments to find a UserVocabularyProgress
     * @example
     * // Get one UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVocabularyProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVocabularyProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVocabularyProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressFindFirstArgs} args - Arguments to find a UserVocabularyProgress
     * @example
     * // Get one UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVocabularyProgressFindFirstArgs>(args?: SelectSubset<T, UserVocabularyProgressFindFirstArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVocabularyProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressFindFirstOrThrowArgs} args - Arguments to find a UserVocabularyProgress
     * @example
     * // Get one UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVocabularyProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVocabularyProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVocabularyProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVocabularyProgresses
     * const userVocabularyProgresses = await prisma.userVocabularyProgress.findMany()
     * 
     * // Get first 10 UserVocabularyProgresses
     * const userVocabularyProgresses = await prisma.userVocabularyProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVocabularyProgressWithIdOnly = await prisma.userVocabularyProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVocabularyProgressFindManyArgs>(args?: SelectSubset<T, UserVocabularyProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVocabularyProgress.
     * @param {UserVocabularyProgressCreateArgs} args - Arguments to create a UserVocabularyProgress.
     * @example
     * // Create one UserVocabularyProgress
     * const UserVocabularyProgress = await prisma.userVocabularyProgress.create({
     *   data: {
     *     // ... data to create a UserVocabularyProgress
     *   }
     * })
     * 
     */
    create<T extends UserVocabularyProgressCreateArgs>(args: SelectSubset<T, UserVocabularyProgressCreateArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVocabularyProgresses.
     * @param {UserVocabularyProgressCreateManyArgs} args - Arguments to create many UserVocabularyProgresses.
     * @example
     * // Create many UserVocabularyProgresses
     * const userVocabularyProgress = await prisma.userVocabularyProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVocabularyProgressCreateManyArgs>(args?: SelectSubset<T, UserVocabularyProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserVocabularyProgress.
     * @param {UserVocabularyProgressDeleteArgs} args - Arguments to delete one UserVocabularyProgress.
     * @example
     * // Delete one UserVocabularyProgress
     * const UserVocabularyProgress = await prisma.userVocabularyProgress.delete({
     *   where: {
     *     // ... filter to delete one UserVocabularyProgress
     *   }
     * })
     * 
     */
    delete<T extends UserVocabularyProgressDeleteArgs>(args: SelectSubset<T, UserVocabularyProgressDeleteArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVocabularyProgress.
     * @param {UserVocabularyProgressUpdateArgs} args - Arguments to update one UserVocabularyProgress.
     * @example
     * // Update one UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVocabularyProgressUpdateArgs>(args: SelectSubset<T, UserVocabularyProgressUpdateArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVocabularyProgresses.
     * @param {UserVocabularyProgressDeleteManyArgs} args - Arguments to filter UserVocabularyProgresses to delete.
     * @example
     * // Delete a few UserVocabularyProgresses
     * const { count } = await prisma.userVocabularyProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVocabularyProgressDeleteManyArgs>(args?: SelectSubset<T, UserVocabularyProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVocabularyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVocabularyProgresses
     * const userVocabularyProgress = await prisma.userVocabularyProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVocabularyProgressUpdateManyArgs>(args: SelectSubset<T, UserVocabularyProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVocabularyProgress.
     * @param {UserVocabularyProgressUpsertArgs} args - Arguments to update or create a UserVocabularyProgress.
     * @example
     * // Update or create a UserVocabularyProgress
     * const userVocabularyProgress = await prisma.userVocabularyProgress.upsert({
     *   create: {
     *     // ... data to create a UserVocabularyProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVocabularyProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserVocabularyProgressUpsertArgs>(args: SelectSubset<T, UserVocabularyProgressUpsertArgs<ExtArgs>>): Prisma__UserVocabularyProgressClient<$Result.GetResult<Prisma.$UserVocabularyProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVocabularyProgresses that matches the filter.
     * @param {UserVocabularyProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userVocabularyProgress = await prisma.userVocabularyProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserVocabularyProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserVocabularyProgress.
     * @param {UserVocabularyProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userVocabularyProgress = await prisma.userVocabularyProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserVocabularyProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserVocabularyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressCountArgs} args - Arguments to filter UserVocabularyProgresses to count.
     * @example
     * // Count the number of UserVocabularyProgresses
     * const count = await prisma.userVocabularyProgress.count({
     *   where: {
     *     // ... the filter for the UserVocabularyProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserVocabularyProgressCountArgs>(
      args?: Subset<T, UserVocabularyProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVocabularyProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVocabularyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVocabularyProgressAggregateArgs>(args: Subset<T, UserVocabularyProgressAggregateArgs>): Prisma.PrismaPromise<GetUserVocabularyProgressAggregateType<T>>

    /**
     * Group by UserVocabularyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVocabularyProgressGroupByArgs} args - Group by arguments.
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
      T extends UserVocabularyProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVocabularyProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserVocabularyProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserVocabularyProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVocabularyProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVocabularyProgress model
   */
  readonly fields: UserVocabularyProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVocabularyProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVocabularyProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vocabulary<T extends VocabularyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyDefaultArgs<ExtArgs>>): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserVocabularyProgress model
   */
  interface UserVocabularyProgressFieldRefs {
    readonly id: FieldRef<"UserVocabularyProgress", 'String'>
    readonly userId: FieldRef<"UserVocabularyProgress", 'String'>
    readonly vocabularyId: FieldRef<"UserVocabularyProgress", 'String'>
    readonly status: FieldRef<"UserVocabularyProgress", 'String'>
    readonly lastReviewedAt: FieldRef<"UserVocabularyProgress", 'DateTime'>
    readonly nextReviewAt: FieldRef<"UserVocabularyProgress", 'DateTime'>
    readonly reviewCount: FieldRef<"UserVocabularyProgress", 'Int'>
    readonly correctCount: FieldRef<"UserVocabularyProgress", 'Int'>
    readonly incorrectCount: FieldRef<"UserVocabularyProgress", 'Int'>
    readonly easeFactor: FieldRef<"UserVocabularyProgress", 'Float'>
    readonly interval: FieldRef<"UserVocabularyProgress", 'Int'>
    readonly createdAt: FieldRef<"UserVocabularyProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserVocabularyProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVocabularyProgress findUnique
   */
  export type UserVocabularyProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularyProgress to fetch.
     */
    where: UserVocabularyProgressWhereUniqueInput
  }

  /**
   * UserVocabularyProgress findUniqueOrThrow
   */
  export type UserVocabularyProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularyProgress to fetch.
     */
    where: UserVocabularyProgressWhereUniqueInput
  }

  /**
   * UserVocabularyProgress findFirst
   */
  export type UserVocabularyProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularyProgress to fetch.
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularyProgresses to fetch.
     */
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVocabularyProgresses.
     */
    cursor?: UserVocabularyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVocabularyProgresses.
     */
    distinct?: UserVocabularyProgressScalarFieldEnum | UserVocabularyProgressScalarFieldEnum[]
  }

  /**
   * UserVocabularyProgress findFirstOrThrow
   */
  export type UserVocabularyProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularyProgress to fetch.
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularyProgresses to fetch.
     */
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVocabularyProgresses.
     */
    cursor?: UserVocabularyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVocabularyProgresses.
     */
    distinct?: UserVocabularyProgressScalarFieldEnum | UserVocabularyProgressScalarFieldEnum[]
  }

  /**
   * UserVocabularyProgress findMany
   */
  export type UserVocabularyProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserVocabularyProgresses to fetch.
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVocabularyProgresses to fetch.
     */
    orderBy?: UserVocabularyProgressOrderByWithRelationInput | UserVocabularyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVocabularyProgresses.
     */
    cursor?: UserVocabularyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVocabularyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVocabularyProgresses.
     */
    skip?: number
    distinct?: UserVocabularyProgressScalarFieldEnum | UserVocabularyProgressScalarFieldEnum[]
  }

  /**
   * UserVocabularyProgress create
   */
  export type UserVocabularyProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVocabularyProgress.
     */
    data: XOR<UserVocabularyProgressCreateInput, UserVocabularyProgressUncheckedCreateInput>
  }

  /**
   * UserVocabularyProgress createMany
   */
  export type UserVocabularyProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVocabularyProgresses.
     */
    data: UserVocabularyProgressCreateManyInput | UserVocabularyProgressCreateManyInput[]
  }

  /**
   * UserVocabularyProgress update
   */
  export type UserVocabularyProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVocabularyProgress.
     */
    data: XOR<UserVocabularyProgressUpdateInput, UserVocabularyProgressUncheckedUpdateInput>
    /**
     * Choose, which UserVocabularyProgress to update.
     */
    where: UserVocabularyProgressWhereUniqueInput
  }

  /**
   * UserVocabularyProgress updateMany
   */
  export type UserVocabularyProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVocabularyProgresses.
     */
    data: XOR<UserVocabularyProgressUpdateManyMutationInput, UserVocabularyProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserVocabularyProgresses to update
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * Limit how many UserVocabularyProgresses to update.
     */
    limit?: number
  }

  /**
   * UserVocabularyProgress upsert
   */
  export type UserVocabularyProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVocabularyProgress to update in case it exists.
     */
    where: UserVocabularyProgressWhereUniqueInput
    /**
     * In case the UserVocabularyProgress found by the `where` argument doesn't exist, create a new UserVocabularyProgress with this data.
     */
    create: XOR<UserVocabularyProgressCreateInput, UserVocabularyProgressUncheckedCreateInput>
    /**
     * In case the UserVocabularyProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVocabularyProgressUpdateInput, UserVocabularyProgressUncheckedUpdateInput>
  }

  /**
   * UserVocabularyProgress delete
   */
  export type UserVocabularyProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
    /**
     * Filter which UserVocabularyProgress to delete.
     */
    where: UserVocabularyProgressWhereUniqueInput
  }

  /**
   * UserVocabularyProgress deleteMany
   */
  export type UserVocabularyProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVocabularyProgresses to delete
     */
    where?: UserVocabularyProgressWhereInput
    /**
     * Limit how many UserVocabularyProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserVocabularyProgress findRaw
   */
  export type UserVocabularyProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserVocabularyProgress aggregateRaw
   */
  export type UserVocabularyProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserVocabularyProgress without action
   */
  export type UserVocabularyProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVocabularyProgress
     */
    select?: UserVocabularyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVocabularyProgress
     */
    omit?: UserVocabularyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVocabularyProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserUniqueWord
   */

  export type AggregateUserUniqueWord = {
    _count: UserUniqueWordCountAggregateOutputType | null
    _min: UserUniqueWordMinAggregateOutputType | null
    _max: UserUniqueWordMaxAggregateOutputType | null
  }

  export type UserUniqueWordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    word: string | null
    firstLearnedAt: Date | null
  }

  export type UserUniqueWordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    word: string | null
    firstLearnedAt: Date | null
  }

  export type UserUniqueWordCountAggregateOutputType = {
    id: number
    userId: number
    word: number
    firstLearnedAt: number
    _all: number
  }


  export type UserUniqueWordMinAggregateInputType = {
    id?: true
    userId?: true
    word?: true
    firstLearnedAt?: true
  }

  export type UserUniqueWordMaxAggregateInputType = {
    id?: true
    userId?: true
    word?: true
    firstLearnedAt?: true
  }

  export type UserUniqueWordCountAggregateInputType = {
    id?: true
    userId?: true
    word?: true
    firstLearnedAt?: true
    _all?: true
  }

  export type UserUniqueWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserUniqueWord to aggregate.
     */
    where?: UserUniqueWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUniqueWords to fetch.
     */
    orderBy?: UserUniqueWordOrderByWithRelationInput | UserUniqueWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserUniqueWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUniqueWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUniqueWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserUniqueWords
    **/
    _count?: true | UserUniqueWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserUniqueWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserUniqueWordMaxAggregateInputType
  }

  export type GetUserUniqueWordAggregateType<T extends UserUniqueWordAggregateArgs> = {
        [P in keyof T & keyof AggregateUserUniqueWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserUniqueWord[P]>
      : GetScalarType<T[P], AggregateUserUniqueWord[P]>
  }




  export type UserUniqueWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserUniqueWordWhereInput
    orderBy?: UserUniqueWordOrderByWithAggregationInput | UserUniqueWordOrderByWithAggregationInput[]
    by: UserUniqueWordScalarFieldEnum[] | UserUniqueWordScalarFieldEnum
    having?: UserUniqueWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserUniqueWordCountAggregateInputType | true
    _min?: UserUniqueWordMinAggregateInputType
    _max?: UserUniqueWordMaxAggregateInputType
  }

  export type UserUniqueWordGroupByOutputType = {
    id: string
    userId: string
    word: string
    firstLearnedAt: Date
    _count: UserUniqueWordCountAggregateOutputType | null
    _min: UserUniqueWordMinAggregateOutputType | null
    _max: UserUniqueWordMaxAggregateOutputType | null
  }

  type GetUserUniqueWordGroupByPayload<T extends UserUniqueWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserUniqueWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserUniqueWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserUniqueWordGroupByOutputType[P]>
            : GetScalarType<T[P], UserUniqueWordGroupByOutputType[P]>
        }
      >
    >


  export type UserUniqueWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    word?: boolean
    firstLearnedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userUniqueWord"]>



  export type UserUniqueWordSelectScalar = {
    id?: boolean
    userId?: boolean
    word?: boolean
    firstLearnedAt?: boolean
  }

  export type UserUniqueWordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "word" | "firstLearnedAt", ExtArgs["result"]["userUniqueWord"]>
  export type UserUniqueWordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserUniqueWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserUniqueWord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      word: string
      firstLearnedAt: Date
    }, ExtArgs["result"]["userUniqueWord"]>
    composites: {}
  }

  type UserUniqueWordGetPayload<S extends boolean | null | undefined | UserUniqueWordDefaultArgs> = $Result.GetResult<Prisma.$UserUniqueWordPayload, S>

  type UserUniqueWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserUniqueWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserUniqueWordCountAggregateInputType | true
    }

  export interface UserUniqueWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserUniqueWord'], meta: { name: 'UserUniqueWord' } }
    /**
     * Find zero or one UserUniqueWord that matches the filter.
     * @param {UserUniqueWordFindUniqueArgs} args - Arguments to find a UserUniqueWord
     * @example
     * // Get one UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserUniqueWordFindUniqueArgs>(args: SelectSubset<T, UserUniqueWordFindUniqueArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserUniqueWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserUniqueWordFindUniqueOrThrowArgs} args - Arguments to find a UserUniqueWord
     * @example
     * // Get one UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserUniqueWordFindUniqueOrThrowArgs>(args: SelectSubset<T, UserUniqueWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserUniqueWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordFindFirstArgs} args - Arguments to find a UserUniqueWord
     * @example
     * // Get one UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserUniqueWordFindFirstArgs>(args?: SelectSubset<T, UserUniqueWordFindFirstArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserUniqueWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordFindFirstOrThrowArgs} args - Arguments to find a UserUniqueWord
     * @example
     * // Get one UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserUniqueWordFindFirstOrThrowArgs>(args?: SelectSubset<T, UserUniqueWordFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserUniqueWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserUniqueWords
     * const userUniqueWords = await prisma.userUniqueWord.findMany()
     * 
     * // Get first 10 UserUniqueWords
     * const userUniqueWords = await prisma.userUniqueWord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userUniqueWordWithIdOnly = await prisma.userUniqueWord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserUniqueWordFindManyArgs>(args?: SelectSubset<T, UserUniqueWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserUniqueWord.
     * @param {UserUniqueWordCreateArgs} args - Arguments to create a UserUniqueWord.
     * @example
     * // Create one UserUniqueWord
     * const UserUniqueWord = await prisma.userUniqueWord.create({
     *   data: {
     *     // ... data to create a UserUniqueWord
     *   }
     * })
     * 
     */
    create<T extends UserUniqueWordCreateArgs>(args: SelectSubset<T, UserUniqueWordCreateArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserUniqueWords.
     * @param {UserUniqueWordCreateManyArgs} args - Arguments to create many UserUniqueWords.
     * @example
     * // Create many UserUniqueWords
     * const userUniqueWord = await prisma.userUniqueWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserUniqueWordCreateManyArgs>(args?: SelectSubset<T, UserUniqueWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserUniqueWord.
     * @param {UserUniqueWordDeleteArgs} args - Arguments to delete one UserUniqueWord.
     * @example
     * // Delete one UserUniqueWord
     * const UserUniqueWord = await prisma.userUniqueWord.delete({
     *   where: {
     *     // ... filter to delete one UserUniqueWord
     *   }
     * })
     * 
     */
    delete<T extends UserUniqueWordDeleteArgs>(args: SelectSubset<T, UserUniqueWordDeleteArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserUniqueWord.
     * @param {UserUniqueWordUpdateArgs} args - Arguments to update one UserUniqueWord.
     * @example
     * // Update one UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUniqueWordUpdateArgs>(args: SelectSubset<T, UserUniqueWordUpdateArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserUniqueWords.
     * @param {UserUniqueWordDeleteManyArgs} args - Arguments to filter UserUniqueWords to delete.
     * @example
     * // Delete a few UserUniqueWords
     * const { count } = await prisma.userUniqueWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserUniqueWordDeleteManyArgs>(args?: SelectSubset<T, UserUniqueWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserUniqueWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserUniqueWords
     * const userUniqueWord = await prisma.userUniqueWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUniqueWordUpdateManyArgs>(args: SelectSubset<T, UserUniqueWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserUniqueWord.
     * @param {UserUniqueWordUpsertArgs} args - Arguments to update or create a UserUniqueWord.
     * @example
     * // Update or create a UserUniqueWord
     * const userUniqueWord = await prisma.userUniqueWord.upsert({
     *   create: {
     *     // ... data to create a UserUniqueWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserUniqueWord we want to update
     *   }
     * })
     */
    upsert<T extends UserUniqueWordUpsertArgs>(args: SelectSubset<T, UserUniqueWordUpsertArgs<ExtArgs>>): Prisma__UserUniqueWordClient<$Result.GetResult<Prisma.$UserUniqueWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserUniqueWords that matches the filter.
     * @param {UserUniqueWordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userUniqueWord = await prisma.userUniqueWord.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserUniqueWordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserUniqueWord.
     * @param {UserUniqueWordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userUniqueWord = await prisma.userUniqueWord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserUniqueWordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserUniqueWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordCountArgs} args - Arguments to filter UserUniqueWords to count.
     * @example
     * // Count the number of UserUniqueWords
     * const count = await prisma.userUniqueWord.count({
     *   where: {
     *     // ... the filter for the UserUniqueWords we want to count
     *   }
     * })
    **/
    count<T extends UserUniqueWordCountArgs>(
      args?: Subset<T, UserUniqueWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserUniqueWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserUniqueWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserUniqueWordAggregateArgs>(args: Subset<T, UserUniqueWordAggregateArgs>): Prisma.PrismaPromise<GetUserUniqueWordAggregateType<T>>

    /**
     * Group by UserUniqueWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUniqueWordGroupByArgs} args - Group by arguments.
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
      T extends UserUniqueWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserUniqueWordGroupByArgs['orderBy'] }
        : { orderBy?: UserUniqueWordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserUniqueWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserUniqueWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserUniqueWord model
   */
  readonly fields: UserUniqueWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserUniqueWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserUniqueWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserUniqueWord model
   */
  interface UserUniqueWordFieldRefs {
    readonly id: FieldRef<"UserUniqueWord", 'String'>
    readonly userId: FieldRef<"UserUniqueWord", 'String'>
    readonly word: FieldRef<"UserUniqueWord", 'String'>
    readonly firstLearnedAt: FieldRef<"UserUniqueWord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserUniqueWord findUnique
   */
  export type UserUniqueWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter, which UserUniqueWord to fetch.
     */
    where: UserUniqueWordWhereUniqueInput
  }

  /**
   * UserUniqueWord findUniqueOrThrow
   */
  export type UserUniqueWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter, which UserUniqueWord to fetch.
     */
    where: UserUniqueWordWhereUniqueInput
  }

  /**
   * UserUniqueWord findFirst
   */
  export type UserUniqueWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter, which UserUniqueWord to fetch.
     */
    where?: UserUniqueWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUniqueWords to fetch.
     */
    orderBy?: UserUniqueWordOrderByWithRelationInput | UserUniqueWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserUniqueWords.
     */
    cursor?: UserUniqueWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUniqueWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUniqueWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserUniqueWords.
     */
    distinct?: UserUniqueWordScalarFieldEnum | UserUniqueWordScalarFieldEnum[]
  }

  /**
   * UserUniqueWord findFirstOrThrow
   */
  export type UserUniqueWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter, which UserUniqueWord to fetch.
     */
    where?: UserUniqueWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUniqueWords to fetch.
     */
    orderBy?: UserUniqueWordOrderByWithRelationInput | UserUniqueWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserUniqueWords.
     */
    cursor?: UserUniqueWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUniqueWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUniqueWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserUniqueWords.
     */
    distinct?: UserUniqueWordScalarFieldEnum | UserUniqueWordScalarFieldEnum[]
  }

  /**
   * UserUniqueWord findMany
   */
  export type UserUniqueWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter, which UserUniqueWords to fetch.
     */
    where?: UserUniqueWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserUniqueWords to fetch.
     */
    orderBy?: UserUniqueWordOrderByWithRelationInput | UserUniqueWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserUniqueWords.
     */
    cursor?: UserUniqueWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserUniqueWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserUniqueWords.
     */
    skip?: number
    distinct?: UserUniqueWordScalarFieldEnum | UserUniqueWordScalarFieldEnum[]
  }

  /**
   * UserUniqueWord create
   */
  export type UserUniqueWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * The data needed to create a UserUniqueWord.
     */
    data: XOR<UserUniqueWordCreateInput, UserUniqueWordUncheckedCreateInput>
  }

  /**
   * UserUniqueWord createMany
   */
  export type UserUniqueWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserUniqueWords.
     */
    data: UserUniqueWordCreateManyInput | UserUniqueWordCreateManyInput[]
  }

  /**
   * UserUniqueWord update
   */
  export type UserUniqueWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * The data needed to update a UserUniqueWord.
     */
    data: XOR<UserUniqueWordUpdateInput, UserUniqueWordUncheckedUpdateInput>
    /**
     * Choose, which UserUniqueWord to update.
     */
    where: UserUniqueWordWhereUniqueInput
  }

  /**
   * UserUniqueWord updateMany
   */
  export type UserUniqueWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserUniqueWords.
     */
    data: XOR<UserUniqueWordUpdateManyMutationInput, UserUniqueWordUncheckedUpdateManyInput>
    /**
     * Filter which UserUniqueWords to update
     */
    where?: UserUniqueWordWhereInput
    /**
     * Limit how many UserUniqueWords to update.
     */
    limit?: number
  }

  /**
   * UserUniqueWord upsert
   */
  export type UserUniqueWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * The filter to search for the UserUniqueWord to update in case it exists.
     */
    where: UserUniqueWordWhereUniqueInput
    /**
     * In case the UserUniqueWord found by the `where` argument doesn't exist, create a new UserUniqueWord with this data.
     */
    create: XOR<UserUniqueWordCreateInput, UserUniqueWordUncheckedCreateInput>
    /**
     * In case the UserUniqueWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUniqueWordUpdateInput, UserUniqueWordUncheckedUpdateInput>
  }

  /**
   * UserUniqueWord delete
   */
  export type UserUniqueWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
    /**
     * Filter which UserUniqueWord to delete.
     */
    where: UserUniqueWordWhereUniqueInput
  }

  /**
   * UserUniqueWord deleteMany
   */
  export type UserUniqueWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserUniqueWords to delete
     */
    where?: UserUniqueWordWhereInput
    /**
     * Limit how many UserUniqueWords to delete.
     */
    limit?: number
  }

  /**
   * UserUniqueWord findRaw
   */
  export type UserUniqueWordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserUniqueWord aggregateRaw
   */
  export type UserUniqueWordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserUniqueWord without action
   */
  export type UserUniqueWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserUniqueWord
     */
    select?: UserUniqueWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserUniqueWord
     */
    omit?: UserUniqueWordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserUniqueWordInclude<ExtArgs> | null
  }


  /**
   * Model XPEvent
   */

  export type AggregateXPEvent = {
    _count: XPEventCountAggregateOutputType | null
    _avg: XPEventAvgAggregateOutputType | null
    _sum: XPEventSumAggregateOutputType | null
    _min: XPEventMinAggregateOutputType | null
    _max: XPEventMaxAggregateOutputType | null
  }

  export type XPEventAvgAggregateOutputType = {
    xpAmount: number | null
  }

  export type XPEventSumAggregateOutputType = {
    xpAmount: number | null
  }

  export type XPEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    xpAmount: number | null
    createdAt: Date | null
  }

  export type XPEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventType: string | null
    xpAmount: number | null
    createdAt: Date | null
  }

  export type XPEventCountAggregateOutputType = {
    id: number
    userId: number
    eventType: number
    xpAmount: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type XPEventAvgAggregateInputType = {
    xpAmount?: true
  }

  export type XPEventSumAggregateInputType = {
    xpAmount?: true
  }

  export type XPEventMinAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpAmount?: true
    createdAt?: true
  }

  export type XPEventMaxAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpAmount?: true
    createdAt?: true
  }

  export type XPEventCountAggregateInputType = {
    id?: true
    userId?: true
    eventType?: true
    xpAmount?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type XPEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XPEvent to aggregate.
     */
    where?: XPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPEvents to fetch.
     */
    orderBy?: XPEventOrderByWithRelationInput | XPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: XPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned XPEvents
    **/
    _count?: true | XPEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: XPEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: XPEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: XPEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: XPEventMaxAggregateInputType
  }

  export type GetXPEventAggregateType<T extends XPEventAggregateArgs> = {
        [P in keyof T & keyof AggregateXPEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateXPEvent[P]>
      : GetScalarType<T[P], AggregateXPEvent[P]>
  }




  export type XPEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: XPEventWhereInput
    orderBy?: XPEventOrderByWithAggregationInput | XPEventOrderByWithAggregationInput[]
    by: XPEventScalarFieldEnum[] | XPEventScalarFieldEnum
    having?: XPEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: XPEventCountAggregateInputType | true
    _avg?: XPEventAvgAggregateInputType
    _sum?: XPEventSumAggregateInputType
    _min?: XPEventMinAggregateInputType
    _max?: XPEventMaxAggregateInputType
  }

  export type XPEventGroupByOutputType = {
    id: string
    userId: string
    eventType: string
    xpAmount: number
    metadata: JsonValue | null
    createdAt: Date
    _count: XPEventCountAggregateOutputType | null
    _avg: XPEventAvgAggregateOutputType | null
    _sum: XPEventSumAggregateOutputType | null
    _min: XPEventMinAggregateOutputType | null
    _max: XPEventMaxAggregateOutputType | null
  }

  type GetXPEventGroupByPayload<T extends XPEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<XPEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof XPEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], XPEventGroupByOutputType[P]>
            : GetScalarType<T[P], XPEventGroupByOutputType[P]>
        }
      >
    >


  export type XPEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpAmount?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["xPEvent"]>



  export type XPEventSelectScalar = {
    id?: boolean
    userId?: boolean
    eventType?: boolean
    xpAmount?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type XPEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventType" | "xpAmount" | "metadata" | "createdAt", ExtArgs["result"]["xPEvent"]>
  export type XPEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $XPEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "XPEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventType: string
      xpAmount: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["xPEvent"]>
    composites: {}
  }

  type XPEventGetPayload<S extends boolean | null | undefined | XPEventDefaultArgs> = $Result.GetResult<Prisma.$XPEventPayload, S>

  type XPEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<XPEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: XPEventCountAggregateInputType | true
    }

  export interface XPEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['XPEvent'], meta: { name: 'XPEvent' } }
    /**
     * Find zero or one XPEvent that matches the filter.
     * @param {XPEventFindUniqueArgs} args - Arguments to find a XPEvent
     * @example
     * // Get one XPEvent
     * const xPEvent = await prisma.xPEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends XPEventFindUniqueArgs>(args: SelectSubset<T, XPEventFindUniqueArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one XPEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {XPEventFindUniqueOrThrowArgs} args - Arguments to find a XPEvent
     * @example
     * // Get one XPEvent
     * const xPEvent = await prisma.xPEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends XPEventFindUniqueOrThrowArgs>(args: SelectSubset<T, XPEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XPEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventFindFirstArgs} args - Arguments to find a XPEvent
     * @example
     * // Get one XPEvent
     * const xPEvent = await prisma.xPEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends XPEventFindFirstArgs>(args?: SelectSubset<T, XPEventFindFirstArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first XPEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventFindFirstOrThrowArgs} args - Arguments to find a XPEvent
     * @example
     * // Get one XPEvent
     * const xPEvent = await prisma.xPEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends XPEventFindFirstOrThrowArgs>(args?: SelectSubset<T, XPEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more XPEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all XPEvents
     * const xPEvents = await prisma.xPEvent.findMany()
     * 
     * // Get first 10 XPEvents
     * const xPEvents = await prisma.xPEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const xPEventWithIdOnly = await prisma.xPEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends XPEventFindManyArgs>(args?: SelectSubset<T, XPEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a XPEvent.
     * @param {XPEventCreateArgs} args - Arguments to create a XPEvent.
     * @example
     * // Create one XPEvent
     * const XPEvent = await prisma.xPEvent.create({
     *   data: {
     *     // ... data to create a XPEvent
     *   }
     * })
     * 
     */
    create<T extends XPEventCreateArgs>(args: SelectSubset<T, XPEventCreateArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many XPEvents.
     * @param {XPEventCreateManyArgs} args - Arguments to create many XPEvents.
     * @example
     * // Create many XPEvents
     * const xPEvent = await prisma.xPEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends XPEventCreateManyArgs>(args?: SelectSubset<T, XPEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a XPEvent.
     * @param {XPEventDeleteArgs} args - Arguments to delete one XPEvent.
     * @example
     * // Delete one XPEvent
     * const XPEvent = await prisma.xPEvent.delete({
     *   where: {
     *     // ... filter to delete one XPEvent
     *   }
     * })
     * 
     */
    delete<T extends XPEventDeleteArgs>(args: SelectSubset<T, XPEventDeleteArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one XPEvent.
     * @param {XPEventUpdateArgs} args - Arguments to update one XPEvent.
     * @example
     * // Update one XPEvent
     * const xPEvent = await prisma.xPEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends XPEventUpdateArgs>(args: SelectSubset<T, XPEventUpdateArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more XPEvents.
     * @param {XPEventDeleteManyArgs} args - Arguments to filter XPEvents to delete.
     * @example
     * // Delete a few XPEvents
     * const { count } = await prisma.xPEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends XPEventDeleteManyArgs>(args?: SelectSubset<T, XPEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more XPEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many XPEvents
     * const xPEvent = await prisma.xPEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends XPEventUpdateManyArgs>(args: SelectSubset<T, XPEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one XPEvent.
     * @param {XPEventUpsertArgs} args - Arguments to update or create a XPEvent.
     * @example
     * // Update or create a XPEvent
     * const xPEvent = await prisma.xPEvent.upsert({
     *   create: {
     *     // ... data to create a XPEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the XPEvent we want to update
     *   }
     * })
     */
    upsert<T extends XPEventUpsertArgs>(args: SelectSubset<T, XPEventUpsertArgs<ExtArgs>>): Prisma__XPEventClient<$Result.GetResult<Prisma.$XPEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more XPEvents that matches the filter.
     * @param {XPEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const xPEvent = await prisma.xPEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: XPEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a XPEvent.
     * @param {XPEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const xPEvent = await prisma.xPEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: XPEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of XPEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventCountArgs} args - Arguments to filter XPEvents to count.
     * @example
     * // Count the number of XPEvents
     * const count = await prisma.xPEvent.count({
     *   where: {
     *     // ... the filter for the XPEvents we want to count
     *   }
     * })
    **/
    count<T extends XPEventCountArgs>(
      args?: Subset<T, XPEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], XPEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a XPEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends XPEventAggregateArgs>(args: Subset<T, XPEventAggregateArgs>): Prisma.PrismaPromise<GetXPEventAggregateType<T>>

    /**
     * Group by XPEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {XPEventGroupByArgs} args - Group by arguments.
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
      T extends XPEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: XPEventGroupByArgs['orderBy'] }
        : { orderBy?: XPEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, XPEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetXPEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the XPEvent model
   */
  readonly fields: XPEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for XPEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__XPEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the XPEvent model
   */
  interface XPEventFieldRefs {
    readonly id: FieldRef<"XPEvent", 'String'>
    readonly userId: FieldRef<"XPEvent", 'String'>
    readonly eventType: FieldRef<"XPEvent", 'String'>
    readonly xpAmount: FieldRef<"XPEvent", 'Int'>
    readonly metadata: FieldRef<"XPEvent", 'Json'>
    readonly createdAt: FieldRef<"XPEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * XPEvent findUnique
   */
  export type XPEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter, which XPEvent to fetch.
     */
    where: XPEventWhereUniqueInput
  }

  /**
   * XPEvent findUniqueOrThrow
   */
  export type XPEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter, which XPEvent to fetch.
     */
    where: XPEventWhereUniqueInput
  }

  /**
   * XPEvent findFirst
   */
  export type XPEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter, which XPEvent to fetch.
     */
    where?: XPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPEvents to fetch.
     */
    orderBy?: XPEventOrderByWithRelationInput | XPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XPEvents.
     */
    cursor?: XPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XPEvents.
     */
    distinct?: XPEventScalarFieldEnum | XPEventScalarFieldEnum[]
  }

  /**
   * XPEvent findFirstOrThrow
   */
  export type XPEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter, which XPEvent to fetch.
     */
    where?: XPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPEvents to fetch.
     */
    orderBy?: XPEventOrderByWithRelationInput | XPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for XPEvents.
     */
    cursor?: XPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of XPEvents.
     */
    distinct?: XPEventScalarFieldEnum | XPEventScalarFieldEnum[]
  }

  /**
   * XPEvent findMany
   */
  export type XPEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter, which XPEvents to fetch.
     */
    where?: XPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of XPEvents to fetch.
     */
    orderBy?: XPEventOrderByWithRelationInput | XPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing XPEvents.
     */
    cursor?: XPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` XPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` XPEvents.
     */
    skip?: number
    distinct?: XPEventScalarFieldEnum | XPEventScalarFieldEnum[]
  }

  /**
   * XPEvent create
   */
  export type XPEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * The data needed to create a XPEvent.
     */
    data: XOR<XPEventCreateInput, XPEventUncheckedCreateInput>
  }

  /**
   * XPEvent createMany
   */
  export type XPEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many XPEvents.
     */
    data: XPEventCreateManyInput | XPEventCreateManyInput[]
  }

  /**
   * XPEvent update
   */
  export type XPEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * The data needed to update a XPEvent.
     */
    data: XOR<XPEventUpdateInput, XPEventUncheckedUpdateInput>
    /**
     * Choose, which XPEvent to update.
     */
    where: XPEventWhereUniqueInput
  }

  /**
   * XPEvent updateMany
   */
  export type XPEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update XPEvents.
     */
    data: XOR<XPEventUpdateManyMutationInput, XPEventUncheckedUpdateManyInput>
    /**
     * Filter which XPEvents to update
     */
    where?: XPEventWhereInput
    /**
     * Limit how many XPEvents to update.
     */
    limit?: number
  }

  /**
   * XPEvent upsert
   */
  export type XPEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * The filter to search for the XPEvent to update in case it exists.
     */
    where: XPEventWhereUniqueInput
    /**
     * In case the XPEvent found by the `where` argument doesn't exist, create a new XPEvent with this data.
     */
    create: XOR<XPEventCreateInput, XPEventUncheckedCreateInput>
    /**
     * In case the XPEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<XPEventUpdateInput, XPEventUncheckedUpdateInput>
  }

  /**
   * XPEvent delete
   */
  export type XPEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
    /**
     * Filter which XPEvent to delete.
     */
    where: XPEventWhereUniqueInput
  }

  /**
   * XPEvent deleteMany
   */
  export type XPEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which XPEvents to delete
     */
    where?: XPEventWhereInput
    /**
     * Limit how many XPEvents to delete.
     */
    limit?: number
  }

  /**
   * XPEvent findRaw
   */
  export type XPEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * XPEvent aggregateRaw
   */
  export type XPEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * XPEvent without action
   */
  export type XPEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the XPEvent
     */
    select?: XPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the XPEvent
     */
    omit?: XPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: XPEventInclude<ExtArgs> | null
  }


  /**
   * Model DailyActivity
   */

  export type AggregateDailyActivity = {
    _count: DailyActivityCountAggregateOutputType | null
    _avg: DailyActivityAvgAggregateOutputType | null
    _sum: DailyActivitySumAggregateOutputType | null
    _min: DailyActivityMinAggregateOutputType | null
    _max: DailyActivityMaxAggregateOutputType | null
  }

  export type DailyActivityAvgAggregateOutputType = {
    wordsLearned: number | null
    wordsReviewed: number | null
    xpEarned: number | null
    streakCount: number | null
  }

  export type DailyActivitySumAggregateOutputType = {
    wordsLearned: number | null
    wordsReviewed: number | null
    xpEarned: number | null
    streakCount: number | null
  }

  export type DailyActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    wordsLearned: number | null
    wordsReviewed: number | null
    xpEarned: number | null
    streakCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    wordsLearned: number | null
    wordsReviewed: number | null
    xpEarned: number | null
    streakCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyActivityCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    wordsLearned: number
    wordsReviewed: number
    xpEarned: number
    streakCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyActivityAvgAggregateInputType = {
    wordsLearned?: true
    wordsReviewed?: true
    xpEarned?: true
    streakCount?: true
  }

  export type DailyActivitySumAggregateInputType = {
    wordsLearned?: true
    wordsReviewed?: true
    xpEarned?: true
    streakCount?: true
  }

  export type DailyActivityMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    wordsLearned?: true
    wordsReviewed?: true
    xpEarned?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    wordsLearned?: true
    wordsReviewed?: true
    xpEarned?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyActivityCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    wordsLearned?: true
    wordsReviewed?: true
    xpEarned?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyActivity to aggregate.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyActivities
    **/
    _count?: true | DailyActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyActivityMaxAggregateInputType
  }

  export type GetDailyActivityAggregateType<T extends DailyActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyActivity[P]>
      : GetScalarType<T[P], AggregateDailyActivity[P]>
  }




  export type DailyActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyActivityWhereInput
    orderBy?: DailyActivityOrderByWithAggregationInput | DailyActivityOrderByWithAggregationInput[]
    by: DailyActivityScalarFieldEnum[] | DailyActivityScalarFieldEnum
    having?: DailyActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyActivityCountAggregateInputType | true
    _avg?: DailyActivityAvgAggregateInputType
    _sum?: DailyActivitySumAggregateInputType
    _min?: DailyActivityMinAggregateInputType
    _max?: DailyActivityMaxAggregateInputType
  }

  export type DailyActivityGroupByOutputType = {
    id: string
    userId: string
    date: Date
    wordsLearned: number
    wordsReviewed: number
    xpEarned: number
    streakCount: number
    createdAt: Date
    updatedAt: Date
    _count: DailyActivityCountAggregateOutputType | null
    _avg: DailyActivityAvgAggregateOutputType | null
    _sum: DailyActivitySumAggregateOutputType | null
    _min: DailyActivityMinAggregateOutputType | null
    _max: DailyActivityMaxAggregateOutputType | null
  }

  type GetDailyActivityGroupByPayload<T extends DailyActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyActivityGroupByOutputType[P]>
            : GetScalarType<T[P], DailyActivityGroupByOutputType[P]>
        }
      >
    >


  export type DailyActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    wordsLearned?: boolean
    wordsReviewed?: boolean
    xpEarned?: boolean
    streakCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyActivity"]>



  export type DailyActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    wordsLearned?: boolean
    wordsReviewed?: boolean
    xpEarned?: boolean
    streakCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "wordsLearned" | "wordsReviewed" | "xpEarned" | "streakCount" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyActivity"]>
  export type DailyActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      wordsLearned: number
      wordsReviewed: number
      xpEarned: number
      streakCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyActivity"]>
    composites: {}
  }

  type DailyActivityGetPayload<S extends boolean | null | undefined | DailyActivityDefaultArgs> = $Result.GetResult<Prisma.$DailyActivityPayload, S>

  type DailyActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyActivityCountAggregateInputType | true
    }

  export interface DailyActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyActivity'], meta: { name: 'DailyActivity' } }
    /**
     * Find zero or one DailyActivity that matches the filter.
     * @param {DailyActivityFindUniqueArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyActivityFindUniqueArgs>(args: SelectSubset<T, DailyActivityFindUniqueArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyActivityFindUniqueOrThrowArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindFirstArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyActivityFindFirstArgs>(args?: SelectSubset<T, DailyActivityFindFirstArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindFirstOrThrowArgs} args - Arguments to find a DailyActivity
     * @example
     * // Get one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyActivities
     * const dailyActivities = await prisma.dailyActivity.findMany()
     * 
     * // Get first 10 DailyActivities
     * const dailyActivities = await prisma.dailyActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyActivityWithIdOnly = await prisma.dailyActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyActivityFindManyArgs>(args?: SelectSubset<T, DailyActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyActivity.
     * @param {DailyActivityCreateArgs} args - Arguments to create a DailyActivity.
     * @example
     * // Create one DailyActivity
     * const DailyActivity = await prisma.dailyActivity.create({
     *   data: {
     *     // ... data to create a DailyActivity
     *   }
     * })
     * 
     */
    create<T extends DailyActivityCreateArgs>(args: SelectSubset<T, DailyActivityCreateArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyActivities.
     * @param {DailyActivityCreateManyArgs} args - Arguments to create many DailyActivities.
     * @example
     * // Create many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyActivityCreateManyArgs>(args?: SelectSubset<T, DailyActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyActivity.
     * @param {DailyActivityDeleteArgs} args - Arguments to delete one DailyActivity.
     * @example
     * // Delete one DailyActivity
     * const DailyActivity = await prisma.dailyActivity.delete({
     *   where: {
     *     // ... filter to delete one DailyActivity
     *   }
     * })
     * 
     */
    delete<T extends DailyActivityDeleteArgs>(args: SelectSubset<T, DailyActivityDeleteArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyActivity.
     * @param {DailyActivityUpdateArgs} args - Arguments to update one DailyActivity.
     * @example
     * // Update one DailyActivity
     * const dailyActivity = await prisma.dailyActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyActivityUpdateArgs>(args: SelectSubset<T, DailyActivityUpdateArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyActivities.
     * @param {DailyActivityDeleteManyArgs} args - Arguments to filter DailyActivities to delete.
     * @example
     * // Delete a few DailyActivities
     * const { count } = await prisma.dailyActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyActivityDeleteManyArgs>(args?: SelectSubset<T, DailyActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyActivities
     * const dailyActivity = await prisma.dailyActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyActivityUpdateManyArgs>(args: SelectSubset<T, DailyActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyActivity.
     * @param {DailyActivityUpsertArgs} args - Arguments to update or create a DailyActivity.
     * @example
     * // Update or create a DailyActivity
     * const dailyActivity = await prisma.dailyActivity.upsert({
     *   create: {
     *     // ... data to create a DailyActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyActivity we want to update
     *   }
     * })
     */
    upsert<T extends DailyActivityUpsertArgs>(args: SelectSubset<T, DailyActivityUpsertArgs<ExtArgs>>): Prisma__DailyActivityClient<$Result.GetResult<Prisma.$DailyActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyActivities that matches the filter.
     * @param {DailyActivityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dailyActivity = await prisma.dailyActivity.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DailyActivityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DailyActivity.
     * @param {DailyActivityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dailyActivity = await prisma.dailyActivity.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DailyActivityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DailyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityCountArgs} args - Arguments to filter DailyActivities to count.
     * @example
     * // Count the number of DailyActivities
     * const count = await prisma.dailyActivity.count({
     *   where: {
     *     // ... the filter for the DailyActivities we want to count
     *   }
     * })
    **/
    count<T extends DailyActivityCountArgs>(
      args?: Subset<T, DailyActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyActivityAggregateArgs>(args: Subset<T, DailyActivityAggregateArgs>): Prisma.PrismaPromise<GetDailyActivityAggregateType<T>>

    /**
     * Group by DailyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyActivityGroupByArgs} args - Group by arguments.
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
      T extends DailyActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyActivityGroupByArgs['orderBy'] }
        : { orderBy?: DailyActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyActivity model
   */
  readonly fields: DailyActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyActivity model
   */
  interface DailyActivityFieldRefs {
    readonly id: FieldRef<"DailyActivity", 'String'>
    readonly userId: FieldRef<"DailyActivity", 'String'>
    readonly date: FieldRef<"DailyActivity", 'DateTime'>
    readonly wordsLearned: FieldRef<"DailyActivity", 'Int'>
    readonly wordsReviewed: FieldRef<"DailyActivity", 'Int'>
    readonly xpEarned: FieldRef<"DailyActivity", 'Int'>
    readonly streakCount: FieldRef<"DailyActivity", 'Int'>
    readonly createdAt: FieldRef<"DailyActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyActivity findUnique
   */
  export type DailyActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity findUniqueOrThrow
   */
  export type DailyActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity findFirst
   */
  export type DailyActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyActivities.
     */
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity findFirstOrThrow
   */
  export type DailyActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivity to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyActivities.
     */
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity findMany
   */
  export type DailyActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter, which DailyActivities to fetch.
     */
    where?: DailyActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyActivities to fetch.
     */
    orderBy?: DailyActivityOrderByWithRelationInput | DailyActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyActivities.
     */
    cursor?: DailyActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyActivities.
     */
    skip?: number
    distinct?: DailyActivityScalarFieldEnum | DailyActivityScalarFieldEnum[]
  }

  /**
   * DailyActivity create
   */
  export type DailyActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyActivity.
     */
    data: XOR<DailyActivityCreateInput, DailyActivityUncheckedCreateInput>
  }

  /**
   * DailyActivity createMany
   */
  export type DailyActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyActivities.
     */
    data: DailyActivityCreateManyInput | DailyActivityCreateManyInput[]
  }

  /**
   * DailyActivity update
   */
  export type DailyActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyActivity.
     */
    data: XOR<DailyActivityUpdateInput, DailyActivityUncheckedUpdateInput>
    /**
     * Choose, which DailyActivity to update.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity updateMany
   */
  export type DailyActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyActivities.
     */
    data: XOR<DailyActivityUpdateManyMutationInput, DailyActivityUncheckedUpdateManyInput>
    /**
     * Filter which DailyActivities to update
     */
    where?: DailyActivityWhereInput
    /**
     * Limit how many DailyActivities to update.
     */
    limit?: number
  }

  /**
   * DailyActivity upsert
   */
  export type DailyActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyActivity to update in case it exists.
     */
    where: DailyActivityWhereUniqueInput
    /**
     * In case the DailyActivity found by the `where` argument doesn't exist, create a new DailyActivity with this data.
     */
    create: XOR<DailyActivityCreateInput, DailyActivityUncheckedCreateInput>
    /**
     * In case the DailyActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyActivityUpdateInput, DailyActivityUncheckedUpdateInput>
  }

  /**
   * DailyActivity delete
   */
  export type DailyActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
    /**
     * Filter which DailyActivity to delete.
     */
    where: DailyActivityWhereUniqueInput
  }

  /**
   * DailyActivity deleteMany
   */
  export type DailyActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyActivities to delete
     */
    where?: DailyActivityWhereInput
    /**
     * Limit how many DailyActivities to delete.
     */
    limit?: number
  }

  /**
   * DailyActivity findRaw
   */
  export type DailyActivityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyActivity aggregateRaw
   */
  export type DailyActivityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DailyActivity without action
   */
  export type DailyActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyActivity
     */
    select?: DailyActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyActivity
     */
    omit?: DailyActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyActivityInclude<ExtArgs> | null
  }


  /**
   * Model DictionaryWord
   */

  export type AggregateDictionaryWord = {
    _count: DictionaryWordCountAggregateOutputType | null
    _min: DictionaryWordMinAggregateOutputType | null
    _max: DictionaryWordMaxAggregateOutputType | null
  }

  export type DictionaryWordMinAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    meaning: string | null
    definition: string | null
    example: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DictionaryWordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    pronunciation: string | null
    meaning: string | null
    definition: string | null
    example: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DictionaryWordCountAggregateOutputType = {
    id: number
    word: number
    pronunciation: number
    meaning: number
    definition: number
    example: number
    audioUrl: number
    cefrLevel: number
    partOfSpeech: number
    alternativePartOfSpeech: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DictionaryWordMinAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DictionaryWordMaxAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DictionaryWordCountAggregateInputType = {
    id?: true
    word?: true
    pronunciation?: true
    meaning?: true
    definition?: true
    example?: true
    audioUrl?: true
    cefrLevel?: true
    partOfSpeech?: true
    alternativePartOfSpeech?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DictionaryWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryWord to aggregate.
     */
    where?: DictionaryWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryWords to fetch.
     */
    orderBy?: DictionaryWordOrderByWithRelationInput | DictionaryWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DictionaryWords
    **/
    _count?: true | DictionaryWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryWordMaxAggregateInputType
  }

  export type GetDictionaryWordAggregateType<T extends DictionaryWordAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionaryWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionaryWord[P]>
      : GetScalarType<T[P], AggregateDictionaryWord[P]>
  }




  export type DictionaryWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryWordWhereInput
    orderBy?: DictionaryWordOrderByWithAggregationInput | DictionaryWordOrderByWithAggregationInput[]
    by: DictionaryWordScalarFieldEnum[] | DictionaryWordScalarFieldEnum
    having?: DictionaryWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryWordCountAggregateInputType | true
    _min?: DictionaryWordMinAggregateInputType
    _max?: DictionaryWordMaxAggregateInputType
  }

  export type DictionaryWordGroupByOutputType = {
    id: string
    word: string
    pronunciation: string | null
    meaning: string
    definition: string | null
    example: string | null
    audioUrl: string | null
    cefrLevel: string | null
    partOfSpeech: $Enums.PartOfSpeech
    alternativePartOfSpeech: $Enums.PartOfSpeech[]
    createdAt: Date
    updatedAt: Date
    _count: DictionaryWordCountAggregateOutputType | null
    _min: DictionaryWordMinAggregateOutputType | null
    _max: DictionaryWordMaxAggregateOutputType | null
  }

  type GetDictionaryWordGroupByPayload<T extends DictionaryWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryWordGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryWordGroupByOutputType[P]>
        }
      >
    >


  export type DictionaryWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    meaning?: boolean
    definition?: boolean
    example?: boolean
    audioUrl?: boolean
    cefrLevel?: boolean
    partOfSpeech?: boolean
    alternativePartOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dictionaryWord"]>



  export type DictionaryWordSelectScalar = {
    id?: boolean
    word?: boolean
    pronunciation?: boolean
    meaning?: boolean
    definition?: boolean
    example?: boolean
    audioUrl?: boolean
    cefrLevel?: boolean
    partOfSpeech?: boolean
    alternativePartOfSpeech?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DictionaryWordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "pronunciation" | "meaning" | "definition" | "example" | "audioUrl" | "cefrLevel" | "partOfSpeech" | "alternativePartOfSpeech" | "createdAt" | "updatedAt", ExtArgs["result"]["dictionaryWord"]>

  export type $DictionaryWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DictionaryWord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      pronunciation: string | null
      meaning: string
      definition: string | null
      example: string | null
      audioUrl: string | null
      cefrLevel: string | null
      partOfSpeech: $Enums.PartOfSpeech
      alternativePartOfSpeech: $Enums.PartOfSpeech[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dictionaryWord"]>
    composites: {}
  }

  type DictionaryWordGetPayload<S extends boolean | null | undefined | DictionaryWordDefaultArgs> = $Result.GetResult<Prisma.$DictionaryWordPayload, S>

  type DictionaryWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryWordCountAggregateInputType | true
    }

  export interface DictionaryWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DictionaryWord'], meta: { name: 'DictionaryWord' } }
    /**
     * Find zero or one DictionaryWord that matches the filter.
     * @param {DictionaryWordFindUniqueArgs} args - Arguments to find a DictionaryWord
     * @example
     * // Get one DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryWordFindUniqueArgs>(args: SelectSubset<T, DictionaryWordFindUniqueArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DictionaryWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryWordFindUniqueOrThrowArgs} args - Arguments to find a DictionaryWord
     * @example
     * // Get one DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryWordFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordFindFirstArgs} args - Arguments to find a DictionaryWord
     * @example
     * // Get one DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryWordFindFirstArgs>(args?: SelectSubset<T, DictionaryWordFindFirstArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DictionaryWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordFindFirstOrThrowArgs} args - Arguments to find a DictionaryWord
     * @example
     * // Get one DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryWordFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryWordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DictionaryWords
     * const dictionaryWords = await prisma.dictionaryWord.findMany()
     * 
     * // Get first 10 DictionaryWords
     * const dictionaryWords = await prisma.dictionaryWord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dictionaryWordWithIdOnly = await prisma.dictionaryWord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DictionaryWordFindManyArgs>(args?: SelectSubset<T, DictionaryWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DictionaryWord.
     * @param {DictionaryWordCreateArgs} args - Arguments to create a DictionaryWord.
     * @example
     * // Create one DictionaryWord
     * const DictionaryWord = await prisma.dictionaryWord.create({
     *   data: {
     *     // ... data to create a DictionaryWord
     *   }
     * })
     * 
     */
    create<T extends DictionaryWordCreateArgs>(args: SelectSubset<T, DictionaryWordCreateArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DictionaryWords.
     * @param {DictionaryWordCreateManyArgs} args - Arguments to create many DictionaryWords.
     * @example
     * // Create many DictionaryWords
     * const dictionaryWord = await prisma.dictionaryWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryWordCreateManyArgs>(args?: SelectSubset<T, DictionaryWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DictionaryWord.
     * @param {DictionaryWordDeleteArgs} args - Arguments to delete one DictionaryWord.
     * @example
     * // Delete one DictionaryWord
     * const DictionaryWord = await prisma.dictionaryWord.delete({
     *   where: {
     *     // ... filter to delete one DictionaryWord
     *   }
     * })
     * 
     */
    delete<T extends DictionaryWordDeleteArgs>(args: SelectSubset<T, DictionaryWordDeleteArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DictionaryWord.
     * @param {DictionaryWordUpdateArgs} args - Arguments to update one DictionaryWord.
     * @example
     * // Update one DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryWordUpdateArgs>(args: SelectSubset<T, DictionaryWordUpdateArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DictionaryWords.
     * @param {DictionaryWordDeleteManyArgs} args - Arguments to filter DictionaryWords to delete.
     * @example
     * // Delete a few DictionaryWords
     * const { count } = await prisma.dictionaryWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryWordDeleteManyArgs>(args?: SelectSubset<T, DictionaryWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DictionaryWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DictionaryWords
     * const dictionaryWord = await prisma.dictionaryWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryWordUpdateManyArgs>(args: SelectSubset<T, DictionaryWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DictionaryWord.
     * @param {DictionaryWordUpsertArgs} args - Arguments to update or create a DictionaryWord.
     * @example
     * // Update or create a DictionaryWord
     * const dictionaryWord = await prisma.dictionaryWord.upsert({
     *   create: {
     *     // ... data to create a DictionaryWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DictionaryWord we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryWordUpsertArgs>(args: SelectSubset<T, DictionaryWordUpsertArgs<ExtArgs>>): Prisma__DictionaryWordClient<$Result.GetResult<Prisma.$DictionaryWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DictionaryWords that matches the filter.
     * @param {DictionaryWordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dictionaryWord = await prisma.dictionaryWord.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DictionaryWordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DictionaryWord.
     * @param {DictionaryWordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dictionaryWord = await prisma.dictionaryWord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DictionaryWordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DictionaryWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordCountArgs} args - Arguments to filter DictionaryWords to count.
     * @example
     * // Count the number of DictionaryWords
     * const count = await prisma.dictionaryWord.count({
     *   where: {
     *     // ... the filter for the DictionaryWords we want to count
     *   }
     * })
    **/
    count<T extends DictionaryWordCountArgs>(
      args?: Subset<T, DictionaryWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DictionaryWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DictionaryWordAggregateArgs>(args: Subset<T, DictionaryWordAggregateArgs>): Prisma.PrismaPromise<GetDictionaryWordAggregateType<T>>

    /**
     * Group by DictionaryWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryWordGroupByArgs} args - Group by arguments.
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
      T extends DictionaryWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryWordGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryWordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DictionaryWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DictionaryWord model
   */
  readonly fields: DictionaryWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DictionaryWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DictionaryWord model
   */
  interface DictionaryWordFieldRefs {
    readonly id: FieldRef<"DictionaryWord", 'String'>
    readonly word: FieldRef<"DictionaryWord", 'String'>
    readonly pronunciation: FieldRef<"DictionaryWord", 'String'>
    readonly meaning: FieldRef<"DictionaryWord", 'String'>
    readonly definition: FieldRef<"DictionaryWord", 'String'>
    readonly example: FieldRef<"DictionaryWord", 'String'>
    readonly audioUrl: FieldRef<"DictionaryWord", 'String'>
    readonly cefrLevel: FieldRef<"DictionaryWord", 'String'>
    readonly partOfSpeech: FieldRef<"DictionaryWord", 'PartOfSpeech'>
    readonly alternativePartOfSpeech: FieldRef<"DictionaryWord", 'PartOfSpeech[]'>
    readonly createdAt: FieldRef<"DictionaryWord", 'DateTime'>
    readonly updatedAt: FieldRef<"DictionaryWord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DictionaryWord findUnique
   */
  export type DictionaryWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter, which DictionaryWord to fetch.
     */
    where: DictionaryWordWhereUniqueInput
  }

  /**
   * DictionaryWord findUniqueOrThrow
   */
  export type DictionaryWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter, which DictionaryWord to fetch.
     */
    where: DictionaryWordWhereUniqueInput
  }

  /**
   * DictionaryWord findFirst
   */
  export type DictionaryWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter, which DictionaryWord to fetch.
     */
    where?: DictionaryWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryWords to fetch.
     */
    orderBy?: DictionaryWordOrderByWithRelationInput | DictionaryWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryWords.
     */
    cursor?: DictionaryWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryWords.
     */
    distinct?: DictionaryWordScalarFieldEnum | DictionaryWordScalarFieldEnum[]
  }

  /**
   * DictionaryWord findFirstOrThrow
   */
  export type DictionaryWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter, which DictionaryWord to fetch.
     */
    where?: DictionaryWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryWords to fetch.
     */
    orderBy?: DictionaryWordOrderByWithRelationInput | DictionaryWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DictionaryWords.
     */
    cursor?: DictionaryWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DictionaryWords.
     */
    distinct?: DictionaryWordScalarFieldEnum | DictionaryWordScalarFieldEnum[]
  }

  /**
   * DictionaryWord findMany
   */
  export type DictionaryWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter, which DictionaryWords to fetch.
     */
    where?: DictionaryWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DictionaryWords to fetch.
     */
    orderBy?: DictionaryWordOrderByWithRelationInput | DictionaryWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DictionaryWords.
     */
    cursor?: DictionaryWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DictionaryWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DictionaryWords.
     */
    skip?: number
    distinct?: DictionaryWordScalarFieldEnum | DictionaryWordScalarFieldEnum[]
  }

  /**
   * DictionaryWord create
   */
  export type DictionaryWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * The data needed to create a DictionaryWord.
     */
    data: XOR<DictionaryWordCreateInput, DictionaryWordUncheckedCreateInput>
  }

  /**
   * DictionaryWord createMany
   */
  export type DictionaryWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DictionaryWords.
     */
    data: DictionaryWordCreateManyInput | DictionaryWordCreateManyInput[]
  }

  /**
   * DictionaryWord update
   */
  export type DictionaryWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * The data needed to update a DictionaryWord.
     */
    data: XOR<DictionaryWordUpdateInput, DictionaryWordUncheckedUpdateInput>
    /**
     * Choose, which DictionaryWord to update.
     */
    where: DictionaryWordWhereUniqueInput
  }

  /**
   * DictionaryWord updateMany
   */
  export type DictionaryWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DictionaryWords.
     */
    data: XOR<DictionaryWordUpdateManyMutationInput, DictionaryWordUncheckedUpdateManyInput>
    /**
     * Filter which DictionaryWords to update
     */
    where?: DictionaryWordWhereInput
    /**
     * Limit how many DictionaryWords to update.
     */
    limit?: number
  }

  /**
   * DictionaryWord upsert
   */
  export type DictionaryWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * The filter to search for the DictionaryWord to update in case it exists.
     */
    where: DictionaryWordWhereUniqueInput
    /**
     * In case the DictionaryWord found by the `where` argument doesn't exist, create a new DictionaryWord with this data.
     */
    create: XOR<DictionaryWordCreateInput, DictionaryWordUncheckedCreateInput>
    /**
     * In case the DictionaryWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryWordUpdateInput, DictionaryWordUncheckedUpdateInput>
  }

  /**
   * DictionaryWord delete
   */
  export type DictionaryWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
    /**
     * Filter which DictionaryWord to delete.
     */
    where: DictionaryWordWhereUniqueInput
  }

  /**
   * DictionaryWord deleteMany
   */
  export type DictionaryWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DictionaryWords to delete
     */
    where?: DictionaryWordWhereInput
    /**
     * Limit how many DictionaryWords to delete.
     */
    limit?: number
  }

  /**
   * DictionaryWord findRaw
   */
  export type DictionaryWordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DictionaryWord aggregateRaw
   */
  export type DictionaryWordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DictionaryWord without action
   */
  export type DictionaryWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DictionaryWord
     */
    select?: DictionaryWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DictionaryWord
     */
    omit?: DictionaryWordOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatarUrl: 'avatarUrl',
    level: 'level',
    xp: 'xp',
    streak: 'streak',
    lastLearningDate: 'lastLearningDate',
    totalWordsLearned: 'totalWordsLearned',
    dailyGoal: 'dailyGoal',
    difficultyPreference: 'difficultyPreference',
    notificationsEnabled: 'notificationsEnabled',
    publicProfile: 'publicProfile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const StudySetScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    tags: 'tags',
    isPublic: 'isPublic',
    likesCount: 'likesCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    categoryId: 'categoryId'
  };

  export type StudySetScalarFieldEnum = (typeof StudySetScalarFieldEnum)[keyof typeof StudySetScalarFieldEnum]


  export const VocabularyScalarFieldEnum: {
    id: 'id',
    word: 'word',
    pronunciation: 'pronunciation',
    meaning: 'meaning',
    definition: 'definition',
    example: 'example',
    imageUrl: 'imageUrl',
    audioUrl: 'audioUrl',
    cefrLevel: 'cefrLevel',
    partOfSpeech: 'partOfSpeech',
    alternativePartOfSpeech: 'alternativePartOfSpeech',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    studySetId: 'studySetId',
    createdById: 'createdById'
  };

  export type VocabularyScalarFieldEnum = (typeof VocabularyScalarFieldEnum)[keyof typeof VocabularyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    icon: 'icon',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    type: 'type',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const UserLikesStudySetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    studySetId: 'studySetId',
    createdAt: 'createdAt'
  };

  export type UserLikesStudySetScalarFieldEnum = (typeof UserLikesStudySetScalarFieldEnum)[keyof typeof UserLikesStudySetScalarFieldEnum]


  export const UserVocabularyProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vocabularyId: 'vocabularyId',
    status: 'status',
    lastReviewedAt: 'lastReviewedAt',
    nextReviewAt: 'nextReviewAt',
    reviewCount: 'reviewCount',
    correctCount: 'correctCount',
    incorrectCount: 'incorrectCount',
    easeFactor: 'easeFactor',
    interval: 'interval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserVocabularyProgressScalarFieldEnum = (typeof UserVocabularyProgressScalarFieldEnum)[keyof typeof UserVocabularyProgressScalarFieldEnum]


  export const UserUniqueWordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    word: 'word',
    firstLearnedAt: 'firstLearnedAt'
  };

  export type UserUniqueWordScalarFieldEnum = (typeof UserUniqueWordScalarFieldEnum)[keyof typeof UserUniqueWordScalarFieldEnum]


  export const XPEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventType: 'eventType',
    xpAmount: 'xpAmount',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type XPEventScalarFieldEnum = (typeof XPEventScalarFieldEnum)[keyof typeof XPEventScalarFieldEnum]


  export const DailyActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    wordsLearned: 'wordsLearned',
    wordsReviewed: 'wordsReviewed',
    xpEarned: 'xpEarned',
    streakCount: 'streakCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyActivityScalarFieldEnum = (typeof DailyActivityScalarFieldEnum)[keyof typeof DailyActivityScalarFieldEnum]


  export const DictionaryWordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    pronunciation: 'pronunciation',
    meaning: 'meaning',
    definition: 'definition',
    example: 'example',
    audioUrl: 'audioUrl',
    cefrLevel: 'cefrLevel',
    partOfSpeech: 'partOfSpeech',
    alternativePartOfSpeech: 'alternativePartOfSpeech',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DictionaryWordScalarFieldEnum = (typeof DictionaryWordScalarFieldEnum)[keyof typeof DictionaryWordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'PartOfSpeech'
   */
  export type EnumPartOfSpeechFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartOfSpeech'>
    


  /**
   * Reference to a field of type 'PartOfSpeech[]'
   */
  export type ListEnumPartOfSpeechFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartOfSpeech[]'>
    


  /**
   * Reference to a field of type 'VerificationType'
   */
  export type EnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType'>
    


  /**
   * Reference to a field of type 'VerificationType[]'
   */
  export type ListEnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    lastLearningDate?: DateTimeNullableFilter<"User"> | Date | string | null
    totalWordsLearned?: IntFilter<"User"> | number
    dailyGoal?: IntFilter<"User"> | number
    difficultyPreference?: StringFilter<"User"> | string
    notificationsEnabled?: BoolFilter<"User"> | boolean
    publicProfile?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    tokens?: RefreshTokenListRelationFilter
    vocabularies?: VocabularyListRelationFilter
    studySets?: StudySetListRelationFilter
    likedStudySets?: UserLikesStudySetListRelationFilter
    categories?: CategoryListRelationFilter
    vocabularyProgress?: UserVocabularyProgressListRelationFilter
    uniqueWordsLearned?: UserUniqueWordListRelationFilter
    xpEvents?: XPEventListRelationFilter
    dailyActivities?: DailyActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    lastLearningDate?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
    difficultyPreference?: SortOrder
    notificationsEnabled?: SortOrder
    publicProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    tokens?: RefreshTokenOrderByRelationAggregateInput
    vocabularies?: VocabularyOrderByRelationAggregateInput
    studySets?: StudySetOrderByRelationAggregateInput
    likedStudySets?: UserLikesStudySetOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    vocabularyProgress?: UserVocabularyProgressOrderByRelationAggregateInput
    uniqueWordsLearned?: UserUniqueWordOrderByRelationAggregateInput
    xpEvents?: XPEventOrderByRelationAggregateInput
    dailyActivities?: DailyActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    lastLearningDate?: DateTimeNullableFilter<"User"> | Date | string | null
    totalWordsLearned?: IntFilter<"User"> | number
    dailyGoal?: IntFilter<"User"> | number
    difficultyPreference?: StringFilter<"User"> | string
    notificationsEnabled?: BoolFilter<"User"> | boolean
    publicProfile?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    status?: StringFilter<"User"> | string
    tokens?: RefreshTokenListRelationFilter
    vocabularies?: VocabularyListRelationFilter
    studySets?: StudySetListRelationFilter
    likedStudySets?: UserLikesStudySetListRelationFilter
    categories?: CategoryListRelationFilter
    vocabularyProgress?: UserVocabularyProgressListRelationFilter
    uniqueWordsLearned?: UserUniqueWordListRelationFilter
    xpEvents?: XPEventListRelationFilter
    dailyActivities?: DailyActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    lastLearningDate?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
    difficultyPreference?: SortOrder
    notificationsEnabled?: SortOrder
    publicProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    level?: IntWithAggregatesFilter<"User"> | number
    xp?: IntWithAggregatesFilter<"User"> | number
    streak?: IntWithAggregatesFilter<"User"> | number
    lastLearningDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    totalWordsLearned?: IntWithAggregatesFilter<"User"> | number
    dailyGoal?: IntWithAggregatesFilter<"User"> | number
    difficultyPreference?: StringWithAggregatesFilter<"User"> | string
    notificationsEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    publicProfile?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: StringWithAggregatesFilter<"User"> | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type StudySetWhereInput = {
    AND?: StudySetWhereInput | StudySetWhereInput[]
    OR?: StudySetWhereInput[]
    NOT?: StudySetWhereInput | StudySetWhereInput[]
    id?: StringFilter<"StudySet"> | string
    title?: StringFilter<"StudySet"> | string
    description?: StringNullableFilter<"StudySet"> | string | null
    level?: EnumLevelFilter<"StudySet"> | $Enums.Level
    tags?: StringNullableListFilter<"StudySet">
    isPublic?: BoolFilter<"StudySet"> | boolean
    likesCount?: IntFilter<"StudySet"> | number
    createdAt?: DateTimeFilter<"StudySet"> | Date | string
    updatedAt?: DateTimeFilter<"StudySet"> | Date | string
    authorId?: StringFilter<"StudySet"> | string
    categoryId?: StringFilter<"StudySet"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    vocabularies?: VocabularyListRelationFilter
    likedBy?: UserLikesStudySetListRelationFilter
  }

  export type StudySetOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    author?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    vocabularies?: VocabularyOrderByRelationAggregateInput
    likedBy?: UserLikesStudySetOrderByRelationAggregateInput
  }

  export type StudySetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudySetWhereInput | StudySetWhereInput[]
    OR?: StudySetWhereInput[]
    NOT?: StudySetWhereInput | StudySetWhereInput[]
    title?: StringFilter<"StudySet"> | string
    description?: StringNullableFilter<"StudySet"> | string | null
    level?: EnumLevelFilter<"StudySet"> | $Enums.Level
    tags?: StringNullableListFilter<"StudySet">
    isPublic?: BoolFilter<"StudySet"> | boolean
    likesCount?: IntFilter<"StudySet"> | number
    createdAt?: DateTimeFilter<"StudySet"> | Date | string
    updatedAt?: DateTimeFilter<"StudySet"> | Date | string
    authorId?: StringFilter<"StudySet"> | string
    categoryId?: StringFilter<"StudySet"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    vocabularies?: VocabularyListRelationFilter
    likedBy?: UserLikesStudySetListRelationFilter
  }, "id">

  export type StudySetOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    _count?: StudySetCountOrderByAggregateInput
    _avg?: StudySetAvgOrderByAggregateInput
    _max?: StudySetMaxOrderByAggregateInput
    _min?: StudySetMinOrderByAggregateInput
    _sum?: StudySetSumOrderByAggregateInput
  }

  export type StudySetScalarWhereWithAggregatesInput = {
    AND?: StudySetScalarWhereWithAggregatesInput | StudySetScalarWhereWithAggregatesInput[]
    OR?: StudySetScalarWhereWithAggregatesInput[]
    NOT?: StudySetScalarWhereWithAggregatesInput | StudySetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudySet"> | string
    title?: StringWithAggregatesFilter<"StudySet"> | string
    description?: StringNullableWithAggregatesFilter<"StudySet"> | string | null
    level?: EnumLevelWithAggregatesFilter<"StudySet"> | $Enums.Level
    tags?: StringNullableListFilter<"StudySet">
    isPublic?: BoolWithAggregatesFilter<"StudySet"> | boolean
    likesCount?: IntWithAggregatesFilter<"StudySet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudySet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudySet"> | Date | string
    authorId?: StringWithAggregatesFilter<"StudySet"> | string
    categoryId?: StringWithAggregatesFilter<"StudySet"> | string
  }

  export type VocabularyWhereInput = {
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    id?: StringFilter<"Vocabulary"> | string
    word?: StringFilter<"Vocabulary"> | string
    pronunciation?: StringNullableFilter<"Vocabulary"> | string | null
    meaning?: StringFilter<"Vocabulary"> | string
    definition?: StringNullableFilter<"Vocabulary"> | string | null
    example?: StringNullableFilter<"Vocabulary"> | string | null
    imageUrl?: StringNullableFilter<"Vocabulary"> | string | null
    audioUrl?: StringNullableFilter<"Vocabulary"> | string | null
    cefrLevel?: StringNullableFilter<"Vocabulary"> | string | null
    partOfSpeech?: EnumPartOfSpeechFilter<"Vocabulary"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"Vocabulary">
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
    studySetId?: StringFilter<"Vocabulary"> | string
    createdById?: StringFilter<"Vocabulary"> | string
    studySet?: XOR<StudySetScalarRelationFilter, StudySetWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    vocabularyProgress?: UserVocabularyProgressListRelationFilter
  }

  export type VocabularyOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studySetId?: SortOrder
    createdById?: SortOrder
    studySet?: StudySetOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    vocabularyProgress?: UserVocabularyProgressOrderByRelationAggregateInput
  }

  export type VocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word_studySetId?: VocabularyWordStudySetIdCompoundUniqueInput
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    word?: StringFilter<"Vocabulary"> | string
    pronunciation?: StringNullableFilter<"Vocabulary"> | string | null
    meaning?: StringFilter<"Vocabulary"> | string
    definition?: StringNullableFilter<"Vocabulary"> | string | null
    example?: StringNullableFilter<"Vocabulary"> | string | null
    imageUrl?: StringNullableFilter<"Vocabulary"> | string | null
    audioUrl?: StringNullableFilter<"Vocabulary"> | string | null
    cefrLevel?: StringNullableFilter<"Vocabulary"> | string | null
    partOfSpeech?: EnumPartOfSpeechFilter<"Vocabulary"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"Vocabulary">
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
    studySetId?: StringFilter<"Vocabulary"> | string
    createdById?: StringFilter<"Vocabulary"> | string
    studySet?: XOR<StudySetScalarRelationFilter, StudySetWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    vocabularyProgress?: UserVocabularyProgressListRelationFilter
  }, "id" | "word_studySetId">

  export type VocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studySetId?: SortOrder
    createdById?: SortOrder
    _count?: VocabularyCountOrderByAggregateInput
    _max?: VocabularyMaxOrderByAggregateInput
    _min?: VocabularyMinOrderByAggregateInput
  }

  export type VocabularyScalarWhereWithAggregatesInput = {
    AND?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    OR?: VocabularyScalarWhereWithAggregatesInput[]
    NOT?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vocabulary"> | string
    word?: StringWithAggregatesFilter<"Vocabulary"> | string
    pronunciation?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    meaning?: StringWithAggregatesFilter<"Vocabulary"> | string
    definition?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    example?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    cefrLevel?: StringNullableWithAggregatesFilter<"Vocabulary"> | string | null
    partOfSpeech?: EnumPartOfSpeechWithAggregatesFilter<"Vocabulary"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"Vocabulary">
    createdAt?: DateTimeWithAggregatesFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vocabulary"> | Date | string
    studySetId?: StringWithAggregatesFilter<"Vocabulary"> | string
    createdById?: StringWithAggregatesFilter<"Vocabulary"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    icon?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    authorId?: StringFilter<"Category"> | string
    studySets?: StudySetListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    studySets?: StudySetOrderByRelationAggregateInput
    author?: UserOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_authorId?: CategoryNameAuthorIdCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    icon?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    authorId?: StringFilter<"Category"> | string
    studySets?: StudySetListRelationFilter
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "name_authorId">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringWithAggregatesFilter<"Category"> | string
    color?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    authorId?: StringWithAggregatesFilter<"Category"> | string
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    email?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    type?: EnumVerificationTypeFilter<"VerificationCode"> | $Enums.VerificationType
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    code?: StringFilter<"VerificationCode"> | string
    type?: EnumVerificationTypeFilter<"VerificationCode"> | $Enums.VerificationType
    expiresAt?: DateTimeFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
  }, "id" | "email">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    email?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    type?: EnumVerificationTypeWithAggregatesFilter<"VerificationCode"> | $Enums.VerificationType
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
  }

  export type UserLikesStudySetWhereInput = {
    AND?: UserLikesStudySetWhereInput | UserLikesStudySetWhereInput[]
    OR?: UserLikesStudySetWhereInput[]
    NOT?: UserLikesStudySetWhereInput | UserLikesStudySetWhereInput[]
    id?: StringFilter<"UserLikesStudySet"> | string
    userId?: StringFilter<"UserLikesStudySet"> | string
    studySetId?: StringFilter<"UserLikesStudySet"> | string
    createdAt?: DateTimeFilter<"UserLikesStudySet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studySet?: XOR<StudySetScalarRelationFilter, StudySetWhereInput>
  }

  export type UserLikesStudySetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    studySetId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studySet?: StudySetOrderByWithRelationInput
  }

  export type UserLikesStudySetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_studySetId?: UserLikesStudySetUserIdStudySetIdCompoundUniqueInput
    AND?: UserLikesStudySetWhereInput | UserLikesStudySetWhereInput[]
    OR?: UserLikesStudySetWhereInput[]
    NOT?: UserLikesStudySetWhereInput | UserLikesStudySetWhereInput[]
    userId?: StringFilter<"UserLikesStudySet"> | string
    studySetId?: StringFilter<"UserLikesStudySet"> | string
    createdAt?: DateTimeFilter<"UserLikesStudySet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studySet?: XOR<StudySetScalarRelationFilter, StudySetWhereInput>
  }, "id" | "userId_studySetId">

  export type UserLikesStudySetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    studySetId?: SortOrder
    createdAt?: SortOrder
    _count?: UserLikesStudySetCountOrderByAggregateInput
    _max?: UserLikesStudySetMaxOrderByAggregateInput
    _min?: UserLikesStudySetMinOrderByAggregateInput
  }

  export type UserLikesStudySetScalarWhereWithAggregatesInput = {
    AND?: UserLikesStudySetScalarWhereWithAggregatesInput | UserLikesStudySetScalarWhereWithAggregatesInput[]
    OR?: UserLikesStudySetScalarWhereWithAggregatesInput[]
    NOT?: UserLikesStudySetScalarWhereWithAggregatesInput | UserLikesStudySetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLikesStudySet"> | string
    userId?: StringWithAggregatesFilter<"UserLikesStudySet"> | string
    studySetId?: StringWithAggregatesFilter<"UserLikesStudySet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLikesStudySet"> | Date | string
  }

  export type UserVocabularyProgressWhereInput = {
    AND?: UserVocabularyProgressWhereInput | UserVocabularyProgressWhereInput[]
    OR?: UserVocabularyProgressWhereInput[]
    NOT?: UserVocabularyProgressWhereInput | UserVocabularyProgressWhereInput[]
    id?: StringFilter<"UserVocabularyProgress"> | string
    userId?: StringFilter<"UserVocabularyProgress"> | string
    vocabularyId?: StringFilter<"UserVocabularyProgress"> | string
    status?: StringFilter<"UserVocabularyProgress"> | string
    lastReviewedAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    nextReviewAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    reviewCount?: IntFilter<"UserVocabularyProgress"> | number
    correctCount?: IntFilter<"UserVocabularyProgress"> | number
    incorrectCount?: IntFilter<"UserVocabularyProgress"> | number
    easeFactor?: FloatFilter<"UserVocabularyProgress"> | number
    interval?: IntFilter<"UserVocabularyProgress"> | number
    createdAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vocabulary?: XOR<VocabularyScalarRelationFilter, VocabularyWhereInput>
  }

  export type UserVocabularyProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vocabularyId?: SortOrder
    status?: SortOrder
    lastReviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    vocabulary?: VocabularyOrderByWithRelationInput
  }

  export type UserVocabularyProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_vocabularyId?: UserVocabularyProgressUserIdVocabularyIdCompoundUniqueInput
    AND?: UserVocabularyProgressWhereInput | UserVocabularyProgressWhereInput[]
    OR?: UserVocabularyProgressWhereInput[]
    NOT?: UserVocabularyProgressWhereInput | UserVocabularyProgressWhereInput[]
    userId?: StringFilter<"UserVocabularyProgress"> | string
    vocabularyId?: StringFilter<"UserVocabularyProgress"> | string
    status?: StringFilter<"UserVocabularyProgress"> | string
    lastReviewedAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    nextReviewAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    reviewCount?: IntFilter<"UserVocabularyProgress"> | number
    correctCount?: IntFilter<"UserVocabularyProgress"> | number
    incorrectCount?: IntFilter<"UserVocabularyProgress"> | number
    easeFactor?: FloatFilter<"UserVocabularyProgress"> | number
    interval?: IntFilter<"UserVocabularyProgress"> | number
    createdAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vocabulary?: XOR<VocabularyScalarRelationFilter, VocabularyWhereInput>
  }, "id" | "userId_vocabularyId">

  export type UserVocabularyProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vocabularyId?: SortOrder
    status?: SortOrder
    lastReviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserVocabularyProgressCountOrderByAggregateInput
    _avg?: UserVocabularyProgressAvgOrderByAggregateInput
    _max?: UserVocabularyProgressMaxOrderByAggregateInput
    _min?: UserVocabularyProgressMinOrderByAggregateInput
    _sum?: UserVocabularyProgressSumOrderByAggregateInput
  }

  export type UserVocabularyProgressScalarWhereWithAggregatesInput = {
    AND?: UserVocabularyProgressScalarWhereWithAggregatesInput | UserVocabularyProgressScalarWhereWithAggregatesInput[]
    OR?: UserVocabularyProgressScalarWhereWithAggregatesInput[]
    NOT?: UserVocabularyProgressScalarWhereWithAggregatesInput | UserVocabularyProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVocabularyProgress"> | string
    userId?: StringWithAggregatesFilter<"UserVocabularyProgress"> | string
    vocabularyId?: StringWithAggregatesFilter<"UserVocabularyProgress"> | string
    status?: StringWithAggregatesFilter<"UserVocabularyProgress"> | string
    lastReviewedAt?: DateTimeNullableWithAggregatesFilter<"UserVocabularyProgress"> | Date | string | null
    nextReviewAt?: DateTimeNullableWithAggregatesFilter<"UserVocabularyProgress"> | Date | string | null
    reviewCount?: IntWithAggregatesFilter<"UserVocabularyProgress"> | number
    correctCount?: IntWithAggregatesFilter<"UserVocabularyProgress"> | number
    incorrectCount?: IntWithAggregatesFilter<"UserVocabularyProgress"> | number
    easeFactor?: FloatWithAggregatesFilter<"UserVocabularyProgress"> | number
    interval?: IntWithAggregatesFilter<"UserVocabularyProgress"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserVocabularyProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserVocabularyProgress"> | Date | string
  }

  export type UserUniqueWordWhereInput = {
    AND?: UserUniqueWordWhereInput | UserUniqueWordWhereInput[]
    OR?: UserUniqueWordWhereInput[]
    NOT?: UserUniqueWordWhereInput | UserUniqueWordWhereInput[]
    id?: StringFilter<"UserUniqueWord"> | string
    userId?: StringFilter<"UserUniqueWord"> | string
    word?: StringFilter<"UserUniqueWord"> | string
    firstLearnedAt?: DateTimeFilter<"UserUniqueWord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserUniqueWordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    word?: SortOrder
    firstLearnedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserUniqueWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_word?: UserUniqueWordUserIdWordCompoundUniqueInput
    AND?: UserUniqueWordWhereInput | UserUniqueWordWhereInput[]
    OR?: UserUniqueWordWhereInput[]
    NOT?: UserUniqueWordWhereInput | UserUniqueWordWhereInput[]
    userId?: StringFilter<"UserUniqueWord"> | string
    word?: StringFilter<"UserUniqueWord"> | string
    firstLearnedAt?: DateTimeFilter<"UserUniqueWord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_word">

  export type UserUniqueWordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    word?: SortOrder
    firstLearnedAt?: SortOrder
    _count?: UserUniqueWordCountOrderByAggregateInput
    _max?: UserUniqueWordMaxOrderByAggregateInput
    _min?: UserUniqueWordMinOrderByAggregateInput
  }

  export type UserUniqueWordScalarWhereWithAggregatesInput = {
    AND?: UserUniqueWordScalarWhereWithAggregatesInput | UserUniqueWordScalarWhereWithAggregatesInput[]
    OR?: UserUniqueWordScalarWhereWithAggregatesInput[]
    NOT?: UserUniqueWordScalarWhereWithAggregatesInput | UserUniqueWordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserUniqueWord"> | string
    userId?: StringWithAggregatesFilter<"UserUniqueWord"> | string
    word?: StringWithAggregatesFilter<"UserUniqueWord"> | string
    firstLearnedAt?: DateTimeWithAggregatesFilter<"UserUniqueWord"> | Date | string
  }

  export type XPEventWhereInput = {
    AND?: XPEventWhereInput | XPEventWhereInput[]
    OR?: XPEventWhereInput[]
    NOT?: XPEventWhereInput | XPEventWhereInput[]
    id?: StringFilter<"XPEvent"> | string
    userId?: StringFilter<"XPEvent"> | string
    eventType?: StringFilter<"XPEvent"> | string
    xpAmount?: IntFilter<"XPEvent"> | number
    metadata?: JsonNullableFilter<"XPEvent">
    createdAt?: DateTimeFilter<"XPEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type XPEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpAmount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type XPEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: XPEventWhereInput | XPEventWhereInput[]
    OR?: XPEventWhereInput[]
    NOT?: XPEventWhereInput | XPEventWhereInput[]
    userId?: StringFilter<"XPEvent"> | string
    eventType?: StringFilter<"XPEvent"> | string
    xpAmount?: IntFilter<"XPEvent"> | number
    metadata?: JsonNullableFilter<"XPEvent">
    createdAt?: DateTimeFilter<"XPEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type XPEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpAmount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: XPEventCountOrderByAggregateInput
    _avg?: XPEventAvgOrderByAggregateInput
    _max?: XPEventMaxOrderByAggregateInput
    _min?: XPEventMinOrderByAggregateInput
    _sum?: XPEventSumOrderByAggregateInput
  }

  export type XPEventScalarWhereWithAggregatesInput = {
    AND?: XPEventScalarWhereWithAggregatesInput | XPEventScalarWhereWithAggregatesInput[]
    OR?: XPEventScalarWhereWithAggregatesInput[]
    NOT?: XPEventScalarWhereWithAggregatesInput | XPEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"XPEvent"> | string
    userId?: StringWithAggregatesFilter<"XPEvent"> | string
    eventType?: StringWithAggregatesFilter<"XPEvent"> | string
    xpAmount?: IntWithAggregatesFilter<"XPEvent"> | number
    metadata?: JsonNullableWithAggregatesFilter<"XPEvent">
    createdAt?: DateTimeWithAggregatesFilter<"XPEvent"> | Date | string
  }

  export type DailyActivityWhereInput = {
    AND?: DailyActivityWhereInput | DailyActivityWhereInput[]
    OR?: DailyActivityWhereInput[]
    NOT?: DailyActivityWhereInput | DailyActivityWhereInput[]
    id?: StringFilter<"DailyActivity"> | string
    userId?: StringFilter<"DailyActivity"> | string
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    wordsLearned?: IntFilter<"DailyActivity"> | number
    wordsReviewed?: IntFilter<"DailyActivity"> | number
    xpEarned?: IntFilter<"DailyActivity"> | number
    streakCount?: IntFilter<"DailyActivity"> | number
    createdAt?: DateTimeFilter<"DailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"DailyActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyActivityUserIdDateCompoundUniqueInput
    AND?: DailyActivityWhereInput | DailyActivityWhereInput[]
    OR?: DailyActivityWhereInput[]
    NOT?: DailyActivityWhereInput | DailyActivityWhereInput[]
    userId?: StringFilter<"DailyActivity"> | string
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    wordsLearned?: IntFilter<"DailyActivity"> | number
    wordsReviewed?: IntFilter<"DailyActivity"> | number
    xpEarned?: IntFilter<"DailyActivity"> | number
    streakCount?: IntFilter<"DailyActivity"> | number
    createdAt?: DateTimeFilter<"DailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"DailyActivity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyActivityCountOrderByAggregateInput
    _avg?: DailyActivityAvgOrderByAggregateInput
    _max?: DailyActivityMaxOrderByAggregateInput
    _min?: DailyActivityMinOrderByAggregateInput
    _sum?: DailyActivitySumOrderByAggregateInput
  }

  export type DailyActivityScalarWhereWithAggregatesInput = {
    AND?: DailyActivityScalarWhereWithAggregatesInput | DailyActivityScalarWhereWithAggregatesInput[]
    OR?: DailyActivityScalarWhereWithAggregatesInput[]
    NOT?: DailyActivityScalarWhereWithAggregatesInput | DailyActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyActivity"> | string
    userId?: StringWithAggregatesFilter<"DailyActivity"> | string
    date?: DateTimeWithAggregatesFilter<"DailyActivity"> | Date | string
    wordsLearned?: IntWithAggregatesFilter<"DailyActivity"> | number
    wordsReviewed?: IntWithAggregatesFilter<"DailyActivity"> | number
    xpEarned?: IntWithAggregatesFilter<"DailyActivity"> | number
    streakCount?: IntWithAggregatesFilter<"DailyActivity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyActivity"> | Date | string
  }

  export type DictionaryWordWhereInput = {
    AND?: DictionaryWordWhereInput | DictionaryWordWhereInput[]
    OR?: DictionaryWordWhereInput[]
    NOT?: DictionaryWordWhereInput | DictionaryWordWhereInput[]
    id?: StringFilter<"DictionaryWord"> | string
    word?: StringFilter<"DictionaryWord"> | string
    pronunciation?: StringNullableFilter<"DictionaryWord"> | string | null
    meaning?: StringFilter<"DictionaryWord"> | string
    definition?: StringNullableFilter<"DictionaryWord"> | string | null
    example?: StringNullableFilter<"DictionaryWord"> | string | null
    audioUrl?: StringNullableFilter<"DictionaryWord"> | string | null
    cefrLevel?: StringNullableFilter<"DictionaryWord"> | string | null
    partOfSpeech?: EnumPartOfSpeechFilter<"DictionaryWord"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"DictionaryWord">
    createdAt?: DateTimeFilter<"DictionaryWord"> | Date | string
    updatedAt?: DateTimeFilter<"DictionaryWord"> | Date | string
  }

  export type DictionaryWordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DictionaryWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word_partOfSpeech?: DictionaryWordWordPartOfSpeechCompoundUniqueInput
    AND?: DictionaryWordWhereInput | DictionaryWordWhereInput[]
    OR?: DictionaryWordWhereInput[]
    NOT?: DictionaryWordWhereInput | DictionaryWordWhereInput[]
    word?: StringFilter<"DictionaryWord"> | string
    pronunciation?: StringNullableFilter<"DictionaryWord"> | string | null
    meaning?: StringFilter<"DictionaryWord"> | string
    definition?: StringNullableFilter<"DictionaryWord"> | string | null
    example?: StringNullableFilter<"DictionaryWord"> | string | null
    audioUrl?: StringNullableFilter<"DictionaryWord"> | string | null
    cefrLevel?: StringNullableFilter<"DictionaryWord"> | string | null
    partOfSpeech?: EnumPartOfSpeechFilter<"DictionaryWord"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"DictionaryWord">
    createdAt?: DateTimeFilter<"DictionaryWord"> | Date | string
    updatedAt?: DateTimeFilter<"DictionaryWord"> | Date | string
  }, "id" | "word_partOfSpeech">

  export type DictionaryWordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DictionaryWordCountOrderByAggregateInput
    _max?: DictionaryWordMaxOrderByAggregateInput
    _min?: DictionaryWordMinOrderByAggregateInput
  }

  export type DictionaryWordScalarWhereWithAggregatesInput = {
    AND?: DictionaryWordScalarWhereWithAggregatesInput | DictionaryWordScalarWhereWithAggregatesInput[]
    OR?: DictionaryWordScalarWhereWithAggregatesInput[]
    NOT?: DictionaryWordScalarWhereWithAggregatesInput | DictionaryWordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DictionaryWord"> | string
    word?: StringWithAggregatesFilter<"DictionaryWord"> | string
    pronunciation?: StringNullableWithAggregatesFilter<"DictionaryWord"> | string | null
    meaning?: StringWithAggregatesFilter<"DictionaryWord"> | string
    definition?: StringNullableWithAggregatesFilter<"DictionaryWord"> | string | null
    example?: StringNullableWithAggregatesFilter<"DictionaryWord"> | string | null
    audioUrl?: StringNullableWithAggregatesFilter<"DictionaryWord"> | string | null
    cefrLevel?: StringNullableWithAggregatesFilter<"DictionaryWord"> | string | null
    partOfSpeech?: EnumPartOfSpeechWithAggregatesFilter<"DictionaryWord"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"DictionaryWord">
    createdAt?: DateTimeWithAggregatesFilter<"DictionaryWord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DictionaryWord"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySetCreateInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutStudySetsInput
    category: CategoryCreateNestedOneWithoutStudySetsInput
    vocabularies?: VocabularyCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    categoryId: string
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetUncheckedCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutStudySetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutStudySetsNestedInput
    vocabularies?: VocabularyUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUncheckedUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUncheckedUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    categoryId: string
  }

  export type StudySetUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySetUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type VocabularyCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySet: StudySetCreateNestedOneWithoutVocabulariesInput
    createdBy: UserCreateNestedOneWithoutVocabulariesInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySetId: string
    createdById: string
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySet?: StudySetUpdateOneRequiredWithoutVocabulariesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutVocabulariesNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySetId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyCreateManyInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySetId: string
    createdById: string
  }

  export type VocabularyUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySetId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studySets?: StudySetCreateNestedManyWithoutCategoryInput
    author: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    studySets?: StudySetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySets?: StudySetUpdateManyWithoutCategoryNestedInput
    author?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    studySets?: StudySetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationCodeCreateInput = {
    id?: string
    email: string
    code: string
    type: $Enums.VerificationType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    type: $Enums.VerificationType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    email: string
    code: string
    type: $Enums.VerificationType
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCodeUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikesStudySetCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedStudySetsInput
    studySet: StudySetCreateNestedOneWithoutLikedByInput
  }

  export type UserLikesStudySetUncheckedCreateInput = {
    id?: string
    userId: string
    studySetId: string
    createdAt?: Date | string
  }

  export type UserLikesStudySetUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedStudySetsNestedInput
    studySet?: StudySetUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type UserLikesStudySetUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    studySetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikesStudySetCreateManyInput = {
    id?: string
    userId: string
    studySetId: string
    createdAt?: Date | string
  }

  export type UserLikesStudySetUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikesStudySetUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    studySetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressCreateInput = {
    id?: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVocabularyProgressInput
    vocabulary: VocabularyCreateNestedOneWithoutVocabularyProgressInput
  }

  export type UserVocabularyProgressUncheckedCreateInput = {
    id?: string
    userId: string
    vocabularyId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVocabularyProgressNestedInput
    vocabulary?: VocabularyUpdateOneRequiredWithoutVocabularyProgressNestedInput
  }

  export type UserVocabularyProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    vocabularyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressCreateManyInput = {
    id?: string
    userId: string
    vocabularyId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    vocabularyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordCreateInput = {
    id?: string
    word: string
    firstLearnedAt?: Date | string
    user: UserCreateNestedOneWithoutUniqueWordsLearnedInput
  }

  export type UserUniqueWordUncheckedCreateInput = {
    id?: string
    userId: string
    word: string
    firstLearnedAt?: Date | string
  }

  export type UserUniqueWordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUniqueWordsLearnedNestedInput
  }

  export type UserUniqueWordUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordCreateManyInput = {
    id?: string
    userId: string
    word: string
    firstLearnedAt?: Date | string
  }

  export type UserUniqueWordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventCreateInput = {
    id?: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutXpEventsInput
  }

  export type XPEventUncheckedCreateInput = {
    id?: string
    userId: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type XPEventUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutXpEventsNestedInput
  }

  export type XPEventUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventCreateManyInput = {
    id?: string
    userId: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type XPEventUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityCreateInput = {
    id?: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyActivitiesInput
  }

  export type DailyActivityUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyActivityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyActivitiesNestedInput
  }

  export type DailyActivityUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyActivityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryWordCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech: $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryWordUncheckedCreateInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech: $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryWordUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryWordUncheckedUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryWordCreateManyInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech: $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DictionaryWordUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DictionaryWordUncheckedUpdateManyInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: DictionaryWordUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type VocabularyListRelationFilter = {
    every?: VocabularyWhereInput
    some?: VocabularyWhereInput
    none?: VocabularyWhereInput
  }

  export type StudySetListRelationFilter = {
    every?: StudySetWhereInput
    some?: StudySetWhereInput
    none?: StudySetWhereInput
  }

  export type UserLikesStudySetListRelationFilter = {
    every?: UserLikesStudySetWhereInput
    some?: UserLikesStudySetWhereInput
    none?: UserLikesStudySetWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type UserVocabularyProgressListRelationFilter = {
    every?: UserVocabularyProgressWhereInput
    some?: UserVocabularyProgressWhereInput
    none?: UserVocabularyProgressWhereInput
  }

  export type UserUniqueWordListRelationFilter = {
    every?: UserUniqueWordWhereInput
    some?: UserUniqueWordWhereInput
    none?: UserUniqueWordWhereInput
  }

  export type XPEventListRelationFilter = {
    every?: XPEventWhereInput
    some?: XPEventWhereInput
    none?: XPEventWhereInput
  }

  export type DailyActivityListRelationFilter = {
    every?: DailyActivityWhereInput
    some?: DailyActivityWhereInput
    none?: DailyActivityWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudySetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLikesStudySetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVocabularyProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserUniqueWordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type XPEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    lastLearningDate?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
    difficultyPreference?: SortOrder
    notificationsEnabled?: SortOrder
    publicProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    lastLearningDate?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
    difficultyPreference?: SortOrder
    notificationsEnabled?: SortOrder
    publicProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    lastLearningDate?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
    difficultyPreference?: SortOrder
    notificationsEnabled?: SortOrder
    publicProfile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    level?: SortOrder
    xp?: SortOrder
    streak?: SortOrder
    totalWordsLearned?: SortOrder
    dailyGoal?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type StudySetCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type StudySetAvgOrderByAggregateInput = {
    likesCount?: SortOrder
  }

  export type StudySetMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    isPublic?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type StudySetMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    isPublic?: SortOrder
    likesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type StudySetSumOrderByAggregateInput = {
    likesCount?: SortOrder
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type EnumPartOfSpeechFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechFilter<$PrismaModel> | $Enums.PartOfSpeech
  }

  export type EnumPartOfSpeechNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel> | null
    has?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StudySetScalarRelationFilter = {
    is?: StudySetWhereInput
    isNot?: StudySetWhereInput
  }

  export type VocabularyWordStudySetIdCompoundUniqueInput = {
    word: string
    studySetId: string
  }

  export type VocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studySetId?: SortOrder
    createdById?: SortOrder
  }

  export type VocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studySetId?: SortOrder
    createdById?: SortOrder
  }

  export type VocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studySetId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumPartOfSpeechWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel> | $Enums.PartOfSpeech
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartOfSpeechFilter<$PrismaModel>
    _max?: NestedEnumPartOfSpeechFilter<$PrismaModel>
  }

  export type CategoryNameAuthorIdCompoundUniqueInput = {
    name: string
    authorId: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type EnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTypeFilter<$PrismaModel>
  }

  export type UserLikesStudySetUserIdStudySetIdCompoundUniqueInput = {
    userId: string
    studySetId: string
  }

  export type UserLikesStudySetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studySetId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikesStudySetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studySetId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikesStudySetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    studySetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VocabularyScalarRelationFilter = {
    is?: VocabularyWhereInput
    isNot?: VocabularyWhereInput
  }

  export type UserVocabularyProgressUserIdVocabularyIdCompoundUniqueInput = {
    userId: string
    vocabularyId: string
  }

  export type UserVocabularyProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vocabularyId?: SortOrder
    status?: SortOrder
    lastReviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularyProgressAvgOrderByAggregateInput = {
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
  }

  export type UserVocabularyProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vocabularyId?: SortOrder
    status?: SortOrder
    lastReviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularyProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vocabularyId?: SortOrder
    status?: SortOrder
    lastReviewedAt?: SortOrder
    nextReviewAt?: SortOrder
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserVocabularyProgressSumOrderByAggregateInput = {
    reviewCount?: SortOrder
    correctCount?: SortOrder
    incorrectCount?: SortOrder
    easeFactor?: SortOrder
    interval?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserUniqueWordUserIdWordCompoundUniqueInput = {
    userId: string
    word: string
  }

  export type UserUniqueWordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    word?: SortOrder
    firstLearnedAt?: SortOrder
  }

  export type UserUniqueWordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    word?: SortOrder
    firstLearnedAt?: SortOrder
  }

  export type UserUniqueWordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    word?: SortOrder
    firstLearnedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type XPEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpAmount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type XPEventAvgOrderByAggregateInput = {
    xpAmount?: SortOrder
  }

  export type XPEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type XPEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventType?: SortOrder
    xpAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type XPEventSumOrderByAggregateInput = {
    xpAmount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DailyActivityUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyActivityAvgOrderByAggregateInput = {
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
  }

  export type DailyActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyActivitySumOrderByAggregateInput = {
    wordsLearned?: SortOrder
    wordsReviewed?: SortOrder
    xpEarned?: SortOrder
    streakCount?: SortOrder
  }

  export type DictionaryWordWordPartOfSpeechCompoundUniqueInput = {
    word: string
    partOfSpeech: $Enums.PartOfSpeech
  }

  export type DictionaryWordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    alternativePartOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DictionaryWordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DictionaryWordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    pronunciation?: SortOrder
    meaning?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    audioUrl?: SortOrder
    cefrLevel?: SortOrder
    partOfSpeech?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type VocabularyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput> | VocabularyCreateWithoutCreatedByInput[] | VocabularyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutCreatedByInput | VocabularyCreateOrConnectWithoutCreatedByInput[]
    createMany?: VocabularyCreateManyCreatedByInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type StudySetCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput> | StudySetCreateWithoutAuthorInput[] | StudySetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutAuthorInput | StudySetCreateOrConnectWithoutAuthorInput[]
    createMany?: StudySetCreateManyAuthorInputEnvelope
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
  }

  export type UserLikesStudySetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput> | UserLikesStudySetCreateWithoutUserInput[] | UserLikesStudySetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutUserInput | UserLikesStudySetCreateOrConnectWithoutUserInput[]
    createMany?: UserLikesStudySetCreateManyUserInputEnvelope
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput> | CategoryCreateWithoutAuthorInput[] | CategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAuthorInput | CategoryCreateOrConnectWithoutAuthorInput[]
    createMany?: CategoryCreateManyAuthorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserVocabularyProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput> | UserVocabularyProgressCreateWithoutUserInput[] | UserVocabularyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutUserInput | UserVocabularyProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserVocabularyProgressCreateManyUserInputEnvelope
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
  }

  export type UserUniqueWordCreateNestedManyWithoutUserInput = {
    create?: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput> | UserUniqueWordCreateWithoutUserInput[] | UserUniqueWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUniqueWordCreateOrConnectWithoutUserInput | UserUniqueWordCreateOrConnectWithoutUserInput[]
    createMany?: UserUniqueWordCreateManyUserInputEnvelope
    connect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
  }

  export type XPEventCreateNestedManyWithoutUserInput = {
    create?: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput> | XPEventCreateWithoutUserInput[] | XPEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPEventCreateOrConnectWithoutUserInput | XPEventCreateOrConnectWithoutUserInput[]
    createMany?: XPEventCreateManyUserInputEnvelope
    connect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
  }

  export type DailyActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput> | VocabularyCreateWithoutCreatedByInput[] | VocabularyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutCreatedByInput | VocabularyCreateOrConnectWithoutCreatedByInput[]
    createMany?: VocabularyCreateManyCreatedByInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type StudySetUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput> | StudySetCreateWithoutAuthorInput[] | StudySetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutAuthorInput | StudySetCreateOrConnectWithoutAuthorInput[]
    createMany?: StudySetCreateManyAuthorInputEnvelope
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
  }

  export type UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput> | UserLikesStudySetCreateWithoutUserInput[] | UserLikesStudySetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutUserInput | UserLikesStudySetCreateOrConnectWithoutUserInput[]
    createMany?: UserLikesStudySetCreateManyUserInputEnvelope
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput> | CategoryCreateWithoutAuthorInput[] | CategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAuthorInput | CategoryCreateOrConnectWithoutAuthorInput[]
    createMany?: CategoryCreateManyAuthorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput> | UserVocabularyProgressCreateWithoutUserInput[] | UserVocabularyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutUserInput | UserVocabularyProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserVocabularyProgressCreateManyUserInputEnvelope
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
  }

  export type UserUniqueWordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput> | UserUniqueWordCreateWithoutUserInput[] | UserUniqueWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUniqueWordCreateOrConnectWithoutUserInput | UserUniqueWordCreateOrConnectWithoutUserInput[]
    createMany?: UserUniqueWordCreateManyUserInputEnvelope
    connect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
  }

  export type XPEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput> | XPEventCreateWithoutUserInput[] | XPEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPEventCreateOrConnectWithoutUserInput | XPEventCreateOrConnectWithoutUserInput[]
    createMany?: XPEventCreateManyUserInputEnvelope
    connect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
  }

  export type DailyActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type VocabularyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput> | VocabularyCreateWithoutCreatedByInput[] | VocabularyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutCreatedByInput | VocabularyCreateOrConnectWithoutCreatedByInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutCreatedByInput | VocabularyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: VocabularyCreateManyCreatedByInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutCreatedByInput | VocabularyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutCreatedByInput | VocabularyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type StudySetUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput> | StudySetCreateWithoutAuthorInput[] | StudySetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutAuthorInput | StudySetCreateOrConnectWithoutAuthorInput[]
    upsert?: StudySetUpsertWithWhereUniqueWithoutAuthorInput | StudySetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StudySetCreateManyAuthorInputEnvelope
    set?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    disconnect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    delete?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    update?: StudySetUpdateWithWhereUniqueWithoutAuthorInput | StudySetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StudySetUpdateManyWithWhereWithoutAuthorInput | StudySetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
  }

  export type UserLikesStudySetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput> | UserLikesStudySetCreateWithoutUserInput[] | UserLikesStudySetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutUserInput | UserLikesStudySetCreateOrConnectWithoutUserInput[]
    upsert?: UserLikesStudySetUpsertWithWhereUniqueWithoutUserInput | UserLikesStudySetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikesStudySetCreateManyUserInputEnvelope
    set?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    disconnect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    delete?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    update?: UserLikesStudySetUpdateWithWhereUniqueWithoutUserInput | UserLikesStudySetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikesStudySetUpdateManyWithWhereWithoutUserInput | UserLikesStudySetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput> | CategoryCreateWithoutAuthorInput[] | CategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAuthorInput | CategoryCreateOrConnectWithoutAuthorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutAuthorInput | CategoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CategoryCreateManyAuthorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutAuthorInput | CategoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutAuthorInput | CategoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserVocabularyProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput> | UserVocabularyProgressCreateWithoutUserInput[] | UserVocabularyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutUserInput | UserVocabularyProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserVocabularyProgressUpsertWithWhereUniqueWithoutUserInput | UserVocabularyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVocabularyProgressCreateManyUserInputEnvelope
    set?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    disconnect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    delete?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    update?: UserVocabularyProgressUpdateWithWhereUniqueWithoutUserInput | UserVocabularyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVocabularyProgressUpdateManyWithWhereWithoutUserInput | UserVocabularyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
  }

  export type UserUniqueWordUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput> | UserUniqueWordCreateWithoutUserInput[] | UserUniqueWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUniqueWordCreateOrConnectWithoutUserInput | UserUniqueWordCreateOrConnectWithoutUserInput[]
    upsert?: UserUniqueWordUpsertWithWhereUniqueWithoutUserInput | UserUniqueWordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserUniqueWordCreateManyUserInputEnvelope
    set?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    disconnect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    delete?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    connect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    update?: UserUniqueWordUpdateWithWhereUniqueWithoutUserInput | UserUniqueWordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserUniqueWordUpdateManyWithWhereWithoutUserInput | UserUniqueWordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserUniqueWordScalarWhereInput | UserUniqueWordScalarWhereInput[]
  }

  export type XPEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput> | XPEventCreateWithoutUserInput[] | XPEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPEventCreateOrConnectWithoutUserInput | XPEventCreateOrConnectWithoutUserInput[]
    upsert?: XPEventUpsertWithWhereUniqueWithoutUserInput | XPEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XPEventCreateManyUserInputEnvelope
    set?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    disconnect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    delete?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    connect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    update?: XPEventUpdateWithWhereUniqueWithoutUserInput | XPEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XPEventUpdateManyWithWhereWithoutUserInput | XPEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XPEventScalarWhereInput | XPEventScalarWhereInput[]
  }

  export type DailyActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: DailyActivityUpsertWithWhereUniqueWithoutUserInput | DailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    set?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    disconnect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    delete?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    update?: DailyActivityUpdateWithWhereUniqueWithoutUserInput | DailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyActivityUpdateManyWithWhereWithoutUserInput | DailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput> | VocabularyCreateWithoutCreatedByInput[] | VocabularyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutCreatedByInput | VocabularyCreateOrConnectWithoutCreatedByInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutCreatedByInput | VocabularyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: VocabularyCreateManyCreatedByInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutCreatedByInput | VocabularyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutCreatedByInput | VocabularyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type StudySetUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput> | StudySetCreateWithoutAuthorInput[] | StudySetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutAuthorInput | StudySetCreateOrConnectWithoutAuthorInput[]
    upsert?: StudySetUpsertWithWhereUniqueWithoutAuthorInput | StudySetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: StudySetCreateManyAuthorInputEnvelope
    set?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    disconnect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    delete?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    update?: StudySetUpdateWithWhereUniqueWithoutAuthorInput | StudySetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: StudySetUpdateManyWithWhereWithoutAuthorInput | StudySetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
  }

  export type UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput> | UserLikesStudySetCreateWithoutUserInput[] | UserLikesStudySetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutUserInput | UserLikesStudySetCreateOrConnectWithoutUserInput[]
    upsert?: UserLikesStudySetUpsertWithWhereUniqueWithoutUserInput | UserLikesStudySetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikesStudySetCreateManyUserInputEnvelope
    set?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    disconnect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    delete?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    update?: UserLikesStudySetUpdateWithWhereUniqueWithoutUserInput | UserLikesStudySetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikesStudySetUpdateManyWithWhereWithoutUserInput | UserLikesStudySetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput> | CategoryCreateWithoutAuthorInput[] | CategoryUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutAuthorInput | CategoryCreateOrConnectWithoutAuthorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutAuthorInput | CategoryUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CategoryCreateManyAuthorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutAuthorInput | CategoryUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutAuthorInput | CategoryUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput> | UserVocabularyProgressCreateWithoutUserInput[] | UserVocabularyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutUserInput | UserVocabularyProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserVocabularyProgressUpsertWithWhereUniqueWithoutUserInput | UserVocabularyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVocabularyProgressCreateManyUserInputEnvelope
    set?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    disconnect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    delete?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    update?: UserVocabularyProgressUpdateWithWhereUniqueWithoutUserInput | UserVocabularyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVocabularyProgressUpdateManyWithWhereWithoutUserInput | UserVocabularyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
  }

  export type UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput> | UserUniqueWordCreateWithoutUserInput[] | UserUniqueWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserUniqueWordCreateOrConnectWithoutUserInput | UserUniqueWordCreateOrConnectWithoutUserInput[]
    upsert?: UserUniqueWordUpsertWithWhereUniqueWithoutUserInput | UserUniqueWordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserUniqueWordCreateManyUserInputEnvelope
    set?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    disconnect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    delete?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    connect?: UserUniqueWordWhereUniqueInput | UserUniqueWordWhereUniqueInput[]
    update?: UserUniqueWordUpdateWithWhereUniqueWithoutUserInput | UserUniqueWordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserUniqueWordUpdateManyWithWhereWithoutUserInput | UserUniqueWordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserUniqueWordScalarWhereInput | UserUniqueWordScalarWhereInput[]
  }

  export type XPEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput> | XPEventCreateWithoutUserInput[] | XPEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: XPEventCreateOrConnectWithoutUserInput | XPEventCreateOrConnectWithoutUserInput[]
    upsert?: XPEventUpsertWithWhereUniqueWithoutUserInput | XPEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: XPEventCreateManyUserInputEnvelope
    set?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    disconnect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    delete?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    connect?: XPEventWhereUniqueInput | XPEventWhereUniqueInput[]
    update?: XPEventUpdateWithWhereUniqueWithoutUserInput | XPEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: XPEventUpdateManyWithWhereWithoutUserInput | XPEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: XPEventScalarWhereInput | XPEventScalarWhereInput[]
  }

  export type DailyActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput> | DailyActivityCreateWithoutUserInput[] | DailyActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyActivityCreateOrConnectWithoutUserInput | DailyActivityCreateOrConnectWithoutUserInput[]
    upsert?: DailyActivityUpsertWithWhereUniqueWithoutUserInput | DailyActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyActivityCreateManyUserInputEnvelope
    set?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    disconnect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    delete?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    connect?: DailyActivityWhereUniqueInput | DailyActivityWhereUniqueInput[]
    update?: DailyActivityUpdateWithWhereUniqueWithoutUserInput | DailyActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyActivityUpdateManyWithWhereWithoutUserInput | DailyActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type StudySetCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutStudySetsInput = {
    create?: XOR<UserCreateWithoutStudySetsInput, UserUncheckedCreateWithoutStudySetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySetsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutStudySetsInput = {
    create?: XOR<CategoryCreateWithoutStudySetsInput, CategoryUncheckedCreateWithoutStudySetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutStudySetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type VocabularyCreateNestedManyWithoutStudySetInput = {
    create?: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput> | VocabularyCreateWithoutStudySetInput[] | VocabularyUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutStudySetInput | VocabularyCreateOrConnectWithoutStudySetInput[]
    createMany?: VocabularyCreateManyStudySetInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type UserLikesStudySetCreateNestedManyWithoutStudySetInput = {
    create?: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput> | UserLikesStudySetCreateWithoutStudySetInput[] | UserLikesStudySetUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutStudySetInput | UserLikesStudySetCreateOrConnectWithoutStudySetInput[]
    createMany?: UserLikesStudySetCreateManyStudySetInputEnvelope
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutStudySetInput = {
    create?: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput> | VocabularyCreateWithoutStudySetInput[] | VocabularyUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutStudySetInput | VocabularyCreateOrConnectWithoutStudySetInput[]
    createMany?: VocabularyCreateManyStudySetInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type UserLikesStudySetUncheckedCreateNestedManyWithoutStudySetInput = {
    create?: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput> | UserLikesStudySetCreateWithoutStudySetInput[] | UserLikesStudySetUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutStudySetInput | UserLikesStudySetCreateOrConnectWithoutStudySetInput[]
    createMany?: UserLikesStudySetCreateManyStudySetInputEnvelope
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type StudySetUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutStudySetsNestedInput = {
    create?: XOR<UserCreateWithoutStudySetsInput, UserUncheckedCreateWithoutStudySetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudySetsInput
    upsert?: UserUpsertWithoutStudySetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudySetsInput, UserUpdateWithoutStudySetsInput>, UserUncheckedUpdateWithoutStudySetsInput>
  }

  export type CategoryUpdateOneRequiredWithoutStudySetsNestedInput = {
    create?: XOR<CategoryCreateWithoutStudySetsInput, CategoryUncheckedCreateWithoutStudySetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutStudySetsInput
    upsert?: CategoryUpsertWithoutStudySetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutStudySetsInput, CategoryUpdateWithoutStudySetsInput>, CategoryUncheckedUpdateWithoutStudySetsInput>
  }

  export type VocabularyUpdateManyWithoutStudySetNestedInput = {
    create?: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput> | VocabularyCreateWithoutStudySetInput[] | VocabularyUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutStudySetInput | VocabularyCreateOrConnectWithoutStudySetInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutStudySetInput | VocabularyUpsertWithWhereUniqueWithoutStudySetInput[]
    createMany?: VocabularyCreateManyStudySetInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutStudySetInput | VocabularyUpdateWithWhereUniqueWithoutStudySetInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutStudySetInput | VocabularyUpdateManyWithWhereWithoutStudySetInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type UserLikesStudySetUpdateManyWithoutStudySetNestedInput = {
    create?: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput> | UserLikesStudySetCreateWithoutStudySetInput[] | UserLikesStudySetUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutStudySetInput | UserLikesStudySetCreateOrConnectWithoutStudySetInput[]
    upsert?: UserLikesStudySetUpsertWithWhereUniqueWithoutStudySetInput | UserLikesStudySetUpsertWithWhereUniqueWithoutStudySetInput[]
    createMany?: UserLikesStudySetCreateManyStudySetInputEnvelope
    set?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    disconnect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    delete?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    update?: UserLikesStudySetUpdateWithWhereUniqueWithoutStudySetInput | UserLikesStudySetUpdateWithWhereUniqueWithoutStudySetInput[]
    updateMany?: UserLikesStudySetUpdateManyWithWhereWithoutStudySetInput | UserLikesStudySetUpdateManyWithWhereWithoutStudySetInput[]
    deleteMany?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
  }

  export type VocabularyUncheckedUpdateManyWithoutStudySetNestedInput = {
    create?: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput> | VocabularyCreateWithoutStudySetInput[] | VocabularyUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutStudySetInput | VocabularyCreateOrConnectWithoutStudySetInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutStudySetInput | VocabularyUpsertWithWhereUniqueWithoutStudySetInput[]
    createMany?: VocabularyCreateManyStudySetInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutStudySetInput | VocabularyUpdateWithWhereUniqueWithoutStudySetInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutStudySetInput | VocabularyUpdateManyWithWhereWithoutStudySetInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type UserLikesStudySetUncheckedUpdateManyWithoutStudySetNestedInput = {
    create?: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput> | UserLikesStudySetCreateWithoutStudySetInput[] | UserLikesStudySetUncheckedCreateWithoutStudySetInput[]
    connectOrCreate?: UserLikesStudySetCreateOrConnectWithoutStudySetInput | UserLikesStudySetCreateOrConnectWithoutStudySetInput[]
    upsert?: UserLikesStudySetUpsertWithWhereUniqueWithoutStudySetInput | UserLikesStudySetUpsertWithWhereUniqueWithoutStudySetInput[]
    createMany?: UserLikesStudySetCreateManyStudySetInputEnvelope
    set?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    disconnect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    delete?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    connect?: UserLikesStudySetWhereUniqueInput | UserLikesStudySetWhereUniqueInput[]
    update?: UserLikesStudySetUpdateWithWhereUniqueWithoutStudySetInput | UserLikesStudySetUpdateWithWhereUniqueWithoutStudySetInput[]
    updateMany?: UserLikesStudySetUpdateManyWithWhereWithoutStudySetInput | UserLikesStudySetUpdateManyWithWhereWithoutStudySetInput[]
    deleteMany?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
  }

  export type VocabularyCreatealternativePartOfSpeechInput = {
    set: $Enums.PartOfSpeech[]
  }

  export type StudySetCreateNestedOneWithoutVocabulariesInput = {
    create?: XOR<StudySetCreateWithoutVocabulariesInput, StudySetUncheckedCreateWithoutVocabulariesInput>
    connectOrCreate?: StudySetCreateOrConnectWithoutVocabulariesInput
    connect?: StudySetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVocabulariesInput = {
    create?: XOR<UserCreateWithoutVocabulariesInput, UserUncheckedCreateWithoutVocabulariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabulariesInput
    connect?: UserWhereUniqueInput
  }

  export type UserVocabularyProgressCreateNestedManyWithoutVocabularyInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput> | UserVocabularyProgressCreateWithoutVocabularyInput[] | UserVocabularyProgressUncheckedCreateWithoutVocabularyInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutVocabularyInput | UserVocabularyProgressCreateOrConnectWithoutVocabularyInput[]
    createMany?: UserVocabularyProgressCreateManyVocabularyInputEnvelope
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
  }

  export type UserVocabularyProgressUncheckedCreateNestedManyWithoutVocabularyInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput> | UserVocabularyProgressCreateWithoutVocabularyInput[] | UserVocabularyProgressUncheckedCreateWithoutVocabularyInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutVocabularyInput | UserVocabularyProgressCreateOrConnectWithoutVocabularyInput[]
    createMany?: UserVocabularyProgressCreateManyVocabularyInputEnvelope
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
  }

  export type EnumPartOfSpeechFieldUpdateOperationsInput = {
    set?: $Enums.PartOfSpeech
  }

  export type VocabularyUpdatealternativePartOfSpeechInput = {
    set?: $Enums.PartOfSpeech[]
    push?: $Enums.PartOfSpeech | $Enums.PartOfSpeech[]
  }

  export type StudySetUpdateOneRequiredWithoutVocabulariesNestedInput = {
    create?: XOR<StudySetCreateWithoutVocabulariesInput, StudySetUncheckedCreateWithoutVocabulariesInput>
    connectOrCreate?: StudySetCreateOrConnectWithoutVocabulariesInput
    upsert?: StudySetUpsertWithoutVocabulariesInput
    connect?: StudySetWhereUniqueInput
    update?: XOR<XOR<StudySetUpdateToOneWithWhereWithoutVocabulariesInput, StudySetUpdateWithoutVocabulariesInput>, StudySetUncheckedUpdateWithoutVocabulariesInput>
  }

  export type UserUpdateOneRequiredWithoutVocabulariesNestedInput = {
    create?: XOR<UserCreateWithoutVocabulariesInput, UserUncheckedCreateWithoutVocabulariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabulariesInput
    upsert?: UserUpsertWithoutVocabulariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVocabulariesInput, UserUpdateWithoutVocabulariesInput>, UserUncheckedUpdateWithoutVocabulariesInput>
  }

  export type UserVocabularyProgressUpdateManyWithoutVocabularyNestedInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput> | UserVocabularyProgressCreateWithoutVocabularyInput[] | UserVocabularyProgressUncheckedCreateWithoutVocabularyInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutVocabularyInput | UserVocabularyProgressCreateOrConnectWithoutVocabularyInput[]
    upsert?: UserVocabularyProgressUpsertWithWhereUniqueWithoutVocabularyInput | UserVocabularyProgressUpsertWithWhereUniqueWithoutVocabularyInput[]
    createMany?: UserVocabularyProgressCreateManyVocabularyInputEnvelope
    set?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    disconnect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    delete?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    update?: UserVocabularyProgressUpdateWithWhereUniqueWithoutVocabularyInput | UserVocabularyProgressUpdateWithWhereUniqueWithoutVocabularyInput[]
    updateMany?: UserVocabularyProgressUpdateManyWithWhereWithoutVocabularyInput | UserVocabularyProgressUpdateManyWithWhereWithoutVocabularyInput[]
    deleteMany?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
  }

  export type UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyNestedInput = {
    create?: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput> | UserVocabularyProgressCreateWithoutVocabularyInput[] | UserVocabularyProgressUncheckedCreateWithoutVocabularyInput[]
    connectOrCreate?: UserVocabularyProgressCreateOrConnectWithoutVocabularyInput | UserVocabularyProgressCreateOrConnectWithoutVocabularyInput[]
    upsert?: UserVocabularyProgressUpsertWithWhereUniqueWithoutVocabularyInput | UserVocabularyProgressUpsertWithWhereUniqueWithoutVocabularyInput[]
    createMany?: UserVocabularyProgressCreateManyVocabularyInputEnvelope
    set?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    disconnect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    delete?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    connect?: UserVocabularyProgressWhereUniqueInput | UserVocabularyProgressWhereUniqueInput[]
    update?: UserVocabularyProgressUpdateWithWhereUniqueWithoutVocabularyInput | UserVocabularyProgressUpdateWithWhereUniqueWithoutVocabularyInput[]
    updateMany?: UserVocabularyProgressUpdateManyWithWhereWithoutVocabularyInput | UserVocabularyProgressUpdateManyWithWhereWithoutVocabularyInput[]
    deleteMany?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
  }

  export type StudySetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput> | StudySetCreateWithoutCategoryInput[] | StudySetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutCategoryInput | StudySetCreateOrConnectWithoutCategoryInput[]
    createMany?: StudySetCreateManyCategoryInputEnvelope
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type StudySetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput> | StudySetCreateWithoutCategoryInput[] | StudySetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutCategoryInput | StudySetCreateOrConnectWithoutCategoryInput[]
    createMany?: StudySetCreateManyCategoryInputEnvelope
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
  }

  export type StudySetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput> | StudySetCreateWithoutCategoryInput[] | StudySetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutCategoryInput | StudySetCreateOrConnectWithoutCategoryInput[]
    upsert?: StudySetUpsertWithWhereUniqueWithoutCategoryInput | StudySetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: StudySetCreateManyCategoryInputEnvelope
    set?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    disconnect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    delete?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    update?: StudySetUpdateWithWhereUniqueWithoutCategoryInput | StudySetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: StudySetUpdateManyWithWhereWithoutCategoryInput | StudySetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type StudySetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput> | StudySetCreateWithoutCategoryInput[] | StudySetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: StudySetCreateOrConnectWithoutCategoryInput | StudySetCreateOrConnectWithoutCategoryInput[]
    upsert?: StudySetUpsertWithWhereUniqueWithoutCategoryInput | StudySetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: StudySetCreateManyCategoryInputEnvelope
    set?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    disconnect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    delete?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    connect?: StudySetWhereUniqueInput | StudySetWhereUniqueInput[]
    update?: StudySetUpdateWithWhereUniqueWithoutCategoryInput | StudySetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: StudySetUpdateManyWithWhereWithoutCategoryInput | StudySetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
  }

  export type EnumVerificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.VerificationType
  }

  export type UserCreateNestedOneWithoutLikedStudySetsInput = {
    create?: XOR<UserCreateWithoutLikedStudySetsInput, UserUncheckedCreateWithoutLikedStudySetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedStudySetsInput
    connect?: UserWhereUniqueInput
  }

  export type StudySetCreateNestedOneWithoutLikedByInput = {
    create?: XOR<StudySetCreateWithoutLikedByInput, StudySetUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: StudySetCreateOrConnectWithoutLikedByInput
    connect?: StudySetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedStudySetsNestedInput = {
    create?: XOR<UserCreateWithoutLikedStudySetsInput, UserUncheckedCreateWithoutLikedStudySetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedStudySetsInput
    upsert?: UserUpsertWithoutLikedStudySetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedStudySetsInput, UserUpdateWithoutLikedStudySetsInput>, UserUncheckedUpdateWithoutLikedStudySetsInput>
  }

  export type StudySetUpdateOneRequiredWithoutLikedByNestedInput = {
    create?: XOR<StudySetCreateWithoutLikedByInput, StudySetUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: StudySetCreateOrConnectWithoutLikedByInput
    upsert?: StudySetUpsertWithoutLikedByInput
    connect?: StudySetWhereUniqueInput
    update?: XOR<XOR<StudySetUpdateToOneWithWhereWithoutLikedByInput, StudySetUpdateWithoutLikedByInput>, StudySetUncheckedUpdateWithoutLikedByInput>
  }

  export type UserCreateNestedOneWithoutVocabularyProgressInput = {
    create?: XOR<UserCreateWithoutVocabularyProgressInput, UserUncheckedCreateWithoutVocabularyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabularyProgressInput
    connect?: UserWhereUniqueInput
  }

  export type VocabularyCreateNestedOneWithoutVocabularyProgressInput = {
    create?: XOR<VocabularyCreateWithoutVocabularyProgressInput, VocabularyUncheckedCreateWithoutVocabularyProgressInput>
    connectOrCreate?: VocabularyCreateOrConnectWithoutVocabularyProgressInput
    connect?: VocabularyWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVocabularyProgressNestedInput = {
    create?: XOR<UserCreateWithoutVocabularyProgressInput, UserUncheckedCreateWithoutVocabularyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabularyProgressInput
    upsert?: UserUpsertWithoutVocabularyProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVocabularyProgressInput, UserUpdateWithoutVocabularyProgressInput>, UserUncheckedUpdateWithoutVocabularyProgressInput>
  }

  export type VocabularyUpdateOneRequiredWithoutVocabularyProgressNestedInput = {
    create?: XOR<VocabularyCreateWithoutVocabularyProgressInput, VocabularyUncheckedCreateWithoutVocabularyProgressInput>
    connectOrCreate?: VocabularyCreateOrConnectWithoutVocabularyProgressInput
    upsert?: VocabularyUpsertWithoutVocabularyProgressInput
    connect?: VocabularyWhereUniqueInput
    update?: XOR<XOR<VocabularyUpdateToOneWithWhereWithoutVocabularyProgressInput, VocabularyUpdateWithoutVocabularyProgressInput>, VocabularyUncheckedUpdateWithoutVocabularyProgressInput>
  }

  export type UserCreateNestedOneWithoutUniqueWordsLearnedInput = {
    create?: XOR<UserCreateWithoutUniqueWordsLearnedInput, UserUncheckedCreateWithoutUniqueWordsLearnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniqueWordsLearnedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUniqueWordsLearnedNestedInput = {
    create?: XOR<UserCreateWithoutUniqueWordsLearnedInput, UserUncheckedCreateWithoutUniqueWordsLearnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniqueWordsLearnedInput
    upsert?: UserUpsertWithoutUniqueWordsLearnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUniqueWordsLearnedInput, UserUpdateWithoutUniqueWordsLearnedInput>, UserUncheckedUpdateWithoutUniqueWordsLearnedInput>
  }

  export type UserCreateNestedOneWithoutXpEventsInput = {
    create?: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutXpEventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutXpEventsNestedInput = {
    create?: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutXpEventsInput
    upsert?: UserUpsertWithoutXpEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutXpEventsInput, UserUpdateWithoutXpEventsInput>, UserUncheckedUpdateWithoutXpEventsInput>
  }

  export type UserCreateNestedOneWithoutDailyActivitiesInput = {
    create?: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyActivitiesInput
    upsert?: UserUpsertWithoutDailyActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyActivitiesInput, UserUpdateWithoutDailyActivitiesInput>, UserUncheckedUpdateWithoutDailyActivitiesInput>
  }

  export type DictionaryWordCreatealternativePartOfSpeechInput = {
    set: $Enums.PartOfSpeech[]
  }

  export type DictionaryWordUpdatealternativePartOfSpeechInput = {
    set?: $Enums.PartOfSpeech[]
    push?: $Enums.PartOfSpeech | $Enums.PartOfSpeech[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedEnumPartOfSpeechFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechFilter<$PrismaModel> | $Enums.PartOfSpeech
  }

  export type NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartOfSpeech | EnumPartOfSpeechFieldRefInput<$PrismaModel>
    in?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    notIn?: $Enums.PartOfSpeech[] | ListEnumPartOfSpeechFieldRefInput<$PrismaModel>
    not?: NestedEnumPartOfSpeechWithAggregatesFilter<$PrismaModel> | $Enums.PartOfSpeech
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartOfSpeechFilter<$PrismaModel>
    _max?: NestedEnumPartOfSpeechFilter<$PrismaModel>
  }

  export type NestedEnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType
  }

  export type NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type VocabularyCreateWithoutCreatedByInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySet: StudySetCreateNestedOneWithoutVocabulariesInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateWithoutCreatedByInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySetId: string
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyCreateOrConnectWithoutCreatedByInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput>
  }

  export type VocabularyCreateManyCreatedByInputEnvelope = {
    data: VocabularyCreateManyCreatedByInput | VocabularyCreateManyCreatedByInput[]
  }

  export type StudySetCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutStudySetsInput
    vocabularies?: VocabularyCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetUncheckedCreateNestedManyWithoutStudySetInput
  }

  export type StudySetCreateOrConnectWithoutAuthorInput = {
    where: StudySetWhereUniqueInput
    create: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput>
  }

  export type StudySetCreateManyAuthorInputEnvelope = {
    data: StudySetCreateManyAuthorInput | StudySetCreateManyAuthorInput[]
  }

  export type UserLikesStudySetCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    studySet: StudySetCreateNestedOneWithoutLikedByInput
  }

  export type UserLikesStudySetUncheckedCreateWithoutUserInput = {
    id?: string
    studySetId: string
    createdAt?: Date | string
  }

  export type UserLikesStudySetCreateOrConnectWithoutUserInput = {
    where: UserLikesStudySetWhereUniqueInput
    create: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput>
  }

  export type UserLikesStudySetCreateManyUserInputEnvelope = {
    data: UserLikesStudySetCreateManyUserInput | UserLikesStudySetCreateManyUserInput[]
  }

  export type CategoryCreateWithoutAuthorInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studySets?: StudySetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studySets?: StudySetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAuthorInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput>
  }

  export type CategoryCreateManyAuthorInputEnvelope = {
    data: CategoryCreateManyAuthorInput | CategoryCreateManyAuthorInput[]
  }

  export type UserVocabularyProgressCreateWithoutUserInput = {
    id?: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vocabulary: VocabularyCreateNestedOneWithoutVocabularyProgressInput
  }

  export type UserVocabularyProgressUncheckedCreateWithoutUserInput = {
    id?: string
    vocabularyId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressCreateOrConnectWithoutUserInput = {
    where: UserVocabularyProgressWhereUniqueInput
    create: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput>
  }

  export type UserVocabularyProgressCreateManyUserInputEnvelope = {
    data: UserVocabularyProgressCreateManyUserInput | UserVocabularyProgressCreateManyUserInput[]
  }

  export type UserUniqueWordCreateWithoutUserInput = {
    id?: string
    word: string
    firstLearnedAt?: Date | string
  }

  export type UserUniqueWordUncheckedCreateWithoutUserInput = {
    id?: string
    word: string
    firstLearnedAt?: Date | string
  }

  export type UserUniqueWordCreateOrConnectWithoutUserInput = {
    where: UserUniqueWordWhereUniqueInput
    create: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput>
  }

  export type UserUniqueWordCreateManyUserInputEnvelope = {
    data: UserUniqueWordCreateManyUserInput | UserUniqueWordCreateManyUserInput[]
  }

  export type XPEventCreateWithoutUserInput = {
    id?: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type XPEventUncheckedCreateWithoutUserInput = {
    id?: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type XPEventCreateOrConnectWithoutUserInput = {
    where: XPEventWhereUniqueInput
    create: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput>
  }

  export type XPEventCreateManyUserInputEnvelope = {
    data: XPEventCreateManyUserInput | XPEventCreateManyUserInput[]
  }

  export type DailyActivityCreateWithoutUserInput = {
    id?: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyActivityUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyActivityCreateOrConnectWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    create: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput>
  }

  export type DailyActivityCreateManyUserInputEnvelope = {
    data: DailyActivityCreateManyUserInput | DailyActivityCreateManyUserInput[]
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type VocabularyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutCreatedByInput, VocabularyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<VocabularyCreateWithoutCreatedByInput, VocabularyUncheckedCreateWithoutCreatedByInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutCreatedByInput, VocabularyUncheckedUpdateWithoutCreatedByInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutCreatedByInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type VocabularyScalarWhereInput = {
    AND?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    OR?: VocabularyScalarWhereInput[]
    NOT?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    id?: StringFilter<"Vocabulary"> | string
    word?: StringFilter<"Vocabulary"> | string
    pronunciation?: StringNullableFilter<"Vocabulary"> | string | null
    meaning?: StringFilter<"Vocabulary"> | string
    definition?: StringNullableFilter<"Vocabulary"> | string | null
    example?: StringNullableFilter<"Vocabulary"> | string | null
    imageUrl?: StringNullableFilter<"Vocabulary"> | string | null
    audioUrl?: StringNullableFilter<"Vocabulary"> | string | null
    cefrLevel?: StringNullableFilter<"Vocabulary"> | string | null
    partOfSpeech?: EnumPartOfSpeechFilter<"Vocabulary"> | $Enums.PartOfSpeech
    alternativePartOfSpeech?: EnumPartOfSpeechNullableListFilter<"Vocabulary">
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    updatedAt?: DateTimeFilter<"Vocabulary"> | Date | string
    studySetId?: StringFilter<"Vocabulary"> | string
    createdById?: StringFilter<"Vocabulary"> | string
  }

  export type StudySetUpsertWithWhereUniqueWithoutAuthorInput = {
    where: StudySetWhereUniqueInput
    update: XOR<StudySetUpdateWithoutAuthorInput, StudySetUncheckedUpdateWithoutAuthorInput>
    create: XOR<StudySetCreateWithoutAuthorInput, StudySetUncheckedCreateWithoutAuthorInput>
  }

  export type StudySetUpdateWithWhereUniqueWithoutAuthorInput = {
    where: StudySetWhereUniqueInput
    data: XOR<StudySetUpdateWithoutAuthorInput, StudySetUncheckedUpdateWithoutAuthorInput>
  }

  export type StudySetUpdateManyWithWhereWithoutAuthorInput = {
    where: StudySetScalarWhereInput
    data: XOR<StudySetUpdateManyMutationInput, StudySetUncheckedUpdateManyWithoutAuthorInput>
  }

  export type StudySetScalarWhereInput = {
    AND?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
    OR?: StudySetScalarWhereInput[]
    NOT?: StudySetScalarWhereInput | StudySetScalarWhereInput[]
    id?: StringFilter<"StudySet"> | string
    title?: StringFilter<"StudySet"> | string
    description?: StringNullableFilter<"StudySet"> | string | null
    level?: EnumLevelFilter<"StudySet"> | $Enums.Level
    tags?: StringNullableListFilter<"StudySet">
    isPublic?: BoolFilter<"StudySet"> | boolean
    likesCount?: IntFilter<"StudySet"> | number
    createdAt?: DateTimeFilter<"StudySet"> | Date | string
    updatedAt?: DateTimeFilter<"StudySet"> | Date | string
    authorId?: StringFilter<"StudySet"> | string
    categoryId?: StringFilter<"StudySet"> | string
  }

  export type UserLikesStudySetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLikesStudySetWhereUniqueInput
    update: XOR<UserLikesStudySetUpdateWithoutUserInput, UserLikesStudySetUncheckedUpdateWithoutUserInput>
    create: XOR<UserLikesStudySetCreateWithoutUserInput, UserLikesStudySetUncheckedCreateWithoutUserInput>
  }

  export type UserLikesStudySetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLikesStudySetWhereUniqueInput
    data: XOR<UserLikesStudySetUpdateWithoutUserInput, UserLikesStudySetUncheckedUpdateWithoutUserInput>
  }

  export type UserLikesStudySetUpdateManyWithWhereWithoutUserInput = {
    where: UserLikesStudySetScalarWhereInput
    data: XOR<UserLikesStudySetUpdateManyMutationInput, UserLikesStudySetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLikesStudySetScalarWhereInput = {
    AND?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
    OR?: UserLikesStudySetScalarWhereInput[]
    NOT?: UserLikesStudySetScalarWhereInput | UserLikesStudySetScalarWhereInput[]
    id?: StringFilter<"UserLikesStudySet"> | string
    userId?: StringFilter<"UserLikesStudySet"> | string
    studySetId?: StringFilter<"UserLikesStudySet"> | string
    createdAt?: DateTimeFilter<"UserLikesStudySet"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutAuthorInput, CategoryUncheckedUpdateWithoutAuthorInput>
    create: XOR<CategoryCreateWithoutAuthorInput, CategoryUncheckedCreateWithoutAuthorInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutAuthorInput, CategoryUncheckedUpdateWithoutAuthorInput>
  }

  export type CategoryUpdateManyWithWhereWithoutAuthorInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    imageUrl?: StringNullableFilter<"Category"> | string | null
    icon?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    authorId?: StringFilter<"Category"> | string
  }

  export type UserVocabularyProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVocabularyProgressWhereUniqueInput
    update: XOR<UserVocabularyProgressUpdateWithoutUserInput, UserVocabularyProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserVocabularyProgressCreateWithoutUserInput, UserVocabularyProgressUncheckedCreateWithoutUserInput>
  }

  export type UserVocabularyProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVocabularyProgressWhereUniqueInput
    data: XOR<UserVocabularyProgressUpdateWithoutUserInput, UserVocabularyProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserVocabularyProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserVocabularyProgressScalarWhereInput
    data: XOR<UserVocabularyProgressUpdateManyMutationInput, UserVocabularyProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVocabularyProgressScalarWhereInput = {
    AND?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
    OR?: UserVocabularyProgressScalarWhereInput[]
    NOT?: UserVocabularyProgressScalarWhereInput | UserVocabularyProgressScalarWhereInput[]
    id?: StringFilter<"UserVocabularyProgress"> | string
    userId?: StringFilter<"UserVocabularyProgress"> | string
    vocabularyId?: StringFilter<"UserVocabularyProgress"> | string
    status?: StringFilter<"UserVocabularyProgress"> | string
    lastReviewedAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    nextReviewAt?: DateTimeNullableFilter<"UserVocabularyProgress"> | Date | string | null
    reviewCount?: IntFilter<"UserVocabularyProgress"> | number
    correctCount?: IntFilter<"UserVocabularyProgress"> | number
    incorrectCount?: IntFilter<"UserVocabularyProgress"> | number
    easeFactor?: FloatFilter<"UserVocabularyProgress"> | number
    interval?: IntFilter<"UserVocabularyProgress"> | number
    createdAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserVocabularyProgress"> | Date | string
  }

  export type UserUniqueWordUpsertWithWhereUniqueWithoutUserInput = {
    where: UserUniqueWordWhereUniqueInput
    update: XOR<UserUniqueWordUpdateWithoutUserInput, UserUniqueWordUncheckedUpdateWithoutUserInput>
    create: XOR<UserUniqueWordCreateWithoutUserInput, UserUniqueWordUncheckedCreateWithoutUserInput>
  }

  export type UserUniqueWordUpdateWithWhereUniqueWithoutUserInput = {
    where: UserUniqueWordWhereUniqueInput
    data: XOR<UserUniqueWordUpdateWithoutUserInput, UserUniqueWordUncheckedUpdateWithoutUserInput>
  }

  export type UserUniqueWordUpdateManyWithWhereWithoutUserInput = {
    where: UserUniqueWordScalarWhereInput
    data: XOR<UserUniqueWordUpdateManyMutationInput, UserUniqueWordUncheckedUpdateManyWithoutUserInput>
  }

  export type UserUniqueWordScalarWhereInput = {
    AND?: UserUniqueWordScalarWhereInput | UserUniqueWordScalarWhereInput[]
    OR?: UserUniqueWordScalarWhereInput[]
    NOT?: UserUniqueWordScalarWhereInput | UserUniqueWordScalarWhereInput[]
    id?: StringFilter<"UserUniqueWord"> | string
    userId?: StringFilter<"UserUniqueWord"> | string
    word?: StringFilter<"UserUniqueWord"> | string
    firstLearnedAt?: DateTimeFilter<"UserUniqueWord"> | Date | string
  }

  export type XPEventUpsertWithWhereUniqueWithoutUserInput = {
    where: XPEventWhereUniqueInput
    update: XOR<XPEventUpdateWithoutUserInput, XPEventUncheckedUpdateWithoutUserInput>
    create: XOR<XPEventCreateWithoutUserInput, XPEventUncheckedCreateWithoutUserInput>
  }

  export type XPEventUpdateWithWhereUniqueWithoutUserInput = {
    where: XPEventWhereUniqueInput
    data: XOR<XPEventUpdateWithoutUserInput, XPEventUncheckedUpdateWithoutUserInput>
  }

  export type XPEventUpdateManyWithWhereWithoutUserInput = {
    where: XPEventScalarWhereInput
    data: XOR<XPEventUpdateManyMutationInput, XPEventUncheckedUpdateManyWithoutUserInput>
  }

  export type XPEventScalarWhereInput = {
    AND?: XPEventScalarWhereInput | XPEventScalarWhereInput[]
    OR?: XPEventScalarWhereInput[]
    NOT?: XPEventScalarWhereInput | XPEventScalarWhereInput[]
    id?: StringFilter<"XPEvent"> | string
    userId?: StringFilter<"XPEvent"> | string
    eventType?: StringFilter<"XPEvent"> | string
    xpAmount?: IntFilter<"XPEvent"> | number
    metadata?: JsonNullableFilter<"XPEvent">
    createdAt?: DateTimeFilter<"XPEvent"> | Date | string
  }

  export type DailyActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    update: XOR<DailyActivityUpdateWithoutUserInput, DailyActivityUncheckedUpdateWithoutUserInput>
    create: XOR<DailyActivityCreateWithoutUserInput, DailyActivityUncheckedCreateWithoutUserInput>
  }

  export type DailyActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyActivityWhereUniqueInput
    data: XOR<DailyActivityUpdateWithoutUserInput, DailyActivityUncheckedUpdateWithoutUserInput>
  }

  export type DailyActivityUpdateManyWithWhereWithoutUserInput = {
    where: DailyActivityScalarWhereInput
    data: XOR<DailyActivityUpdateManyMutationInput, DailyActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyActivityScalarWhereInput = {
    AND?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
    OR?: DailyActivityScalarWhereInput[]
    NOT?: DailyActivityScalarWhereInput | DailyActivityScalarWhereInput[]
    id?: StringFilter<"DailyActivity"> | string
    userId?: StringFilter<"DailyActivity"> | string
    date?: DateTimeFilter<"DailyActivity"> | Date | string
    wordsLearned?: IntFilter<"DailyActivity"> | number
    wordsReviewed?: IntFilter<"DailyActivity"> | number
    xpEarned?: IntFilter<"DailyActivity"> | number
    streakCount?: IntFilter<"DailyActivity"> | number
    createdAt?: DateTimeFilter<"DailyActivity"> | Date | string
    updatedAt?: DateTimeFilter<"DailyActivity"> | Date | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudySetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudySetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudySetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudySetsInput, UserUncheckedCreateWithoutStudySetsInput>
  }

  export type CategoryCreateWithoutStudySetsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutStudySetsInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type CategoryCreateOrConnectWithoutStudySetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutStudySetsInput, CategoryUncheckedCreateWithoutStudySetsInput>
  }

  export type VocabularyCreateWithoutStudySetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutVocabulariesInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateWithoutStudySetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutVocabularyInput
  }

  export type VocabularyCreateOrConnectWithoutStudySetInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput>
  }

  export type VocabularyCreateManyStudySetInputEnvelope = {
    data: VocabularyCreateManyStudySetInput | VocabularyCreateManyStudySetInput[]
  }

  export type UserLikesStudySetCreateWithoutStudySetInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedStudySetsInput
  }

  export type UserLikesStudySetUncheckedCreateWithoutStudySetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserLikesStudySetCreateOrConnectWithoutStudySetInput = {
    where: UserLikesStudySetWhereUniqueInput
    create: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput>
  }

  export type UserLikesStudySetCreateManyStudySetInputEnvelope = {
    data: UserLikesStudySetCreateManyStudySetInput | UserLikesStudySetCreateManyStudySetInput[]
  }

  export type UserUpsertWithoutStudySetsInput = {
    update: XOR<UserUpdateWithoutStudySetsInput, UserUncheckedUpdateWithoutStudySetsInput>
    create: XOR<UserCreateWithoutStudySetsInput, UserUncheckedCreateWithoutStudySetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudySetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudySetsInput, UserUncheckedUpdateWithoutStudySetsInput>
  }

  export type UserUpdateWithoutStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutStudySetsInput = {
    update: XOR<CategoryUpdateWithoutStudySetsInput, CategoryUncheckedUpdateWithoutStudySetsInput>
    create: XOR<CategoryCreateWithoutStudySetsInput, CategoryUncheckedCreateWithoutStudySetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutStudySetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutStudySetsInput, CategoryUncheckedUpdateWithoutStudySetsInput>
  }

  export type CategoryUpdateWithoutStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type VocabularyUpsertWithWhereUniqueWithoutStudySetInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutStudySetInput, VocabularyUncheckedUpdateWithoutStudySetInput>
    create: XOR<VocabularyCreateWithoutStudySetInput, VocabularyUncheckedCreateWithoutStudySetInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutStudySetInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutStudySetInput, VocabularyUncheckedUpdateWithoutStudySetInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutStudySetInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutStudySetInput>
  }

  export type UserLikesStudySetUpsertWithWhereUniqueWithoutStudySetInput = {
    where: UserLikesStudySetWhereUniqueInput
    update: XOR<UserLikesStudySetUpdateWithoutStudySetInput, UserLikesStudySetUncheckedUpdateWithoutStudySetInput>
    create: XOR<UserLikesStudySetCreateWithoutStudySetInput, UserLikesStudySetUncheckedCreateWithoutStudySetInput>
  }

  export type UserLikesStudySetUpdateWithWhereUniqueWithoutStudySetInput = {
    where: UserLikesStudySetWhereUniqueInput
    data: XOR<UserLikesStudySetUpdateWithoutStudySetInput, UserLikesStudySetUncheckedUpdateWithoutStudySetInput>
  }

  export type UserLikesStudySetUpdateManyWithWhereWithoutStudySetInput = {
    where: UserLikesStudySetScalarWhereInput
    data: XOR<UserLikesStudySetUpdateManyMutationInput, UserLikesStudySetUncheckedUpdateManyWithoutStudySetInput>
  }

  export type StudySetCreateWithoutVocabulariesInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutStudySetsInput
    category: CategoryCreateNestedOneWithoutStudySetsInput
    likedBy?: UserLikesStudySetCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUncheckedCreateWithoutVocabulariesInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    categoryId: string
    likedBy?: UserLikesStudySetUncheckedCreateNestedManyWithoutStudySetInput
  }

  export type StudySetCreateOrConnectWithoutVocabulariesInput = {
    where: StudySetWhereUniqueInput
    create: XOR<StudySetCreateWithoutVocabulariesInput, StudySetUncheckedCreateWithoutVocabulariesInput>
  }

  export type UserCreateWithoutVocabulariesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVocabulariesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVocabulariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVocabulariesInput, UserUncheckedCreateWithoutVocabulariesInput>
  }

  export type UserVocabularyProgressCreateWithoutVocabularyInput = {
    id?: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVocabularyProgressInput
  }

  export type UserVocabularyProgressUncheckedCreateWithoutVocabularyInput = {
    id?: string
    userId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressCreateOrConnectWithoutVocabularyInput = {
    where: UserVocabularyProgressWhereUniqueInput
    create: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput>
  }

  export type UserVocabularyProgressCreateManyVocabularyInputEnvelope = {
    data: UserVocabularyProgressCreateManyVocabularyInput | UserVocabularyProgressCreateManyVocabularyInput[]
  }

  export type StudySetUpsertWithoutVocabulariesInput = {
    update: XOR<StudySetUpdateWithoutVocabulariesInput, StudySetUncheckedUpdateWithoutVocabulariesInput>
    create: XOR<StudySetCreateWithoutVocabulariesInput, StudySetUncheckedCreateWithoutVocabulariesInput>
    where?: StudySetWhereInput
  }

  export type StudySetUpdateToOneWithWhereWithoutVocabulariesInput = {
    where?: StudySetWhereInput
    data: XOR<StudySetUpdateWithoutVocabulariesInput, StudySetUncheckedUpdateWithoutVocabulariesInput>
  }

  export type StudySetUpdateWithoutVocabulariesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutStudySetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutStudySetsNestedInput
    likedBy?: UserLikesStudySetUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateWithoutVocabulariesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    likedBy?: UserLikesStudySetUncheckedUpdateManyWithoutStudySetNestedInput
  }

  export type UserUpsertWithoutVocabulariesInput = {
    update: XOR<UserUpdateWithoutVocabulariesInput, UserUncheckedUpdateWithoutVocabulariesInput>
    create: XOR<UserCreateWithoutVocabulariesInput, UserUncheckedCreateWithoutVocabulariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVocabulariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVocabulariesInput, UserUncheckedUpdateWithoutVocabulariesInput>
  }

  export type UserUpdateWithoutVocabulariesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVocabulariesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserVocabularyProgressUpsertWithWhereUniqueWithoutVocabularyInput = {
    where: UserVocabularyProgressWhereUniqueInput
    update: XOR<UserVocabularyProgressUpdateWithoutVocabularyInput, UserVocabularyProgressUncheckedUpdateWithoutVocabularyInput>
    create: XOR<UserVocabularyProgressCreateWithoutVocabularyInput, UserVocabularyProgressUncheckedCreateWithoutVocabularyInput>
  }

  export type UserVocabularyProgressUpdateWithWhereUniqueWithoutVocabularyInput = {
    where: UserVocabularyProgressWhereUniqueInput
    data: XOR<UserVocabularyProgressUpdateWithoutVocabularyInput, UserVocabularyProgressUncheckedUpdateWithoutVocabularyInput>
  }

  export type UserVocabularyProgressUpdateManyWithWhereWithoutVocabularyInput = {
    where: UserVocabularyProgressScalarWhereInput
    data: XOR<UserVocabularyProgressUpdateManyMutationInput, UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyInput>
  }

  export type StudySetCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutStudySetsInput
    vocabularies?: VocabularyCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutStudySetInput
    likedBy?: UserLikesStudySetUncheckedCreateNestedManyWithoutStudySetInput
  }

  export type StudySetCreateOrConnectWithoutCategoryInput = {
    where: StudySetWhereUniqueInput
    create: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput>
  }

  export type StudySetCreateManyCategoryInputEnvelope = {
    data: StudySetCreateManyCategoryInput | StudySetCreateManyCategoryInput[]
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type StudySetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: StudySetWhereUniqueInput
    update: XOR<StudySetUpdateWithoutCategoryInput, StudySetUncheckedUpdateWithoutCategoryInput>
    create: XOR<StudySetCreateWithoutCategoryInput, StudySetUncheckedCreateWithoutCategoryInput>
  }

  export type StudySetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: StudySetWhereUniqueInput
    data: XOR<StudySetUpdateWithoutCategoryInput, StudySetUncheckedUpdateWithoutCategoryInput>
  }

  export type StudySetUpdateManyWithWhereWithoutCategoryInput = {
    where: StudySetScalarWhereInput
    data: XOR<StudySetUpdateManyMutationInput, StudySetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLikedStudySetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedStudySetsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedStudySetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedStudySetsInput, UserUncheckedCreateWithoutLikedStudySetsInput>
  }

  export type StudySetCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutStudySetsInput
    category: CategoryCreateNestedOneWithoutStudySetsInput
    vocabularies?: VocabularyCreateNestedManyWithoutStudySetInput
  }

  export type StudySetUncheckedCreateWithoutLikedByInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    categoryId: string
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutStudySetInput
  }

  export type StudySetCreateOrConnectWithoutLikedByInput = {
    where: StudySetWhereUniqueInput
    create: XOR<StudySetCreateWithoutLikedByInput, StudySetUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikedStudySetsInput = {
    update: XOR<UserUpdateWithoutLikedStudySetsInput, UserUncheckedUpdateWithoutLikedStudySetsInput>
    create: XOR<UserCreateWithoutLikedStudySetsInput, UserUncheckedCreateWithoutLikedStudySetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedStudySetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedStudySetsInput, UserUncheckedUpdateWithoutLikedStudySetsInput>
  }

  export type UserUpdateWithoutLikedStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedStudySetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudySetUpsertWithoutLikedByInput = {
    update: XOR<StudySetUpdateWithoutLikedByInput, StudySetUncheckedUpdateWithoutLikedByInput>
    create: XOR<StudySetCreateWithoutLikedByInput, StudySetUncheckedCreateWithoutLikedByInput>
    where?: StudySetWhereInput
  }

  export type StudySetUpdateToOneWithWhereWithoutLikedByInput = {
    where?: StudySetWhereInput
    data: XOR<StudySetUpdateWithoutLikedByInput, StudySetUncheckedUpdateWithoutLikedByInput>
  }

  export type StudySetUpdateWithoutLikedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutStudySetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutStudySetsNestedInput
    vocabularies?: VocabularyUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateWithoutLikedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUncheckedUpdateManyWithoutStudySetNestedInput
  }

  export type UserCreateWithoutVocabularyProgressInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVocabularyProgressInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVocabularyProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVocabularyProgressInput, UserUncheckedCreateWithoutVocabularyProgressInput>
  }

  export type VocabularyCreateWithoutVocabularyProgressInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySet: StudySetCreateNestedOneWithoutVocabulariesInput
    createdBy: UserCreateNestedOneWithoutVocabulariesInput
  }

  export type VocabularyUncheckedCreateWithoutVocabularyProgressInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySetId: string
    createdById: string
  }

  export type VocabularyCreateOrConnectWithoutVocabularyProgressInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutVocabularyProgressInput, VocabularyUncheckedCreateWithoutVocabularyProgressInput>
  }

  export type UserUpsertWithoutVocabularyProgressInput = {
    update: XOR<UserUpdateWithoutVocabularyProgressInput, UserUncheckedUpdateWithoutVocabularyProgressInput>
    create: XOR<UserCreateWithoutVocabularyProgressInput, UserUncheckedCreateWithoutVocabularyProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVocabularyProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVocabularyProgressInput, UserUncheckedUpdateWithoutVocabularyProgressInput>
  }

  export type UserUpdateWithoutVocabularyProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVocabularyProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VocabularyUpsertWithoutVocabularyProgressInput = {
    update: XOR<VocabularyUpdateWithoutVocabularyProgressInput, VocabularyUncheckedUpdateWithoutVocabularyProgressInput>
    create: XOR<VocabularyCreateWithoutVocabularyProgressInput, VocabularyUncheckedCreateWithoutVocabularyProgressInput>
    where?: VocabularyWhereInput
  }

  export type VocabularyUpdateToOneWithWhereWithoutVocabularyProgressInput = {
    where?: VocabularyWhereInput
    data: XOR<VocabularyUpdateWithoutVocabularyProgressInput, VocabularyUncheckedUpdateWithoutVocabularyProgressInput>
  }

  export type VocabularyUpdateWithoutVocabularyProgressInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySet?: StudySetUpdateOneRequiredWithoutVocabulariesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutVocabulariesNestedInput
  }

  export type VocabularyUncheckedUpdateWithoutVocabularyProgressInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySetId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutUniqueWordsLearnedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUniqueWordsLearnedInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUniqueWordsLearnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniqueWordsLearnedInput, UserUncheckedCreateWithoutUniqueWordsLearnedInput>
  }

  export type UserUpsertWithoutUniqueWordsLearnedInput = {
    update: XOR<UserUpdateWithoutUniqueWordsLearnedInput, UserUncheckedUpdateWithoutUniqueWordsLearnedInput>
    create: XOR<UserCreateWithoutUniqueWordsLearnedInput, UserUncheckedCreateWithoutUniqueWordsLearnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUniqueWordsLearnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUniqueWordsLearnedInput, UserUncheckedUpdateWithoutUniqueWordsLearnedInput>
  }

  export type UserUpdateWithoutUniqueWordsLearnedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUniqueWordsLearnedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutXpEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutXpEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    dailyActivities?: DailyActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutXpEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
  }

  export type UserUpsertWithoutXpEventsInput = {
    update: XOR<UserUpdateWithoutXpEventsInput, UserUncheckedUpdateWithoutXpEventsInput>
    create: XOR<UserCreateWithoutXpEventsInput, UserUncheckedCreateWithoutXpEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutXpEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutXpEventsInput, UserUncheckedUpdateWithoutXpEventsInput>
  }

  export type UserUpdateWithoutXpEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutXpEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    dailyActivities?: DailyActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordCreateNestedManyWithoutUserInput
    xpEvents?: XPEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    avatarUrl?: string | null
    level?: number
    xp?: number
    streak?: number
    lastLearningDate?: Date | string | null
    totalWordsLearned?: number
    dailyGoal?: number
    difficultyPreference?: string
    notificationsEnabled?: boolean
    publicProfile?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    vocabularies?: VocabularyUncheckedCreateNestedManyWithoutCreatedByInput
    studySets?: StudySetUncheckedCreateNestedManyWithoutAuthorInput
    likedStudySets?: UserLikesStudySetUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutAuthorInput
    vocabularyProgress?: UserVocabularyProgressUncheckedCreateNestedManyWithoutUserInput
    uniqueWordsLearned?: UserUniqueWordUncheckedCreateNestedManyWithoutUserInput
    xpEvents?: XPEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
  }

  export type UserUpsertWithoutDailyActivitiesInput = {
    update: XOR<UserUpdateWithoutDailyActivitiesInput, UserUncheckedUpdateWithoutDailyActivitiesInput>
    create: XOR<UserCreateWithoutDailyActivitiesInput, UserUncheckedCreateWithoutDailyActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyActivitiesInput, UserUncheckedUpdateWithoutDailyActivitiesInput>
  }

  export type UserUpdateWithoutDailyActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    lastLearningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalWordsLearned?: IntFieldUpdateOperationsInput | number
    dailyGoal?: IntFieldUpdateOperationsInput | number
    difficultyPreference?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    publicProfile?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    vocabularies?: VocabularyUncheckedUpdateManyWithoutCreatedByNestedInput
    studySets?: StudySetUncheckedUpdateManyWithoutAuthorNestedInput
    likedStudySets?: UserLikesStudySetUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutAuthorNestedInput
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutUserNestedInput
    uniqueWordsLearned?: UserUniqueWordUncheckedUpdateManyWithoutUserNestedInput
    xpEvents?: XPEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VocabularyCreateManyCreatedByInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    studySetId: string
  }

  export type StudySetCreateManyAuthorInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type UserLikesStudySetCreateManyUserInput = {
    id?: string
    studySetId: string
    createdAt?: Date | string
  }

  export type CategoryCreateManyAuthorInput = {
    id?: string
    name: string
    description?: string | null
    imageUrl?: string | null
    icon: string
    color: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressCreateManyUserInput = {
    id?: string
    vocabularyId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUniqueWordCreateManyUserInput = {
    id?: string
    word: string
    firstLearnedAt?: Date | string
  }

  export type XPEventCreateManyUserInput = {
    id?: string
    eventType: string
    xpAmount: number
    metadata?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type DailyActivityCreateManyUserInput = {
    id?: string
    date: Date | string
    wordsLearned?: number
    wordsReviewed?: number
    xpEarned?: number
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUpdateWithoutCreatedByInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySet?: StudySetUpdateOneRequiredWithoutVocabulariesNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateWithoutCreatedByInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySetId?: StringFieldUpdateOperationsInput | string
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateManyWithoutCreatedByInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySetId?: StringFieldUpdateOperationsInput | string
  }

  export type StudySetUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutStudySetsNestedInput
    vocabularies?: VocabularyUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUncheckedUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUncheckedUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesStudySetUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySet?: StudySetUpdateOneRequiredWithoutLikedByNestedInput
  }

  export type UserLikesStudySetUncheckedUpdateWithoutUserInput = {
    studySetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikesStudySetUncheckedUpdateManyWithoutUserInput = {
    studySetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySets?: StudySetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studySets?: StudySetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vocabulary?: VocabularyUpdateOneRequiredWithoutVocabularyProgressNestedInput
  }

  export type UserVocabularyProgressUncheckedUpdateWithoutUserInput = {
    vocabularyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressUncheckedUpdateManyWithoutUserInput = {
    vocabularyId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordUpdateWithoutUserInput = {
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordUncheckedUpdateWithoutUserInput = {
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUniqueWordUncheckedUpdateManyWithoutUserInput = {
    word?: StringFieldUpdateOperationsInput | string
    firstLearnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventUpdateWithoutUserInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventUncheckedUpdateWithoutUserInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type XPEventUncheckedUpdateManyWithoutUserInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    xpAmount?: IntFieldUpdateOperationsInput | number
    metadata?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityUncheckedUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyActivityUncheckedUpdateManyWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    wordsLearned?: IntFieldUpdateOperationsInput | number
    wordsReviewed?: IntFieldUpdateOperationsInput | number
    xpEarned?: IntFieldUpdateOperationsInput | number
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyStudySetInput = {
    id?: string
    word: string
    pronunciation?: string | null
    meaning: string
    definition?: string | null
    example?: string | null
    imageUrl?: string | null
    audioUrl?: string | null
    cefrLevel?: string | null
    partOfSpeech?: $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyCreatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type UserLikesStudySetCreateManyStudySetInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type VocabularyUpdateWithoutStudySetInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutVocabulariesNestedInput
    vocabularyProgress?: UserVocabularyProgressUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateWithoutStudySetInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    vocabularyProgress?: UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateManyWithoutStudySetInput = {
    word?: StringFieldUpdateOperationsInput | string
    pronunciation?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    example?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cefrLevel?: NullableStringFieldUpdateOperationsInput | string | null
    partOfSpeech?: EnumPartOfSpeechFieldUpdateOperationsInput | $Enums.PartOfSpeech
    alternativePartOfSpeech?: VocabularyUpdatealternativePartOfSpeechInput | $Enums.PartOfSpeech[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikesStudySetUpdateWithoutStudySetInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedStudySetsNestedInput
  }

  export type UserLikesStudySetUncheckedUpdateWithoutStudySetInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikesStudySetUncheckedUpdateManyWithoutStudySetInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressCreateManyVocabularyInput = {
    id?: string
    userId: string
    status?: string
    lastReviewedAt?: Date | string | null
    nextReviewAt?: Date | string | null
    reviewCount?: number
    correctCount?: number
    incorrectCount?: number
    easeFactor?: number
    interval?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVocabularyProgressUpdateWithoutVocabularyInput = {
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVocabularyProgressNestedInput
  }

  export type UserVocabularyProgressUncheckedUpdateWithoutVocabularyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVocabularyProgressUncheckedUpdateManyWithoutVocabularyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextReviewAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewCount?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    incorrectCount?: IntFieldUpdateOperationsInput | number
    easeFactor?: FloatFieldUpdateOperationsInput | number
    interval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudySetCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    level?: $Enums.Level
    tags?: StudySetCreatetagsInput | string[]
    isPublic?: boolean
    likesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type StudySetUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutStudySetsNestedInput
    vocabularies?: VocabularyUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    vocabularies?: VocabularyUncheckedUpdateManyWithoutStudySetNestedInput
    likedBy?: UserLikesStudySetUncheckedUpdateManyWithoutStudySetNestedInput
  }

  export type StudySetUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    tags?: StudySetUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    likesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
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