// import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ margin: "0rem 1rem 0rem 1rem" }}>
          <img
            src={
              !imgurl
                ? "https://www.cricbuzz.com/a/img/v1/600x400/i1/c239513/pujara-scored-his-fifth-centur.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex: '1'}}>
                {source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small
                className="
            text-muted"
              >
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Newsitems;
