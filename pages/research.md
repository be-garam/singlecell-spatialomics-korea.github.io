---
layout: page
title: Research
subtitle: Research we are interested in, and working on.
permalink: /research/
---

### Tools

<div class="w-100">
    {% for research in site.researches %}
    {% if research.category == 'tool' %}
    <a href="{{ research.url }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-3">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ research.title }}</h5>
            <p class="mb-3 pb-0 font-normal text-gray-700 dark:text-gray-400">{{ research.group }}</p>
        </div>
    </a>
    {% endif %}
    {% endfor %}
</div>
