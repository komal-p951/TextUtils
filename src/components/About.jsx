import React, { useState } from "react";

export default function About(props) {
    // const [mystyle,setMystyle] = useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // let toggleStyle = () => {
    //     if(mystyle.color == 'white'){
    //         setMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //     }else{
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //     }
    // }
  return (
    <div className="container" >
    <h1 className="my-3"> About us</h1>
      <div className="accordion"  style={{color: props.mode === 'dark' ? 'white' : 'black'}} id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left "
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                // style={mystyle}
              >
                Collapsible Group Item #1
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            // style={mystyle}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Some placeholder content for the first accordion panel. This panel
              is shown by default, thanks to the <code>.show</code> className.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" >
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                // style={mystyle}
              >
                Collapsible Group Item #2
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
            // style={mystyle}
          >
            <div className="card-body">
              Some placeholder content for the second accordion panel. This
              panel is hidden by default.
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header" id="headingThree">
            <h2 className="mb-0"> 
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                // style={mystyle}
              >
                Collapsible Group Item #3
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
            // style={mystyle}
          >
            <div className="card-body">
              And lastly, the placeholder content for the third and final
              accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        
      </div>
    </div>
  );
}
