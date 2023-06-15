import React from "react";
import PropTypes from "prop-types";

import "assets/css/CardAllDashboard.css";

const CardAll = (props) => {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp" style={{ borderRadius: "20px" }}>
            <div className="overflow">
                <img src={props.imageSource} alt="a wallpaper" className="card-img-top" style={{ borderRadius: "20px 20px 0px 0px" }} />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{props.title}</h4>
                
                <p className="card-text text-secondary">
                    {props.text
                        ? props.text
                        : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                </p>
                <a
                    href={props.url ? props.url : "#!"}
                    target="_blank"
                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                >
                    Go to the book
                </a>
            </div>
        </div>
    );
}

CardAll.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default CardAll;