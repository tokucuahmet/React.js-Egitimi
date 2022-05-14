import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [
        {kategoriId: 1, kategoriIsim: "Bilgisayar"},
        {kategoriId: 2, kategoriIsim: "Telefon"},
        {kategoriId: 3, kategoriIsim: "Beyaz Eşya"},
        {kategoriId: 4, kategoriIsim: "Kırtasiye"},
        {kategoriId: 5, kategoriIsim: "Kozmetik"},
      ],
      seciliKategoriler: ""
    }
  }
  kategoriDegistir = (kategori) => {
    this.setState({seciliKategoriler: kategori.kategoriIsim}) // Kategoriler'in ismini alıyor
  }
  render() {
    return (
      <div>
          <h3>{this.props.baslik}</h3>
          <ListGroup>
            {this.state.kategoriler.map(kategori => {
              return (
                <ListGroupItem 
                onClick={() => this.kategoriDegistir(kategori)}
                key={kategori.kategoriId}>{kategori.kategoriIsim}
                </ListGroupItem>
              )
            })}
          </ListGroup>
          <h4>{this.state.seciliKategoriler}</h4>
      </div>
    )
  }
}
