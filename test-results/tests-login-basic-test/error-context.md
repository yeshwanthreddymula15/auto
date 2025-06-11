# Test info

- Name: basic test
- Location: C:\Users\YESHWANTH REDDY\auto-login-supabase\tests\login.test.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at C:\Users\YESHWANTH REDDY\auto-login-supabase\tests\login.test.js:4:14
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 |
  3 | test('basic test', async ({ page }) => {
> 4 |   await page.goto('http://localhost:3000');
    |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  5 |   expect(await page.title()).toBe('Example Domain');
  6 | });
  7 |
```