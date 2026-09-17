import { useEffect, useState } from 'react';
import api from '../api';
import {
  List,
  Row,
  NameBlock,
  ItemName,
  ItemDetail,
  Leader,
  Price,
  StatusText,
  formatPreco,
} from '../components/MenuList';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    api
      .get('/produtos')
      .then((res) => setProdutos(res.data))
      .catch(() => setErro('Não foi possível carregar os produtos agora.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <StatusText>Carregando produtos...</StatusText>;
  if (erro) return <StatusText>{erro}</StatusText>;

  return (
    <List>
      {produtos.map((produto) => (
        <Row key={produto.id}>
          <NameBlock>
            <ItemName>{produto.nome}</ItemName>
            <ItemDetail>{produto.marca}</ItemDetail>
          </NameBlock>
          <Leader />
          <Price>{formatPreco(produto.preco)}</Price>
        </Row>
      ))}
    </List>
  );
}
