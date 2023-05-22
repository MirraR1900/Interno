import './Comments.scss'

function Comments() {
    return (
        <section>
            <div className="block-comments">
                <h2>What the People Thinks <br /> About Interno</h2>
                <div className="container-comments">
                    <section>
                        <div className="comment">
                            <div className="comments-header">
                                <img src="./images/comment-image1.png" alt="" />
                                <div>
                                    <h3>Lisa Clairton</h3>
                                    <p className="country">New York, USA</p>
                                </div>
                            </div>
                            <p className="text-comment">We selected Interno interior because of rigorous design background & education.</p>
                        </div>
                    </section>
                    <section>
                        <div className="comment">
                            <div className="comments-header">
                                <img src="./images/comment-image2.png" alt="" />
                                <div>
                                    <h3>David Knight</h3>
                                    <p className="country">Sydney, Australia</p>
                                </div>
                            </div>
                            <p className="text-comment">The team exceeded our expectations and emerged as leaders of our project’s.</p>
                        </div>
                    </section>
                    <section>
                        <div className="comment">
                            <div className="comments-header">
                                <img src="./images/comment-image3.png" alt="" />
                                <div>
                                    <h3>Lisa Clairton</h3>
                                    <p className="country">Paris, France</p>
                                </div>
                            </div>
                            <p className="text-comment">They balanced the architectural vision and the project realities beautifully.</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Comments