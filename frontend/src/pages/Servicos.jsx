import { useEffect, useState } from 'react';
import api from '../api';
import {
  List,
  Row,
  NameBlock,
  ItemName,
  Leader,
  Price,
  StatusText,
  formatPreco,
} from '../components/MenuList';

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    api
      .get('/servicos')
      .then((res) => setServicos(res.data))
      .catch(() => setErro('Não foi possível carregar os serviços agora.'))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <StatusText>Carregando serviços...</StatusText>;
  if (erro) return <StatusText>{erro}</StatusText>;

  return (
    <List>
      {servicos.map((servico) => (
        <Row key={servico.id}>
          <NameBlock>
            <ItemName>{servico.nome}</ItemName>
          </NameBlock>
          <Leader />
          <Price>{formatPreco(servico.preco)}</Price>
        </Row>
      ))}
    </List>
  );
}
