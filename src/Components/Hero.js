import React from "react";

const Hero = () =>{
    return(
    
        <div id="portfolio" class="container-fluid text-center bg-grey">
  <h2 id="save">Our Work</h2><br/>
  <h4>What we have created</h4>
  <div class="row text-center slideanim">
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="https://i.ibb.co/2WbhSKZ/feature-1.jpg"  alt="Mobile Application"/>
        <p><strong>Mobile App Development</strong></p>
        <p>Yes, we built India</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="https://i.ibb.co/5sBJg9Q/feature-2.jpg" alt="New York" width="400" height="300"/>
        <p><strong>Web Application Development</strong></p>
        <p>We built India</p>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="https://i.ibb.co/YpP3FCz/feature-3.jpg" alt="San Francisco" width="400" height="300"/>
        <p><strong>Dynamic UI/UX Development</strong></p>
        <p>Yes, Indian is ours Culture</p>
      </div>
    </div>
  </div><br/>
  <h2 id="save">What our customers says</h2>
  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <h4>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h4>
      </div>
      <div class="item">
        <h4>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h4>
      </div>
      <div class="item">
        <h4>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h4>
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

    );
};

export default Hero;