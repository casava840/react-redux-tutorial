import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../module/counter";

const CounterContainer = ({number, increase, decrease}) => {
    return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

//store에 들어있는 변수를 props로 변환
const mapStateToProps = state => ({
    number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    // 임시함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});

//connect는 state->props 변환 함수를 인자로 받아 새로운 컴포넌트를 반환한다. 
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);