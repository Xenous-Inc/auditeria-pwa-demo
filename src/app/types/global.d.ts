/* eslint-disable init-declarations */

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.scss' {
    const classNames: Record<string, string>;
    export = classNames;
}

declare module '*.sass' {
    const classNames: Record<string, string>;
    export = classNames;
}

declare module '*.css' {
    const classNames: Record<string, string>;
    export = classNames;
}
