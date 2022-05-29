import React from "react";
import "./Content.css";
import locationIcon from "../images/location.png";

const Content = (props) => {
    let view;
    if (props.googleMapsUrl.includes("goo.gl")) {
        view = "View on Google Maps";
    } else {
        view = "View";
    }
    return (
        <section className="content">
            <div className="content__inner">
                <img
                    className="content__img"
                    src={props.imageUrl}
                    alt="Location"
                />
                <div className="content__info info">
                    <div className="info__locations">
                        <img
                            className="info__location-icon"
                            src={locationIcon}
                            alt="Location icon"
                        />
                        <div className="info__country">{props.location}</div>
                        <a
                            className="info__googleMapsUrl"
                            href={props.googleMapsUrl}
                            target="_blank"
                        >
                            {view}
                        </a>
                    </div>
                    <div className="info__title">{props.title}</div>
                    {props.startDate && props.endDate && (
                        <div className="info__date">
                            <div className="info__date-startDate">
                                {props.startDate}
                            </div>
                            <span className="span-custom">-</span>
                            <div className="info__date-endDate">
                                {props.endDate}
                            </div>
                        </div>
                    )}
                    <div className="info__description">{props.description}</div>
                </div>
            </div>
            <hr className="hr--custom" />
        </section>
    );
};

export default Content;
