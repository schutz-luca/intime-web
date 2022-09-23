/**
 * IMPORTS
 */
import { ReactNode } from "react";

export interface ICardProps {
    children: ReactNode
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}