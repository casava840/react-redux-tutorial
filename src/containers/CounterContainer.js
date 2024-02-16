import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../module/counter";

const CounterContainer = ({number, callIncrease, callDecrease}) => {
    return (
    <Counter number={number} onIncrease={callIncrease} onDecrease={callDecrease}/>
    );
};

//store에 들어있는 변수를 props로 변환
const mapStateToProps = state => ({
    number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    //여기 정의된 함수는 connect()를 통해 결합되어 CounterContainer에 인자로 들어간다.
    callIncrease: () => {
        dispatch(increase());
    },
    callDecrease: () => {
        dispatch(decrease());
    },
});

//connect는 state->props 변환 함수를 인자로 받아 새로운 컴포넌트를 반환한다. 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);