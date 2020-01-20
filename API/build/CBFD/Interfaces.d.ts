/// <reference types="node" />
export interface IBuffered {
    get_all(): Buffer;
    set_all(value: Buffer): void;
    get_bit(flag: number): boolean;
    set_bit(flag: number, value: boolean): void;
    get(offset: number): number;
    set(offset: number, value: number): void;
}
export interface IPlayer {
}
export interface IRuntime {
}
export interface ISaveContext {
}
export interface IDK64Core {
    conker: IPlayer;
    runtime: IRuntime;
    save: ISaveContext;
}