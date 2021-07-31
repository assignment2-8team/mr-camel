import { Component } from 'react';
import './style.css';

class RandomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isApathyButton, handleOnClick } = this.props;

        return (
            <button 
            className='randomButton'
            onClick={() => {handleOnClick(isApathyButton)}}
            >
                {isApathyButton ? "관심 없음" : "랜덤상품 조회"}
            </button>
        )
    }
}

export default RandomButton;