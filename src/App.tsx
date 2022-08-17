import * as React from "react";

import api from "./Item/api";
import { Item } from "./Item/types";
import Button from "./ui/controls/Button";

enum Status {
  Init = "init",
  Success = "success",
}

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);

  React.useEffect(() => {
    api.list().then((items) => {
      setItems(items);
      setStatus(Status.Success);
    });
  }, []);

  if (status == Status.Init) {
    return <span>Loading ...</span>;
  }

  return (
    <main>
      <header>
        <h1>Supermarket List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button>delete</button>
          </li>
        ))}
      </ul>
      <Button colorScheme="primary">Add Item</Button>
    </main>
  );
};

export default App;
