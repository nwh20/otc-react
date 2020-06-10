import React, { useState, useEffect, useRef } from 'react'

const WriteEdit = props => {
    const [ list, setList ] = useState(props.currentList)
    const password = useRef();

    useEffect(
        () => {
        setList(props.currentList)
        },
        [ props ]
    )

    const handleInputChange = event => {
        const { name, value } = event.target;
        setList({ ...list, [name]: value })
    }
    
    const submitEdt = e => {
		e.preventDefault();
		if (password.current.value === '1234') {
            props.updateList(list.id, list);
		} else {
			alert('관리자 비밀번호를 입력해주세요.');
		}
    }
    
    const submitDlt = e => {
		e.preventDefault();
		if (password.current.value === '1234') {
            props.deleteList(list.id);
		} else {
			alert('관리자 비밀번호를 입력해주세요.');
		}
	}

    return (
        <div className="write-edit">
            <form>
                <ul>
                    <li>
                        <label>password</label>
                        <input type="password" maxLength="6" name="password" ref={password} onChange={handleInputChange} />
                    </li>
                    <li>
                        <label className="board-label">board</label>
                        <textarea type="text" name="board" value={list.board} onChange={handleInputChange} />
                        <button onClick={submitEdt}>update</button>
                        <button onClick={submitDlt}>delete</button>
                        <button onClick={() => props.setEditing(false)}>close</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default WriteEdit;