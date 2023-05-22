import './Recent-projects.scss'

function Recents() {
    return (
        <section>
            <div className="container-recent-projects">
                <h2>Recent Projects</h2>
                <div className="info-projects">
                    <p>With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</p>
                </div>

                <div className="container-projects">
                    <div className="project">
                        <img src="./images/Art-Modern.png" alt="" />
                        <div className="description-project">
                            <div className='name-project'>
                                <h3>Winery Dry Creek Building</h3>
                                <p className="design-project">Art Modern</p>
                            </div>
                            <div className="container-btn">
                                <button><img src="./images/btn-next.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./images/Minimalist.png" alt="" />
                        <div className="description-project">
                            <div className='name-project'>
                                <h3>Creative Workplace Design</h3>
                                <p className="design-project">Minimalist</p>
                            </div>
                            <div className="container-btn">
                                <button><img src="./images/btn-next.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./images/Modern.png" alt="" />
                        <div className="description-project">
                            <div className='name-project'>
                                <h3>Bedroom Interior Pot Work</h3>
                                <p className="design-project">Modern</p>
                            </div>
                            <div className="container-btn">
                                <button><img src="./images/btn-next.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./images/Scandinavian.png" alt="" />
                        <div className="description-project">
                            <div className='name-project'>
                                <h3>Light Ambience Sepia Design</h3>
                                <p className="design-project">Scandinavian</p>
                            </div>
                            <div className="container-btn">
                                <button><img src="./images/btn-next.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recents