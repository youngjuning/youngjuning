# eslint-plugin-x-react-hooks

## Installation

```sh
npm install --save-dev eslint-plugin-x-react-hooks
```

## Usage

```json
{
  "plugins": ["x-react-hooks"],
  "rules": {
    "x-react-hooks/no-json-stringify-in-deps": "error"
  }
}
```

## rules

### no-json-stringify-in-deps

Error：

```jsx
const users = [{ name: '全栈紫升' }];
useEffect(() => {}, [JSON.stringify(users)]);
```

Correct：

```jsx
import { useDeepCompareEffect } from "ahooks";

const users = [{ name: '全栈紫升' }];
useEffect(() => {}, [users.length]);
useDeepCompareEffect(() => {}, [users]);
```
