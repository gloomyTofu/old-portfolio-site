---
layout: article
title: 'GawkBox'
class: 'tile2 medium-tile'
folder: 'gawkbox-style'
excerpt: 'Reusable UI Components'
description: 'Reusable UI Component Libraries'
category: work
background: e8e8e8
image:
 full: full-image.jpg
 preview: preview.jpg
 thumb: thumb.jpg
info:
 title: Technology
 group: 
  title: Frameworks
  description: React Native, React, Vue
 group2: 
  title: Role
  description: 'UI/UX Design, UI Development'

---


## CONSISTENCY
When I started at GawkBox, a small start-up based in Seattle, I was the first and only UX designer and UI Developer for the company. At the time, the website was using a CSS library, so certain elements - like buttons - generally looked the same but there were no standards, no guidelines, and no single source of truth. By having a UI component library specific to GawkBox's branding, engineers can worry less about using the right button and focus more on enhancing the product. 

In addition to design consistency and speeding up development time, having a  separate, reusable library helps with performance, simplifies maintenance, and standardizes technology dependencies. 

It began with React Native for the GawkBox mobile app. Shifting back to the website, however, it uses a combination of React and Vue. To continue to ensure UI consistency, I created two more component libaries to accommodate the two different frameworks. In order to display the same GawkBox button but over different technology stacks, one would copy and paste the following:

## REACT NATIVE

<div class="code__container">
<pre><code><span class="comment">// React Native</span>
<span class="key">import</span> { GawkButton } <span class="key">from</span> <span class="string">'@gawky/lavos'</span>; 
</code></pre>
</div>

<div class="code__container">
<pre><code><span class="comment">// Inside Render Function</span>
<span class="key">&lt;</span>GawkButton
  buttonType<span class="key">=</span><span class="string">"primary"</span>
  text<span class="key">=</span><span class="string">"Button"</span>
  onPress<span class="key">=</span>{<span class="type">this</span>.doSomething}<span class="key"> /&gt;</span>
</code></pre>
</div>

For Android and iOS.

## REACT

<div class="code__container">
<pre><code><span class="comment">// ReactJS</span>
<span class="key">import</span> { GawkButton } <span class="key">from</span> <span class="string">'@gawky/magus'</span>; 
</code></pre>
</div>

<div class="code__container">
<pre><code><span class="comment">// Inside Render Function</span>
<span class="key">&lt;</span>GawkButton
  buttonType<span class="key">=</span><span class="string">"primary"</span>
  text<span class="key">=</span><span class="string">"Button"</span>
  onPress<span class="key">=</span>{<span class="type">this</span>.doSomething}<span class="key"> /&gt;</span>
</code></pre>
</div>

For the website, not logged-in.

## VUE

<div class="code__container">
<pre><code><span class="comment">// VueJS Component</span>
<span class="key">import</span> { GawkButton } <span class="key">from</span> <span class="string">'@gawky/monstro'</span>; 
</code></pre>
</div>

<div class="code__container">
<pre><code><span class="comment">// Inside Render Function</span>
&lt;<span class="tag">GawkButton</span>
  <span class="function">type</span>=<span class="string">"primary"</span>
  <span class="function">@click</span>=<span class="string">"doSomething"</span>&gt;
  <span class="comment">&lt;!-- button text --&gt;</span>
  Button
&lt;/<span class="tag">GawkButton</span>&gt;
</code></pre>
</div>

For the website, logged-in.

## NEXT STEPS

DESIGN SYSTEM:

Next steps would be to consolidate all three UI component libraries into a single GawkBox Design System. At the moment, whenever I create a new component, I have to remember to update the README.md file for that specific library or no one will know of it. [Storybook](https://github.com/storybookjs/storybook) looks to be a good solution as it allows for UI component documentation, GUI catagorization, testing, and it supports React Native, React, and Vue. 


