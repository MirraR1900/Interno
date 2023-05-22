import Button from '../Button'
import './Description.scss'

function Description() {
    return (
        <section>
            <div className="description-more">
                <section className="section-description-more">
                    <h3>Interior Design</h3>
                    <p className='text-description'>Enhancing the interior to achieve a healthier environment for the people using right space.</p>
                    <Button classButton={"transparent-button"} text={"View More"} image={"./images/arrow.png"} />
                </section>
                <section className="section-description-more">
                    <h3>Furniture</h3>
                    <p className='text-description'>Movable articles that are used to make a room or building suitable for living or working.</p>
                    <Button classButton={"transparent-button"} text={"View More"} image={"./images/arrow.png"} />
                </section>
                <section className="section-description-more">
                    <h3>Flooring</h3>
                    <p className='text-description'>Thin object any finished material applied over a floor structure to provide a walking surface.</p>
                    <Button classButton={"transparent-button"} text={"View More"} image={"./images/arrow.png"} />
                </section>
            </div>
        </section>
    )
}

export default Description