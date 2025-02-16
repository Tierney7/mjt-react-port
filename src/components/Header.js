import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">SOLUTION</a></li>
               <li><a className="smoothscroll" href="#about">PRICING</a></li>
             <li><a className="smoothscroll" href="#resume">BLOG</a></li>
               <li><a className="smoothscroll" href="#portfolio">ABOUT US</a></li>
                            <li><a className="smoothscroll" href="#contact">LOG IN</a></li>
            </ul>
         </nav>

         <div className="row banner">
          <div className="logo-header">
          <img className="header-logo" src="/public/images/header/1679957755991.jpeg" alt="logo"/>
          </div>
            <div className="banner-text">
            <h1 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.name}</h1>

               <h2 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}</h2>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}</h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}