import React from "react";
import { render, screen } from "@testing-library/react";
import UserItem from "./UserItem";
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

test("renders one user table data", () => {
  render(
    <table>
      <tbody>
        <UserItem id={user.id} user={user} />
      </tbody>
    </table>
  );
  const tableElement = screen.getByTestId("tablerow");
  expect(tableElement).toBeInTheDocument();
});

test("renders one user with a role of id attribute disabled", () => {
    render(
      <table>
        <tbody>
          <UserItem id={user.id} user={user} />
        </tbody>
      </table>
    );
    const tableElement = screen.getByRole("id");
    expect(tableElement).toHaveAttribute("disabled");
  });

test("renders one user with a username", () => {
  render(
    <table>
      <tbody>
        <UserItem id={user.id} user={user} />
      </tbody>
    </table>
  );
  const tableElement = screen.getByTestId("username");
  expect(tableElement).toHaveTextContent("Bret");
});
