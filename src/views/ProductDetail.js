import React, { Component } from 'react'
import '../assets/ProductDetail.css'

class ProductDetail extends Component {
  render() {
    return (
      <div className='product-detail wrapper'>
        <div className='path'>
          <ul className='d-flex align-items-center'>
            <li>
              <span>Home</span>
              <img src="img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Kategori</span>
              <img src="img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Sub-Kategori</span>
              <img src="img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Sub-Sub-Kategori</span>
              <img src="img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span style={{ color: '#7e7e7e' }}>Rompi</span>
            </li>
          </ul>
        </div>

        <div className='product-detail-wrapper'>
          <div className='product-img'>
            <div className='product-img-wrapper'>
              <div className='img-primary'>
                <img src="img/12.jpg" alt="" />
              </div>
              {/* <div class="img-part">
            <div class="img img-1">
              <img src="img/12.jpg" alt=""/>
            </div>
            </div> */}
            </div>
          </div>
          {/* <hr style={{ width: '446px', marginLeft: '100px' }} /> */}

          <div className='product-detail-info'>
            <div>
              <div class="label-store">
                <img src="img/label-store-icon.svg" alt="" />
                <span>Official Store</span>
              </div>
              <h2 className='product-name'>Pakaian Anak lucu</h2>
              <div class="product-score">
                <div class="score">
                  <span>4.0</span>
                  <div class="stars">
                    <img src="img/star.png" alt="" />
                  </div>
                  <span>(184)</span>
                </div>
                <span class="dot">&#8226;</span>
                <div class="sold">
                  <span><strong>Terjual 399 Produk</strong> (100%)</span>
                </div>
                <span class="dot">&#8226;</span>
                <div class="seen"><span><strong>54238x</strong> Dilihat</span></div>
              </div>
              <div class="product-guarantee">
                <div class="ready">
                  <img src="img/ready-icon.svg" alt="" />
                  <span>Pasti Ready</span>
                </div>
                <div class="original">
                  <img src="img/ori-icon.svg" alt="" />
                  <span>Pasti Ori</span>
                </div>
                <div class="guarantee">
                  <img src="img/guarantee-7-icon.svg" alt="" />
                  <span>Garansi 7 hari</span>
                </div>
              </div>
            </div>
            <div class="detail-group product-price">
              <div class="left-header">
                <p>HARGA</p>
              </div>
              <div class="right-description">
                {/* <div class="discount">
                  <div class="amount-discount">76%</div>
                  <p>Rp. 889.000</p>
                </div> */}
                <div class="price">
                  <p style={{ color: 'orangered', fontSize: '30px', fontWeight:'bold'}}>Rp 50.350</p>
                </div>
                <div class="price-guarantee">
                  <img src="img/rp-icon.svg" alt="" />
                  <span>Garansi harga termurah</span>
                </div>
              </div>
            </div>

            <div class="detail-group amount-buy">
              <div class="left-header">
                {/* <p>JUMLAH</p> */}
                <p>WARNA</p>
              </div>
              {/* <div class="right-description">
                <p class="counter-label">Stok tersedia</p>
                <div class="counter">
                  <div class="counter-box">
                    <img src="img/counter-minus.svg" alt=""/>
                    <img src="img/counter-minus-disabled.svg" alt="" />
                    <input type="number" />
                    <img src="img/counter-plus.svg" alt=""/>
                    <img src="img/counter-plus-disabled.svg" alt="" />
                  </div>
                </div>
              </div> */}
              <div class="right-description">
                <p class="counter-label">Pilih variant</p>
                <input type="checkbox" className='btn-check' name='options' id='option1' autoComplete='off' />
                <label className='btn btn-outline-success' for='option1'>Hijau</label>

                <input type="checkbox" className="btn-check" name="options" id="option2" autocomplete="off" />
                <label className="btn btn-outline-secondary" for="option2">Abu-abu</label>

                <input type="checkbox" className="btn-check" name="options" id="option3" autocomplete="off" />
                <label className="btn btn-outline-primary" for="option3">Biru</label>

                <input type="checkbox" className="btn-check" name="options" id="option4" autocomplete="off" />
                <label className="btn btn-outline-dark" for="option4">Hitam</label>
              </div>
            </div>

            <div class="detail-group variant">
              <div class="left-header">
                <p>UKURAN</p>
              </div>
              <div class="right-description">
                <p class="counter-label">Pilih variant</p>
                <input type="checkbox" className='btn-check' name='options' id='option5' autoComplete='off' />
                <label className='btn btn-outline-secondary' for='option5'>M</label>

                <input type="checkbox" className="btn-check" name="options" id="option6" autocomplete="off" />
                <label className="btn btn-outline-secondary" for="option6">L</label>

                <input type="checkbox" className="btn-check" name="options" id="option7" autocomplete="off" />
                <label className="btn btn-outline-secondary" for="option7">XL</label>
              </div>
            </div>

          </div>
        </div>

        <div class="navbar-bottom-wrapper">
          <button type='button' class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal">Tambah Ke Keranjang</button>
        </div>

        {/* Modal */}
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title align-items-center" id="exampleModalLabel">Berhasil Ditambahkan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='d-flex justify-content-between itemModal'>
                  <div>
                  <img width='50px' className='rounded-3' src="img/12.jpg" alt=""/>
                  <span className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                  </div>
                <button type="button" class="btn btn-success">Lihat Keranjang</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProductDetail