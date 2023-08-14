function PlayerScoreItem(props) {

    return(
        <tr>
            <td>{props.score.n}</td>
            <td>{props.score.s}</td>
        </tr>
    )
}
export default PlayerScoreItem