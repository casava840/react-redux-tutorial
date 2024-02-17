import {createAction, handleActions} from 'redux-actions';

//액션타입 - '모듈 이름/액션 이름'의 문자열 형태로 작성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//export 키워드는 외부에서 해당 객체를 사용할 수 있게 해줌
//액션 객체 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

//리듀서원래형태, redux-actions를 사용한 아래 함수로 대체함
// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {number: state.number + 1}; //새 객체를 생성해서 반환
//         case DECREASE:
//             return {number: state.number - 1};
//         default:
//             return state;
//     };
// };

//대체
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.number - 1})
    },
    initialState
);

export default counter;