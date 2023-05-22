import Button from '../Button'
import './Join.scss'

function Join() {
  return (
    <section>
      <div className="container-join-interno">
        <h3>Wanna join the interno?</h3>
        <p>Contact Us & Get a Free Consultation</p>
        <div className="container-btn">
        <Button classButton={"gold-button"} text={"Connect With us"} image={"./images/arrow-black.png"} />
        </div>
      </div>
    </section>
  )
}

export default Join