import React from 'react';

function SortScoresBtn(props) {
    return (
        <button onClick={() => props.toggleSortScores()}>
            {(props.isSortDescendingScores) ? 'To Ascending Scores ⬆️' : 'To Descending Scores ⬇️'}
        </button>
    );
}

export default SortScoresBtn;