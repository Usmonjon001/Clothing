import React from "react";
import './homepage.component.scss'

const Homepage = () =>{
    return(
        <div className="homepage">
            <div className="directory-menu">

                {/* Content 1 */}

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOW NOW</span>         
                    </div>
                </div>

                {/* Content 2 */}

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKECTS</h1>
                        <span className="subtitle">SHOW NOW</span>         
                    </div>
                </div>

                {/* Content 3 */}

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">SHOW NOW</span>         
                    </div>
                </div>


                {/* Content 4 */}

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">SHOW NOW</span>         
                    </div>
                </div>


                {/* Content 5 */}

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOW NOW</span>         
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Homepage;