# Hook 3

- [Hook 규칙 더 알아보기](https://ko.reactjs.org/docs/hooks-rules.html)
- [Custom Hook 더 알아보기](https://ko.reactjs.org/docs/hooks-custom.html)
- [Hook Api](https://ko.reactjs.org/docs/hooks-reference.html)
  <br/>

## Custom Hooks

- 자신만의 Hook을 만들면 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있습니다.
- Effect Hook 사용하기를 배울 때, 채팅 애플리케이션에서 친구가 온라인 상태인지 아닌지에 대한 메시지를 표시하는 컴포넌트를 보았을 것입니다.

```jsx
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

- 이제 채팅 애플리케이션에 연락처 목록이 있으며 그중에서 온라인 상태인 사용자들의 이름을 초록색으로 표시하는 상황을 가정해 보겠습니다.
- 위의 코드와 비슷한 로직을 복사하여 FriendListItem 컴포넌트 안에 붙여넣을 수도 있지만, 가장 좋은 방법이라고 할 수는 없습니다.

```jsx
import React, { useState, useEffect } from "react";

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
```

- 그 대신 이 로직을 `FriendStatus`와 `FriendListItem`에서 공유하도록 하고 싶습니다.

React에는 상태 관련 로직을 컴포넌트에서 공유하는 두 가지 전통적인 방법이 있는데 render props와 고차 컴포넌트입니다. Hook을 사용하여 트리에 컴포넌트를 더하지 않고 위의 문제를 해결하는 방법을 보도록 하겠습니다.
