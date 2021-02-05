import { render } from '@testing-library/react';
import TopPage from 'pages';

describe('Top page', () => {
  it('renders top page', () => {
    const { getByText } = render(<TopPage />);
    getByText('Test List');
    getByText('About');
  });
});
