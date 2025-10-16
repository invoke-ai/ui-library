import { LinkProps } from '.';
export type ExternalLinkProps = Omit<LinkProps, 'isExternal' | 'children'> & {
    label: string;
};
export declare const ExternalLink: ({ label, ...rest }: ExternalLinkProps) => import("react/jsx-runtime").JSX.Element;
