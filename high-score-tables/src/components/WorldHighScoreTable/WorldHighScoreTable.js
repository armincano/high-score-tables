import React, { useState, useEffect } from 'react';

function WorldHighScoreTable(props) {
    return ( 
        <div>
            <h1>World High Scores!</h1>
            <table className="table">
				<thead>
					<tr>
						<th scope="col">name</th>
						<th scope="col">score</th>
					</tr>
				</thead>
				<tbody>{props.allScores.map(allScores =>
                    <tr>
                    <td>{allScores.n}</td>
                    <td>{allScores.s}</td>
                </tr>
                )}
                </tbody>
			</table>
            
        </div>
     );
}

export default WorldHighScoreTable;