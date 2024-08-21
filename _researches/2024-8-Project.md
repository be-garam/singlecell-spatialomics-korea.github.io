---
layout: research
title: "Updating SCSOK.io research page"
category: Introduction
group: SCSOK
institute: SCSOK
---

## tldr page
This tl;dr guide is for you if you already know what happens in a SCSOK hackathon or if you don’t care.

## Installation
- Do not need to install anything.

## How to Update your hackathon page
1. find your hackathon page in the sidebar
2. click `Edit this page` button
3. click `Pencil` icon
4. update the page(markdown) and click `Commit changes` button
    - you can preview the page by clicking `Preview changes` button
    - Just copy and paste the markdown you prepared.
    - Don't forget to add the front matter's `title` at the top of the page.
5. input Propose changes and click `Propose changes` button
    - Input your organization name and own name
6. click `Create pull request` button
7. click `Merge pull request` button
8. Done! Just wait for the page to be updated.

## How to Add a new hackathon page
1. click `Add file` button in main page
2. click `Create new file` button
3. input `your-project-name.md` in the input box
    ```markdown
    ---
    layout: research  <!-- fixed  -->
    title:  <!-- your-project-name with "  -->
    group: <!-- your-group-name without " -->
    institute: <!-- yout-institute-name without " -->
    ---

    <!-- yout markdown here -->
    ```
4. copy and paste the markdown you prepared.
    - Don't forget to add the front matter's `title` at the top of the page.
5. input Propose new file and click `Propose new file` button
    - Input your organization name and own name
6. click `Create pull request` button
7. click `Merge pull request` button
8. Done! Just wait for the page to be updated.

