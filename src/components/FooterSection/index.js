import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './styles.module.css';

const imageUrl = 'https://preview.colorlib.com/theme/miniblog/images/ximg_1.jpg.pagespeed.ic.YyH9FXuWL1.webp';

const Card = ({ height, tags, top, className }) => {
    const styles = {
        position: 'relative',
                backgroundSize: '100% 100%',
                height: height ?? 200,
                backgroundImage: `url('${imageUrl}')`
    }
    return (
        <div
            className={`d-flex flex-column justify-content-end p-3 rounded ${className}`}
            style={styles}>
            <div className="py-3" style={{ zIndex: 2, position: top ? 'absolute' : 'initial', top: top ? 0 : 'none' }}>
                {
                    tags &&
                    tags.map((item, index) => {
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
            <div className="text-white" style={{ zIndex: 2 }}>
                <div style={{ opacity: 1, fontWeight: 600 }}>
                    The AI magically removes moving objects from videos.
                </div>
                <div> July 19, 2019</div>
            </div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                opacity: 0.2,
                zIndex: 1,
                backgroundImage: 'linear-gradient(white,gray,black, black )'
            }}>

            </div>
        </div>
    )
}

const FooterSection = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row" style={{ margin: '0px auto' }}>
                <div className="d-md-block col-md-5 p-2 order-md-2">
                    <Card className={`${styles.height}`} height={'100%'} tags={[
                        { name: 'POLITICS', color: '#6c757d' },
                        { name: 'NATURE', color: '#8bc34a' },
                    ]}
                        top={true}
                    />
                </div>
                <div className="col-md-7 order-md-1 ">
                    <Col className="p-2">
                        <Card tags={[
                            { name: 'NATURE', color: '#8bc34a' },
                        ]}
                            top={true} />
                    </Col>
                    <div className="d-md-inline-block col-md-6 p-2">
                        <Card tags={[
                            { name: 'SPORTS', color: '#f23a2e' },
                        ]}
                            top={true} />
                    </div>
                    <div className="d-md-inline-block col-md-6 p-2">
                        <Card tags={[
                            { name: 'LIFESTYLE', color: '#f89d13' },
                        ]}
                            top={true} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterSection;