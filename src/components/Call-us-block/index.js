import Button from '../Button'
import './Call.scss'

function Call() {
  return (
    <section>
      <div className="description-call">
        <div className="content-call">
          <h2>We Tackle The Most Challenging Designs</h2>
          <p className="info-text-call">The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</p>
          <div className="call">
            <img src="./images/call.png" alt="" />
            <div>
              <p className="phone">012345678</p>
              <p className='phone'>Call Us Anytime</p>
            </div>
          </div>
          <Button classButton={"dark-gray-button"} text={"Get Free Estimate"} image={"./images/arrow.png"} />
        </div>
        <div className="photo-design">
          <img src="./images/desing1.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Call