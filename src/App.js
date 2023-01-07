import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div>헤더입니다.</div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <div>푸터입니다.</div>
    </div>
  );
}

export default App;
