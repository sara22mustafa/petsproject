import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {hasError: false};
  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    //send to loggin service
    console.log('ErrorBoundar caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">click here</Link>
          to go the home page
        </h2>
      );
    }
    return this.props.children;
  }
}
