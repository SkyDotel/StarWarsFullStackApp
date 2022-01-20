import React from "react";

export const Details = (props) => {
	return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://via.placeholder.com/800x600" className="float-start"></img>
                </div>
                <div className="col text-center">
                    <h1 className="mt-4">Tatooine</h1>
                    <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
            <hr className="detailline"></hr>
            <div className="row factsbox">
                <div className="col facts">
                    <h5><b>Name</b></h5>
                    <p>Tatooine</p>
                </div>
                <div className="col facts">
                    <h5><b>Climate</b></h5>
                    <p>arid</p>
                </div>
                <div className="col facts">
                    <h5><b>Population</b></h5>
                    <p>200000</p>
                </div>
                <div className="col facts">
                    <h5><b>Orbital Period</b></h5>
                    <p>304</p>
                </div>
                <div className="col facts">
                    <h5><b>Rotation Period</b></h5>
                    <p>23</p>
                </div>
                <div className="col facts">
                    <h5><b>Diameter</b></h5>
                    <p>10465</p>
                </div>
            </div>
        </div>
    )}