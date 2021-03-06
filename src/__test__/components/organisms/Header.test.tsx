import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { FC } from 'react';

// import Header from 'components/organisms/Header';
import useStore, { StoreContext } from 'hooks/useStore';
import { Default } from 'stories/components/organisms/Header.stories';

const Wrapper: FC = ({ children }) => {
  const { store, storeDispatch } = useStore({
    member: { id: 'test', name: 'riku_oishi', dispName: '大石陸' },
    next: 'takuya_suzuki',
  });

  return (
    <StoreContext.Provider value={{ store, storeDispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('organisms/Header', () => {
  beforeEach(() => {
    render(<Default />, {
      wrapper: Wrapper,
    });
  });

  it('is display dispName', () => {
    const menuBtn = screen.getByRole('button', { name: '大石陸' });
    expect(menuBtn).toBeInTheDocument();
  });

  it('menu interaction', () => {
    const menuBtn = screen.getByRole('button', { name: '大石陸' });
    userEvent.click(menuBtn);

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('logout', () => {
    const menuBtn = screen.getByRole('button', { name: '大石陸' });
    userEvent.click(menuBtn);

    const logoutBtn = screen.getByRole('menuitem', { name: 'ログアウト' });
    expect(logoutBtn).toBeInTheDocument();

    userEvent.click(logoutBtn);
    expect(menuBtn).toHaveTextContent('');
  });
});
