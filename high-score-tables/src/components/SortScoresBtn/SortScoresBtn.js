import React from 'react';

function SortScoresBtn({isSortDescendingScores, toggleSortScores}) {
    return (
        <button className='btn btn-primary' onClick={() => toggleSortScores()}>
            {isSortDescendingScores ? 'To Ascending Scores ⬇️' : 'To Descending Scores ⬆️'}
        </button>
    );
}

export default SortScoresBtn;