import React, { Component } from 'react';
import '../assets/Header.css'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='item-header-1 d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img className='me-2' src= 'img/1.png' alt=""/>
            <span>Download Tokopedia App</span>
          </div>
          <div className='d-flex'>
            <span className='me-4'>Tentang Tokopedia</span>
            <span className='me-4'>Mitra Tokopedia</span>
            <span className='me-4'>Mulai Berjualan</span>
            <span className='me-4'>Promo</span>
            <span className='me-4'>Tokopedia Care</span>
          </div>
        </div>

        <div className='item-header-2 d-flex flex-column'>
          <div className='d-flex justify-content-between align-items-center'>
            <img className='img-tokopedia' src="img/2.png" alt=""/>
            <span className='mx-2 text-kategori'>Kategori</span>
            <div className='wrap-search'>
              <input type="text" className='form-control' placeholder='Cari barang'/>
              <div className='wrap-icon-search'>
                <img className='img-search' src="img/3.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;