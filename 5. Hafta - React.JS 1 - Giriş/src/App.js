import Kategori from './Kategori.js';
import Navigate from './Navigate.js';
import UrunListesi from './UrunListesi.js';
import {Container, Row, Col} from 'reactstrap';

function App() {
  let baslikkategori = "Yüzde 20 İndirim";
  return (
    <div>
      <Container>
        <Row>
        <Navigate />
        </Row>
        <Row>
          <Col xs="3">
            <Kategori baslik={baslikkategori}/>
          </Col>
          <Col xs="3">
            <UrunListesi />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
