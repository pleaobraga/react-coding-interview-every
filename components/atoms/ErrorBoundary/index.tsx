import React from 'react';
import { message } from 'antd';

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    message.error('Oops! Looks like something bad happened. Try again', 2);
  }

  render() {
    return this.props.children;
  }
}
