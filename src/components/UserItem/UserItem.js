import React, { Component } from "react";
import PropTypes from "prop-types";

class UserItem extends Component {
  render() {
    const {
      id,
      name,
      username,
      email,
      address: {street,suite,city,zipcode,geo:{lat,lng}},
      phone,
      website,
      company,
      company: {catchPrase,bs}
    } = this.props.user;
    //const address = this.props.user.address;
    return (

        <tr data-testid="tablerow">
            <th scope="row" role="id" disabled data-testid="id">{id}</th>
            <td data-testid="name">{name}</td>
            <td data-testid="username">{username}</td>
            <td data-testid="email">{email}</td>
            <td>{street}</td>
            <td>{suite}</td>
            <td>{city}</td>
            <td>{zipcode}</td>
            <td>{lat}</td>
            <td>{lng}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>{company.name}</td>
            <td>{catchPrase}</td>
            <td>{bs}</td>
          </tr>

    );
  }
}

//PropTypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
const itemStyle = {
  background: "#f3f3f3",
  color: "#000",
  border: "1px solid black",
  padding: "5px 10px",
  cursor: "pointer",
};

const subItemStyle = {
  marginLeft: "10px",
};

export default UserItem;
