// export interface KeyValueInterface {
//   keyValuePair:
//     []
//     | {
//         [key: string]: any;
//       }[];
//   setKeyValuePair: React.Dispatch<
// React.SetStateAction<
//    []
//   | {
//     [key: string]: any;
//     }[]
// >
//   >;
// }

import React from "react";

export interface KeyValueInterface {
  keyValuePair: { [key: string]: any }[];
  setKeyValuePair: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }[] | any>
  >;
}
