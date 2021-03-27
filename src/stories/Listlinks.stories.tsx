// YourComponent.stories.js

import React from "react";
import { Infolinkslist } from "~/components/infolinkslist/style1";

// This default export determines where your story goes in the story list
export default {
  title: "IBPoC/Infolinkslist",
  component: Infolinkslist,
};

const Template = (args) => <Infolinkslist {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
