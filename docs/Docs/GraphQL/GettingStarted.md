---
id: GettingStarted
title: Getting Started
---

## What is GraphQL?

GraphQL is a strongly typed Api query language that provides an alternative to REST. It allows clients to define the structure of the data required, and exactly the same structure of the data is returned from the server. This avoids both the problems of over and under-fetching data, while also allowing for a more powerful and flexible Api.

:::tip

Before reading these docs and using the Api its highly recommended you familiarise yourself with GraphQL by reading the official GraphQL documentation [official GraphQL documentation](https://graphql.org/learn/queries/).

:::

## Making a GraphQL API Request

Making a GraphQL API Request

:::info

All requests made to the PantsuStreaming GraphQL API must be made as a POST request to 'http://pantsustreaming.fr:9090/graphql'.

:::

When you make a request you'll need to include 2 payload objects, `query`, and `variables`.

 - query: contains your query or mutation strings.
 - variables: contains the variable values used within your query.

You can omit the variables object and instead hard-code your values inside your query, however, this is not recommended past the simplest of queries.

### Example Query Request

Let's write a simple query to get an anime by its id.

Python
```python
query = '''
query ($id: String) { # Define which variables will be used in the query (id)
  media (id: $id) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
    }
  }
}
'''

# Define our query variables and values that will be used in the query request
variables = {
    'id': "983967843483649"
}

url = 'http://pantsustreaming.fr:9090/graphql'
headers = {"Authorization": "Bearer user_token"}

# Make the HTTP Api request
response = requests.post(url, json={'query': query, 'variables': variables}, headers=headers)
```

This request will return the following JSON response:

```json
"data": {
  "media": {
    "id": "983967843483649",
    "title": {
      "romaji": "Kage no Jitsuryokusha ni Naritakute!",
      "english": "The Eminence in Shadow"
    }
  }
}
```