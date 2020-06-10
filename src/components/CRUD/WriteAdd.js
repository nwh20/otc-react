import React, { useRef, useState } from 'react'

const WirteAdd = props => {
	const dt = new Date();
	const date = dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate();
	
	const initialFormState = { id: null, date: date, board: '' };
	const [ list, setList ] = useState(initialFormState);
	const password = useRef();

	const handleInputChange = e => {
		const { name, value } = e.target;
		setList({ ...list, [name]: value })
	}

	const submitAdd = e => {
		e.preventDefault();
		if (list.board && password.current.value === '1234' ) {
			props.addList(list);
			setList(initialFormState);
		} else {
			alert('관리자 비밀번호를 입력해주세요.');
		}
	}

	return (
		<div className="write-add">
			<form onSubmit={submitAdd}>
				<ul>
					<li>
						<label>password</label>
						<input type="password" maxLength="6" name="password" placeholder="admin only" ref={password} onChange={handleInputChange} />
					</li>
					<li>
						<label className="board-label">board</label>
						<textarea type="text" name="board" value={list.board} onChange={handleInputChange} />
						<button>add</button>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default WirteAdd;