type User = {};
namespace JSX {
  export type Element = {};
}
function User(props: { user: User }) {
  return undefined;
}

function scope_1() {
  //#region 1
  function renderUsers(users: ReadonlyArray<User>): JSX.Element {
    return (
      <ul>
        {users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    );
  }

  function View(props: { readonly users: ReadonlyArray<User> }): JSX.Element {
    return (
      <div>
        <h1>Users</h1>
        {renderUsers(props.users)}
      </div>
    );
  }
  //#endregion
}

function scope_2() {
  //#region 2
  function renderUsers(props: { users: ReadonlyArray<User> }): JSX.Element {
    return (
      <ul>
        {props.users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    );
  }

  function View(props: { readonly users: ReadonlyArray<User> }): JSX.Element {
    return (
      <div>
        <h1>Users</h1>
        {renderUsers({ users: props.users })}
      </div>
    );
  }
  //#endregion
}

function scope_3() {
  //#region 3
  function RenderUsers(props: { users: ReadonlyArray<User> }): JSX.Element {
    return (
      <ul>
        {props.users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    );
  }

  function View(props: { readonly users: ReadonlyArray<User> }): JSX.Element {
    return (
      <div>
        <h1>Users</h1>
        <RenderUsers users={props.users} />
      </div>
    );
  }
  //#endregion
}

function scope_4() {
  //#region 4
  function UserList(props: { users: ReadonlyArray<User> }): JSX.Element {
    return (
      <ul>
        {props.users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    );
  }

  function View(props: { readonly users: ReadonlyArray<User> }): JSX.Element {
    return (
      <div>
        <h1>Users</h1>
        <UserList users={props.users} />
      </div>
    );
  }
  //#endregion
}
