# Fake Graphql Response
# Face API for mockup testing 
## THIS IS PROJECT OF HORUS's repo

# 1. Run mocker server
## Install dependencies
```
    npm install
```

## Run mock server
```
    npm run start
```

Go to [localhost:8888](localhost:8888)

# 2. Update mock API Query

## Run generate update schema graphql file

### 1. Make sure we have updated correct Endpoint of Backend to copy of schema
codegen.yml 
```
schema: https://horus-dashboard-kyle.tunnel.techainer.com/graphql <----update endpoint of backend here
generates:
  ./__schema-generate__.graphql:
    plugins:
      - schema-ast
    config:
      includeDirectives: true
```

### 2. Make copy schema to type string in type.js file
types.js

```
    const typeDefs = `
        ....      <--- copy into here
    `
```

##### IMPORTANT
remove this line in string
```
"""The `Upload` scalar type represents a file 
upload."""
```
## Run mock server again :>
```
    npm run start
```