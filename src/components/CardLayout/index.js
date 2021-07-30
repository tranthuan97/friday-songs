/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const imageUrl = 'https://preview.colorlib.com/theme/miniblog/images/ximg_1.jpg.pagespeed.ic.YyH9FXuWL1.webp';
const author = "https://preview.colorlib.com/theme/miniblog/images/xperson_1.jpg.pagespeed.ic.ycc-Edwyd1.webp";

export default function CardLayout() {
    return (
        <div>
            <img
                className="d-flex flex-column justify-content-end rounded"
                src={imageUrl}
                style={{width: '100%'}}
                alt="img"
                />
            <div className="p-3">
                <div className="py-3">
                    {
                        [
                            { name: 'POLITICS', color: '#6c757d' },
                            { name: 'NATURE', color: '#8bc34a' },
                            { name: 'TRAVEL', color: '#f89d13' },
                            { name: 'SPORTS', color: '#f23a2e' }
                        ].map((item, index) => {
                            return (
                                <span key={index} className="mr-2 rounded" style={{
                                    padding: '3px 10px',
                                    background: item.color,
                                    color: 'white',
                                    fontSize: 12,
                                    fontFamily: 'Monospace',
                                    fontWeight: 600,
                                    display: 'inline-block'
                                }}>
                                    {item.name}
                                </span>
                            )
                        })
                    }
                </div>
                <h4>
                    The AI magically removes moving objects from videos.
                </h4>
                <div className="py-2" style={{fontSize: 13}}>
                    <img  className="mr-3" src={author} alt="author" style={{ width: 30, height: 30, borderRadius: '50%' }} />
                    <span>
                        <span style={{color: '#b3b3b3'}}>By </span>
                        <span>Carrol Atkinson</span>
                        <span style={{color: '#b3b3b3'}}>  -  July 19, 2021</span>
                    </span>
                </div>
                <div style={{color: '#666666', marginBottom: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.
                </div>
                <a href="#">
                    Read more
                </a>
            </div>
        </div>
    )
}
