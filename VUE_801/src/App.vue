<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage goals</button>
    <!--
      OLD SCHOOL V-IF METHOD     
    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> 
    Instead of this use dynamic components, with Vue defined <component> tag
    -->
    <component :is="selectedComponent"></component>

    <!--
      SLOT PRACTICE 
      <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProp">
        <h2>{{ slotProp.goal }}</h2>
        <p>{{ slotProp.nextPropFromSlot }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader.vue";
  // import UserInfo from "./components/UserInfo";
  // import BadgeList from "./components/BadgeList";
  // import CourseGoals from "./components/CourseGoals";
  import ActiveGoals from "./components/ActiveGoals";
  import ManageGoals from "./components/ManageGoals";
  //import ActiveElement from "../../A_POTENTIAL_PROBLEM/src/components/ActiveElement.vue";

  export default {
    components: {
      "the-header": TheHeader,
      // "user-info": UserInfo,
      // "badge-list": BadgeList,
      // "course-goals": CourseGoals,
      "active-goals": ActiveGoals,
      "manage-goals": ManageGoals,
      //ActiveElement,
    },
    data() {
      return {
        selectedComponent: "active-goals",
        activeUser: {
          name: "Maximilian Schwarzmüller",
          description: "Site owner and admin",
          role: "admin",
        },
      };
    },
    methods: {
      setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
      },
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
