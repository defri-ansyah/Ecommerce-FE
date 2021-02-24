import React, { Component } from 'react'
import '../assets/Cart.css'

class Cart extends Component {
  render() {
    return (
      <div className='wrap-cart d-flex'>
        <div className='left-wrap d-flex flex-column col-6'>
          <div className='head-cart d-flex align-items-center'>
            <div>
              <input type="checkbox" name="" id=""/>
              <span className='ms-2'>Pilih Semua Produk</span>
            </div>
            <span className='del'>Hapus</span>
          </div>

          <div>
            <div className='d-flex align-items-center'>
              <input type="checkbox" name="" id=""/>
              <div className='d-flex flex-column'>
                <div className='ms-2'>
                <img width='20px' src="https://ecs7.tokopedia.net/img/blog/seller/2019/06/newpm-pm-icon%403x.png" alt=""/>
                <span className='fw-bold ms-1'>Nama Toko</span>
                </div>
                <span className='city'>Jakarta Pusat</span>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <input type="checkbox" name="" id=""/>
              <div className='d-flex'>
                <img className='img-cart' src="https://ecs7.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp" alt=""/>
                <div className='d-flex flex-column'>
                <span className='fw-bold'>Mainan Lucu, Seriuss</span>
                <span style={{color: 'orangered', fontWeight: 'bold'}}>Rp 50.000</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='catatan'>Tulis Catatan untuk Toko</span>
              <div>
                <img width='20px' className='me-2' src="img/love-flat.svg" alt=""/>
                <img width='20px' className='me-2'  src="img/sampah.png" alt=""/>
                {/* <img src="img/counter-minus.svg" alt=""/> */}
                <img src="img/counter-minus-disabled.svg" alt="" />
                <input type="number" className='input-item'/>
                {/* <img src="img/counter-plus.svg" alt=""/> */}
                <img src="img/counter-plus-disabled.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
        
        <div className='d-flex flex-column wrap-beli'>
          <span style={{fontWeight: 'bold'}}>Ringkasan Belanja</span>
          <hr/>
          <div className='d-flex justify-content-between mb-3'>
            <span>Total Harga</span>
            <span style={{fontWeight: 'bold'}}>Rp 50.350</span>
          </div>
          <button className='btn btn-warning submit'>Beli (3)</button>
        </div>
      </div>
    )
  }
}

export default Cart;
