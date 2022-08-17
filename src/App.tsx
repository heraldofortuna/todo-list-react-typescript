import * as React from "react";

import api from "./Item/api";
import { Item } from "./Item/types";

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([]);

  React.useEffect(() => {
    api.list().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <main>
      <header>
        <h1>Supermarket List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
    </main>
  );
};

export default App;
