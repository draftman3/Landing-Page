import about from '../../assets/Content/about.png'
import bgAbout from '../../assets/Content/about-bg-.png'
import './style.css'

const About = () => {
    return (
        <div className="content-about">
            <div className="pic-about">
                <img src={about} alt="" className='rounded-img'/>
            </div>
            <div className="section-content" style={{ backgroundImage: `url(${bgAbout})`}}>
                <div className="title-about"> ABOUT 87 SK ENGINEERING</div>
                <div className="head-title-about">เกี่ยวกับ 87 SKENGINEERING</div>
                <div className="detail-about">87 SK ENGINEERING เราคือผู้นำเข้าและจัดจำหน่ายอุปกรณ์จากทาง BELIMO โดยตรง เช่น Damper Actuator, Rotary Actuator, PICV Control Valve, EPIV Control Valve, Flow Regulation, Room Thermostat เป็นต้น</div>
                <div className="read-see">
                    <div className="read-more">อ่านเพิ่มเติม</div>
                    <div className="see-more">ดูสินค้าทั้งหมดของเรา</div>
                </div>
            </div>
        </div>
    )
}

export default About;