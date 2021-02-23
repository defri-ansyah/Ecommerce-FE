import React, { Component } from 'react'
import '../assets/Card.css'

class Home extends Component {
  render() {
    return (
    <div className='row mx-4 mt-5 mb-5'>
      <div className='d-flex wrap'>
        <div className='ps-3 pe-3 pb-2 product'>
          {/* <img src="img/search-product.svg" alt=""/> */}
          <img src="img/search-product-active.svg" alt=""/>
          <span style={{color: '#03ac0e'}}>Produk</span>
        </div>
        <div className='ps-3 pe-3'>
          <img src="img/search-store.svg" alt=""/>
          <span>Toko</span>
        </div>
        <div className='ps-3'>
          <img src="img/search-profile.svg" alt=""/>
          <span>Profil</span>
        </div>
      </div>

      <hr/>
      <div className='d-flex justify-content-between align-items-center mb-3 mt-2'>
        <span>Menampilkan 20.987 product untuk "rompi" (1-12 dari 20.987)</span>
        <span style={{marginLeft: '58%', fontWeight: 'bold'}}>Urutkan: </span>
        <select className='form-select' aria-label='Default select Example'>
          <option value="1">Paling Sesuai</option>
          <option value="2">Ulasan</option>
          <option value="3">Terbaru</option>
          <option value="4">Harga Tertinggi</option>
          <option value="5">Harga Terendah</option>
        </select>
      </div>

      <div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2 mb-3'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 50.350</h6>
            <div className='align-items-center'>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <img className='me-1' width= '10px' height= '10px' src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div><div className='col-2'>
        <div className='card'>
          <img src="img/12.jpg" className='card-img-top' alt="..."/>
          <div className='card-body'>
            <h6 className='card-title'>Pakaian Anak Lucu</h6>
            <div className='d-flex'>
              <span className='badge badge-pill' style={{backgroundColor: '#ff00d13b', color: '#d50000'}}>47%</span>
              <span className='badge-pill badge'style={{color: '#989898'}}><del>Rp 95.000</del></span>
            </div>
            <h6 className='mt-1'>Rp 47.000</h6>
            <div className='align-items-center'>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <img className='me-1' style={{width: '10', height: '10'}} src="img/icon-bintang.png" alt=""/>
              <span style={{color: '#989898'}}>(14)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Home