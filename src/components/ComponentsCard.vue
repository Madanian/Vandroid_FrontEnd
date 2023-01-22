<template>
  <Card :cardTitel="cardTitel" :cardIcon="cardIcon">
    <div slot="contentOfCard">
      <ExpansionPanelTreeLevels
        :items="items"
        headerName="Activities"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="items"
        headerName="Activity Alias"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="items"
        headerName="Services"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanelTreeLevels
        :items="items"
        headerName="Broadcast Receivers"
        class="mb-2"
      ></ExpansionPanelTreeLevels>

      <ExpansionPanel
        :items="items2"
        headerName="Content Providers"
      ></ExpansionPanel>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Basics/Card.vue";
import ExpansionPanelTreeLevels from "@/components/Basics/ExpansionPanelTreeLevels.vue";
import ExpansionPanel from "@/components/Basics/ExpansionPanel.vue";
export default {
  name: "ComponentsCard",
  data() {
    return {
      cardTitel: "Components",
      cardIcon: "mdi-puzzle-outline",

      items: [
        {
          name: "activity-name-1",
          exported: true,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
            {
              id: 2,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
            {
              id: 3,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
          ],
        },
        {
          name: "activity-name-2",
          exported: false,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: true,
              actions: ["action-2-1", "action-2-2", "action-2-3", "action-2-4"],
              categories: ["category-2-1", "category-2-2"],
            },
          ],
        },
        {
          name: "activity-name-3",
          exported: true,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: false,
              actions: ["action-3-1", "action-3-2"],
              categories: [],
            },
            {
              id: 2,
              categoriesCheck: true,
              actions: ["action-3-1", "action-3-2"],
              categories: ["category-3-1", "category-3-2"],
            },
          ],
        },
        {
          name: "activity-name-4",
          exported: true,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: false,
              actions: ["action-4-1", "action-4-2"],
              categories: [],
            },
          ],
        },
        {
          name: "activity-name-5",
          exported: false,
          permission: "a string with 50 characters.......................",
          filter: false,
          filters: [],
        },
      ],

      items2: [
        {
          name: "activity-name-1",
          exported: true,
          permission: "a string with 50 characters.......................a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
            {
              id: 2,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
            {
              id: 3,
              categoriesCheck: true,
              actions: [
                "action-1-1",
                "action-1-2",
                "action-1-3",
                "action-1-4",
                "action-1-5",
              ],
              categories: [
                "category-1-1",
                "category-1-2",
                "category-1-3",
                "category-1-4",
                "category-1-5",
                "category-1-6",
                "category-1-7",
              ],
            },
          ],
        },
        {
          name: "activity-name-2",
          exported: false,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: true,
              actions: ["action-2-1", "action-2-2", "action-2-3", "action-2-4"],
              categories: ["category-2-1", "category-2-2"],
            },
          ],
        },
        {
          name: "activity-name-3",
          exported: true,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: false,
              actions: ["action-3-1", "action-3-2"],
              categories: [],
            },
            {
              id: 2,
              categoriesCheck: true,
              actions: ["action-3-1", "action-3-2"],
              categories: ["category-3-1", "category-3-2"],
            },
          ],
        },
        {
          name: "activity-name-4",
          exported: true,
          permission: "a string with 50 characters.......................",
          filterCheck: true,
          filters: [
            {
              id: 1,
              categoriesCheck: false,
              actions: ["action-4-1", "action-4-2"],
              categories: [],
            },
          ],
        },
        {
          name: "activity-name-5",
          exported: false,
          permission: "a string with 50 characters.......................",
          filter: false,
          filters: [],
        },
      ],
    };
  },
  components: {
    Card,
    ExpansionPanelTreeLevels,
    ExpansionPanel,
  },
};
</script>
