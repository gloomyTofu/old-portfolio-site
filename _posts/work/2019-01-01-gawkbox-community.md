---
layout: article
title: 'GawkBox App'
class: 'tile1 medium-tile'
folder: 'gawkbox-app'
excerpt: 'Building Communities'
description: 'Community Building Platform'
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
  description: React Native
 group2: 
  title: Role
  description: 'Product Design, Prototyping, UI Development'

---

## NATIVE APP
At GawkBox, we build tools for content creators and live streamers (i.e. YouTube, Twitch, and Mixer creators). The GawkBox app, available on iOS and Android, has gone through a number of iterations. The most recent was a pivot towards building online communities between creators and their fans. To achieve this, we introduced Teams. Creators are the team captains and fans go to the GawkBox app to join their team. My role included product design, UX prototyping, and UI implementation. 

 <!-- TEXT -->

<div class="screenshot-container">
	<img srcset="/assets/images/work/{{page.folder}}/preview@2x.jpg 1089w, /assets/images/work/{{page.folder}}/preview.jpg 768w" src="/assets/images/work/{{page.folder}}/preview.jpg" alt="Screenshot" />
</div>

<!-- ## PERSONAS

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-1@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-1.jpg 768w" src="/assets/images/work/{{page.folder}}/process-1.jpg" alt="Personas" />
</div> -->

## UI COMPONENTS
The GawkBox app was built in React Native and distributed to their respective app stores via XCode and Android Studio. I created a reusable [UI Compontent Library](../../../../2018/03/01/gawkbox-styleguide/) in React Native and published it to npm. Components that can be reused throughout the app ensure consistency, simplifies maintainance, improves performance, and speeds up prototyping and development time.

<!-- 

## TASK FLOW 1


<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-2@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-2.jpg 768w" src="/assets/images/work/{{page.folder}}/process-2.jpg" alt="Task Flow 1" />
</div>
<br/>

## TASK FLOW 2

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-3@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-3.jpg 768w" src="/assets/images/work/{{page.folder}}/process-3.jpg" alt="Task Flow 2" />
</div>
<br/>

## TASK FLOW 3

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-4@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-4.jpg 768w" src="/assets/images/work/{{page.folder}}/process-4.jpg" alt="Task Flow 3" />
</div>
<br/>

## TASK FLOW 4

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-5@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-5.jpg 768w" src="/assets/images/work/{{page.folder}}/process-5.jpg" alt="Task Flow 4" />
</div> 
-->

## AGILE
When it comes to introducing new features for the app, GawkBox uses agile methodologies. Being such a small start-up, there isn't ever enough time to do thorough marketing research and analysis. Instead, we make incremental changes, push code often, gather feedback, check in with users, and either continue to iterate or change directions entirely.

My process varies depending on the type of work, but here's one example of incorporating a Flair System into the app:

## FLAIR SYSTEM
IDEATION:

Working closely with stakeholders, business, and product, we take a problem and test out solutions. For example, business wanted to increase user retention and incorporate monetization into the app. We proposed a Flair (achievement) system to get users coming back to the app and would offer rare badges that can only be purchased.

WIREFRAMES:

Once we have the idea, the Flair system, user flows and low-fidelity wireframes are sketched out.

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-6@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-6.jpg 768w" src="/assets/images/work/{{page.folder}}/process-6.jpg" alt="Wireframes" />
</div>

As the UI developer, I try to ensure the user flows and wireframes only include features that would work with the existing product and was doable within a given timeframe. Being mindful of engineering time, I'll often consult with them as well. Once the flow and interactions are established, the design is presented to the team (still very low-fidelity, in this case, drawn on the whiteboard). 

We'll talk through it, refine it, and scope out exactly what can and can't be done in a sprint. 

EFFICIENT PROTOTYPING:

High-fidelty mockups are then created. From here, based off of the comps, I would jump right into the code base and build out the UI for the Flair system. Since I'm working with a component library, development is quick, only requires creating new UI elements and reusing exisitng ones.  

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-7@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-7.jpg 768w" src="/assets/images/work/{{page.folder}}/process-7.jpg" alt="Prototypes" />
</div>

Most times, after implementing the design into code, certain aspects may need to be rethought, interactions are adjusted, and intended flows may need to change. This is my version of rapid prototyping: as I'm creating the UI components, I'll simulatenously run the latest UI library in a cloned version of our production app. 

Within the development environment I can build out the flow, test locally, iterate quickly, and have our internal team play around with the prototype. I'll have both Android Studio and XCode device emulators running, so I can test out different device sizes and operating systems at the same time.   

Once I have a good proof of concept, I'll handover my prototype to our engineers for reference and they will translate it into production code. As the engineer is working with the UI components, I'm always on hand to fix any UI issues or to answer any questions.

<div class="screenshot-container no-border">
	<img srcset="/assets/images/work/{{page.folder}}/process-8@2x.jpg 1089w, /assets/images/work/{{page.folder}}/process-8.jpg 768w" src="/assets/images/work/{{page.folder}}/process-8.jpg" alt="Prototypes" />
</div>

ASSESSMENT:

After releasing the feature into the wild, we'll collect data and user feedback. For the Flair System, success would mean an increase in retention and in-app purchases. If successful, we'll iterate on the idea, enhancing the feature to be included in chat or as a reward in our leveling system. If not, we'll reprioritize and adapt to changes quickly.  





