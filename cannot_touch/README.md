## `matches` (matched pages) -> `js` (scripts to run)

```json
"content_scripts": [
    {
        "matches": ["*://www.baidu.com/"],
        "js": ["js/cannot_touch.js"]
    }
]
```