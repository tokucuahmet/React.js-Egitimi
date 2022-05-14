import React, { Component } from "react";
import Navigate from "./Navigate";
import Kategori from "./Kategori";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import SepetListesi from "./SepetListesi";

class App extends Component {
  state = { seciliKategori: "", urunler: [], sepet: [] };
  kategoriDegistir = (kategori) => {
    this.setState({ seciliKategori: kategori.categoryName });
  };

  urunGetir() {
    fetch("http://localhost:3000/products")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data }));
  }

  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.adet += 1;
    } else {
      yeniUrun.push({ urun: urun, adet: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + " sepete eklendi", 3);
  };

  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((u) => u.urun.id !== urun.id);
    this.setState({ sepet: kalanUrunler });
  };
  componentDidMount() {
    this.urunGetir();
  }

  render() {
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlave Bilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate
              sepettenCikar={this.sepettenCikar}
              sepet={this.state.sepet}
            />
          </Row>
          <Row>
            <Col xs="3">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <UrunListesi
                      sepeteEkle={this.sepeteEkle}
                      urunler={this.state.urunler}
                      seciliKategori={this.state.seciliKategori}
                      bilgiUrunListesi={bilgiUrunListesi}
                    />
                  }
                />
                <Route path="/sepet" element={<SepetListesi />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
