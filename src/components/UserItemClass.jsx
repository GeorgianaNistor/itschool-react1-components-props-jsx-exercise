import React from "react";

class UserItemClass extends React.Component {
  render() {
    const { name, email } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserItemClass;
