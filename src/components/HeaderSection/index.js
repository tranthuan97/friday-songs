import React from 'react';
import { Col, Row } from 'reactstrap';

const imageUrl = 'https://preview.colorlib.com/theme/miniblog/images/ximg_1.jpg.pagespeed.ic.YyH9FXuWL1.webp';

const Card = ({ height, tags, top }) => {
    console.log("🚀 ~ file: index.js ~ line 9 ~ card ~ height", height)
    return (
        <div
            className="d-flex flex-column justify-content-end p-3 rounded"
            style={{
                position: 'relative',
                backgroundSize: '100% 100%',
                width: '100%',
                height: height ?? 200,
                backgroundImage: `url('${imageUrl}')`
            }}>
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
                                width: 'fit-content'
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

const HeaderSection = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row p-4" style={{ margin: '0px auto' }}>
                <div className="d-md-flex flex-md-column col-md-4">
                    <Row className="mb-4">
                        <Card />
                    </Row>
                    <Row>
                        <Card />
                    </Row>
                </div>
                <div className="d-none d-md-block col-md-4">
                    <Card height={'100%'} tags={[
                        { name: 'POLITICS', color: '#6c757d' },
                        { name: 'NATURE', color: '#8bc34a' },
                    ]}
                    // top={true}
                    />
                </div>
                <div className="d-md-flex flex-md-column col-md-4 pt-4 pt-md-0">
                    <Row className="mb-4">
                        <Card />
                    </Row>
                    <Row>
                        <Card />
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;