# fail-api

[![Build Status](https://travis-ci.org/zlypher/fail-api.svg?branch=master)](https://travis-ci.org/zlypher/fail-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Getting Started

To get started with `fail-api`, you can either use the hosted version or host the `fail-api` yourself.

### Hosted Version

Simply start calling the hosted version on `https://fail-api.developr.at`

### Self-Hosted Version

```bash
# Clone the repository
git clone git@github.com:zlypher/fail-api.git

# Install dependencies
cd fail-api
npm install

# Start server with default port 1234 or with a custom port by setting the PORT env variable
npm start
```

## Examples

Call the `/fail/{code}` endpoint with a status code you want to receive as a response

```bash
λ curl https://fail-api.developr.at/fail/200
OK
λ curl https://fail-api.developr.at/fail/404
Not Found
λ curl https://fail-api.developr.at/fail/418
I'm a teapot
```

**Invalid code: Not a Number:**
If the provided `{code}` is not a number, the server will return `418, I'm a teapot`.

**Invalid code: Not a valid http status code:**
If the provided `{code}` is not a valid status code, the server will return the given code as a response status code as well as the response content.

## Contributing

This is a small side project. You are welcome to create issues/pull requests. I'll try to respond as quick as possible.

## LICENSE

MIT (see [LICENSE.md](LICENSE.md))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
