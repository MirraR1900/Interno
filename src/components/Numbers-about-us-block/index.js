import './Numbers.scss'

function Numbers() {
    return (
        <section>
            <div className="container-about-us-in-numbers">
                <div className="item">
                    <p className="number">12</p>
                    <p className="text-description-number">Years Of Experiance</p>
                </div>
                <div className="item">
                    <p className="number">5K</p>
                    <p className="text-description-number">Success Project</p>
                </div>
                <div className="item">
                    <p className="number">1K</p>
                    <p className="text-description-number">Active Project</p>
                </div>
                <div className="item last">
                    <p className="number">4K</p>
                    <p className="text-description-number">Happy Customers</p>
                </div>
            </div>
        </section>
    )
}

export default Numbers