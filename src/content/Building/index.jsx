import './style.css'
import img_building from '../../assets/building/img_building.png'

const Building = () => {
    return (
        <div className='container-build'>
            <div className="content-build">
                <div className='title-build'>SAFETY FOR BUILDING</div>
                <div className='head-build'>
                    Innovations in Comfort,
                    Energy Efficiency and 
                    Safety for Buildings 
                </div>
                <div className='sub-title-build'>
                    For over 40 years, Belimo has successfully focused on the heating, ventilation, and air conditioning markets, providing quality solutions that will increase energy efficiency; reduce installation cost with the fastest delivery times in the industry. Our innovative products have always been designed to help achieve objectives better, faster, and more economically. Investing in new technology is key to our success, and Belimo will continue to offer products to help businesses succeed. gravida. 
                </div>
                <div className='btn-read-more'>
                    <button className='btn-read'>อ่านเพิ่มเติม</button>
                </div>
            </div>
            <div className="picture-build">
                <img src={img_building} alt="" />
            </div>
        </div>
    )
}

export default Building;