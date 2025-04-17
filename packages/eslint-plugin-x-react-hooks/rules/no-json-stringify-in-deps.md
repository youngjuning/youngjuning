# x-react-hooks/no-json-stringify-in-deps

Error：

```jsx
const users = [{ name: 'Aaron Young' }];
useEffect(() => {}, [JSON.stringify(users)]);
```

Correct：

```jsx
import { useDeepCompareEffect } from "ahooks";

const users = [{ name: 'Aaron Young' }];
useEffect(() => {}, [users.length]);
useDeepCompareEffect(() => {}, [users]);
```
