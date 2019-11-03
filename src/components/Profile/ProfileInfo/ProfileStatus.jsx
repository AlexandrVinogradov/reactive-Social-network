import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMod: false,
        status: this.props.status
    }
    activateEditMod = () => {
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
        debugger
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
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