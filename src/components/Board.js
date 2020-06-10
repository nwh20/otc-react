import React, { useState } from 'react';
import WriteAdd from './CRUD/WriteAdd';
import WriteEdit from './CRUD/WriteEdit';
import BoardList from './CRUD/BoardList';
import IconInsta from './Fontawesome/IconInsta'

const Board = () => {
    const listsData = [
        { id: 4, date: '2020-6-27', board: '신제품 입고! 2020년 특별 에디션 필름이 수입되었습니다.' },
        { id: 3, date: '2020-6-15', board: ' 드디어 저희 OLDIE THE CAMERA의 오프라인 쇼룸을 성수동에 오픈하게 되었습니다. 오프라인 쇼룸에서는 바로 구매 가능하시며, 쇼룸에서 구매하실 시, 10%의 할인 적용해드립니다. 8월까지 오픈 이벤트로 10만원 이상 구매하시는 분들에게는 프리미엄 필름을 선물로 드립니다. 많이 방문해주세요 :)' },
        { id: 2, date: '2020-6-2', board: '저희 웹사이트에서는 직접 판매하지 않습니다. 모든 판매는 이베이에서 진행됩니다. 모든 결제 역시 이베이에서 이루어집니다.' },
        { id: 1, date: '2020-5-23', board: '사이트오픈! 이베이에서 Oldie The Camera를 검색해보세요. 환영합니다!' },
    ];

    const initialFormState = { id: null, date: '', board: '' };

    const [ lists, setLists ] = useState(listsData);
    const [ currentList, setCurrentList ] = useState(initialFormState);
    const [ editing, setEditing ] = useState(false);

    const addList = list => {
        list.id = lists.length + 1;
        setLists([list, ...lists]);
    }

    const deleteList = id => {
        setEditing(false);
        setLists(lists.filter(list => list.id !== id));
    }

    const updateList = (id, updatedList) => {
        setEditing(false);
        setLists(lists.map(list => (list.id === id ? updatedList : list)));
    }

    const editRow = list => {
        setEditing(true);
        setCurrentList({ id: list.id, date: list.date, board: list.board });
    }

    return (
        <div className="board">
            <div className="wrap-page">
                <div className="board-write">
                    <p>포트폴리오용 패스워드는 '1234'입니다. The temporary password for portfolio is '1234'.</p>
                    {editing ? (
                      <div>
                        <WriteEdit
                          editing={editing}
                          setEditing={setEditing}
                          currentList={currentList}
                          updateList={updateList}
                          deleteList={deleteList}
                          password={1234}
                        />
                      </div>
                    ) : (
                      <div>
                        <WriteAdd addList={addList} password={1234} />
                      </div>
                    )}
                </div>
                <div className="board-list">
                    <h2>NEWS FROM OLDIE</h2>
                    <IconInsta />
                    <h3>Oldie의 더욱 빠르고 자세한 소식은 인스타 계정에서 만나실 수 있습니다.</h3>
                    <BoardList lists={lists} editRow={editRow} />
                </div>
            </div>
        </div>
    );
}

export default Board;