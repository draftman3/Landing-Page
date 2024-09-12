import './style.css'
import bgImg from '../../assets/Content/bg.svg'

const Content = () => {
    return (
        <div className="container">
            <div className='bg-container' style={{ backgroundImage: `url(${bgImg})`}}></div>
            <div className="main-content">
                <div className="content-text">
                    <div className="head-text">87 SK ENGINEERING</div>
                    <div className="title-text">ตัวแทนจำหน่ายโดยตรง <br /> ของ “BELIMO”</div>
                    <button type='button' className='btn-home'>สินค้าของเรา</button>
                </div>
            </div>
        </div>
    )
}

export default Content;