import styled from 'styled-components';
import { theme } from '../styles/GlobalStyle';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px 24px 60px;
  max-width: 640px;
  margin-inline: auto;
`;

export const Row = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 18px 6px;
  border-bottom: 1px solid ${theme.hairline};

  &:last-child {
    border-bottom: none;
  }
`;

export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ItemName = styled.span`
  font-size: 17px;
  color: ${theme.text};
`;

export const ItemDetail = styled.span`
  font-size: 13px;
  color: ${theme.textMuted};
`;

export const Leader = styled.span`
  flex: 1;
  border-bottom: 2px dotted ${theme.hairline};
  margin-bottom: 6px;
  min-width: 24px;
`;

export const Price = styled.span`
  font-variant-numeric: tabular-nums;
  color: ${theme.gold};
  font-size: 17px;
  white-space: nowrap;
`;

export const StatusText = styled.p`
  max-width: 640px;
  margin: 24px auto;
  padding: 0 24px;
  color: ${theme.textMuted};
`;

export function formatPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
