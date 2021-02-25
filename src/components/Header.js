import React, { Component } from 'react';
import '../assets/Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
      <div className='header'>
        <div className='item-header-1 d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img className='me-2' src= '/img/1.png' alt=""/>
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
            <Link to='/'>
              <img className='img-tokopedia' src="/img/2.png" alt=""/>
            </Link>
            <span className='mx-2 text-kategori'>Kategori</span>
            <div className='wrap-search'>
              <input type="text" className='form-control' placeholder='Cari barang' data-bs-toggle="modal" data-bs-target="#exampleModal"/>
              <div className='wrap-icon-search'>
                <img className='img-search' src="img/3.png" alt=""/>
              </div>
            
            </div>
            <div className='wrap-img-shop mx-3'>
              <img className='img-shop' src="img/4.png" alt=""/>
            </div>

            <span className='me-3 line'>|</span>

            <div className='d-flex'>
              <button className='btn font-weight-bold me-3'>Masuk</button>
              <button className='btn font-weight-bold text-white'>Daftar</button>
            </div>
          </div>
          <div className='text-under-search d-flex mt-2'>
            <span className='me-3'>Realme C3</span>
            <span className='me-3'>Helm Ink</span>
            <span className='me-3'>Realme 6</span>
            <span className='me-3'>Mouse Gaming</span>
            <span className='me-3'>Celana Pendek</span>
            <span className='me-3'>Iphone 12 Pro Max</span>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content m-c-head">
          <div className='d-flex justify-content-between'>
            <span className='font-weight-bold title'>Pencarian Terakhir</span>
            <span className='font-weight-bold' style={{color: '#d50000'}}>Hapus Semua</span>
          </div>
          <span className='ms-2 mt-2' style={{fontSize: '14px'}}>Celana Panjang</span>
          <span className='ms-2 mt-2' style={{fontSize: '14px'}}>Sepatu Pria</span>
          <span className='ms-2 mt-2' style={{fontSize: '14px'}}>Baju Kaos</span>
          <span className='font-weight-bold mt-3 mb-2 title'>Populer</span>
          <div className='d-flex flex-wrap'>
            <button className='btn me-2'>Sepatu Bola</button>
            <button className='btn me-2'>Baju Renang</button>
            <button className='btn me-2'>Seragam Sekolah</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Header;