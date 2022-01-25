import React from "react";

export const Details = (props) => {
	return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://via.placeholder.com/800x600" className="float-start"></img>
                </div>
                <div className="col text-center">
                    <h1 className="mt-4">Boba Fett</h1>
                    <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
            <hr className="detailline"></hr>
            <div className="row factsbox">
                <div className="col facts">
                    <h5><b>Name</b></h5>
                    <p>Boba Fett</p>
                </div>
                <div className="col facts">
                    <h5><b>Birth Year</b></h5>
                    <p>32 BBY</p>
                </div>
                <div className="col facts">
                    <h5><b>Gender</b></h5>
                    <p>male</p>
                </div>
                <div className="col facts">
                    <h5><b>Height (cm)</b></h5>
                    <p>183</p>
                </div>
                <div className="col facts">
                    <h5><b>Skin Color</b></h5>
                    <p>tan</p>
                </div>
                <div className="col facts">
                    <h5><b>Eye Color</b></h5>
                    <p>brown</p>
                </div>
            </div>
        </div>
    )}