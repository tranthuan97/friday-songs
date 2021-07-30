import React from 'react'

export default function Footer() {
    return (
        <div className=" bg-dark text-white ">
            <div className="d-md-flex mx-0 py-5">
                <div className="col-md-4">
                    <div className="mb-3">
                        About Us
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.
                    </div>
                </div>
                <div className="d-flex col-md-4">
                    <div className="col-sm-4 col-md-6 text-md-center">
                        <div className="my-2"><a href="#">About Us</a></div>
                        <div className="my-2"><a href="#">Advertise</a></div>
                        <div className="my-2"><a href="#">Careers</a></div>
                        <div className="my-2"><a href="#">Subscribes</a></div>
                    </div>
                    <div  className="col-sm-4 col-md-6">
                        <div className="my-2"><a href="#">Travel</a></div>
                        <div className="my-2"><a href="#">Lifestyle</a></div>
                        <div className="my-2"><a href="#">Sports</a></div>
                        <div className="my-2"><a href="#">Nature</a></div>
                    </div>
                </div>
                <div className="col-md-4">
                    Connect With Us
                </div>
            </div>
            <div className="py-5 text-center">
                <span>Copyright © 2021 All rights reserved | This template is made with  by</span> <span style={{display: 'inline-block',fontWeight: 600, fontSize: 18}}>Tran Thuan</span>
            </div>
        </div>
    )
}
