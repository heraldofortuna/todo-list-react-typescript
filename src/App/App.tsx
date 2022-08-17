import * as React from "react";

import api from "../Item/api";
import { Item } from "../Item/types";
import Button from "../ui/controls/Button";
import Modal, { ModalFooter } from "../ui/controls/Modal";
import Textfield from "../ui/inputs/Textfield/Textfield";

import styles from "./App.module.scss";

enum Status {
  Init = "init",
  Success = "success",
}

interface Form extends HTMLFormElement {
  text: HTMLInputElement;
}

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);
  const [isModalVisible, toggleModal] = React.useState<boolean>(false);

  function add(event: React.FormEvent<Form>) {
    event.preventDefault();

    const text = event.currentTarget.text.value.trim();

    if (!text) return;

    api.create(text).then((item) => {
      setItems((items) => items.concat(item));
      toggleModal(false);
    });
  }

  function remove(id: Item["id"]) {
    api
      .remove(id)
      .then(() => setItems((items) => items.filter((item) => item.id !== id)));
  }

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
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>ToDo List</h1>
        <h3>{items.length} item(s)</h3>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button type="button" onClick={() => remove(item.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        colorScheme="primary"
        onClick={() => toggleModal(true)}
      >
        Add Item
      </Button>
      {isModalVisible && (
        <Modal onClose={() => toggleModal(false)}>
          <form onSubmit={add}>
            <Textfield name="text" />
            <ModalFooter>
              <Button type="button" onClick={() => toggleModal(false)}>
                Cancel
              </Button>
              <Button type="submit" colorScheme="primary">
                Add
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default App;
