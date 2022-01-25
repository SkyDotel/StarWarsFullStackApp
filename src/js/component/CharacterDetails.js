import React from "react";
import PropTypes from "prop-types";

export const Details = (props) => {
	return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="https://via.placeholder.com/800x600" className="float-start"></img>
                </div>
                <div className="col text-center">
                    <h1 className="mt-4">{props.name}</h1>
                    <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
            </div>
            <hr className="detailline"></hr>
            <div className="row factsbox">
                <div className="col facts">
                    <h5><b>Name</b></h5>
                    <p>{props.name}</p>
                </div>
                <div className="col facts">
                    <h5><b>Birth Year</b></h5>
                    <p>{props.birth_year}</p>
                </div>
                <div className="col facts">
                    <h5><b>Gender</b></h5>
                    <p>{props.gender}</p>
                </div>
                <div className="col facts">
                    <h5><b>Height (cm)</b></h5>
                    <p>{props.height}</p>
                </div>
                <div className="col facts">
                    <h5><b>Skin Color</b></h5>
                    <p>{props.skin_color}</p>
                </div>
                <div className="col facts">
                    <h5><b>Eye Color</b></h5>
                    <p>{props.eye_color}</p>
                </div>
            </div>
        </div>
    )
    Details.propTypes = {
		id: PropTypes.number,
		img: PropTypes.string,
		name: PropTypes.string,
        birth_year: PropTypes.string,
        height: PropTypes.string,
        skin_color: PropTypes.string,
		gender: PropTypes.string,
		hair_color: PropTypes.string,
		eye_color: PropTypes.string,
	}
};