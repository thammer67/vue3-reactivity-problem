Vue3 (Composition API and script setup) project that features a reactivity breakdown when editing a pinia list item. This is just a sandbox project that uses static data in a Pinia store (no API calls) but it's 
useful for understanding how forms work in Vue.

Update: I re-wrote this little sample app to use v-model properly as it was bugging me that I wasn't using
v-model at all and how I was using v-bind to pass down props and all the emits going back up the chain. This way is much cleaner. I plan to use this technique going forward. Note that I discovered in this process that Parent->Child->Granchild relationships require a slight modification in how the event data is emitted back up the chain. Astute observers may notice in Input.vue that the emit is emitting the entire event object ($event) instead of $event.target.value. This is required for the whole thing to work. In fact, every intermediate component between the parent and the last descendent needs to emit the $event object for it all to work. Took me a while to get this working right. So this project is here for you're coding enjoyingment.

Be sure to use Vue Devtools in your browser to watch the store data change as you edit.

Everyone is welcome to install this and copy it for your own projects.

Installation:
1. Clone the project to your computer
2. cd to vue3-reactivity-problem
3. Run 'npm install && npm run dev'
