---
id: Pagination
title: Pagination
---

By default the Api will return a single result object, if you want to receive a page with an array of objects, you'll need to use the `page` query. You can usually wrap your normal query in a `page` query with minimal changes to receive a page.

Let's write another query, this time a search query with a page of media data.

Python
```python
query = '''
query ($afterId: String, $limit: Int, $search: String) {
  page (afterId: $afterId, limit: $limit) {
    media(sort: SEARCHMATCH, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
'''
variables = {
    'afterId': '',
    'limit': 10,
    'search': 'Kage no Jitsuryokusha'
}

url = 'http://pantsustreaming.fr:9090/graphql'
headers = {"Authorization": "Bearer user_token"}

# Make the HTTP Api request
response = requests.post(url, json={'query': query, 'variables': variables}, headers=headers)
```

This request will return the following JSON response:

```json
{
  "data": {
    "page": {
      "media": [
        {
          "id": "983967843483649",
          "title": {
            "romaji": "Kage no Jitsuryokusha ni Naritakute!"
          }
        },
        {
          "id": "669782789849088",
          "title": {
            "romaji": "Kage no Jitsuryokusha ni Naritakute! 2nd season"
          }
        }
      ]
    }
  }
}
```