import React, { Component } from 'react'

var image = new Image();
image.src = 'data:image/png;base64,iVBORw0K...';
document.body.appendChild(image);

class Gallery extends Component {
    render() {
        return (
            <React.Fragment>

            <div class="header">
            <h1>Sesame Street Employee Directory</h1>
            <p>All your employees, easily accessible.</p>
          </div>

  
          </React.Fragment>
        )
    }
}

export default Gallery