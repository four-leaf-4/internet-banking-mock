// YourComponent.stories.js

import React from "react";
import { Notices } from "~/components/notices/style1";

// This default export determines where your story goes in the story list
export default {
  title: "IBPoC/Notices",
  component: Notices,
};

const Template = (args) => <Notices {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
