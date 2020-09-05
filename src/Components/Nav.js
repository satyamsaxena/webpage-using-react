import React from 'react';

function About() {
return(
 <div class="container-fluid">
  <nav class="navbar navbar-expand navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myPage"><img src="https://i.ibb.co/9Wgx9gb/logo.png" alt="logo" border="0"/></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#myPage">HOME</a> </li>
        <li><a href="#services">FEATURES</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">BLOG</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
 {/* <img id="img" src="https://i.ibb.co/RCkzXzw/right-mobile.png" alt="interior-1" border="1" />  */}
<h2 id="top" style={{font:"200px;" }}>The Best App <br />in the Universe</h2>

<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
  <br/><button class="btn-lg white bg-cover flex-auto">
          <span class="default">Explore Now</span>
  </button>
</div>
</div>
);
};

export default About;