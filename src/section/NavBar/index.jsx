import './style.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import III from '../../assets/III.svg'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container-nav">
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu-nav">
                        <ul className="menu">
                            <li>หน้าแรก</li>
                            <li>เกี่ยวกับเรา</li>
                            <li>สินค้าทั้งหมด</li>
                            <li>ข่าวและกิจกรรม</li>
                            <li>โครงการ</li>
                            <li>ติดต่อเรา</li>
                        </ul>
                    </div>
                    <div className='img-search-III'>
                        <div className="img-search">
                            <img src={search} alt="" />
                            <img src={III} alt="" />
                        </div>
                    </div>
                    <div className="TH-EN">
                        <div className="TH">TH</div>
                        <div className="half">|</div>
                        <div className="EN">EN</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;