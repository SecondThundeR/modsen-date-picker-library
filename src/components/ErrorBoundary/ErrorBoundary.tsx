import React, { ErrorInfo } from "react";

import { Message, Title, Wrapper } from "./ErrorBoundary.styled";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./interfaces";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: "",
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError)
      return (
        <Wrapper>
          <Title>Something went wrong :c</Title>
          <Message>Error details: {this.state.errorMessage}</Message>
        </Wrapper>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
