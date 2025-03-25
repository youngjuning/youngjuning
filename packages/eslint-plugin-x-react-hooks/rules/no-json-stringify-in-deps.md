# x-react-hooks/no-json-stringify-in-deps

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
