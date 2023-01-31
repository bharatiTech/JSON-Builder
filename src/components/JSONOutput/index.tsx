import { Button } from "@mui/material";
import { useState } from "react";
import { KeyValueInterface } from "../../interface";
import "../../App.css";

const JSONOutput = ({ keyValuePair }: KeyValueInterface) => {
  const [jsonData, setJsonData] = useState<any>({});
  const [isDisplayJSON, setIsDisplayJSON] = useState<boolean>(false);

  const handleClick = () => {
    if (keyValuePair !== undefined) {
      // keyValuePair?.forEach((value) => {
      //   setJsonData((prev: any) => ({
      //     ...prev,
      //     [value.key]: value.value,
      //   }));
      // });

      let initialValue: { [key: string]: string | number | boolean } = {};

      keyValuePair?.reduce((accumulator, currentValue) => {
        accumulator = { ...accumulator, ...currentValue };
        setJsonData((prev: any) => {
          let copyObj = prev;
          return {
            ...copyObj,
            [accumulator.key]: accumulator.value,
          };
        });
        return accumulator;
      }, initialValue);

      setIsDisplayJSON(true);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        sx={{ margin: "1em" }}
        onClick={handleClick}
      >
        Get JSON
      </Button>
      <div className="jsonContainer">
        {isDisplayJSON ? (
          <pre className="jsonText">{JSON.stringify(jsonData, null, "\t")}</pre>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default JSONOutput;
