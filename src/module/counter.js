//액션타입 - '모듈 이름/액션 이름'의 문자열 형태로 작성
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//export 키워드는 외부에서 해당 객체를 사용할 수 있게 해줌
//액션 객체 생성 함수
export const increase = () => {{ type: INCREASE }};
export const decrease = () => {{ type: DECREASE }};

const initialState = {
    number: 0
};

//리듀서
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {number: state.number + 1}; //새 객체를 생성해서 반환
        case DECREASE:
            return {number: state.number - 1};
        default:
            return state;
    };
};

export default counter;