import React, { Component} from 'react'
import { connect } from 'react-redux'
import '../assets/ProductDetail.css'
import { addChart } from '../configs/redux/action/data'

const mapStateToProps = state => {
  return {
    dataLocal: state.data.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleAddChart: (payload) => dispatch(addChart(payload))
  }
}
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      size: '',
      selectedProductDescription: '' 
    }
  }
  
  handleAddChart(product) {
    const selectedProductDescription = `${product.product_name} - ${this.state.color}, ${this.state.size}`
    this.setState({selectedProductDescription})
    this.props.handleAddChart({...product, selectedColor:this.state.color, selectedSize: this.state.size})
  }
  
  handleSelectedColor(color) {
    this.setState({color})
  }

  handleGoToChart() {
    this.props.history.push('/cart')
  }

  handleSelectedSize(size) {
    this.setState({size})
  }

  render() {
    const id = Number(this.props.match.params.id)
    const product = this.props.dataLocal.find(product => product.id === id)
    const colors = product.colors
    return (
      <div className='product-detail wrapper'>
        <div className='path'>
          <ul className='d-flex align-items-center'>
            <li>
              <span>Home</span>
              <img src="/img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Kategori</span>
              <img src="/img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Sub-Kategori</span>
              <img src="/img/arrow-triangle.png" alt="" />
            </li>
            <li>
              <span>Sub-Sub-Kategori</span>
              <img src="/img/arrow-triangle.png" alt="" />
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
                <img src={product.image} alt="" />
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
                <img src="/img/label-store-icon.svg" alt=""/>
                <span>Official Store</span>
              </div>
              <h2 className='product-name'>{product.product_name}</h2>
              <div class="product-score">
                <div class="score">
                  <span>{product.star}</span>
                  <div class="stars">
                    <img src="/img/star.png" alt="" />
                  </div>
                  <span>({product.total_review})</span>
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
                  <img src="/img/ready-icon.svg" alt="" />
                  <span>Pasti Ready</span>
                </div>
                <div class="original">
                  <img src="/img/ori-icon.svg" alt="" />
                  <span>Pasti Ori</span>
                </div>
                <div class="guarantee">
                  <img src="/img/guarantee-7-icon.svg" alt="" />
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
                  <p style={{ color: 'orangered', fontSize: '30px', fontWeight:'bold'}}>Rp {product.price}</p>
                </div>
                <div class="price-guarantee">
                  <img src="/img/rp-icon.svg" alt="" />
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
                <div className='d-flex flex-row'>
                  {colors.map(color => (
                    <div>
                      <input type="checkbox" className='btn-check' name='options' id={color} autoComplete='off' onClick={() => this.handleSelectedColor(color)} />
                      <label className='btn btn-outline-secondary' for={color}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="detail-group variant">
              <div class="left-header">
                <p>UKURAN</p>
              </div>
              <div class="right-description">
                <p class="counter-label">Pilih variant</p>
                
                <div className='d-flex flex-row'>
                {product.sizes.map(size => (
                  <div>
                  <input type="checkbox" className='btn-check' name='options' id={size} autoComplete='off' onClick={() => this.handleSelectedSize(size)}/>
                  <label className='btn btn-outline-secondary' for={size}>{size}</label>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-bottom-wrapper">
          <button type='button' class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal" onClick={() => this.handleAddChart(product)}>Tambah Ke Keranjang</button>
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
                  <img width='50px' className='rounded-3' src={product.image} alt=""/>
                  <span className='ms-3'>{this.state.selectedProductDescription}</span>
                  </div>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal"  onClick={() => this.handleGoToChart()} >Lihat Keranjang</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)