/**
 * IMPORTS
 */
import { ReactNode } from "react";

export interface IMainLayoutProps {
    children: ReactNode
}

export interface IContentProps {
    children: ReactNode
    fixed?: JSX.Element
}