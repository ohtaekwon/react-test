# Hook 2

[더 알아보기](https://ko.reactjs.org/docs/hooks-effect.html)
<br/>

## 1. Using the Effect Hook

- Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- `페이지의 카운터`를 예시로 하는 코드이다.
- 문서의 타이틀을 클릭 횟수가 포함된 문장으로 표현할 수 있도록 새로운 기능을 더했습니다.

- **데이터 가져오기**, **구독(subscription) 설정하기**, 수동으로 **React 컴포넌트의 DOM을 수정**하는 것까지 이 모든 것이 side effects이다.

### Tip

- React의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 된다.

- React 컴포넌트에는 일반적으로 두 종류의 side effects가 있습니다.
  - 1. 정리(clean-up)가 필요한 것
  - 2. 그렇지 않은 것.
- 이 둘을 어떻게 구분하려면?

<br/>

## 정리(Clean-up)를 이용하지 않는 Effects

[더 알아보기](https://ko.reactjs.org/docs/hooks-effect.html#effects-without-cleanup)

- React가 `DOM`을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있다.
- 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들이다.
- 이것들은 실행 이후 신경 쓸 것이 없기 때문입니다.
- class와 hook이 이러한 side effects를 어떻게 다르게 구현하는지 비교해봅시다.

<br/>

## Hook을 이용하는 예시

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- useEffect Hook을 이용하여 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다.
- React는 우리가 넘긴 함수를 기억했다가(이 함수를 ‘effect’라고 부릅니다)
- DOM 업데이트를 수행한 이후에 불러낼 것입니다.
- 위의 경우에는 effect를 통해 문서 타이틀을 지정하지만, 이 외에도 데이터를 가져오거나 다른 명령형(imperative) API를 불러내는 일도 할 수 있습니다.

## 정리하자면

- class 컴포넌트에서는 `componentDidMount` + `componentDidUpdate`
- Hook 에서는 `useEffect(()=>{})`
- 구독과 정리등은 `componentDidMount` & `componentDidUpdate` 를 `useEffect` 하나에서 처리한다.
- `useEffect`는 데이터 fetch / 구독 / DOM 수정
- `clean up`은 구독과 구독해지를 한 공간에서
- `dependency array`는 필요한 변경시에만 effect를 실행하도록
