import React from 'react'

const BoardList = (props) => {
    
    return (
        <table>
            <thead>
                <tr>
                    <th id="thead-date">date</th>
                    <th id="thead-board">board</th>
                    <th id="thead-edit"></th>
                </tr>
            </thead>

            <tbody>
                {props.lists.length > 0 ? (
                    props.lists.map(list => (
                        <tr key={list.id}>
                            <td id="tbody-date">{list.date}</td>
                            <td>{list.board}</td>
                            <td id="tbody-edit">
                                <button onClick={() => props.editRow(list)}>edit</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>This board list not exist.</td>
                    </tr>
                )}
            </tbody>  
        </table>
    );
}

export default BoardList;