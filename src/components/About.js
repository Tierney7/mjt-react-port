import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>The simple way for Builders and Designers to store, share, and update job site files with trade partners</h2>
               <p>
               {
                 
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

            
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}