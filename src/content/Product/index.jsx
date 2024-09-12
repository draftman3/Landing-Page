import './style.css'
import product_1 from '../../assets/product/product1.png'
import product_2 from '../../assets/product/product2.png'
import product_3 from '../../assets/product/product3.png'
import product_4 from '../../assets/product/product4.png'

const Product = () => {
    return (
        <div className="container-product">
            <div className="title-product">
                Products Categories
            </div>
            <div className="head-product">
                หมวดหมู่สินค้าของเรา
            </div>
            <div className="all-picture-product">
                
                <div className="picture-1">
                    <img src={product_1} alt="" className="pd-1"/>
                    <div className='title-pic1'>
                        <div className="text-name-product">
                            Control Valves
                        </div>
                        <div className="text-read">
                            Read More
                        </div>
                    </div>
                </div>
                
                <div className="picture-2">
                    <img src={product_2} alt="" className="pd-2"/>
                    <div className='title-pic2'>
                        <div className="text-name-product">
                            Control Valves
                        </div>
                        <div className="text-read">
                            Read More
                        </div>
                    </div>
                </div>
                
                <div className="picture-3">
                    <img src={product_3} alt="" className="pd-3"/>
                    <div className='title-pic3'>
                        <div className="text-name-product">
                            Control Valves
                        </div>
                        <div className="text-read">
                            Read More
                        </div>
                    </div>
                </div>
                
                <div className="picture-4">
                    <img src={product_4} alt="" className="pd-4"/>
                    <div className='title-pic4'>
                        <div className="text-name-product">
                            Control Valves
                        </div>
                        <div className="text-read">
                            Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;