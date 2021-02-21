import React, { Component } from 'react';
import '../assets/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container footer-link'>
          <ul className='parent-footer one'>
            <li className='title'>Tokopedia</li>
            <li>Tentang Tokopedia</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Tokopedia Saham</li>
            <li>Hotel</li>
            <li>Bridestory</li>
            <li>ParentStory</li>
            <li>Kamus Tokopedia</li>
            <li>Official Store</li>
            <li>Aplikasi Tokopedia</li>
            <li>Keuangan</li>
            <li>Bebas Ongkir</li>
            <li>Tukar Tambah Handphone</li>
            <li>Paket Umroh</li>
            <li>Alquran Online</li>
            <li>Kotak Kejutan</li>
          </ul>
          <div className='parent-footer two'>
            <li className='title'>Beli</li>
            <li>Tiket Kereta</li>
            <li>Tiket Pesawat</li>
            <li>Tiket Events</li>
            <li>Hotlist</li>
            <li>Kategori</li>
            <br/>
            <li className='title'>Jual</li>
            <li>Pusat Edukasi Seller</li>
            <li>Mitra Toppers</li>
            <li>Daftar Official Store</li>
          </div>
          <div className='parent-footer three'>
            <li className='title'>Bantuan dan Panduan</li>
            <li>Tokopedia Care</li>
            <li>Syarat dan Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </div>
          <div className='four'>
            <img src="https://ecs7.tokopedia.net/assets-unify/img/il-footer-2.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
