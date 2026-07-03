# React Native 기초 노트

이 문서는 HTML/CSS/JavaScript를 조금 해본 학생이 React Native로 넘어갈 때 필요한 최소 개념을 정리한 자료입니다.

## React Native는 무엇인가요?

React Native는 JavaScript로 모바일 앱 화면을 만드는 도구입니다. 웹의 HTML 태그를 그대로 쓰지는 않지만, 화면을 작은 컴포넌트로 나누고 데이터를 화면에 보여준다는 점은 비슷합니다.

웹에서 하던 생각:

```html
<div class="card">
  <img src="game.jpg" />
  <h3>게임 제목</h3>
  <button>담기</button>
</div>
```

React Native에서 하는 생각:

```jsx
<View style={styles.card}>
  <Image source={{ uri: game.image }} />
  <Text>{game.title}</Text>
  <Pressable onPress={addToCart}>
    <Text>담기</Text>
  </Pressable>
</View>
```

## HTML과 React Native 비교

| 웹 | React Native | 의미 |
|---|---|---|
| `div` | `View` | 화면을 묶는 박스 |
| `p`, `h1`, `span` | `Text` | 글자 |
| `img` | `Image` | 이미지 |
| `button` | `Pressable` | 누를 수 있는 영역 |
| `input` | `TextInput` | 입력창 |
| `ul`, `li`, `map()` | `FlatList` 또는 `map()` | 목록 |
| CSS 파일 | `StyleSheet.create()` | 스타일 |

## 컴포넌트

컴포넌트는 화면 조각입니다. 게임 카드가 여러 번 반복된다면 카드 하나를 컴포넌트로 만들 수 있습니다.

```jsx
function GameCard({ game }) {
  return (
    <View>
      <Text>{game.title}</Text>
      <Text>{game.price}</Text>
    </View>
  );
}
```

`{ game }`처럼 바깥에서 전달받는 값을 `props`라고 부릅니다.

## 상태

상태는 앱이 기억하고 있는 값입니다. 검색어, 선택한 카테고리, 장바구니 목록 같은 값이 상태입니다.

```jsx
const [searchText, setSearchText] = useState('');
```

- `searchText`: 현재 검색어
- `setSearchText`: 검색어를 바꾸는 함수
- `useState('')`: 처음 값은 빈 문자열

상태가 바뀌면 화면이 다시 그려집니다.

## 배열 렌더링

게임 여러 개를 화면에 보여줄 때는 배열을 반복합니다.

```jsx
GAMES_DATA.map((game) => (
  <GameCard key={game.id} game={game} />
));
```

목록이 많아질 수 있다면 React Native에서는 `FlatList`를 자주 씁니다.

```jsx
<FlatList
  data={GAMES_DATA}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <GameCard game={item} />}
/>
```

## 이벤트

웹에서는 `onclick`을 사용하지만, React Native에서는 보통 `onPress`를 사용합니다.

```jsx
<Pressable onPress={() => addToCart(game.id)}>
  <Text>장바구니 담기</Text>
</Pressable>
```

## 스타일

React Native 스타일은 CSS와 비슷하지만 문자열이 아니라 JavaScript 객체입니다.

```jsx
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#101827',
    borderRadius: 8,
    padding: 12,
  },
});
```

주의할 점:

- `background-color`가 아니라 `backgroundColor`를 씁니다.
- `font-size`가 아니라 `fontSize`를 씁니다.
- 대부분 숫자는 `px` 없이 씁니다.
- 레이아웃은 기본적으로 `flex`를 많이 씁니다.

## 이번 프로젝트에서 볼 부분

- `data/games.js`: 앱에 보여줄 데이터
- `components/GameCard.js`: 카드 하나의 모양
- `App.js`: 검색, 필터, 장바구니, 모달

## 웹앱에서 RN 앱으로 바꿀 때의 순서

1. 먼저 화면을 작은 단위로 나눕니다.
2. 반복되는 UI를 컴포넌트로 만듭니다.
3. 원본 데이터를 JS 배열로 정리합니다.
4. `map` 또는 `FlatList`로 목록을 보여줍니다.
5. 클릭, 검색, 필터 같은 상호작용을 상태로 연결합니다.
6. 마지막에 디자인을 다듬습니다.

중요한 점은 한 번에 전체를 옮기려고 하지 않는 것입니다. 작은 화면 하나, 작은 기능 하나씩 옮기는 방식이 실제 개발에서도 훨씬 안전합니다.
