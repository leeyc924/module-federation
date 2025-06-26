
    export type RemoteKeys = 'mf_icon/Icon';
    type PackageType<T> = T extends 'mf_icon/Icon' ? typeof import('mf_icon/Icon') :any;