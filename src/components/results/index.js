import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './Placeholder';

function Results({ placeholders }) {
    return (
        <div style={{ marginTop: 30 }}>
            { renderPlaceholders(placeholders) }
        </div>
    );
}

const renderPlaceholders = (placeholders) => {
    if (placeholders) {
        return placeholders.map((placeholder, index) => {
            return <Placeholder key={index} placeholder={ placeholder } i={index} />
        });
    }
};

const mapStateToProps = state => {
    return {
        placeholders: state.get('placeholders')
    };
};

export default connect(mapStateToProps)(Results);
