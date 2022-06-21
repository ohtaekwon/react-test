# Context

[더 알아보기](https://ko.reactjs.org/docs/context.html)

- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.

## 일반적인 props

- 일반적인 React 애플리케이션에서 데이터는 위에서 아래로 (즉, 부모로부터 자식에게) props를 통해 전달되지만,
- 애플리케이션 안의 여러 컴포넌트들에 전해줘야 하는 props의 경우 (예를 들면 선호 로케일, UI 테마) 이 과정이 번거로울 수 있습니다. - context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있습니다.

## 언제 context를 사용하는가?

- context는 React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다.
- 그러한 데이터로는 현재 로그인한 유저, 테마, 선호하는 언어 등이 있습니다. 예를 들어, 아래의 코드는 버튼 컴포넌트를 꾸미기 위해 테마(theme) props를 명시적으로 넘겨주고 있습니다.

## 사용법 - API

#### React.createContext

```jsx
const MyContext = React.createContext(defaultValue);
```

#### Context.Provider

```jsx
<MyContext.Provider value={/* 어떤 값 */}>

```
