// YourComponent.stories.js

import React from "react";
import { Loginform } from "~/components/loginform/style1";

// This default export determines where your story goes in the story list
export default {
  title: "IBPoC/Loginform",
  component: Loginform,
};

const Template = (args) => <Loginform {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
