import '../TopBar/style.css'
import mail from '../../assets/mail.svg'
import Tel from '../../assets/telephone.svg'

const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="email-Tel">
                <div className="email">
                    <div className='icon-mail'>
                        <img src={mail} alt="" />
                    </div>
                    <div className='text-mail'>
                        sales.87sk@gmail.com
                    </div>
                </div>
                
                <div className="Tel">
                    <div className="icon-tel">
                        <img src={Tel} alt="" />
                    </div>
                    <div className="text-tel">
                        080-431-5682                 
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default TopBar;  