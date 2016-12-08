---
layout: null
---
{% assign url_parts = page.url | split: '/' %}
{% assign context = url_parts[1] | prepend: '/' | append: '/' %}
{% assign context_path = url_parts[1] | prepend: '/'  %}
{% for p in site.pages %}{% unless p.url contains "/searchmap.json" %}
{"index":{"_id":"{{ forloop.index }}"}}
{
  "title":"{{ p.title }}",
  "url":"{{ site.url }}{{ p.url }}",
  "content":"{{ p.content | strip_newlines | strip_html | replace:'\','%5C' | replace:'"','\"'}}"
}{% endunless %}{% endfor %}
