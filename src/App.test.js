import { render } from '@testing-library/react';
import App from './App';

test('should render without crash', () => {
  let wrapper = render(<App />);
  expect(wrapper).toBeDefined();
});
