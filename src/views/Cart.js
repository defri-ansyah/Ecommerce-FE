import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../assets/Cart.css'

const mapStateToProps = state => {
  return {
    dataLocal: state.data.chart
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.dataLocal,
      total: 0,
      count: 0
    }
  }

  handlePlusItem(storeKey, key) {
    const cart = this.state.cart
    cart[storeKey].products[key].qty += 1
    const price = cart[storeKey].products[key].price
    cart[storeKey].total += Number(price.replace('.', ''))
    const total = this.state.total + Number(price.replace('.', ''))
    const count = this.state.count + 1
    this.setState({ cart, total, count })
    this.setState({ cart, total })
  }

  handleMinItem(storeKey, key) {
    const cart = this.state.cart
    cart[storeKey].products[key].qty -= 1
    const price = cart[storeKey].products[key].price
    cart[storeKey].total -= Number(price.replace('.', ''))
    const total = this.state.total - Number(price.replace('.', ''))
    const count = this.state.count - 1
    this.setState({ cart, total, count })
  }

  handleDelete(storeKey, key) {
    const cart = this.state.cart
    const selectedQty = cart[storeKey].products[key].qty
    const price = cart[storeKey].products[key].price
    cart[storeKey].total -= Number(price.replace('.', ''))
    const total = this.state.total - (Number(price.replace('.', '')) * selectedQty)
    const count = this.state.count - selectedQty
    cart[storeKey].products[key].isDelete = true
    this.setState({ cart, total, count })
  }

  componentDidMount() {
    const store = this.state.cart
    const storeKeys = Object.keys(store)
    let total = 0
    let count = 0
    storeKeys.forEach((key) => {
      store[key].products.forEach(item => {
        count += item.qty
      })
      total += store[key].total
    })
    this.setState({ total, count })
  }

  render() {
    const store = this.state.cart
    const storeKeys = Object.keys(store)
    return (
      <div className='wrap-cart d-flex'>
        <div className='left-wrap d-flex flex-column col-6'>
          <div className='head-cart d-flex align-items-center'>
            <div>
              <input type="checkbox" name="" id="" />
              <span className='ms-2'>Pilih Semua Produk</span>
            </div>
            <span className='del'>Hapus</span>
          </div>

          <div>

            {storeKeys.map((storeKey) => {
              if (store[storeKey].total > 0) {
                return (
                  <div className='wrap-detail'>
                    <div className='d-flex align-items-center'>
                      <input type="checkbox" name="" id="" checked={true} />
                      <div className='d-flex flex-column'>
                        <div className='ms-2'>
                          <img width='20px' src="https://ecs7.tokopedia.net/img/blog/seller/2019/06/newpm-pm-icon%403x.png" alt="" />
                          <span className='fw-bold ms-1'>{store[storeKey].store.name}</span>
                        </div>
                        <span className='city'>{store[storeKey].store.area}</span>
                      </div>
                    </div>
                    {store[storeKey].products.map((cart, key) => {
                      if (typeof cart.isDelete === 'undefined') {
                        return (
                          <div>
                            <div className='d-flex align-items-center'>
                              <input type="checkbox" name="" id="" checked />
                              <div className='d-flex'>
                                <img className='img-cart' src={cart.image} alt="" />
                                <div className='d-flex flex-column'>
                                  <span className='fw-bold mt-2'>{cart.product_name}</span>
                                  <span style={{ color: 'orangered', fontWeight: 'bold' }}>Rp {cart.price}</span>
                                </div>
                              </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                              <span className='catatan'>Tulis Catatan untuk Toko</span>
                              <div>
                                <img width='20px' className='me-2 love' src="img/love-flat.svg" alt="" />
                                <img width='20px' className='me-2 trash' src="img/sampah.png" alt="" onClick={() => this.handleDelete(storeKey, key)} />
                                {/* <img src="img/counter-minus.svg" alt=""/> */}
                                <img src="img/counter-minus-disabled.svg" alt="" onClick={() => this.handleMinItem(storeKey, key)} />
                                <input type="number" className='input-item' value={cart.qty} />
                                {/* <img src="img/counter-plus.svg" alt=""/> */}
                                <img src="img/counter-plus-disabled.svg" alt="" onClick={() => this.handlePlusItem(storeKey, key)} />
                              </div>
                            </div>
                          </div>
                        )
                      } else {
                        return null
                      }
                    })}
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>

        <div className='d-flex flex-column wrap-beli'>
          <span style={{ fontWeight: 'bold' }}>Ringkasan Belanja</span>
          <hr />
          <div className='d-flex justify-content-between mb-3'>
            <span>Total Harga</span>
            <span style={{ fontWeight: 'bold' }}>Rp {this.state.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
          </div>
          <button className='btn btn-warning submit'>Beli ({this.state.count})</button>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Cart);
