/********************************************************************************
 *   Ledger Node JS API
 *   (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ********************************************************************************/
declare type Defer<T> = {
    promise: Promise<T>;
    resolve: (arg0: T) => void;
    reject: (arg0: any) => void;
};
export declare function defer<T>(): Defer<T>;
export declare function splitPath(path: string): number[];
export declare function eachSeries<A>(arr: A[], fun: (arg0: A) => Promise<any>): Promise<any>;
export declare function foreach<T, A>(arr: T[], callback: (arg0: T, arg1: number) => Promise<A>): Promise<A[]>;
export declare function doIf(condition: boolean, callback: () => any | Promise<any>): Promise<void>;
export declare function asyncWhile<T>(predicate: () => boolean, callback: () => Promise<T>): Promise<Array<T>>;
export {};
//# sourceMappingURL=utils.d.ts.map