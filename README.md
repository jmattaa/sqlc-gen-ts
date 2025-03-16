# sqlc-ts-sqlite

> [!CAUTION]
> This project is not finished on [sqlc-gen-typescript](https://github.com/sqlc-dev/sqlc-gen-typescript)
> Here i'm just tweaking it for my sqlite usage

> [!IMPORTANT]
> USE JAVY 3.2.0 and nothing greater cuz protobuf be complaining

## Supported engines and drivers

- SQLite via [sqlite3](https://www.npmjs.com/package/better-sqlite3).

## Development

If you want to build and test sqlc-gen-typescript locally, follow these steps:

1. Clone the repository and install dependencies:
   ```
   git clone https://github.com/jmattaa/sqlc-ts-sqlite.git
   cd sqlc-gen-typescript
   npm install
   ```

2. Make your desired changes to the codebase. The main source files are located in the `src` directory.

3. If you've made changes that require updating dependencies, run:
   ```
   npm install
   ```

4. Build the WASM plugin:  
Check the `Makefile` for details.
   ```
   make out.js

   # Ensure you have Javy installed and available in your PATH
   make examples/plugin.wasm
   ```

5. To test your local build, create a test project with a `sqlc.yaml` file containing:

   ```yaml
   version: '2'
   plugins:
   - name: ts
     wasm:
       url: file://{path_to_your_local_wasm_file}
       sha256: {sha256_of_your_wasm_file}
   sql:
   - schema: "schema.sql"
     queries: "query.sql"
     engine: sqlite
     codegen:
     - out: db
       plugin: ts
       options:
         runtime: node
         driver: better-sqlite3
   ```

   Replace the placeholders with appropriate values for your setup.

6. Run sqlc in your test project to generate TypeScript code using your local plugin build:
   ```
   sqlc generate
   ```

For more details on sqlc development, refer to the sqlc core development guide. This guide provides additional information on setting up and working with sqlc in general, which may be useful for contributors to this project.  
https://docs.sqlc.dev/en/latest/guides/development.html
