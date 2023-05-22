import Button from '../Button';
import './Intro.scss';

function Intro() {
    return (
        <section>
            <div className="container-intro">
                <div className="background-block">
                    <img src="./images/background1.jpg" alt="" />
                </div>
                <div className="intro">
                    <h1>Let's Create Your Dreame Interior</h1>
                    <p>The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>
                    <div className='container-button'>
                    <Button classButton={"dark-gray-button"} text={"Get Started"} image={"./images/arrow.png"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro