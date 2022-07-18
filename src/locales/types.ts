export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>
}

/**
// If you don't want non-existing keys to throw ts error (also keeping the intellisense) you can simply do

export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
} & {
  [P: string]: any;
};

*/

// Selecting the json file that our intellisense would pick from
export type TranslationJsonType = typeof import('./en/translation.json')
