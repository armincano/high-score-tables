function PlayerScoreItem({score}) {

    return(
        <tr>
            <td>{score?.n}</td>
            <td>{score?.s}</td>
        </tr>
    )
}
export default PlayerScoreItem