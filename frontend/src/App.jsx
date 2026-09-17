import { Routes, Route, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle, { theme } from './styles/GlobalStyle';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';

const Header = styled.header`
  padding: 40px 24px 0;
  max-width: 640px;
  margin: 0 auto;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Pole = styled.span`
  display: inline-block;
  width: 14px;
  height: 44px;
  border-radius: 7px;
  background: repeating-linear-gradient(
    -45deg,
    ${theme.red} 0 8px,
    ${theme.text} 8px 16px,
    ${theme.gold} 16px 24px
  );
  flex-shrink: 0;
`;

const Name = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 40px;
  letter-spacing: 0.5px;
  line-height: 1;
  margin: 0;
  color: ${theme.text};
`;

const Tagline = styled.p`
  margin: 8px 0 0 30px;
  color: ${theme.textMuted};
  font-size: 14px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 28px;
  margin: 28px 0 0 30px;
  border-bottom: 1px solid ${theme.hairline};
`;

const NavTab = styled(RouterNavLink)`
  text-decoration: none;
  color: ${theme.textMuted};
  font-size: 15px;
  padding-bottom: 12px;
  border-bottom: 2px solid transparent;

  &.active {
    color: ${theme.gold};
    border-bottom-color: ${theme.gold};
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Brand>
          <Pole aria-hidden="true" />
          <Name>Barbearia Vintage</Name>
        </Brand>
        <Tagline>Quadro de preços — produtos e serviços</Tagline>
        <Nav>
          <NavTab to="/produtos">Produtos</NavTab>
          <NavTab to="/servicos">Serviços</NavTab>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </>
  );
}