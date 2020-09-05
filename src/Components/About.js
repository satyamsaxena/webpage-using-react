import React from "react";

const About = () =>{
    return(
      
        <div id="main" class="container-fluid">
        <div id="about" class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <h2>About Company Page</h2><br/>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br></br><button class="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div class="col-sm-1">
          {/* <img src="https://i.ibb.co/McfTTw6/interior-2.png" alt="interior-2" border="0" height=""/> */}
          </div>
        </div>
      </div>
      <div class="container-fluid bg-grey">
        <div class="row">
          <section class="interior_area interior_two">
        	<div class="container">
        		<div class="interior_inner row">
        			<div class="col-lg-5 offset-lg-1">
        				<div class="interior_text">
        					<h4>We Believe that Interior beautifies the Total Architecture</h4>
        					<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off.</p>
        					<a class="main_btn" href="#yes">See Details</a>
        				</div>
        			</div>
        			<div class="col-lg-4">
        				{/* <img class="img-fluid" src="https://i.ibb.co/tMhD6Z7/interior-1.png" alt=""/> */}
        			</div>
        		</div>
        	</div>
        </section>
        </div>
      </div>  
      </div>
    );
};
export default About;