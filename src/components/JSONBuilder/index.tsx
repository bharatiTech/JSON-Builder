import { useState } from "react";
import JSONInputs from "../JSONInputs";
import JSONOutput from "../JSONOutput";

const JSONBuilder = () => {
  const [keyValuePair, setKeyValuePair] = useState<
    { [key: string]: string }[] | any
  >([]);
  return (
    <div>
      <JSONInputs
        keyValuePair={keyValuePair}
        setKeyValuePair={setKeyValuePair}
      />
      <JSONOutput
        keyValuePair={keyValuePair}
        setKeyValuePair={setKeyValuePair}
      />
    </div>
  );
};

export default JSONBuilder;
