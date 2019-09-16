import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMod: false,
        status: this.props.status
    }
    activateEditMod = () => {
        // метод из React.Component   71lesson
        this.setState({
            editMod: true,
        });
    }
    deactivateEditMod = () => {
        this.setState({
            editMod: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editMod &&
                    <div>
                        <span onDoubleClick={this.activateEditMod}> {this.props.status || 'NOPE'} </span>
                    </div>
                }
                {this.state.editMod &&
                    <div>
                        <input onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMod.bind(this)}
                            value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;