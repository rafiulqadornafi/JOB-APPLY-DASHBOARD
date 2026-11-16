import { Component } from "react";
import type { PropsWithChildren } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container page-pad">
          <h2>Something went wrong.</h2>
          <p>Please refresh and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}