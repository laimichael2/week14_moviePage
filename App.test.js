import { render, screen } from '@testing-library/react';
import App from './App';
import MovieContainer from './movies/MovieContainer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
