import { PropsWithChildren } from "react";

export interface ErrorBoundaryProps extends PropsWithChildren {}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}
