import React from 'react'

function LoginNav(props){

    // const shouldDisplay = (window.pageYOffset > (window.innerHeight * 0.1)) ? "flex" : "none"
    return (
        <nav style={{display: props.shouldDisplay}} className="login-nav">
        <ul>
            <li>DO IT!</li>
            <li>NOW</li>
            <li>GoAHED</li>
            <li>SINGuP --></li>
        </ul>
            <a href="http://www.life-inbalance.com"><button role="button"><i className="fab fa-accessible-icon"></i>Sign Up</button></a>
        </nav>
    )
}

export default LoginNav



// scrollToggle() {
//     // the two variables allow for different window sizes,
//     // so the animation will happen at the same place no matter
//     // the view size of the screen.
//    let pageHeight = window.innerHeight;
//    let animate = pageHeight * .89999;
  
//         if( window.pageYOffset >= `${animate}`) {
//           this.props.stickySet(true)
//         } else {
//           this.props.stickySet(false)
//         }
  
//     }