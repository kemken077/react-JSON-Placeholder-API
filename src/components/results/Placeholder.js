import React from 'react';
import Card from 'antd/lib/card';
import { Spring } from 'react-spring/renderprops';

function Placeholder({ placeholder, i }) {
    const data = placeholder.toJS();
    return (
        <Spring
            from={{ opacity: 0, transform: 'translateY(30px)' }}
            to={{ opacity: 1, transform: 'translateY(0px)' }}
            config={{ delay: i * 100 }}>
            { props =>  <div style={ props }>
                            <Card style={{ width: 200, height: 150, marginLeft: 20, marginTop: 10, background: 'white', boxShadow: '0 -8px 38px rgba(0, 0, 0, 0.06)' }} title={ data.email }>
                                { data.name }
                            </Card>
                        </div>
            }
        </Spring>
    );
}

export default Placeholder;
