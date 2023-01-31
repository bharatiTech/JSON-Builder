import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { KeyValueInterface } from "../../interface";
import "../../App.css";

const JSONInputs = ({ keyValuePair, setKeyValuePair }: KeyValueInterface) => {
  const addPair = () => {
    const tempPair = [
      ...keyValuePair!,
      {
        key: "",
        value: "",
      },
    ];
    setKeyValuePair(tempPair);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const eventName = event.target.name.split("_")[0];
    const eventIndex: number = parseInt(event.target.name.split("_")[1]);

    if (eventName === "key") {
      let items = [...keyValuePair!];
      let item = { ...items[eventIndex] };
      item.key = event.target.value;
      items[eventIndex] = item;
      setKeyValuePair(items);
    } else {
      let items = [...keyValuePair!];
      let item = { ...items[eventIndex] };
      item.value = event.target.value;
      items[eventIndex] = item;

      setKeyValuePair(items);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ margin: "1em" }}
        onClick={addPair}
      >
        Add Key-Value Pair
      </Button>

      {keyValuePair !== undefined &&
        keyValuePair.length > 0 &&
        keyValuePair?.map((pair: { [key: string]: string }, index: number) => {
          return (
            <div key={index} className="inputContainer">
              <TextField
                placeholder="Enter Key"
                id={`key_${index}`}
                name={`key_${index}`}
                onChange={(event) => handleChange(event)}
              />
              <TextField
                placeholder="Enter Value"
                id={`value_${index}`}
                name={`value_${index}`}
                onChange={(event) => handleChange(event)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default JSONInputs;
