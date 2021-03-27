// YourComponent.stories.js

import React from "react";
import { Emergencystop } from "~/components/emergencystop/style1";

// This default export determines where your story goes in the story list
export default {
  title: "IBPoC/Emergencystop",
  component: Emergencystop,
};

const Template = (args) => <Emergencystop {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
