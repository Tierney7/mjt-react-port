import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h1>
                  Contact Me
                  </h1>
                <h4>
                  (816) 914 0503
                </h4>
                <h4>
                tierneycode@gmail.com
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}