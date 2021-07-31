import { Component } from "react";

class SortMethodBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleMethodChange } = this.props;
        return (
            <div className='sort-method-bar'>
                <select
                onChange={(e) => handleMethodChange(e)}
                >
                    <option value="recent" selected> 최근 조회순 </option>
                    <option value="price"> 낮은 가격순 </option>
                </select>
            </div>
        )
    }
}

export default SortMethodBar;