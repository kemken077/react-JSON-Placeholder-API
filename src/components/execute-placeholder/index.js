import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPlaceholdersAction } from './redux/executePlaceholderSaga';

function ExecutePlaceholder(props) {
    const [ clicking, updateClicking ] = useState(false);
    const callPlaceholder = () => {
        updateClicking(true);
        props.getPlaceholdersAction();
    };

    return (
        <>
            { clicking
                ? 'Downloading Placeholders...'
                : null
            }
            { clicking
                ? null
                : <button onClick={ callPlaceholder }>
                    Click me
                 </button>
            }
        </>
    );
}

const mapDispatchToProps = {
    getPlaceholdersAction
};

export default connect(null, mapDispatchToProps)(ExecutePlaceholder);
