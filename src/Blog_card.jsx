import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'

function Blog_card(){
    return(
        <>
            <div className="col-md-3">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>Dec 14, 2022</span>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, omnis deserunt perspiciatis quas vitae exercitationem iusto voluptatum praesentium inventore eos.</p>
                <button className="btn btn-primary">Read more</button>
            </div>
        </>
    )
}

export default Blog_card;