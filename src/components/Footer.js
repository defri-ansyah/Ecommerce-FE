import React, { Component } from 'react';
import '../assets/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='container d-flex justify-content-start align-items-start'>
          <ul className='parent-footer one'>
            <li className='title'>Tokopedia</li>
            <li>Tentang Tokopedia</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Tokopedia Saham</li>
            <li>Hotel</li>
            <li>Bridestory</li>
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
          <div className='four d-flex flex-column align-items-center'>
            <img width='500px' src="/img/21.png" alt=""/>
            <div className='d-flex mt-3'>
              <img className='me-3' width='150px' src="/img/22.png" alt=""/>
              <img width='150px' src="/img/23.png" alt=""/>
            </div>
            <span className='mt-3' style={{color: '#989898'}}>© 2009 - 2021, PT. Tokopedia.</span>
            <div className='d-flex align-items-center mt-3 p-1 rounded' style={{backgroundColor:'#f4f4f4'}}>
              <span className='text-white fw-bold p-1 me-2 rounded' style={{backgroundColor: '#03ac0e', fontWeight: 'bold'}}>Indonesia</span>
              <span className='pe-2' style={{color: '#989898', fontWeight: 'bold'}}>English</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
