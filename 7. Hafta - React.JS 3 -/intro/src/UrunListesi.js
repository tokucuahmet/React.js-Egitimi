import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Alert,
  CardTitle,
  Button,
  Card,
  CardText,
} from "reactstrap";
import { Table } from "reactstrap";

class UrunListesi extends Component {
	
  render() {
    return (
      <div>
        <h3>{this.props.bilgiUrunListesi.baslik}</h3>
        <div>
          <h4>{this.props.seciliKategori}</h4>
        </div>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th>Birim Fiyat</th>
              <th>quantityPerUnit</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((urun) => (
              <tr key={urun.id}>
                <th scope="row">{urun.id}</th>

                <td>{urun.productName}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.quantityPerUnit}</td>
                <td>{urun.unitsInStock}</td>
                <td>
                  <div>
                    <Button 
					onClick={()=>this.props.sepeteEkle(urun)}
					color="primary">Ekle</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UrunListesi;
