import React, {Component} from 'react';
import "./User.css";

class UserComponent extends Component {
    render() {
        let {item, cls} = this.props;
        console.log(item);
        return (
            <div>
                {
                    <div className={cls}>{item.name}</div>
                }
            </div>
        );
    }
}

export default UserComponent;