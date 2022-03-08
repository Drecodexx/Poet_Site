import * as React from 'react';
import './components.css'


 function MediaCard() {
  return (
        <div className="Mediacard g-col-6 g-col-md-4" >
            <img  src="/images/img2.png" />
            <div>
                <h5>Card Title</h5>
                <p>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </p>
                <a to='#' variant="primary">Go somewhere</a>
            </div>
        </div>
  );
}
export default MediaCard