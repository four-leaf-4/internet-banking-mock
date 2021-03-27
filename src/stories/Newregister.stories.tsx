// YourComponent.stories.js

import React from "react";
import { Newregister } from "~/components/newregister/style1.tsx";

// This default export determines where your story goes in the story list
export default {
  title: "IBPoC/Newregister",
  component: Newregister,
};

const Template = (args) => <Newregister {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
